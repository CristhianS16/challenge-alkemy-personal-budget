import React from 'react';
import Axios from 'axios';

const ListOperations = ({dataOperation, updateList,setUpdateList, setViewSpinner}) => {

    return (
        dataOperation.map( operation => (
          <tr key={operation.id}>
            <td>{operation.concept}</td>
            <td>$ {operation.amount}</td>
            <td>{operation.date}</td>
            <td className="text-center">
              <button className="btn-sm btn-info" onClick={
                () => {
                  const id = operation.id;
                  const type = operation.type;
                  const concept = operation.concept;
                  const amount = operation.amount;
                  const date = (operation.date).split('/').reverse().join('-');
                  window.location.href = `/edit?id=${id}&type=${type}&concept=${concept}&amount=${amount}&date=${date}`;
                }
              }>&#x2710; Edit</button>
              <button className="btn-sm btn-danger ml-1" onClick={
                async () => {
                  setViewSpinner(true);
                  const url = `https://budget-server-alkemy.herokuapp.com/api/delete/${operation.type}/${operation.id}/`;
                  await Axios.delete(url);

                  setUpdateList(updateList + 1);
                }
              }>&#x2297; Delete
              </button>
            </td>
          </tr>
        ))
    )
}

export default ListOperations
