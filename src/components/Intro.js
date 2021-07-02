import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const Intro = ({pathname})=>{
    const link = pathname === '/' ? '/about' : '/'
    return (
        <div>
            <Link to={link}>
            <Title>
                Bogna Anna
            </Title>
            </Link>
            <h3>
            Graphic designer and architect based in Copenhagen, DK.
            </h3>
        </div>
    )
}

export const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: .83vw;
`

export default Intro