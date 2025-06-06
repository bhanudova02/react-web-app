import { useState } from "react"

export function ButtonDemo() {
    const [tip,setTip] = useState('');
    const [userName,setUserName] = useState('')
    function handelFocus(){
        setTip('Name In Block Letters')
    }
    function handelBlur(){
        setTip('');
        setUserName(userName.toUpperCase())
    }
    function handelChange(e){
        setUserName(e.target.value)
    }
    return (
        <div className="container-fluid">
            <h2>Register</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input type="text" value={userName} onFocus={handelFocus} onBlur={handelBlur} onChange={handelChange} /></dd>
                <dd>{tip}</dd>
            </dl>
        </div>
    )
}