import { useState, type SubmitEvent } from "react"
import type { UserFormData } from "../globaltypes/types"


export default function FormComp() {

    const [user, setUser] = useState<UserFormData>({name: "", email: ""});

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setUser((prev) => ({...prev, [name]: value}));
    }

    const formSubmitHandler = (e: SubmitEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted with data: ", user);
    }

    return (
      <div>
        <form onSubmit={formSubmitHandler}>
          <input
            type="text"
            name="name"
            id="username_text"
            placeholder="e.g John Doe"
            onChange={inputChangeHandler}
          />
          <input
            type="email"
            name="email"
            id="useremail_text"
            placeholder="johndoe@gmail.com"
            onChange={inputChangeHandler}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
}
