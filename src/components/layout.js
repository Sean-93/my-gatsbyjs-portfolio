import React from 'react'
import Wrapper from './wrapper'

export default function Layout(props) {
    return (
        <div>
            <Wrapper>
                <main>{props.children}</main>
            </Wrapper>
        </div>
    )
}

