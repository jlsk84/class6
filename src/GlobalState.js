import React, { createContext } from "react";
import { UserAPI } from "./api/UserAPI";

/***
 * 
 * context = context + consumer
 * 
 * Provider is mandatory and should always be a class
 * Because inside the provider we have to feed the components which are all children
 * We are going to feed the components inside the global state provider
 * 
 * children are nothing but the components
 * 
 * API
 * |
 * V
 * React Context <- GlobalState.js
 * |
 * V
 * React Provider <- GlobalState.js
 * |
 * V
 * Index.js <-> App.js <-> passes different components to 
 * ^
 * |
 * Consumer
 * 
 * 
 * We have to wrap this provider into index
 * 
 * provider always carries the app component and carries the current state
 * It carries the data in props and gives to state
 * As data is carried by App, from app component, data can be transferred to all other components
 * 
 * context works on a very simple principle
 * we bind our data to the provider
 * and distribute the data to the app component
 * and from the app component we feed the data to all the components.
 * The data will be carried via props
 * 
 * we export UserAPI as const that has all the functions
 * 
 * GlobalState is our property in GlobalState.Provider statement inside return function
 * 
 */

export const GlobalState = createContext();

export default function UserProvider({children}){
    const state = {
        userAPI: UserAPI
    };

    return(
        <GlobalState.Provider value={state}>
            { children }
        </GlobalState.Provider>
    )
}