export const initialstate = { itemCount:0 , items: []};

export const reducer = (state, action) => {
    switch(action.type){
        case 'add':
                state.items.push(action.item);
                state.itemCount++;
            return state;
        case 'remove':
            const index = state.items.indexOf(action.item);
            state.items.splice(index, 1);
            state.itemCount--;
            return state;
        default:
            return state;
    }
}