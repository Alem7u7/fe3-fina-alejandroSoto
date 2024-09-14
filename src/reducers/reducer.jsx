export const reducer = (state, action) => {
    switch(action.type){
        case "GET_DATA":
            return { ...state, data: action.payload };
        
        case "ADD_FAV":
            const isAlreadyFav = state.favs.some(fav => fav.id === action.payload.id);
            if (isAlreadyFav) {
                return state;
            }
            return { ...state, favs: [...state.favs, action.payload] };
        
        case "THEME":
            return { ...state, theme: action.payload };
        
        default:
            return state;
    }
};
