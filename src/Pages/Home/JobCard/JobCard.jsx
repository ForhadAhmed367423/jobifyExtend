import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import { motion } from "framer-motion"
import axios from "axios";
import Swal from "sweetalert2";
const JobCard = ({job,remaing,setRemainig}) => {
    const {_id,image,name,author,type,quantity,description,deadline}=job||{};

    const handleDelete = id => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://jobify-extend-server.vercel.app/jobs/${id}`)
          .then(res=>{
            console.log(res.data)
            if(res.data.deletedCount){
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });
                const remaining = remaing.filter(item=>item._id!==id);
                setRemainig(remaining);
            }
          })
          
        }
      });
    }

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
          <div className="flex gap-4">
            <Link to={`/updateCard/${_id}`} className="text-2xl text-[#1376e0] hover:text-[#013266]"> <FaEdit></FaEdit> </Link>
            <Link className="text-2xl text-[#1376e0] hover:text-[#013266]" onClick={()=>handleDelete(_id)}><FaDeleteLeft></FaDeleteLeft></Link>
          </div>
          </div>
        </div>
      </div>
    </motion.div>
    );
};

export default JobCard;