import { Link } from "react-router-dom";

import { motion } from "framer-motion"

const JobCard = ({job}) => {
    const {_id,image,name,author,type,quantity,description,deadline}=job||{};

    

return (
      <motion.div   whileHover={{
        scale: 0.9,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
       className="card  bg-base-100 shadow-xl">
      <figure><img src={image} alt="aa" /></figure>
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
        <div className=" mt-2">
          <div className="flex justify-between items-center">
          <Link to={`/cardDetails/${_id}`} className="btn text-white hover:bg-[#013266] bg-[#1376E0]">Details</Link>
          
          </div>
        </div>
      </div>
    </motion.div>
    );
};

export default JobCard;