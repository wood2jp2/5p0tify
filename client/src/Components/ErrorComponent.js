import React from 'react'
import { Link } from 'react-router-dom'

const ErrorComponent = () => (
    <div>
        <h1>Link not found!</h1>
        <h3>Go back <Link to='/'>Home</Link></h3>
    </div>
)

export default ErrorComponent