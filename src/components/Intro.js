import React from 'react'
import styled from 'styled-components'

const Intro = ()=>{
    return (
        <div>
            <Title>
                Bogna Anna
            </Title>
            <h3>
            A graphic designer based in Copenhagen, DK.
            </h3>
        </div>
    )
}

const Title = styled.h2`
    text-transform: uppercase;
    margin-bottom: 2rem;
`

export default Intro