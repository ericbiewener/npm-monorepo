import React from 'react'
import { useFormCtx } from '@ericbiewener/react/src/Form/Form'
import { Controller } from 'react-hook-form'

type ControllerProps = React.ComponentProps<typeof Controller>

type FixedValueControllerProps<N extends string, V> = ControllerProps & {
  name: N
  value: V
  render: NonNullable<ControllerProps['render']>
}

export const FixedValueController = <N extends string, V>({
  value,
  name,
  render,
}: FixedValueControllerProps<N, V>): React.ReactElement => {
  const { setValue, control } = useFormCtx<Record<N, V>>()
  return (
    <Controller
      control={control}
      name={name as any}
      render={renderProps =>
        render({ ...renderProps, onChange: () => setValue(name, value as any), value: '' })
      }
    />
  )
}
