import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarLayout from './layouts/NavbarLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route> 
        </Routes>
      </BrowserRouter>
      {/* <Navbar /> */}
      {/* <!-- Hero --> */}
      {/* <Hero title = "Become a React Dev" subtitle = "Find the react job that fits your skill set" /> */}

      {/* <!-- Developers and Employers --> */}
      {/* <HomeCards /> */}

      {/* <!-- Browse Jobs --> */}
      {/* <JobListings /> */}

      {/* View All Jobs */}
      {/* <ViewAllJobs /> */}

    </>
  )
}

export default App