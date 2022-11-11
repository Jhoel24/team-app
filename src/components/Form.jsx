import { useState } from "react"
import styled from "styled-components"

const FormContainer = styled.form`
    padding: 1.2rem 2rem;
    /* justify-content: center; */
    -webkit-box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
    -moz-box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
    box-shadow: 5px 3px 14px -7px rgba(0,0,0,0.75);
`

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    height: 100%;
    justify-content: space-evenly;
`

const Label = styled.label`
    color: black;
    font-size: 1.5rem;
`

const Input = styled.input`
    padding: .8rem 1rem;
    width: 100%;
    border: none;
    border-radius: 3px;
    outline: none;
    color: black;
    border: 1px solid gray;
`

const Submit = styled.input`
    border: none;
    padding: .8rem;
    width: 50%;
    align-self: center;
    border-radius: 10px;
    background-color: #EB6440;
    color: white;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 2px;
    &:hover {
        cursor: pointer;
    }
`

const Error = styled.p`
    margin: 0;
    text-align: center;
    color: red;
    font-size: 1.5rem;
`

const Form = ({setTeam, setTeams}) => {

    const [error, setError] = useState(false)
    const [teamInput, setTeamInput] = useState('')

    const handleSubmit = e => {
        e.preventDefault()
        if(teamInput === ''){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 2000);
        }
        setTeams([])
        setTeam(teamInput)
    }

    return (
        <FormContainer
            onSubmit={handleSubmit}
        >
            <InputContainer>
                <Label>Search for any soccer team:</Label>
                <Input type="text" value={teamInput} onChange={e => setTeamInput(e.target.value)} />
                { error && <Error>Field is required</Error>}
                <Submit type={'submit'} value={'Search'} />
            </InputContainer>
        </FormContainer>    
    )
}

export default Form