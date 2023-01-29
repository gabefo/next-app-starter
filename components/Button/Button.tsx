import React, { forwardRef, ButtonHTMLAttributes, useRef, ElementType, ReactNode } from 'react'
import clsx from 'clsx'
import { mergeRefs } from 'react-merge-refs'
import styles from './Button.module.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  as?: ElementType
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'warning' | 'info'
  endIcon?: ReactNode
  fullWidth?: boolean
  href?: string
  size?: 'small' | 'medium' | 'large'
  startIcon?: ReactNode
  variant?: 'filled' | 'outlined' | 'ghost'
}

const Button: React.FC<ButtonProps> = forwardRef((props, forwardedRef) => {
  const {
    as,
    children,
    className,
    color = 'primary',
    disabled = false,
    endIcon,
    fullWidth = false,
    href,
    size = 'medium',
    startIcon,
    variant = 'filled',
    ...other
  } = props

  const Component = as || (typeof href === 'string' ? 'a' : 'button')
  const ref = useRef<typeof Component>(null)

  return (
    <Component
      ref={mergeRefs([ref, forwardedRef])}
      className={clsx(
        styles.root,
        {
          [styles.filled]: variant === 'filled',
          [styles.outlined]: variant === 'outlined',
          [styles.ghost]: variant === 'ghost',
          [styles.small]: size === 'small',
          [styles.medium]: size === 'medium',
          [styles.large]: size === 'large',
          [styles.primary]: color === 'primary',
          [styles.secondary]: color === 'secondary',
          [styles.success]: color === 'success',
          [styles.error]: color === 'error',
          [styles.warning]: color === 'warning',
          [styles.info]: color === 'info',
          [styles.fullWidth]: fullWidth,
          [styles.disabled]: disabled,
        },
        className
      )}
      href={href}
      disabled={disabled}
      {...other}
    >
      {startIcon ? <span className={styles.startIcon}>{startIcon}</span> : null}
      {children}
      {endIcon ? <span className={styles.endIcon}>{endIcon}</span> : null}
    </Component>
  )
})

export default Button
