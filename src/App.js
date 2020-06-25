import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Input } from './pages/Input'
import { FileList } from './pages/FileList'

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>

        <Route path="/" exact>
          <Input />
        </Route>

        <Route path="/list">
          <FileList />
        </Route>

      </Switch>
    </BrowserRouter>
  )
}
