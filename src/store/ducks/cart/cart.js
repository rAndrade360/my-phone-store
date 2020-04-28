const INITIAL_STATE = {
  itemCount: 0,
  items: [],
  totalValue: 0,
};

const Types = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.item],
        itemCount: state.itemCount + 1,
        totalValue: state.totalValue + parseFloat(action.item.offers.lowPrice),
      };
    case Types.REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.item.id),
        itemCount: state.itemCount - 1,
        totalValue: state.totalValue - parseFloat(action.item.offers.lowPrice),
      };
    default:
      return state;
  }
}

export const addItem = (item) => ({ type: Types.ADD_ITEM, item });
export const removeItem = (item) => ({ type: Types.REMOVE_ITEM, item });
