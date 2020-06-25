import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

export const Input = () => {
  const [username, setUsername] = useState('')
  const [description, setDescription] = useState('')
  const [fileName, setFileName] = useState()
  const fileInput = useRef()
  const history = useHistory()

  const handleInput = event => {
    event.preventDefault()

    fetch('http://localhost:8080/uploads', {
      method: 'POST',
      body: JSON.stringify({
        username,
        description
      }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => {
        if (!res.ok) {
          console.log('Error!')
        } else {
          alert('Success!')
          return res.json()
        }
      })
      .then(({ _id }) => {
        const formData = new FormData()
        formData.append('file', fileInput.current.files[0])
        fetch(`http://localhost:8080/uploads/${_id}/files`, {
          method: 'POST',
          body: formData
        })
          .then((res) => res.json())
          .then(() => {
            setUsername('')
            setDescription('')
            setFileName()
            history.push('/list')
          })
      })
      .catch((err) => console.log('Errors:', err))
  }

  return (
    <FormInputs
      onSubmit={(event) =>
        handleInput(event)}>

      <InputLabel>
        User name:
        <InputField required
          type="text"
          onChange={(event) =>
            setUsername(event.target.value)}
          value={username}
          placeholder="What's your name?"
        />
      </InputLabel>

      <InputLabel>
        Description:
        <InputField required
          type="text"
          onChange={(event) =>
            setDescription(event.target.value)}
          value={description}
          placeholder="Please describe your file"
        />
      </InputLabel>

      <InputLabel>
        Upload your file:
        <InputField required
          type="file"
          ref={fileInput}
          placeholder="Image"
          onChange={(event) => {
            setFileName(event.target.files[0].name)
          }}
        />
      </InputLabel>
      <h4>{fileName}</h4>

      <button type="submit">POST</button>
    </FormInputs>
  )
}

const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 240px;
  margin-left: auto;
  margin-right: auto;
`

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px;
`

const InputField = styled.input`
  width: 200px;
  padding: 5px;
  border: none;
  border-bottom: 2px solid teal;
  margin: 5px;

  &:active, :focus {
    outline: 2px solid orange;
  }
`