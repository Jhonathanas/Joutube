import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import { Search } from '@mui/icons-material'

import Feed from './Components/Feed'
import Video from './Components/Video'
import Channel from './Components/Channel'
import SearchFeed from './Components/SearchFeed'
import Napbar from './Components/Napbar'

const App = () => {
  return (
    <BrowserRouter>
      <Box sx={{  backgroundColor: '#000' }}>
        <Napbar/>
        <Routes>
          <Route path='/' exact element={<Feed/>} />
          <Route path='/video/:id' element={<Video />}/>
          <Route path='/channel/:id' element={<Channel />}/>
          <Route path='/searh/:searchTerm' element={<SearchFeed />}/>
        </Routes>
  
      </Box>  
    </BrowserRouter>
  )
}

export default App