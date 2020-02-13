import React from 'react'
import MainLayout from '../../Layouts/MainLayout'

export default function index(props) {
    return (
        <div>
            <MainLayout>{props.children}</MainLayout>
        </div>
    )
}
