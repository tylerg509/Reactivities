import { IActivity } from '../../app/interfaces/IActivity';
import { SyntheticEvent } from 'react';


export interface IActivityDashboard {
    setEditMode: (editmode: boolean)=>void;
    setSelectedActivity: (activity: IActivity | null) => void;
    createActivity: (activity: IActivity) => void;
    editActivity: (activity: IActivity) => void;
    deleteActivity:(event: SyntheticEvent<HTMLButtonElement> ,activitiy: string) => void;
    submitting: boolean;
    target: string

}