import React, { useState } from 'react';
import './App.scss';

const nums = [1, 2, 5, 10];

function App() {
    const [count, setCount] = useState[0];

    const handleAdd = (num) => {
        setCount(count + num);
    };
    const handleDeduct = (num) => {
        setCount(count - num);
    };

    return (
        <div className="App">
            <div>
                <h1>
                    Coount:
                    <span id="count" className={count > 0 ? 'positive' : count < 0 ? 'negative' : null}>
                        {count}
                    </span>
                </h1>
            </div>
            <div>
                <h4>Increment</h4>
                {nums.map((num) => (
                    <button key={num} onClick={() => handleAdd(num)}>
                        +{num}
                    </button>
                ))}
            </div>
            <div>
                <h4>Decrement</h4>
                {nums.map((num) => (
                    <button key={num} onClick={() => handleDeduct(num)}>
                        -{num}
                    </button>
                ))}
            </div>
            <div>
                <button onClick={() => setCount(0)} className="reset">
                    RESET
                </button>
            </div>
        </div>
    );
}

export default App;
