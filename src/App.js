import React from "react";
import { useState, useRef, useEffect } from "react";
import BuyThisList from "./BuyThisList";
import "./App.scss";
function App() {
    const [buyThis, setBuyThis] = useState([]);
    const inputRef = useRef();
    let addBuyThis = (event) => {
        setBuyThis((_) => {
            let id = 0;
            if (_.length !== 0) {
                id = _[_.length - 1].id + 1;
            }
            return [..._, { id: id, name: inputRef.current.value }];
        });
    };
    let clearBuyThis = (event) => {
        setBuyThis([]);
    };
    useEffect(() => {
        const _buyThis = JSON.parse(localStorage.getItem("buyThis"));
        if (_buyThis) setBuyThis(_buyThis);
    }, []);
    useEffect(() => {
        localStorage.setItem("buyThis", JSON.stringify(buyThis));
    }, [buyThis]);
    return (
        <>
            <div class="container ">
                <div class="pt-6 has-text-centered">
                    <h1 class="title">Buy this, not that</h1>
                    <h2 class="subtitle">A list of things you should buy</h2>
                </div>
                <div class="py-2">
                    <div class="has-text-centered">
                        <ul class="">
                            <BuyThisList buyThis={buyThis} />
                        </ul>
                    </div>
                </div>
                <div class="py-4 px-4 has-text-centered">
                    <input
                        ref={inputRef}
                        class="input"
                        style={{ maxWidth: "400px" }}
                        type="text"
                        placeholder="What shoud you buy?"
                    />
                </div>
                <div class="buttons is-centered py-4">
                    <button class="button is-link mx-4" onClick={addBuyThis}>
                        Add Buy This
                    </button>

                    <button
                        class="button is-danger mx-4"
                        onClick={clearBuyThis}
                    >
                        Clear list
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
