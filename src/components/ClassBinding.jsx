import { useState } from "react";

export function ClassBinding(){
    const [theme, setTheme] = useState('border border-2 p-4 rounded');
    const [btnTheme, setbtnTheme] = useState('btn btn-dark w-100');

    function handleThemeChange(e){
        if(e.target.checked){
            setTheme('border border-2 p-4 rounded bg-dark text-white');
            setbtnTheme('btn btn-warning w-100');
        } else {
            setTheme('border border-2 p-4 rounded');
            setbtnTheme('btn btn-dark w-100');
        }
    }

    return(
        <div className="container-fluid d-flex justify-content-center">
            <div className="mt-4">
                <form className={theme}>
                    <div className="form-switch">
                        <input type="checkbox" onChange={handleThemeChange} className="form-check-input" /> <label> Dark Theme </label>
                    </div>
                    <h3 className="bi bi-person-fill"> User Login </h3>
                    <dl>
                        <dt>User Name</dt>
                        <dd><input type="text" className="form-control" /></dd>
                        <dt>Password</dt>
                        <dd><input type="password" className="form-control" /></dd>
                    </dl>
                    <button className={btnTheme}>Login</button>
                </form>
            </div>
        </div>
    )
}
