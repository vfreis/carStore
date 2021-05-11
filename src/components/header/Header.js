import styled from 'styled-components'

export default function Header () {
    return (
        <Container>
            <h1 class="logo">Logo</h1>
            <ul class="list">
                <li class="item">Como Funciona</li>
                <li class="item">Carros</li>
                <li class="item">Contato</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
   width: 1024px;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;
   align-items: center;
   font-family: 'Times New Roman', Times, serif;    
   color: #666;

    .list {
        list-style-type: none;
        display: flex;
        font-size: 12px;
    }
    
    .item {
        padding: 10px 15px;   
        cursor: pointer; 
        border-bottom: 2px solid transparent;
    }

    .item:hover {
        color: #666;
        border-bottom: 2px solid #666;
    }
`