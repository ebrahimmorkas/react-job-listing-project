import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarLayout from './layouts/NavbarLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobInfo from './pages/SingleJobInfo'
import AddJob from './pages/AddJob'

function App() {

  const addJob = (newJob) => {
    console.log(newJob)
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path='jobs/:id' element={<SingleJobInfo />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/add-job" element={<AddJob addJob={addJob}/>} /> 
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