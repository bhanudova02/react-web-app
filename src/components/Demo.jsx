import axios from 'axios';
import React, { useState } from 'react'

const Demo = () => {
    const [theme, setTheme] = useState('bg-white text-black')
    const [btn, setBtn] = useState('btn btn-dark text-white')
    function handleThemeChange(e) {
        if (e.target.checked) {
            setTheme('bg-dark text-white')
            setBtn('btn btn-light text-black')
        } else {
            setTheme('bg-white text-black')
            setBtn('btn btn-dark text-white')
        }
    }

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
            <div className={`${theme} p-4 border shadow w-25`}>
                <div className='d-flex justify-content-start align-items-center'>
                    <div className='form-switch'>
                        <input onChange={handleThemeChange} type='checkbox' className='form-check-input' />
                    </div>
                   <label> Dark Theme </label>
                </div>
                <dl>
                    <dt>User Name</dt>
                    <dd><input type="text" className='form-control' /></dd>
                    <dt>Password</dt>
                    <dd><input type="password" className='form-control' /></dd>
                </dl>
                <button className={`w-100 ${btn}`}>Login</button>
            </div>
        </div>
    )
}

export default Demo



