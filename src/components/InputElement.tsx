import { useState } from "react"



export default function InputElement() {

    const [text, setText] = useState<string>("");

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    }

    return (
        <div>
            <label htmlFor="input_text">Enter Value:</label>
            <input type="text" 
                name="input_text" 
                id="input_text" 
                value={text}
                onChange={inputChangeHandler}
            />
            {
                text && <p><strong>Output: </strong>{text}</p>
            }
        </div>
    )
}
