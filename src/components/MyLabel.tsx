import './mylabel.css'

export interface MyLabelProps {
  /**
   * Texto a mostrar
   */
  label?: string
  /**
   * Tamaño del texto
   */
  size?: 'normal' | 'h1' | 'h2' | 'h3'
  /**
   * Capitaliza el contenido
   */
  allCaps?: boolean
  /**
   * Define el color de fondo
   */
  color?: 'primary' | 'secondary' | 'tertiary'

  /**
   * Cambia el color del texto
   */
  fontColor?: string
}

export const MyLabel = ({
  label = 'No label',
  size = 'normal',
  color = 'primary',
  allCaps = false,
  fontColor
}: MyLabelProps): JSX.Element => (
  <>
    <span
      className={`label ${size} text-${color}`}
      style={{ color: fontColor }}
    >
      {allCaps ? label.toUpperCase() : label}
    </span>
  </>
)
