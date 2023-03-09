import React from 'react';
// import { useState } from 'react';
import expenses from '../data/data.js';
import '../App.css';
import ExpenseTodo from './ExpenseTodo.js';
function Expense() {
    let data = expenses;
    let totalPrice = 0;
    // const [total, setTotal] = useState(0)
    return (
        <div>
            <div>
                <header align="center"><strong>Expenses</strong></header>
            </div>
            <br></br>
            <div>
                {data && data.map(({ id, name, price }) => (
                    <ExpenseTodo id={id} name={name} price={price}/>
                ))}
                <strong>TOTAL: </strong>{data.map((data) => {totalPrice+=data.price})}{totalPrice}
            </div>
        </div>
    );
}
export default Expense;