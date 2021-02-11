export type HtmlDivProps = React.HTMLProps<HTMLDivElement>
export type HtmlTableProps = React.HTMLProps<HTMLTableElement>
export type HtmlTableSectionProps = React.HTMLProps<HTMLTableSectionElement>
export type HtmlTrProps = React.HTMLProps<HTMLTableRowElement>
export type HtmlTdProps = React.HTMLProps<HTMLTableDataCellElement>
export type HtmlThProps = React.HTMLProps<HTMLTableHeaderCellElement>
export type HtmlAnchorProps = React.HTMLProps<HTMLAnchorElement>
// Using React.HTMLProps<HTMLButtonElement> results in an error on the button `type` property
export type HtmlButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>
export type HtmlInputProps = React.HTMLProps<HTMLInputElement> & { name: string }
export type HtmlTextAreaProps = React.HTMLProps<HTMLTextAreaElement> & { name: string }
export type HtmlFormProps = React.HTMLProps<HTMLFormElement>
export type HtmlLabelProps = React.HTMLProps<HTMLLabelElement>

export type ReactSetState<S> = React.Dispatch<React.SetStateAction<S>>

export type HtmlInputOnChange = React.ChangeEventHandler<HTMLInputElement>
export type HtmlSelectOnChange = React.ChangeEventHandler<HTMLSelectElement>
export type HtmlTextAreaOnChange = React.ChangeEventHandler<HTMLTextAreaElement>
export type HtmlOnChange = HtmlInputOnChange | HtmlSelectOnChange | HtmlTextAreaOnChange

export type HtmlElementOnFocusOrBlur = React.FocusEventHandler<HTMLElement>

export type HtmlInputOnFocusOrBlur = React.FocusEventHandler<HTMLInputElement>
export type HtmlSelectOnFocusOrBlur = React.FocusEventHandler<HTMLSelectElement>
export type HtmlTextAreaOnFocusOrBlur = React.FocusEventHandler<HTMLTextAreaElement>
export type HtmlOnFocusOrBlur =
  | HtmlInputOnFocusOrBlur
  | HtmlSelectOnFocusOrBlur
  | HtmlTextAreaOnFocusOrBlur

export type OnButtonMouseEvent = React.MouseEventHandler<HTMLButtonElement>
