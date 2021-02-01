import React from 'react'
import styled from 'styled-components'

const Intro = ()=>{
    return (
        <div>
            <Title>
                Bogna Anna
            </Title>
            <h3>
            Graphic designer and architect based in Copenhagen, DK.
            </h3>
        </div>
    )
}

export const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 1rem;
`

export default Intro