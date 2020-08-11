import React from 'react'
import { SubmitHandler, useForm, UseFormMethods, UseFormOptions } from 'react-hook-form'
import { Fn, Obj } from '../../../types'
import { HtmlFormProps } from '../../types/misc'

export type FormCtxType<V extends Obj> = UseFormMethods<V> & {
  submit?: Fn
}

export const FormCtx = React.createContext<FormCtxType<any>>(undefined as any)
export const useFormCtx = <V extends Obj>() => React.useContext<FormCtxType<V>>(FormCtx as any) // no idea why `as any` is needed

type SubmitOnEvent<V extends Obj> = (formValues: V, formCtx: FormCtxType<V>, field: string) => void

type Props<V extends Obj> = Omit<HtmlFormProps, 'onSubmit'> & {
  onSubmit?: SubmitHandler<V>
  children: React.ReactNode
  submitOnChange?: SubmitOnEvent<V>
  submitOnBlur?: SubmitOnEvent<V>
  cacheKey?: string
  submitImmediately?: boolean
  options?: UseFormOptions<V>
}

type SubmissionEventHandlers = {
  onChange?: React.ChangeEventHandler<HTMLFormElement>
  onBlur?: React.FocusEventHandler<HTMLFormElement>
}

export const getCachedFormData = <V extends Obj>(cacheKey: string): Partial<V> | null => {
  const key = `form.${cacheKey}`
  const cachedData = localStorage.getItem(key)
  return cachedData ? JSON.parse(cachedData) : null
}

const buildFormOptions = <V extends Obj>(cacheKey?: string) => {
  const options: UseFormOptions<V> = {}

  if (cacheKey) {
    const data = getCachedFormData(cacheKey)
    if (data) options.defaultValues = data as any
  }

  return options
}

const buildSubmitEventHandlers = <V extends Obj>(
  submitOnChange: SubmitOnEvent<V> | undefined,
  submitOnBlur: SubmitOnEvent<V> | undefined,
  ctx: FormCtxType<V>,
  cacheKey?: string,
) => {
  const submitEventHandlers: SubmissionEventHandlers = {}

  if (submitOnChange || cacheKey) {
    submitEventHandlers.onChange = e => {
      const values = ctx.getValues()
      if (submitOnChange) submitOnChange(values as V, ctx, e.target.name)
      if (cacheKey) localStorage.setItem(`form.${cacheKey}`, JSON.stringify(values))
    }
  }

  if (submitOnBlur) {
    submitEventHandlers.onBlur = e => {
      submitOnBlur(ctx.getValues() as V, ctx, e.target.name)
    }
  }

  return submitEventHandlers
}

export const Form = <V extends Obj>(props: Props<V>) => {
  const { onSubmit, cacheKey, submitOnChange, submitOnBlur, options, ...rest } = props

  const formOptions = { ...buildFormOptions<V>(cacheKey), ...options }
  const methods = useForm<V>(formOptions)

  const submit = onSubmit ? methods.handleSubmit(onSubmit) : undefined
  const ctx = submit ? ({ ...methods, submit } as FormCtxType<V>) : methods

  const submitEventHandlers = buildSubmitEventHandlers(submitOnChange, submitOnBlur, ctx, cacheKey)

  return (
    <FormCtx.Provider value={ctx}>
      <form onSubmit={submit} {...submitEventHandlers} {...rest} />
    </FormCtx.Provider>
  )
}
