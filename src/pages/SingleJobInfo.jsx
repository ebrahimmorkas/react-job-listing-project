import React, { useState, useEffect } from 'react';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Spinners from '../components/Spinners'
import { toast } from 'react-toastify';

function SingleJobInfo({deleteJob}) {
    const [job, setJob] = useState(null); // Initialize with null to handle loading state
    const [loading, setLoading] = useState(true)
    const { id } = useParams();
    const navigate = useNavigate();

    const deletejob = (jobId) => {
        console.log(`from com ${jobId}`)
        deleteJob(jobId)
        toast.success("job deleted successfully");
        navigate('/jobs')
    }

    useEffect(() => {
        const fetchJob = async () => {
            try {
                const res = await fetch(`http://localhost:8000/jobs/${id}`);
                if (!res.ok) {
                    throw new Error('Failed to fetch job data');
                }
                const data = await res.json();
                setJob(data); // Update the job state with fetched data
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
              setLoading(false)
            }
        };
        fetchJob();
    }, [id]);

    if (!job) {
        return <div>Loading...</div>; // Loading state while fetching data
    }

    // Destructure the company object from job
    const { company } = job;
    const { name, description, contactEmail, contactPhone } = company;

    // {loading ? <Spinners loading={loading} /> : setLoading(false)}
    return (
        <>
            <section>
                <div className="container m-auto py-6 px-6">
                    <Link
                        to="/jobs"
                        className="text-indigo-500 hover:text-indigo-600 flex items-center"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Job Listings
                    </Link>
                </div>
            </section>

            <section className="bg-indigo-50">
                <div className="container m-auto py-10 px-6">
                    <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
                        <main>
                            <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                                <div className="text-gray-500 mb-4">{job.type}</div>
                                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                                <div className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start">
                                    <FaMapMarker className='txt-orange mr-1' />
                                    <p className="text-orange-700">{job.location}</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-indigo-800 text-lg font-bold mb-6">
                                    Job Description
                                </h3>
                                <p className="mb-4">{job.description}</p>
                                <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>
                                <p className="mb-4">{`${job.salary} / Year`}</p>
                            </div>
                        </main>

                        <aside>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                                <h2 className="text-2xl">{name}</h2> {/* Render company name */}
                                <p className="my-2">{description}</p> {/* Render company description */}
                                <hr className="my-4" />
                                <h3 className="text-xl">Contact Email:</h3>
                                <p className="my-2 bg-indigo-100 p-2 font-bold">{contactEmail}</p> {/* Render contact email */}
                                <h3 className="text-xl">Contact Phone:</h3>
                                <p className="my-2 bg-indigo-100 p-2 font-bold">{contactPhone}</p> {/* Render contact phone */}
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                                <Link
                                    to="/add-job"
                                    className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Edit Job
                                </Link>
                                <button onClick={() => {deletejob(job.id)}}
                                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                                >
                                    Delete Job
                                </button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SingleJobInfo;
