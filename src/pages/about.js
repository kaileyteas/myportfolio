import React from 'react'

function about(){
    return <div className="page">
        <div className="aboutHeader">
            <h1>About</h1>
            <div className="profilePic">
                <img src="https://image.flaticon.com/icons/svg/1067/1067993.svg" 
                    alt="Graduate Icon" width="200px" height="200px"/>
                <p style={{"padding-right":"2rem"}}>Hello there, my name is Kailey Terracciano.
                I'm a Junior in Human-Centered Design & Engineering with a focus in Human-Computer Interaction 
                at the University of Washington, Seattle.</p>
            </div>
        </div>

    </div>
}



export default about