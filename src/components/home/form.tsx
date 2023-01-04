import React, { useState } from "react"

interface FormProps {
    setNameFunction: Function,
}

const Form = ({ setNameFunction }: FormProps) => {
    const [name, setName] = useState<string>("")

    const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()

        setName(e.target.value)
    }

    const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        setNameFunction(name)
    }

    return (
        <div>
            <form onSubmit={formSubmitHandler}>
                <label>Name: </label>
                <input type="text" value={name} onChange={inputChangeHandler}></input>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Form