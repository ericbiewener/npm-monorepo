import React from 'react'
import { HtmlButtonProps } from './types'
import { cxp } from './utils/cxp'

type ButtonProps = HtmlButtonProps & {
  primary?: boolean
  secondary?: boolean
  text?: boolean
}

export const Button: React.FC<ButtonProps> = ({ primary, secondary, text, disabled, ...props }) => (
  <button
    disabled={disabled}
    {...cxp(props, 'rounded p-2', {
      ['bg-blue-400']: primary,
      ['bg-gray-200']: secondary,
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
