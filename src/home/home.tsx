import { User } from "../App"

// type UserType = {

// }

interface HomeProps {
    setNameFunction: Function,
    setIDFunction: Function,
    user: User
}

const Home = ({ setNameFunction, setIDFunction, user }: HomeProps) => {

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
            <button style={{ width: "100px", height: "100px" }} onClick={showNameFunction}>{user.id === null ? "Show Name" : user.name}</button>
            <button style={{ width: "100px", height: "100px" }} onClick={showIDFunction}>{user.name === null ? "Show ID" : user.id}</button>
        </div>
    )
}

export default Home