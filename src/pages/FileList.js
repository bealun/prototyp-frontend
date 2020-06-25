import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
      <h1>Hello!</h1>
      {files && files.map((file) => (
        <UploadedFile key={file._id}>
          <li>{file.username}</li>
          <li>{file.description}</li>
          <a href={file.files} 
          rel="noopener noreferrer"
          target='_blank'>{file.filename}</a>
        </UploadedFile>
      ))}
    </div>
  )
}

const UploadedFile = styled.div`
  width: 80%; 
  display: flex;
  justify-content: space-evenly;
`