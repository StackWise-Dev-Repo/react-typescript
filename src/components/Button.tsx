
interface ButtonProps {
    label: string
    disabled?: boolean
    onClick: () => void
}

export function Button({label, onClick, disabled = false}: ButtonProps) {
  return <button onClick={onClick} disabled={disabled}>{label}</button>
}

