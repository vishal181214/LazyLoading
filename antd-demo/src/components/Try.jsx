import React, { useState } from 'react'
import InputBox from './InputBox'
import { Input } from 'antd';

function Try() {
    const [val, setVal] = useState();
    const [num, setNum] = useState();
    const getValue = () => {
        console.log(val,num);
    }
    return (
        <div>
            <span>Name to be</span>
            <InputBox value={val} onChange={(e) => { setVal(e.target.value) }} />
            <Input value={num} onChange={(e) => { setNum(e.target.value) }} />
            <button onClick={getValue}>onClick</button>
        </div>
    )
}

export default Try
