import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'

type BaseButtonProps = {
  children: ReactNode
  className?: string
  variant?: 'primary' | 'secondary' | 'ghost'
}

export type ButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement>

export function Button({
  children,
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  )
}

export type ButtonLinkProps = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement>

export function ButtonLink({ children, className = '', variant = 'primary', ...props }: ButtonLinkProps) {
  const classes = ['btn', `btn--${variant}`, className].filter(Boolean).join(' ')

  return (
    <a className={classes} {...props}>
      {children}
    </a>
  )
}
