import React from "react";

function ExpenseTodo({id = "N/A", name = "N/A", price = "N/A"}) {

    const handleClick = (e) => {
        alert("You Clicked '" + name + "' - Php " + price);
    }
    return (
        <tr onClick={handleClick}>
            <th>{id}</th>
            <td>{name}</td>
            <td>{price}</td>
        </tr>
    )
}

export default ExpenseTodo;