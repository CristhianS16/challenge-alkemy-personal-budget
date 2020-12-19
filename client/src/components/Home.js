import React, { useEffect } from "react";
import { Table } from "react-bootstrap";

const Home = ({ setTitle, totalBudget }) => {
  console.log(totalBudget);

  useEffect(() => {
    setTitle("Home");
  });

  return (
    <div className="container col-10 py-3 mt-2">
      <section className="col-12 text-left bg-light border">
        <div className="row d-flex justify-content-center">
          <h2>Budgets</h2>
        </div>
        <div className="row">
          <hgroup className="col-11 border rounded bg-white d-flex flex-column flex-md-row align-items-md-baseline mx-auto">
            <h4 className="text-info mt-2">Total budget:</h4>
            <h3 className="font-weight-bold ml-1 font-size-2 ml-md-3">
              $ {totalBudget}
            </h3>
          </hgroup>
          <div className="col-11 border rounded mx-auto mt-3 pt-2">
            <h3>Last Movements</h3>
            <div>
              <Table striped bordered hover variant="light" size="sm">
                <thead>
                  <tr>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                  <tr>
                    <td>Salary</td>
                    <td>$ 1000</td>
                    <td>10-12-2020</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
