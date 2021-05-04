import styled from 'styled-components'

export default function MyButton () {

    const text = 'Vinicios'
    
    function showName () {
        console.log(`Meu nome é ${text}`)
    } 
    
    return (
        <>
            <Button onClick={showName}>entrar</Button>
        </>
    )
}


const Button = styled.button `
    background: #3498DB;
    color: #fff;
    width: 360px;
    border: 2px solid #3498DB;
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;
    margin: 20px 0 0 0
`