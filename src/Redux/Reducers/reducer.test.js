import * as reducers from "./VatCheck.reducer";
import FetchActionTypes from "../Actions/FetchVatInfo.types";

//test initial state in reducers
const initialState = { isFetching: false, errorMessage: "", vatInfo: [] };
describe("vatInfo", () => {
  it("Should return the initial state", () => {
    expect(reducers.vatInfo(undefined, {})).toEqual(initialState);
  });

  // it("should handle request vat action", () => {
  //   expect(
  //     reducers
  //       .vatInfo(
  //         reducers.vatInfo(initialState, {
  //           type: FetchActionTypes.FETCH_VAT_REQUEST
  //         })
  //       )
  //       .toEqual({ isFetching: true, errorMessage: "", vatInfo: [] })
  //   );
  // });
});
