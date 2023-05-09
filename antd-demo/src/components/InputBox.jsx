import { Input } from 'antd'
import React, { useState } from 'react'

function InputBox() {
    // const [valOne, setValOne] = useState();

    // const getValue = () =>{
    //     console.log(valOne);
    // }
  return (
    <div><br/><br/>
        <p>
            <Input placeholder="Basic usage" />  
            {/* <button onClick={getValue}>Click</button>   */}
        </p>
    </div>
  )
}

export default InputBox
