import React , {useReducer , createContext} from 'react';

export const RobotsContext = createContext();

const robotsReducer = (state , action) =>{
    return action;
}

export const RobotsProvider = props => {
    const [robots , robotDispatch] = useReducer(robotsReducer,[]);
    return(
        <RobotsContext.Provider value={[robots,robotDispatch]}>
            {props.children}
        </RobotsContext.Provider>
    )
}