import React from 'react'
import AppBar from '../components/Navigation/AppBar'

export default function MainLayout(props) {
    return (
        <div>
            <AppBar />
            <div>{props.children}</div>
            <p>The Footer</p>
        </div>
    )
}
