import styled from 'styled-components'
import img from '../../assets/img/banner.png'

export default function Banner () {
    return (
        <DivBanner>
            <div>
                <img src={img} alt="vw take up"></img>
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


  /* div > img {
      width: 1120px;
      height: 420px;
   } */

`