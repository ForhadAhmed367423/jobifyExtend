import { Link } from "react-router-dom";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import Swal from "sweetalert2";

const MyJobsRow = ({jobs,remaing,setRemainig}) => {
    console.log(jobs)
    const {_id}=jobs;

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
        <div className="overflow-x-auto">
  <table className="table">
    <thead>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <th>Name</th>
        <th>Job</th>
        <th>Favorite Color</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask  w-12 h-12">
                <img src={jobs.image} alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{jobs.name}</div>
              <div className="text-sm opacity-50">{jobs.author}</div>
            </div>
          </div>
        </td>
        <td>
          {jobs.name}
          <br/>
          <span className="badge badge-ghost badge-sm">{jobs.type}</span>
        </td>
        <td>start:{jobs.quantity}</td>
        <td>End:{jobs.deadline}</td>
        <th>
        <div className="flex gap-4">
            <Link to={`/updateCard/${_id}`} className="text-2xl text-[#1376e0] hover:text-[#013266]"> <FaEdit></FaEdit> </Link>
            <Link className="text-2xl text-[#1376e0] hover:text-[#013266]" onClick={()=>handleDelete(_id)}><FaDeleteLeft></FaDeleteLeft></Link>
          </div>
        </th>
      </tr>
    </tbody>
    
  </table>
</div>
    );
};

export default MyJobsRow;