import React from "react"

export type BtnTheme = 'active' | 'inactive'
export interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  theme?: BtnTheme
  className?: string
  onClick?(event: any): void
}