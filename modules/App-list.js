import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
    render() {
        return (
            <div>
                <h1>React Router Tutorial</h1>
                <ul role="nav">
                    <li><Link to="/zero">Cover</Link></li>

                    <ul>Lesson One
                        <li><Link to="/one">One</Link></li>
                        <li><Link to="/two">Two</Link></li>

                        <li><Link to="/eight">Three</Link></li>
                        <li><Link to="/nine">Four</Link></li>
                        <li><Link to="/eleven">Balloon</Link></li>
                    </ul>
                    <ul>Lesson Two
                        <li>
                            <Link to="/phonics-hard/one">One</Link></li>
                        <li><Link to="/phonics-hard/three">Three</Link>
                        </li>

                    </ul>


                </ul>
            </div>
        )
    }
})