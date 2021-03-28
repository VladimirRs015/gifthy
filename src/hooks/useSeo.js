import { useCallback, useReducer } from "react";

const ACTIONS = {
    SET_TITLE: "SET_TITLE",
    SET_DESCRIPTION: "SET_DESCRIPTION",
    SET_KEYWORDS: "SET_KEYWORDS"
}

const seoReducer = (state, { type, payload }) => {
    switch (type) {
        case ACTIONS.SET_TITLE: {
            const newState = {
                ...state
            };
            console.log(newState)
            newState.title = payload.title;
            state = newState;
            return state;
        }
        case ACTIONS.SET_KEYWORDS: {
            const newState = {
                ...state
            }
            newState.keywords = payload.keywords;
            state = newState
            return state
        }
        case ACTIONS.SET_DESCRIPTION: {
            const newState = {
                ...state
            }
            newState.description = payload.description;
            state = newState;
            return state;
        }
        default:
            return state;
    }
}

const initialState = {
    title: "",
    description: "",
    keywords: ""
}

function useSeo() {
    const [state, dispatch] = useReducer(seoReducer, initialState);

    const { title, description, keywords } = state;

    const setKeywords = useCallback((keywords) => {
        dispatch({
            type: ACTIONS.SET_KEYWORDS, payload: {
                keywords
            }
        })
    },[])

    const setDescription = useCallback((description) => {
        dispatch({
            type: ACTIONS.SET_DESCRIPTION, payload: {
                description
            }
        })
    },[])

    const setTitle = useCallback((title) => {
        dispatch({
            type: ACTIONS.SET_TITLE, payload: {
                title: `${title} | Gifthy`
            }
        })
    },[])

    document.head.querySelector("title").innerHTML = title;
    document.querySelector('meta[name="description"]').setAttribute("content", description);
    document.querySelector('meta[name="keywords"]').setAttribute("content", keywords);

    return {
        setKeywords,
        setDescription,
        setTitle
    }
}

export default useSeo