import { Link } from "react-router-dom";

const AppliedCard = ({jobs}) => {
    return (
        <div className="mt-5">
            <h1 className=" font text-center text-3xl font-boldv  mb-4">Your applied Jobs</h1>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="text-xl font-bold font">Job name: {jobs.name}</h2>
    <p className="font">Client email: <span className="link link-hover">{jobs.email}</span></p>
    <p className="font">client Resume: <Link className="link link-hover">{jobs.link}</Link></p>
  </div>
</div>
        </div>
    );
};

export default AppliedCard;