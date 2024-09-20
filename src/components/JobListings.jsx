import React, { useState } from 'react'
import jobsData from '../jobs.json'
import JobListing from './JobListing'
import { useEffect } from 'react'
import Spinners from './Spinners'

function JobListings({ isHome = false }) {

    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const res = await fetch('http://localhost:8000/jobs');
                const data = await res.json();
                setJobs(data)
            }
            catch (error) {
                console.log("An error has occured in fetching the data")
            }
            finally {
                setLoading(false)
            }
        }

        fetchJobs();
    }, [])

    // const { jobs } = jobsData
    // const recentJobs = jobs.slice(0, 3)
    const recentJobs = isHome ? jobs.slice(0, 3) : jobs
    return (
        <section className="bg-blue-50 px-4 py-10">
            <div className="container-xl lg:container m-auto">
                <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
                    {isHome ? 'Recents Jobs' : 'Browse Jobs'}
                </h2>
                {loading ? <Spinners loading={loading} /> : (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* <!-- Job Listing 1 --> */}
                        {recentJobs.map((job) => (
                            <JobListing key={recentJobs.id} job={job} />
                        ))}
                    </div>
                )}
            </div>
        </section>
    )
}

export default JobListings