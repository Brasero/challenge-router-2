import {createContext, useReducer} from "react";
import {reducer, initialState} from "../reducer.js";

const PostsContext = createContext()

const Provider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const value ={
        posts: state.posts,
        addPost: (post) => {
            dispatch({type: "ADD_POST", post})
        }
    }

    return (
        <PostsContext.Provider value={value}>
            {children}
        </PostsContext.Provider>
    )
}

export {Provider, PostsContext}