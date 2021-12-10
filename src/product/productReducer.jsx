const INITIAL_STATE = {list: []}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'PRODUCTS_FETCHED':
            return { ...state, list: action.payload.data }
        default:
            return state
    }
}