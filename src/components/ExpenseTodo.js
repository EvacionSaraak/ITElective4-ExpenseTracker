import React from "react";

function ExpenseTodo({id = "N/A", name = "N/A", price = "N/A"}) {

    const handleClick = (e) => {
        alert("You Clicked '" + name + "' - Php " + price);
    }
    return (
        <div onClick={handleClick} style={{
            backgroundColor: "skyblue",
            borderRadius: 5,
            textAlign: "justify",
            padding: 4,
            margin: 5,
            width: 250,
        }}>
            <div key={id}><strong>{name}</strong></div>
            <div style={{
                textAlign: "right",
            }}><strong>Php - {price}</strong></div>
        </div>
    )
}

export default ExpenseTodo;