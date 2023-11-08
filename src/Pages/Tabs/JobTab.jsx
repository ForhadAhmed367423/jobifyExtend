import { useState } from "react";
import JobCard from "../Home/JobCard/JobCard";


const JobTab = ({ jobs }) => {
  const [remaing,setRemainig]=useState(jobs);
    return (
      <div className="grid grid-cols-3 gap-14 container mx-auto">
        {
          remaing.map(
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