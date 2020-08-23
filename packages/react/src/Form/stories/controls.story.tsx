import React from 'react'
import { Form } from '../Form'
import * as controls from '../controls'

export default { title: 'Controls' }

const withForm = (children: React.ReactNode) => () => <Form>{children}</Form>

export const Textarea = withForm(<controls.TextArea name="foo" />)
