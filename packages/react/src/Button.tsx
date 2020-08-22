import React from 'react'
import { HtmlButtonProps } from './types'
import { cxp } from './utils/cxp'

export type ButtonProps = HtmlButtonProps & {
  primary?: boolean
  text?: boolean
  fab?: boolean
}

export const Button: React.FC<ButtonProps> = ({ disabled, primary, text, fab, ...props }) => (
  <button
    disabled={disabled}
    style={fab ? { width: 40, height: 40 } : undefined}
    {...cxp(props, {
      ['rounded p-2']: !fab,
      ['rounded-full']: fab,
      ['bg-blue-400 text-white']: primary,
      ['bg-gray-200']: !primary && !text,
      ['border border-gray-500 text-gray-600 hover:border-gray-700 hover:text-gray-800 active:bg-gray-100']: text,
      ['opacity-25']: disabled,
    })}
  />
)

export const LoadingButton: React.FC<ButtonProps> = ({ onClick, ...props }) => {
  const [isLoading, setIsLoading] = React.useState(false)

  return (
    <Button
      {...props}
      disabled={isLoading}
      onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
        setIsLoading(true)
        try {
          await onClick(e)
        } finally {
          setIsLoading(false)
        }
      }}
    />
  )
}
