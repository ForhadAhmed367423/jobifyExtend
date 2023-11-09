import { Link } from "react-router-dom";

const AppliedCard = ({job}) => {
    return (
        <div>
            
          <div className="mt-5 lg:grid lg:grid-cols-3 md:grid-cols-1 lg:gap-10 md:gap-4">
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-xl font-bold font">Job name: {job.name}</h2>
    <p className="font">Client email: <span className="link link-hover">{job.email}</span></p>
    <p className="font">client Resume: <Link className="link link-hover">{job.link}</Link></p>
  </div>
</div>
        </div>
        </div>
    );
};

export default AppliedCard;