import { useLoaderData } from "react-router-dom";
import JobTab from "../Tabs/JobTab";
import { useEffect } from "react";

const AllJobs = () => {
    useEffect(() => {
        document.title= "Jobify | All Jobs";
      }, []);
    const jobs = useLoaderData();

    return (
        <div className="min-h-screen my-6">
            <h1 className="text-4xl font font-bold text-center mb-4">Our Jobs</h1>
         <JobTab jobs={jobs}></JobTab>
        </div>
    );
};

export default AllJobs;