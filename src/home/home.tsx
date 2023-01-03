import React, { useState } from "react";

const Home = () => {
    const [userName, setUserName] = useState("")
    const [userID, setuserID] = useState(0)

    interface UserProps {
        name: string,
        id: number
    }

    const user: UserProps = {
        name: userName,
        id: userID
    }

    console.log(user)

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} >{userName === "" ? "Show Name" : userName}</button>
            id: {user.id}
        </div>
    )
}

export default Home