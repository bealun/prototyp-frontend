import React from 'react'
import styled from 'styled-components'

export const ListHeader = () => {
  return (
    <ListContainer>
      <UploadedFileHeader>
        <Users>Uploaded by</Users>
        <Description>Description</Description>
        <Filenames>Filenames</Filenames>
        <Date>Date</Date>
      </UploadedFileHeader>
    </ListContainer>
  )
}

const ListContainer = styled.div`
  width: 720px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  color: #241825;
  margin-top: 20px;
`

const UploadedFileHeader = styled.div`
  width: 100%; 
  display: flex;
  font-weight: 700;
`

const Users = styled.p`
  font-family:'Roboto';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 18px;
  margin: 0;
  width: 150px;
`

const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 18px;
  margin: 0;
  width: 150px;
`

const Filenames = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 18px;
  margin: 0;
  width: 150px;
  overflow-wrap: break-word;
`

const Date = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 18px;
  margin: 0;
  width: 150px;
`