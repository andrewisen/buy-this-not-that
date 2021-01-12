import React from "react";

export default function BuyThisList({ buyThis }) {
    return (
        <div>
            {Object.values(buyThis).map((_) => (
                <li key={_.id} id={"buyThis" + _.id}>
                    {_.name}
                </li>
            ))}
        </div>
    );
}
