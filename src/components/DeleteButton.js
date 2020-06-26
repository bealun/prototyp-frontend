import React from 'react'
import swal from 'sweetalert'
import styled from 'styled-components/macro'


// Components w props to delete single item
// Validation w SweetAlert
export const DeleteButton = ({ id }) => {

  const handleRemove = (event) => {
    event.preventDefault()

    swal({
      title: 'Are you sure?',
      text: "You might lose important data",
      buttons: true,
      dangerMode: true,
    })
      .then((willDelete) => {
        if (willDelete) {
          fetch(`http://localhost:8080/uploads/${id}`, {
            method: 'DELETE'
          })
            .then((res) => {
              if (res.ok) {
                window.location.reload(false);
              }
            })
        }
      })
  }
  return (
    <Remove onClick={handleRemove}>X</Remove>
  )
}


const Remove = styled.button`
  width: 30px;
  height: 30px;
  color: white;
  background: darkorange;
  border: none;
  margin-top: auto;
  margin-bottom: auto;
  margin-right: 20px;
`