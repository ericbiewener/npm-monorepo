import { sleep } from '@ericbiewener/utils/src/sleep'
import React from 'react'
import { Button, LoadingButton } from '../Button'

export default { title: 'Button' }

const props = {
  onClick: () => alert('clicked!'),
}

export const Primary = () => (
  <Button primary {...props}>
    Hello
  </Button>
)

export const Secondary = () => <Button {...props}>Hello</Button>

export const Text = () => (
  <Button text {...props}>
    Hello
  </Button>
)

export const Loading = () => (
  <LoadingButton primary onClick={() => sleep(1000)}>
    Hello
  </LoadingButton>
)

export const Fab = () => (
  <LoadingButton fab primary onClick={() => sleep(1000)}>
    😃
  </LoadingButton>
)
