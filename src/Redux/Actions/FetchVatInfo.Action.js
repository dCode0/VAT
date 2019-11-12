import FetchActionTypes from "./FetchVatInfo.types";

//redux actions
export const fetchVatRequest = () => ({
  type: FetchActionTypes.FETCH_VAT_REQUEST
});

export const fetchVatSuccess = json => ({
  type: FetchActionTypes.FETCH_VAT_SUCCESS,
  payload: json
});

export const fetchVatFailure = error => ({
  type: FetchActionTypes.FETCH_VAT_FAILURE,
  payload: error
});

//Asyn redux
export const fetchVatInfoAction = value => {
  return async dispatch => {
    dispatch(fetchVatRequest());
    await fetch(`https://vat.erply.com/numbers?vatNumber=${value}`)
      .then(res => {
        return res.json();
      })
      .then(JSONres => {
        //dispatch the action
        dispatch(fetchVatSuccess(JSONres));
      })
      .catch(err => {
        dispatch(fetchVatFailure(err.response));
        console.log(err);
      });
  };
};
