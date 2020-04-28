import carReducer from "./cart";
import { addItem } from "./cart";
import server from "../../../server.json";
const item = server[0];

const INITIAL_STATE = {
  itemCount: 0,
  items: [],
  totalValue: 0,
};

describe("Cart Actions Test", () => {
  test("deve retornar o estado com o novo item", () => {
    expect(addItem(item)).toEqual({ type: "ADD_ITEM", item });
  });
});

describe("Cart Reducer Test", () => {
  test("deve retornar o estado com o novo item", () => {
    expect(carReducer(INITIAL_STATE, { type: "ADD_ITEM", item })).toEqual({
      itemCount: 1,
      items: [item],
      totalValue: 0 + item.offers.lowPrice,
    });
  });
});
