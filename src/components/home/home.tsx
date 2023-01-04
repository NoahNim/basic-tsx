import React from "react"
import { User } from "../../App"
import Form from "./form"

interface HomeProps {
    setNameFunction: Function,
    setIDFunction: Function,
    user: User
    userName: string | null
    userID: number | null
}

const Home = ({ setNameFunction, setIDFunction, user, userName }: HomeProps) => {

    const showNameFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        user.name != null ? setNameFunction(userName) : setNameFunction("Noah")
    }

    const showIDFunction = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        setIDFunction(1)
    }

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} onClick={showNameFunction}>{user.name === null ? "Show Name" : user.name}</button>
            <button style={{ width: "100px", height: "100px" }} onClick={showIDFunction}>{user.id === null ? "Show ID" : user.id}</button>
            <Form setNameFunction={setNameFunction} />
        </div>
    )
}

export default Home