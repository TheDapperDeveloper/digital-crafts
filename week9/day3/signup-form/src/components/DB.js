import React from "react";

export default function DB (props) {
    const { list } = props
    console.log(list)
    return (
        <div>
            <h1>Data</h1>
            <ul>{list?.map((users) => (
                <li>{users}</li>
            ))}</ul>
        </div>
    )
}
