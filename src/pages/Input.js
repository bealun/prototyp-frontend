import React, { useState, useRef } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components/macro'
import swal from 'sweetalert'

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
          swal({
            title: "Success!",
            text: "Your file is uploaded",
            icon: "success",
            button: "OK",
          })
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
        <InputField
          maxLength="60"
          type="text"
          onChange={(event) =>
            setDescription(event.target.value)}
          value={description}
          placeholder="Please describe your file"
        />
      </InputLabel>

      <FileLabel>
         + Upload your file
        <InputField required
          type="file"
          style={{ display: 'none' }}
          ref={fileInput}
          onChange={(event) => {
            setFileName(event.target.files[0].name)
          }}
        />
      </FileLabel>
      <Filename>{fileName}</Filename>

      <PostButton type="submit">POST</PostButton>
    </FormInputs>
  )
}

const FormInputs = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 25px;
  padding: 5px;
  border: none;
  border-bottom: 2px solid teal;
  margin: 5px 0;

  &:active, :focus {
    outline: 2px solid teal;
  }

  ::placeholder {
    font-family: 'Roboto', sans-serif;
  }
`

const FileLabel = styled.label`
  margin-top: 10px;
  width: 200px;
  height: 25px;
  display: flex;
  align-items: center;
  padding: 5px 0px 5px 8px;
  border: 2px solid teal;
  color: teal;
  cursor: pointer;
`

const Filename = styled.p`
  color: teal;
  font-weight: normal;
  font-size: 10px;
  margin-bottom: 25px;
`

const PostButton = styled.button`
  width: 120px;
  height: 40px;
  font-size: 18px;
  border-radius: 5px;
  border: none;
  background: darkorange;;
  color: white;
  font-weight: 700;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`