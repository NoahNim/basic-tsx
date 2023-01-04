import { useContext } from "react";
import ActivityCtx from "../../store/context";

const Activity = () => {
    const dataCtx = useContext(ActivityCtx)

    const handleGetActivityButton = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const res = await dataCtx?.getActivity();

            if (res) {
                console.log(res)
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <button style={{ width: "100px", height: "100px" }} onClick={handleGetActivityButton}></button>
        </div>
    )

}

export default Activity