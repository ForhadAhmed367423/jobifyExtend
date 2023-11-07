import { useEffect } from "react";
import {  useLoaderData } from "react-router-dom";

const CardDetails = () => {
    const card = useLoaderData();
    useEffect(()=>{
        document.title="Jobify | Card Details"
    },[])
    const {image,name,author,type,quantity,description,deadline}= card||{};
    console.log(card)
    return (
        <div className="card max-w-5xl mx-auto  bg-base-100 shadow-xl container p-5 my-10">
      <figure><img className="w-full h-[450px]" src={image} alt={"abc"} /></figure>
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
        </div>
        <button className="btn btn-block font bg-[#1376E0] text-white hover:bg-[#1376E0]">Apply Now</button>
      </div>
    </div>
    

    );
};

export default CardDetails;