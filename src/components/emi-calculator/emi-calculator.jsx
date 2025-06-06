import { useState } from "react"

export function EmiCalculator() {
    const [principle, setPrinciple] = useState(100000);
    const [years, setYears] = useState(1);
    const [rate, setRate] = useState(10.45);
    const [emi, setEmi] = useState(0)

    function handelPrincipleChange(e) {
        setPrinciple(e.target.value)
    }

    function handelYearChange(e) {
        setYears(e.target.value)
    }

    function handelRateChange(e) {
        setRate(e.target.value)
    }

    function handelCalcualteClick() {
        var P = principle
        var r = rate / 12 / 100;
        var n = years * 12;
        var EMI = P * r * (Math.pow(1 + r, n)) / Math.pow(1 + r, n) - 1;
        setEmi(EMI)
    }

    return (
        <div className="container-fluid bg-secondary p-5" style={{ height: '100vh' }}>
            <div className="bg-light text-dark p-2">
                <h4 className="text-center">Personal Loan EMI Calculator</h4>
                <div className="p-4 m-4 border border-2 border-dark">
                    <div className="row gap-8">
                        <div className="col">
                            <div className="d-flex align-items-center gap-1">
                                <label style={{ whiteSpace: 'nowrap' }} className="fw-bold">Amount You Need &#8377;</label>
                                <input onChange={handelPrincipleChange} type="text" value={principle} className="form-control" />
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex gap-1 align-items-center">
                                <label className="fw-bold">For</label>
                                <input onChange={handelYearChange} type="text" value={years} className="form-control w-100" />
                                <label className="fw-bold">Years</label>
                            </div>
                        </div>
                        <div className="col">
                            <div className="d-flex gap-1 align-items-center">
                                <label className="fw-bold" style={{ whiteSpace: 'nowrap' }}>Interest Rate</label>
                                <input onChange={handelRateChange} type="text" value={rate} className="form-control w-100" />
                                <label className="fw-bold">%</label>
                            </div>
                        </div>
                    </div>
                    <div className="row my-4 gap-8">
                        <div className="col">
                            <input onChange={handelPrincipleChange} type="range" min={100000} max={500000} value={principle} className="form-range" />
                            <span>&#8377; 1,00,000</span>
                            <span className=" float-end">&#8377; 5,00,000</span>
                        </div>
                        <div className="col">
                            <input onChange={handelYearChange} type="range" min={1} max={5} value={years} className="form-range" />
                            <span>1</span>
                            <span className="float-end">5</span>
                        </div>
                        <div className="col">
                            <input onChange={handelRateChange} type="range" min={10.4} max={18.4} value={rate} className="form-range" />
                            <span>10.45%</span>
                            <span className="float-end">18.45%</span>
                        </div>
                    </div>
                    <div className="row my-4">
                        <div className="col text-end">
                            <button onClick={handelCalcualteClick} className="btn btn-primary">Calculate</button>
                        </div>
                    </div>
                    <div>
                        <p className="fw-semibold">Your Monthly EMI is <span className="fw-bold text-primary fs-4">{Math.round(emi).toLocaleString('en-in',{style:'currency',currency:'INR'})}</span> For next {years*12} months</p>
                    </div>
                </div>
            </div>
        </div>
    )
}