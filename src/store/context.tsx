import { createContext, ReactNode, useState } from "react";

interface ActivityContextInterface {
    activityData: Object
    getActivity: Function
    // activity: string
    // participants: number
    // price: number
}

const ActivityCtx = createContext<ActivityContextInterface | null>(null);

export const ActivityContextProvider = ({ children }: { children: ReactNode }, { activityData }: ActivityContextInterface) => {
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
                getActivity
            }}>
            {children}
        </ActivityCtx.Provider>
    )
}

export default ActivityCtx