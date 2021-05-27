import styled from 'styled-components'

export default function ListCars () {
    return (
        <DivList>
            <ul>
                <li>Carros</li>
            </ul>
        </DivList>
    )
}

const DivList = styled.div `
    border: solid red 4px;
    border-radius: 10px;
    flex-direction: column;
    align-content: space-around;
`