import React,{ createContext , useReducer} from "react";

export const SearchContext = createContext();

const searchReducer = (state , action) =>{
    return action
}

export const SearchProvider = props =>{
    const [search, dispatch] = useReducer(searchReducer,""); 
    return(
        <SearchContext.Provider value={[search,dispatch]} >
            {props.children}
        </SearchContext.Provider>
    )

}