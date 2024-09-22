import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import NavbarLayout from './layouts/NavbarLayout'
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage'
import SingleJobInfo from './pages/SingleJobInfo'
import AddJob from './pages/AddJob'
import UpdateJobPage from './pages/UpdateJobPage'

function App() {

  const addJob = async (newJob) => {
    const res = await fetch('http://localhost:8000/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'applications/json',
      },
      body: JSON.stringify(newJob),
    });
    return;
  }

  const deleteJob = async (jobId) => {
    console.log(`main ${jobId}`)
    const res = await fetch(`http://localhost:8000/jobs/${jobId}`, {
      method: 'DELETE',
    })
    return;
  }

  const updateJob = (jobId) => {}

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavbarLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<JobsPage />} />
            <Route path='jobs/:id' element={<SingleJobInfo deleteJob={deleteJob}/>} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="/add-job" element={<AddJob addJob={addJob}/>} /> 
            <Route path='/update-job/:id' element={<UpdateJobPage update={updateJob}/>} />
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