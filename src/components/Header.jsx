import styled from "styled-components"

const Container = styled.div`
    background-color: #EFF5F5;
    /* height: 10rem; */
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 1px 1px 9px -1px rgba(0,0,0,0.75);
    -webkit-box-shadow: 1px 1px 9px -1px rgba(0,0,0,0.75);
    -moz-box-shadow: 1px 1px 9px -1px rgba(0,0,0,0.75);
`

const Title = styled.h1`
    margin: 0;
    text-align: center;
    color: #EB6440;
    font-size: 3.5rem;
    text-transform: uppercase;
    font-weight: 300;
    @media (max-width: 992px) {
        font-size: 1.5rem;
    }
    span {
        font-weight: 700;
    }
`

const Header = () => {
    return (
        <Container>
            <Title>Team <span>App</span></Title>
        </Container>
    )
}

export default Header