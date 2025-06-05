import axios from "axios";
import { useState } from "react"

export function KeyDemo() {
    const [userName, setUserName] = useState('');
    const [status, setStatus] = useState('');
    const [errCls, setErrCls] = useState('');
    const [pwdMsg, setPwdMsg] = useState('');
    const [progressCls, setProgressCls] = useState('')
    const [progressWidth, setProgressWidth] = useState({ width: '' });
    function handelUserName(e) {
        setUserName(e.target.value)
    }

    function handelVerifyName() {
        axios.get('user.json')
            .then(res => {
                for (var user of res.data) {
                    if (user.UserName === userName) {
                        setStatus('User Name Is Taken Try Another');
                        setErrCls('text-danger');
                        break;
                    } else {
                        setStatus('User Name Avaialble');
                        setErrCls('text-success')
                    }
                }
            })
    }

    function handelPasswordChange(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,15}/)) {
            setPwdMsg('Strong Password')
            setProgressWidth({ width: '100%' })
            setProgressCls('progress-bar bg-success progress-bar-striped progress-bar-animated')
        } else {
            if (e.target.value.length < 4) {
                setPwdMsg("Poor Password");
                setProgressWidth({ width: '20%' })
                setProgressCls('progress-bar bg-danger progress-bar-striped progress-bar-animated')
            } else {
                setPwdMsg('Weak Password');
                setProgressWidth({ width: '70%' })
                setProgressCls('progress-bar bg-warning progress-bar-striped progress-bar-animated')
            }
        }
    }


    return (
        <div className="container-fluid">
            <h3>Register</h3>
            <dl className="w-25">
                <dt>User Name</dt>
                <dd><input type="text" className="form-control" onKeyUp={handelVerifyName} onChange={handelUserName} /></dd>
                <dd className={`fw-bold ${errCls}`}>{status}</dd>
                <dt>Password</dt>
                <dd><input type="password" className="form-control" onKeyUp={handelPasswordChange} /></dd>
                <div>
                    <div className="progress">
                        <div style={progressWidth} className={progressCls}>
                            {pwdMsg}
                        </div>
                    </div>
                </div>
            </dl>
        </div>
    )
}