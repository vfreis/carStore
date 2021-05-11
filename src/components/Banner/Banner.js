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

   width: 720px;
   height: 360px;
   align-items: center;
   margin: 0 auto;
   justify-content: center;



`