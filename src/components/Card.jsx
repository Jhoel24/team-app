import styled from "styled-components"

const Container = styled.div`
    display: flex;
    /* margin: 2rem 0; */
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid lightgray;
    padding: 1rem 0;
`

const Left = styled.div`
    flex: 1;
`

const ImgContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Right = styled.div`
    flex: 2;
`
const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Title = styled.h3`
    color: black;
    font-size: 1.5rem;
    font-family: 300;
    margin: 0;
`

const Code = styled.p`
    font-size: 1.2rem;
    color: black;
    margin: 0;

    span {
        color: #497174;
        font-weight: 800;
    }
`

const Country = styled.p`
    font-size: 1.2rem;
    color: black;
    margin: 0;

    span {
        color: #497174;
        font-weight: 800;
    }
`



const Card = ({ nameTeam, code, country, img }) => {
    return (
        <div>
            <Container>
                <Left>
                    <ImgContainer>
                        <img src={img} alt={nameTeam}/>
                    </ImgContainer>
                </Left>
                <Right>
                    <InfoContainer>
                        <Title>{nameTeam}</Title>
                        <Code>Code: <span>{!!code ? code : 'Undefined'}</span></Code>
                        <Country>Country: <span>{!!country ? country : 'Undefined'}</span></Country>
                    </InfoContainer>
                </Right>
            </Container>
        </div>
    )
}

export default Card