import { produceWithPatches } from "immer";
import { createContext, ReactNode, useState } from "react";

interface ActivityContextInterface {
    activityData: Object
    // activity: string
    // participants: number
    // price: number
}

const ActivityCtx = createContext<ActivityContextInterface | null>(null);

const ActivityContextProvider = ({ children }: { children: ReactNode, }, { activityData }: ActivityContextInterface) => {
    const [currActivityData, setCurrActivityData] = useState<Object>({});

    const getActivity = async () => {
        try {
            const res = await fetch(`https://www.boredapi.com/api/activity`)

            if (res.ok) {
                let data: Object = res.json();
                setCurrActivityData(data);
                return data
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ActivityCtx.Provider
            value={{
                activityData: currActivityData,
            }}>
            {children}
        </ActivityCtx.Provider>
    )
}

export default ActivityCtx