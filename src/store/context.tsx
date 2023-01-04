import { createContext } from "react";

interface ActivityContextInterface {
    activityData: Object
    activity: string
    participants: number
    price: number
    props: any
}

const ActivityCtx = createContext<ActivityContextInterface | null>(null);

const ActivityContextProvider = ({ activityData, activity, participants, price, props }: ActivityContextInterface) => {

}

export default ActivityCtx