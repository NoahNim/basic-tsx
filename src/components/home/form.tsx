interface FormProps {
    setNameFunction: Function,
    setIDFunction: Function,
}

const Form = ({ setNameFunction, setIDFunction }: FormProps) => {
    return (
        <div>
            <form>
                <label>Name: </label>
                <input></input>
            </form>
        </div>
    )
}

export default Form