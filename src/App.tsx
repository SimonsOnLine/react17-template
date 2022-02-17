import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { IStoreState } from './store/shared'
import Home from './views/Home'

const a="aaa";

const App = () => {
  const global = useSelector((state: IStoreState) => ({
    ...state.global
  }))
  const dispatch = useDispatch()
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
