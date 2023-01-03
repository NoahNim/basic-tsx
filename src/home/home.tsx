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

        setUserName("Noah");
    }

    const showIDFunction = (e: any) => {
        e.preventDefault();

        setuserID(1);
    }

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} onClick={showNameFunction}>{userName === null ? "Show Name" : userName}</button>
            <button style={{ width: "100px", height: "100px" }} onClick={showIDFunction}>{userID === null ? "Show ID" : userID}</button>
        </div>
    )
}

export default Home