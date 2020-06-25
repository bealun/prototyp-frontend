import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = () => {
  return (
    <Heading>
      <Redirect
        to='/'>Upload</Redirect>

      <Redirect
        to='/list'>List</Redirect>
    </Heading>
  )
}

const Heading = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  right: 0;
`

const Redirect = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-size: 20px;
  font-family: 'Roboto', sans-serif;
  margin: 20px 40px;
  &:hover {
    text-decoration: underline;
  }
`