import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import Banner from './components/Banner'
import Filter from './components/Filter'
import ListCars from './components/ListCars'

export default function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Container>
        <Filter />
        <ListCars />
      </Container>
      
    </>
  )
}
const Container = styled.div`
  width: 1024px;
  margin: 0 auto;
  display: flex;
  gap: 20px
`
