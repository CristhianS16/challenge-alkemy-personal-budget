import React, { useEffect, useState} from "react";
import { Table } from "react-bootstrap";
import Error from "../components/Error";
import Spinner from "../components/Spinner";
import {getTotal} from "../helpers/getDataHome";

const Home = ({setTitle, totalBudget, setTotalBudget, viewSpinner, setViewSpinner, viewError, setViewError}) => {

  const [lastMovements, setLastMovements] = useState([]);

  useEffect(() => {
    setTitle("Home");
    setViewSpinner(true);

    async function getDataHome () {
      try {
        const {totalIncome, totalExpenses, movements} = await getTotal();

        setTotalBudget(totalIncome - totalExpenses);
        setLastMovements(movements);
        setViewSpinner(false);
        setViewError(false);    
      } catch (error) {
        console.log(error);
        setViewSpinner(false);
        setViewError(true);
      };
    };
    
    getDataHome();
  }, [setTitle, setTotalBudget, setViewError, setViewSpinner]);


  return (
    <div className="container col-10 py-3 mt-2">
      <section className="col-12 text-left bg-light border">
        <div className="row d-flex justify-content-center">
          <h2>Budgets</h2>
        </div>
        <div className="row">
          <hgroup className="col-11 border rounded bg-white d-flex flex-column flex-md-row align-items-md-baseline mx-auto">
            <h4 className={
              totalBudget > 0 ? "text-success mt-2" : totalBudget === 0 ? "text-info mt-2" : "text-danger mt-2"
            }>Total budget:</h4>
            <h3 className="font-weight-bold ml-1 font-size-2 ml-md-3">
              $ {totalBudget}
            </h3>
          </hgroup>
          <div className="col-11 border rounded mx-auto mt-3 pt-2">
            <h3>Last movements registered</h3>
            <div>
              <Table striped bordered hover responsive variant="light" size="sm">
                <thead className="thead-dark">
                  <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    lastMovements.map( (movement, i) => (
                      <tr key={i} className={
                       movement.type === 'income' ? "table-success" : "table-danger"
                      }>
                        <td>{movement.concept}</td>
                        <td>$ {movement.amount}</td>
                        <td>{movement.date}</td>
                      </tr>
                    ))
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
      </section>
    </div>
  );
};

export default Home;
