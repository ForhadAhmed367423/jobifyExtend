import { useLoaderData } from "react-router-dom";
import JobTab from "../Tabs/JobTab";
import { useEffect } from "react";

const AllJobs = () => {
    useEffect(() => {
        document.title= "Jobify | All Jobs";
      }, []);
    const jobs = useLoaderData();

    return (
        <div  className="min-h-screen my-6">
            <h1 className="text-4xl font font-bold text-center mb-4">Our Jobs</h1>
            <div>
    <div className="form-control">
        <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" />
                <button className="btn btn-square">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
        </div>
    </div>
</div>
            <div className=" ">
         <JobTab jobs={jobs}></JobTab>
        </div>
        </div>
    );
};

export default AllJobs;