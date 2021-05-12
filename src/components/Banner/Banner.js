import styled from 'styled-components'

export default function Banner () {
    return (
        <DivBanner>
            <div>
                <img src="https://cdn.autopapo.com.br/box/uploads/2019/05/02170928/vw-up-2020.jpg" alt="vw take up"></img>
            </div>
        </DivBanner>
    )
}

const DivBanner = styled.div`

    display: flex;
    justify-content: space-around;
    margin: 0 auto;
    //border: 4px solid red;
    height: 420px;
    position: relative;
   // overflow: hidden;


  div > img {
      width: 1120px;
      height: 420px;
   }

`