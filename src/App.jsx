import { useEffect, useState } from "react"
import styled from "styled-components"
import Form from "./components/Form"
import Header from "./components/Header"
import axios from 'axios'
import Result from "./components/Result"

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 90%;
`

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 5rem;

  @media (max-width: 992px) {
    display: flex;
    flex-direction: column;
    padding: 0;
    margin-top: 1rem;
  }
`

function App() {

  const [team, setTeam] = useState('')
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    
    if(team !== ''){
      const searchTeamApi = async () => {
        setLoading(true)
        const { data } = await axios.get(`https://api-football-v1.p.rapidapi.com/v3/teams?search=${team.toLowerCase()}`, {
          headers: {
            'X-RapidAPI-Key': '7ef30aac7bmshf53989254affe59p1f7e1cjsn881e486ffb9a',
            'X-RapidAPI-Host': 'api-football-v1.p.rapidapi.com',
          },
        })
        const teamFiltered = data.response.map(el => ({
            nameTeam: el.team.name,
            code: el.team.code,
            country: el.team.country,
            img: el.team.logo
        }))
        setTeams(teamFiltered)
        setLoading(false)
      }
  
      searchTeamApi()
    }

  }, [team])


  return (
    <div>
      <Header />
      <Container>
        <MainContainer>
          <Form 
            setTeam={setTeam}
            setTeams={setTeams}
          />
          <Result 
            teams={teams}
            loading={loading}
          />
        </MainContainer>
      </Container>
    </div>
  )
}

export default App
