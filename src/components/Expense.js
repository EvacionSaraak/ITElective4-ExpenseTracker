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
            <div >
                <header align="center">Expenses from Data.js</header>
            </div>
            <div>
                <table id='dataTable'>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Price</th>
                        </tr>
                        {data && data.map(({ id, name, price }) => (
                            <ExpenseTodo id={id} name={name} price={price}/>
                        ))}
                        {data.map((data) => {totalPrice+=data.price})}
                        <tr>
                            <th>Total Price:</th>
                            <td></td>
                            <td>{totalPrice}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
export default Expense;