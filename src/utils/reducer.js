const initialState = {
    posts: []
}

const actions = {
    ADD_POST: 'ADD_POST'
}

const reducer = (state, action) => {
    switch(action.type) {
        case actions.ADD_POST:
            return {
                posts: [
                    ...state.posts,
                    action.post
                ]
            };

        default:
            return state
    }
}

export {reducer, initialState}