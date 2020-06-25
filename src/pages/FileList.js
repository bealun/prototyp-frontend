import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components/macro'

export const FileList = () => {
  const [files, setFiles] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/uploads')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setFiles(json)
      })
  }, [])

  return (
    <div>
      <ListContainer>
        {files && files.map((file) => (
          <UploadedFile>
            <Users>{file.username}</Users>
            <Users>{file.description}</Users>
            <Users><FileLink href={file.files}
              rel="noopener norefferer"
              target='_blank'>{file.filename}
            </FileLink></Users>

          </UploadedFile>
          // <UploadedFile key={file._id}>
          //   <User>{file.username}</User>
          //   <p>{file.description}</p>
          //   <a href={file.files}
          //     rel="noopener noreferrer"
          //     target='_blank'>{file.filename}</a>
          // </UploadedFile>
        ))}
      </ListContainer>
      <LinkTo to="/">
        <NavButton>Upload file</NavButton>
      </LinkTo>

    </div>
  )
}

const ListContainer = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  margin-top: 20px;
  border: 2px solid lightgrey;
`

const UploadedFile = styled.div`
  width: 100%; 
  display: flex;
`

const Users = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  border-bottom: 2px solid lightgrey;
`

const FileLink = styled.a`
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }
`

const LinkTo = styled(Link)`
  text-decoration: none;
  font-family: 'Roboto', sans-serif;
`

const NavButton = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  margin-top: 25px;
  font-size: 16px;
  border-radius: 2px;
  background: lightgrey;
  color: black;
  cursor: pointer;
  transition: 0.4s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`