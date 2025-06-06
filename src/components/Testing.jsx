import { useState } from 'react'

const Testing = () => {

    const [styleObj, setStyleObj] = useState({ left: '', top: '' })
    function handelMouseMove(e) {
        setStyleObj({
            left: e.clientX + 'px',
            top: e.clientY + 'px'
        })
    }

    return (
        <div className="container-fluid" onMouseMove={handelMouseMove}>
            <div style={{ height: '1000px' }}>Move Mouse Pointer To Test</div>
            <img src="/airplane.gif" style={{ ...styleObj, position: 'fixed' }} width={50} height={50} />
            
        </div>
    )
}

export default Testing