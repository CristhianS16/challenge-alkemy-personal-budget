import React from "react";
import {Form, Col, Button} from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import moment from 'moment';
import Axios from 'axios';

const FormComponent = ({ updateList, setUpdateList, setViewSpinner, setTotalBudget, totalBudget}) => {

    const { register, handleSubmit, errors} = useForm();
    
    const onSubmit = data => {
      const {concept, amount, date, type} = data;
      // The component Form.Control substract one day to the date, so with momentJS i can add 1 day for resolve it.
      const dateFormat = moment(date).add(1, 'd').format('DD/MM/YYYY');
      const dataForm = {
        id : 0,
        concept,
        amount,
        date : dateFormat
      };
      newOperation(dataForm, type.toLowerCase());
    };
    
    const newOperation = async (data, type) => {
      const url = (`/api/post/${type}/`);
      data.type = type;
      const totalSum = parseInt(totalBudget) + parseInt(data.amount);
      const totalSub = parseInt(totalBudget) - parseInt(data.amount);
      try {  
        await Axios.post(url, data);
        setViewSpinner(true);
        setUpdateList(updateList + 1);
        type === 'income' ? setTotalBudget(totalSum) : setTotalBudget(totalSub); 
      } catch (error) {
        console.log(error);
      }
    };
    
    return (
      <div className="container d-flex flex-column align-items-center">
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row className="container d-flex justify-content-center">
          <Form.Group as={Col} md="10" controlId="validationCustom01">
            <Form.Label>Concept</Form.Label>
            <Form.Control
              name = "concept"
              type = "text"
              placeholder =  "Concept"
              defaultValue = "Ex: Salary"
              ref = {register({
                required: true,
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: 'Please, dont enter numbers',
                },
                maxLength: {
                    value: 45,
                    message: 'The max length is 45 chars.'
                }
              })}
            />
            <div className="row col-12 text-white text-small text-center bg-danger mx-auto">
              <span className="mx-auto">
                {errors?.concept?.message}
              </span>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="10" controlId="validationCustom02">
            <Form.Label>Amount</Form.Label>
            <Form.Control
              name = "amount"
              type = "number"
              placeholder = "Amount"
              ref={register({
                required: true,
                min: {
                  value: 0,
                  message: 'Please, enter a no-negative number.'
                },
                maxLength: {
                    value: 11,
                    message: 'Please, enter a number with 11 digits.'
                },
                valueAsNumber:{
                    value: true,
                    message: 'Please, enter a number'
                }
              })}
            />
            <div className="row col-12 text-white text-small text-center bg-danger mx-auto">
              <span className="mx-auto">
                {errors?.amount?.message}
              </span>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="10" controlId="validationCustomDate">
            <Form.Label>Date</Form.Label>
              <Form.Control
                name = "date"
                type = "date"
                ref={register({
                    required: true,
                    valueAsDate: {
                        value: true,
                        message: 'Please, enter a validated date.'
                    }
                })}
              />
            <div className="row col-12 text-white text-small text-center bg-danger mx-auto">
              <span className="mx-auto">
                {errors?.date?.message}
              </span>
            </div>
          </Form.Group>
          <Form.Group as={Col} md="10" controlId="validationCustom03">
            <Form.Label>Type</Form.Label>
            <Form.Control as="select" name = "type" ref={register({
                required: true
            })}>
                <option disabled>Choose a type of operation</option>
                <option id="income">Income</option>
                <option id="expenses">Expenses</option>
            </Form.Control>
          </Form.Group>
          <Button className="col-8" type="submit">Add new movement</Button>
        </Form.Row>
      </Form>
    </div>
  );
};

export default FormComponent;
