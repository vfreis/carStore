import styled from 'styled-components'

export default function Header () {
    return (
        
            
         //<HeaderStyle>
            <nav className="menu">
                <h3></h3>
                <img className="logo"src="https://www.flaticon.com/svg/vstatic/svg/4661/4661987.svg?token=exp=1620166921~hmac=827f939d7a6fcb9596ba07b07521b5b2"></img>
                <li>Carros</li>
                <li>Como Funciona</li>
                <li>Contato</li>   
            </nav>
            //</HeaderStyle>
        
    )
}

const HeaderStyle = styled.header`
    display:flex;
    text-align: center;
    justify-content: space-around;
    align-items: center;
    min-height: 10vh;
    list-style: none;
`