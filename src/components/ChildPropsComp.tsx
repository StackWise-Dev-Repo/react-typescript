import type { PropsWithChildren, ReactNode } from "react"

interface ChildPropsCompProps extends PropsWithChildren {
    children: ReactNode
    title: string
}

function ChildPropsComp({title, children}: ChildPropsCompProps) {
  return (
    <div>
      <h1>{title}</h1>
      {/* CHILDREN COMPONENTS SHOULD BE RENDEREND WHERE WITH TYPE SAFETY */}
      {children} 
    </div>
  )
}

export default ChildPropsComp


