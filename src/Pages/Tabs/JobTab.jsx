import JobCard from "../Home/JobCard/JobCard";


const JobTab = ({ jobs }) => {
    return (
      <div className="grid grid-cols-3 gap-14 container mx-auto">
        {
          jobs.map(
            (job=> <JobCard
              key={job._id}
              job={job}
              >   
              </JobCard>)
          )
        }
      </div>
    );
};

export default JobTab;