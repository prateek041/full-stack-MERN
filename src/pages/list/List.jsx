import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'

const List = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            <div className="homeContainer">Hello</div>
        </div>
    )
}

export default List