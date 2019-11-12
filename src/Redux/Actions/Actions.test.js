import {
  fetchVatInfoAction,
  fetchVatFailure,
  fetchVatSuccess
} from "./FetchVatInfo.Action";
import FetchActionTypes from "./FetchVatInfo.types";
import configureMockStore from "redux-mock-store";
import thunkMiddleware from "redux-thunk";

// here I test the actions
const mockStore = configureMockStore([thunkMiddleware]);
const store = mockStore();
const action = store.getActions();
it("handles requesting vat function", () => {
  store.dispatch(fetchVatInfoAction());

  const expectedAction = {
    type: FetchActionTypes.FETCH_VAT_REQUEST
  };

  expect(action[0]).toEqual(expectedAction);
});

it("handles vat fetch success vat function", () => {
  store.dispatch(fetchVatSuccess());

  const expectedAction = {
    type: FetchActionTypes.FETCH_VAT_SUCCESS
  };

  expect(action[1]).toEqual(expectedAction);
});

it("handles vat fetch failure  function", () => {
  store.dispatch(fetchVatFailure());

  const expectedAction = {
    type: FetchActionTypes.FETCH_VAT_FAILURE
  };

  expect(action[2]).toEqual(expectedAction);
});
