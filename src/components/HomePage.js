import React from 'react'
import {Link } from 'react-router-dom'

const HomePage = (props) => {
    const email = props?.location?.state.email
    const name = email.split('@')[0];
    console.log(name);

    return (
        <div className="position-absolute top-50 start-50 translate-middle">
            <h1 className=" mb-3">Welcom  , {name} !</h1>
            <Link to="/" className="form-control bg-danger w-70 text-decoration-none text-center" > Logout </Link>
        </div>
    )
}

export default HomePage
