import { useState } from "react";
import JobCard from "../Home/JobCard/JobCard";


const JobTab = ({ jobs }) => {
  const [remaing,setRemainig]=useState(jobs);
    return (
      <div className="grid lg:grid-cols-3 md:grid-cols-1 md:gap-4 lg:gap-14 container mx-auto">
        {
          remaing?.map(
            (job=> <JobCard
              key={job._id}
              job={job}
              remaing={remaing}
              setRemainig={setRemainig}
              >   
              </JobCard>)
          )
        }
      </div>
    );
};

export default JobTab;