import React from 'react'
import { HtmlInputProps, HtmlLabelProps, HtmlTextAreaProps } from '../types'
import { cxp } from '../utils/cxp'
import { useFormCtx } from './Form'

export const Input: React.FC<HtmlInputProps> = props => {
  const { register } = useFormCtx()
  return <input type="text" {...props} ref={register} />
}

type HtmlInputPropsNoType = Omit<HtmlInputProps, 'type'>

export const Checkbox: React.FC<HtmlInputPropsNoType> = props => (
  <Input type="checkbox" {...props} />
)

export const CheckboxLabel: React.FC<HtmlLabelProps> = props => (
  <label {...cxp(props, 'uppercase text-sm flex items-center space-x-1')} />
)

export const TextArea: React.FC<HtmlTextAreaProps> = props => {
  const { register } = useFormCtx()
  return <textarea {...props} ref={register} />
}
