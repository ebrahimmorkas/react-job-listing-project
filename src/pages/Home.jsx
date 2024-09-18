import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import HomeCards from "../components/HomeCards"
import JobListings from '../components/JobListings'
import ViewAllJobs from '../components/ViewAllJobs'

function Home() {
  return (
    <>
    {/* <!-- Hero --> */}
    <Hero title = "Become a React Dev" subtitle = "Find the react job that fits your skill set" />

    {/* <!-- Developers and Employers --> */}
    <HomeCards />

    {/* <!-- Browse Jobs --> */}
    <JobListings />

    {/* View All Jobs */}
    <ViewAllJobs />

    </>
  )
}

export default Home