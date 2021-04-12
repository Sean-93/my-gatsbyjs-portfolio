import React from 'react'
import Wrapper from './wrapper'
import Header from './header'
import Footer from './footer'

export default function Layout(props) {
    return (
        <div>
            <Header/>
            <Wrapper>
                <main>{props.children}</main>
            </Wrapper>
            <Footer/>
        </div>
    )
}

