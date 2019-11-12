import React from "react";
import { useSelector } from "react-redux";
import Spinner from "../Layout.component/Spinner.component";

const SearchDisplay = () => {
  // pull state into component
  const vatCheckSelector = useSelector(state => state);

  let details = "";

  //isFetching? ,If yes Display Spinner
  vatCheckSelector.vatInfo.isFetching
    ? (details = (
        <div className="col-mb-6 text-center">
          <Spinner />
        </div>
      ))
    : //if state has a property of valid equals true, display VAT data
    vatCheckSelector.vatInfo.vatInfo.Valid
    ? (details = (
        <div className="col-mb-6 text-center mb-0">
          <div className="alert alert-success mb-0" role="alert">
            Success
          </div>
          <strong>
            <table className="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Address</th>
                  <th scope="col">VATNumber</th>
                  <th scope="col">Country Code</th>
                  <th scope="col">RequestDate</th>
                  <th scope="col">Validity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{vatCheckSelector.vatInfo.vatInfo.Name}</td>
                  <td>{vatCheckSelector.vatInfo.vatInfo.Address}</td>
                  <td>{vatCheckSelector.vatInfo.vatInfo.VATNumber}</td>
                  <td>{vatCheckSelector.vatInfo.vatInfo.CountryCode}</td>
                  <td>{vatCheckSelector.vatInfo.vatInfo.RequestDate}</td>
                  <td>{vatCheckSelector.vatInfo.vatInfo.Valid.toString()}</td>
                </tr>
              </tbody>
            </table>
          </strong>
        </div>
      ))
    : //display error if  state throw error
    vatCheckSelector.vatInfo.vatInfo.error
    ? (details = (
        <div
          className="alert alert-danger col-mb-6 text-center pt-1"
          role="alert"
        >
          {vatCheckSelector.vatInfo.vatInfo.error}
        </div>
      ))
    : //If VAT number is invalid, display error
    vatCheckSelector.vatInfo.vatInfo.Valid === false
    ? (details = (
        <div
          className="alert alert-danger col-mb-6 text-center pt-1"
          role="alert"
        >
          Oh Sorry, the Vat number does not match our records
        </div>
      ))
    : (details = null);

  return <div>{details}</div>;
};

export default SearchDisplay;
