import styled from "styled-components"
import Card from "./Card"
import Spinner from "./Spinner"

const Container = styled.div`
    /* background-color: red; */
    height: 50vh;
    overflow: scroll;
    -webkit-box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
    box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
`

const Title = styled.h2`
    text-align: center;
    font-size: 1.5rem;
    @media (max-width: 992px) {
        font-size: 1rem;
    }
`

const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Result = ({teams, loading}) => {
    return (
        <Container>
            <Title>{teams.length > 0 ? `${teams.length} Teams found` : 'Results here: '}</Title>
            { loading ? 
                <SpinnerContainer>
                    <Spinner />
                </SpinnerContainer>
            : 
                teams.length > 0 && teams.map((team, i) => (
                    <Card 
                        key={i}
                        {...team}
                    />
                ))
            }
        </Container>
    )
}

export default Result