import styled from 'styled-components'

export default function Filter () {
    return (
        <DivFilter>
        <div className="filter">
            <h1>Busque seu carro:</h1>
            <h2>Localização</h2>
            <input placeholder="Digite aqui seu estado ou cidade"></input>
            <h2>Marca:</h2>
            <input placeholder="Digite aqui sua marca"></input>
            <h2>Carro:</h2>
            <input placeholder="Digite aqui o nome"></input>
            <h2>Ano:</h2>
            <input placeholder="Digite aqui o ano"></input>
            <h2>Preço:</h2>
            <input placeholder="Digite aqui o preço"></input>
            <h2>Quilometragem:</h2>
            <input placeholder="Digite aqui a quilometragem"></input>
            <button>buscar</button>
        </div>
        <div className="cardbox">
            <h1>Lista de carros</h1>
        </div>
        </DivFilter>
        )
    }

const DivFilter = styled.div`

    display: flex;
    justify-content: center;
    font-family: 'Times New Roman', Times, serif;    
    color: #666;

    .filter > input {
        background: #888;
    }

    .filter{
        border-radius: 10px;
        border: solid red 4px;
        display: flex;
        flex-direction: column;
        align-content: space-around;
        width: 300px;
        height: 500px;
        font-size: 9px;
    }
    .cardbox{
        width: 1000px;
        border: solid red 4px;
        border-radius: 10px;
    }

`