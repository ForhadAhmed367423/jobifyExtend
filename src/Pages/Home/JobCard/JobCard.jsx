import { Link } from "react-router-dom";

const JobCard = ({job}) => {
    const {_id,image,name,author,type,quantity,description,deadline}=job||{};
    return (
      <div className="card  bg-base-100 shadow-xl">
      <figure><img src={image} alt={image.name} /></figure>
      <div className="p-3">
        <div className="flex gap-5 items-center mb-2">
        <h2 className="card-title font">{name}</h2>
        <div className="badge badge-accent badge-outline">{type}</div>
        </div>
        <div className="flex gap-2">
          <p className="font font-bold">Job Posted:</p>
          <p className="font font-medium"> {author}</p>
        </div>
        <div className="flex justify-between mt-2">
          <p className="font font-medium">Post Date: {quantity}</p>
          <p className="font font-medium mb-2">Deadline : {deadline}</p>
        </div>
        <div className="flex text-start font">
          <p>{description}</p>
        </div>
        <div className="card-actions mt-2">
          <Link to={`/cardDetails/${_id}`} className="btn text-white hover:bg-[#1376e0] bg-[#1376E0]">Details</Link>
        </div>
      </div>
    </div>
    );
};

export default JobCard;