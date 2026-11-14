import { useEffect, useId, useRef, useState, type ReactNode } from 'react'

export type DropdownItem = {
  id: string
  label: ReactNode
  /** Texto secundario debajo de la etiqueta */
  hint?: ReactNode
  /** Etiqueta corta a la derecha (EN, PDF, MD…) */
  badge?: ReactNode
  /** Idioma del contenido de la opción, para lectores de pantalla */
  lang?: string
  selected?: boolean
  onSelect: () => void
}

type DropdownProps = {
  /** Contenido visible del botón */
  trigger: ReactNode
  /** Nombre accesible del botón (si el contenido visible no basta) */
  triggerLabel?: string
  /** Nombre accesible de la lista de opciones */
  menuLabel: string
  items: DropdownItem[]
  /** Clases extra para el contenedor y el botón */
  className?: string
  triggerClassName?: string
  /** Lado hacia el que se alinea el panel */
  align?: 'left' | 'right'
}

/**
 * Desplegable accesible y reutilizable: se cierra al elegir, con Escape,
 * con clic afuera o al salir con Tab, y devuelve el foco al botón.
 */
export function Dropdown({
  trigger,
  triggerLabel,
  menuLabel,
  items,
  className = '',
  triggerClassName = '',
  align = 'left',
}: DropdownProps) {
  const [open, setOpen] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return

    const handlePointer = (event: PointerEvent) => {
      if (!wrapperRef.current?.contains(event.target as Node)) setOpen(false)
    }
    const handleKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('pointerdown', handlePointer)
    document.addEventListener('keydown', handleKey)
    return () => {
      document.removeEventListener('pointerdown', handlePointer)
      document.removeEventListener('keydown', handleKey)
    }
  }, [open])

  const choose = (item: DropdownItem) => {
    item.onSelect()
    setOpen(false)
    triggerRef.current?.focus()
  }

  return (
    <div
      ref={wrapperRef}
      className={`dropdown dropdown--${align}${open ? ' is-open' : ''} ${className}`.trim()}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) setOpen(false)
      }}
    >
      <button
        ref={triggerRef}
        type="button"
        className={`dropdown__trigger ${triggerClassName}`.trim()}
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={triggerLabel}
        onClick={() => setOpen((value) => !value)}
      >
        {trigger}
        <svg className="dropdown__chevron" viewBox="0 0 12 12" aria-hidden="true">
          <path
            d="M2.5 4.5 6 8l3.5-3.5"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <ul id={menuId} className="dropdown__menu" hidden={!open} aria-label={menuLabel}>
        {items.map((item) => (
          <li key={item.id}>
            <button
              type="button"
              lang={item.lang}
              aria-current={item.selected ? 'true' : undefined}
              className={`dropdown__item${item.selected ? ' is-selected' : ''}`}
              onClick={() => choose(item)}
            >
              <span className="dropdown__text">
                <span className="dropdown__label">{item.label}</span>
                {item.hint ? <span className="dropdown__hint">{item.hint}</span> : null}
              </span>
              {item.badge ? (
                <span className="dropdown__badge" aria-hidden="true">
                  {item.badge}
                </span>
              ) : null}
              {item.selected !== undefined ? (
                <span className="dropdown__check" aria-hidden="true">
                  {item.selected ? (
                    <svg viewBox="0 0 12 12">
                      <path
                        d="M2.5 6.2 5 8.5l4.5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : null}
                </span>
              ) : null}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
