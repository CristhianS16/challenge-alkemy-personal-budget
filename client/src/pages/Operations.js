import React, { useEffect, useState } from "react";
import FormComponent from "../components/Form";
import ListOperations from "../components/ListOperations";
import Spinner from "../components/Spinner";
import Error from "../components/Error";
import { Table } from "react-bootstrap";
import {getOperations} from "../helpers/getDataOperations";

const Operations = ({ setTitle, setTotalBudget, totalBudget, viewSpinner, setViewSpinner, viewError, setViewError}) => {

  const [view, setView] = useState('income');
  const [updateList, setUpdateList] = useState(0);
  const [limitData, setLimitData] = useState(10);
  const [dataOperation, setDataOperation] = useState([]);
  
  useEffect(() => {
    setTitle("Operations");
    setViewSpinner(true);
    async function getDataOperations () {
      try {
        const data = await getOperations(view, limitData);
  
        setViewError(false);
        setDataOperation(data);
        setViewSpinner(false);
      } catch (error) {
        setViewSpinner(false);
        setViewError(true);
      };
    };
    
    getDataOperations();
  }, [ limitData,setTitle, setViewError, setViewSpinner, updateList, view]);

  function handleChangeType(view){
    setView(view);
    setViewSpinner(true);
    setUpdateList(updateList + 1);
  };


  return (
    <div className="container bg-light pt-3">
      <div className="row d-flex flex-column align-items-center">
        <h3>Add a new movement</h3>
        <FormComponent
            setUpdateList = {setUpdateList}
            updateList = {updateList}
            setViewSpinner = {setViewSpinner}
            setTotalBudget = {setTotalBudget}
            totalBudget = {totalBudget}
        />
      </div>
      <div className="col-11 border rounded mx-auto mt-3 pt-2">
        <h3>List to registered operations</h3>
        <div>
          <ul className="row d-flex flex-row justify-content-center list-group">
              <button autoFocus type="button" className="col-6 list-group-item list-group-item-success btn btn-success cursor" onClick={
                () => {
                  handleChangeType('income');
                }
              }>Income</button>
              <button className="col-6 list-group-item list-group-item-danger btn btn-danger cursor" onClick={
                () => {
                  handleChangeType('expenses');
                }
              }>Expenses</button>
          </ul>
          <div className="row">
              <span className="col-12 bg-dark text-white py-2">Choose the number of operations you want to see</span>
          </div>
          <div className="row">
              <input type="number" defaultValue="10" min="1" className="col-12" onChange={
                (e) => {
                  if(!(Number(e.target.value) < 0)){
                    setLimitData(Number(e.target.value));
                  }
                }
              }></input>
          </div>
          <div className="row">
            <Table className="col-12" striped bordered hover responsive variant="light" size="sm">
              <thead className="thead-dark">
                <tr>
                  <th>Concept</th>
                  <th>Amount</th>
                  <th>Date</th>
                  <th className="text-center">Options</th>
                </tr>
              </thead>
              <tbody>
                {
                  !viewSpinner ? <ListOperations
                    dataOperation = {dataOperation}
                    updateList = {updateList}
                    setUpdateList = {setUpdateList}
                    setViewSpinner = {setViewSpinner}
                  /> : null
                }
              </tbody>
            </Table>
          </div>
          <div className="row pb-3">
            {viewSpinner ? <Spinner /> : null}
            {viewError ? <Error 
              msgError = "Could not connect to the database."
            />: null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operations;
