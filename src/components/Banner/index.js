import styled from 'styled-components'
import imgBanner from '../../assets/img/banner.png'

export default function Banner () {
    return (
        <DivBanner>
            <img src={imgBanner} />
        </DivBanner>
    )
}

const DivBanner = styled.div`
    width: 1024px;
    margin: 0 auto;

    img {
        width: 100%;
    }
`