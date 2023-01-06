import { useContext, useState } from "react";
import ActivityCtx from "../../store/context";

const Activity = () => {
    interface ActivityInfo {
        // map(arg0: (item: any) => JSX.Element): import('react').ReactNode
        activity: string | null
        participants: number | null
        price: number | null
    }



    // const [activities, setActivity] = useState<any | undefined>((activity: ActivityInfo[]) => {
    //     if (activity) {
    //         activity.forEach(item => activity.push(item))
    //         setActivity(activity)
    //     }
    // })

    const [activities, setActivity] = useState<any | undefined>()
    const dataCtx = useContext(ActivityCtx)

    const newActivity: ActivityInfo = {
        activity: null,
        participants: null,
        price: null
    }

    // useEffect(() => {
    //     if (newActivity.activity != null || newActivity.activity) {
    //         setActivity([newActivity])
    //         console.log(activities)
    //     }
    // }, [activities, newActivity])

    const handleGetActivityButton = async (event: React.MouseEvent<HTMLButtonElement>) => {

        event.preventDefault();

        // try {
        const res = await dataCtx?.getActivity();

        if (res) {
            newActivity.activity = res.activity
            newActivity.participants = res.participants
            newActivity.price = res.price
            // console.log(newActivity)
            setActivity([newActivity])
        } else {
            console.log(res)
        }
        // } catch (error) {
        //     console.log(error)
        // }
    }

    return (
        <>
            <button style={{ width: "100px", height: "100px" }} onClick={handleGetActivityButton}>Get Activity</button>
            {activities?.map((item: any) => {
                console.log(item)
                return (
                    <>
                        <ul key={item.key}>
                            <li key={item.activity}>{item.activity}</li>
                            <li key={item.participants}>{item.participants}</li>
                            <li key={item.price}>{item.price}</li>
                        </ul>
                    </>
                )
            })}
        </>
    )

}

export default Activity