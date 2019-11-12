import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { fetchVatInfoAction } from "../../Redux/Actions/FetchVatInfo.Action";

import CustomButton from "../Custom-button-component/Custom-button.component";

const Search = props => {
  let [vatNumber, setVatNumber] = useState("");

  //pass input data into reducers
  const dispatch = useDispatch();
  const getVatInfoAction = vatNumber => dispatch(fetchVatInfoAction(vatNumber));

  //dispatch actions when submit is clicked
  const getVatInfo = e => {
    e.preventDefault();
    vatNumber === ""
      ? alert("No VAT Number to check, Please input a VAT Number")
      : getVatInfoAction(vatNumber);
  };

  return (
    //forms and everything else you can see - Front-End
    <React.Fragment>
      <div className="col-mb-6 text-center mb-0">
        <div className="d-flex justify-content-center align-items-center">
          <i className="fa fa-search fa-10x" />
          <div className="mb sm-100 ">
            <h1>VAT LookUp</h1>
          </div>
        </div>

        <form onSubmit={getVatInfo}>
          <div className="form-group pt-2 pb-1">
            <input
              type="text"
              className="form-control form-control-lg "
              name=""
              placeholder="Enter ID. Example: EE100247019"
              onChange={e => setVatNumber(e.target.value)}
            />
          </div>

          <CustomButton type="submit">
            <b>Get VAT details</b>
          </CustomButton>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Search;
