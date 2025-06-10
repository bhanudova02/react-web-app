import { useEffect, useRef, useState } from "react"

export function TimeOutDemo() {
    const [timer, setTimer] = useState()


    function Clock() {
        var now = new Date();
        var time = now.toLocaleTimeString();
        setTimer(time)
    }



    useEffect(() => {
        setInterval(Clock, 1000)
    }, [])

    return (
        <div className="container-fluid text-center">
            <h1 className="mt-3">{timer}</h1>
        </div>
    )
}