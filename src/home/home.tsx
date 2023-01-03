import React, { useState } from "react";

const Home = () => {
    // interface UserProps {
    //     name: string,
    //     id: number
    // }

    const [userName, setUserName] = useState<string | null>(null)
    const [userID, setuserID] = useState<number | null>(null)

    // const user: UserProps = {
    //     name: userName,
    //     id: userID
    // }


    const showNameFunction = (e: any) => {
        e.preventDefault();

    }

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} >{userName === null ? "Show Name" : userName}</button>
            <button style={{ width: "100px", height: "100px" }}>{userID === null ? "Show ID" : userID}</button>
        </div>
    )
}

export default Home