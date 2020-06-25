import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import styled from 'styled-components/macro'
// import swal from 'sweetalert'

import { ListHeader } from '../components/ListHeader'
import { DeleteButton } from 'components/DeleteButton'

export const FileList = ({ _id }) => {
  const [files, setFiles] = useState(null)

  useEffect(() => {
    fetch('http://localhost:8080/uploads')
      .then((res) => res.json())
      .then((json) => {
        console.log(json)
        setFiles(json)
      })
  }, [])

  // const handleRemove = (event) => {
  //   event.preventDefault()

  //   swal({
  //     title: 'Are you sure?',
  //     text: "You might lose important data",
  //     buttons: true,
  //     dangerMode: true,
  //   })
  //     .then((willDelete) => {
  //       if (willDelete) {
  //         fetch(`http://localhost:8080/uploads/${_id}`, {
  //           method: 'DELETE'
  //         })
  //           .then((res) => {
  //             if (res.ok) {
  //               window.location.reload(false);
  //             }
  //           })
  //       }
  //     })
  // }

  return (
    <ContentWrapper>
      <ListHeader />
      <ListContainer>
        {files && files.map((file) => (
          <UploadedFile key={file._id}>
            <Users>{file.username}</Users>
            <Description>{file.description}</Description>

            {file.files && file.files.length === 0
              ? 'No files found'
              : <Filenames>
                <FileLink href={file.files}
                  rel="noopener norefferer"
                  target='_blank'>{file.filename}
                </FileLink></Filenames>}
            <Date>{moment(file.createdAt).format('YYYY-MM-DD')}</Date>
            {/* <Remove type="button" 
            onClick={(event) => handleRemove(event)}>
              X
            </Remove> */}
            <DeleteButton id={file._id} />
          </UploadedFile>
        ))}
      </ListContainer>
      <LinkTo to="/">
        <NavButton>Upload file</NavButton>
      </LinkTo>

    </ContentWrapper>
  )
}

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ListContainer = styled.div`
  width: 720px;
  display: flex; 
  flex-direction: column;
  justify-content: center;
  color: #241825;
  border: 2px solid #73956F;
  border-bottom: none;
`


const UploadedFile = styled.div`
  width: 100%; 
  display: flex;
  border-bottom: 2px solid #73956F;
`

const Users = styled.p`
  font-family:'Roboto';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 14px;
  width: 150px;
`

const Description = styled.p`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 14px;
  border-left: 2px solid #73956F;
  width: 150px;
`

const Filenames = styled.p`
  border-left: 2px solid #73956F;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 14px;
  width: 150px;
  overflow-wrap: break-word;
`

const Date = styled.p`
  border-left: 2px solid #73956F;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 10px;
  font-size: 14px;
  width: 150px;
`


const FileLink = styled.a`
  text-decoration: none;
  color: black;
  width: 150px;
  overflow-wrap: break-word;

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
  margin: 25px 0 10px 0;
  font-size: 16px;
  font-weight: 700;
  border-radius: 4px;
  color: white;
  background: teal;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    opacity: 0.8;
  }
`