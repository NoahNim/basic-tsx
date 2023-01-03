import { User } from "../App"

interface HomeProps {
    setNameFunction: Function,
    setIDFunction: Function,
    user: User
    userName: string | null
    userID: number | null
}

const Home = ({ setNameFunction, setIDFunction, user, userName, userID }: HomeProps) => {

    const showNameFunction = (e: any) => {
        e.preventDefault();

        setNameFunction("Noah");
    }

    const showIDFunction = (e: any) => {
        e.preventDefault();

        setIDFunction(1)
    }

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} onClick={showNameFunction}>{user.name === null ? "Show Name" : userName}</button>
            <button style={{ width: "100px", height: "100px" }} onClick={showIDFunction}>{user.id === null ? "Show ID" : userID}</button>
        </div>
    )
}

export default Home