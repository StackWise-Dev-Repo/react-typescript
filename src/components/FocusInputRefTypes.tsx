import { useRef } from "react"

export default function FocusInputRefTypes() {


    const inputRef = useRef<HTMLInputElement>(null);

    const clickHandler = () => {
        inputRef.current?.focus();
    }

  return (
    <div>
        <input type="text" ref={inputRef} />
        <button onClick={clickHandler}>Click to focus</button>
    </div>
  )
}


