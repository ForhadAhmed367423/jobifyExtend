import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import Swal from "sweetalert2";
import 'font-awesome/css/font-awesome.min.css';
import { AuthContext } from "../../Providers/AuthProvider";

const AddJob = () => {
  const {user}= useContext(AuthContext);
  useEffect(() => {
    document.title= "Jobify | Add Jobs";
  }, []);
    const [rating, setRating] = useState(0);
  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleAddBooks = (event) => {
    event.preventDefault();

        const form = event.target;
        console.log(form);
        const image = form.image.value;
        const name = form.name.value;
        const type = form.type.value;
        const author = form.author.value;
        const quantity = form.quantity.value;
        const deadline = form.deadline.value;
        const salary = form.salary.value;
        const description = form.description.value;
        const userEmail= user.email;

        const jobsData = { image,userEmail, name, author, quantity, description, type,deadline,salary };
        console.log(jobsData);

        fetch("https://jobify-extend-server.vercel.app/jobs",{
        method: "POST",
        headers: {
            "content-type" : "application/json",
        },
        body: JSON.stringify(jobsData),
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            if (data.insertedId) {
                Swal.fire({
                    title: "Success!",
                    text: "Product added successfully.",
                    icon: "success",
                    confirmButtonText: "cool",
                });
            }
        })
        .catch((error) => {
            console.error("There was a problem with the fetch operation:", error);
        });
    };
    return (
        <div>
            <div className="lg:px-[160px] lg:py-[100px] ">
            <div className="p-3">
            <h2 className="lg:text-[60px] text-[40px]  font-medium mb-[10px]">
            Add A Job
            </h2>
            <p className="text-[#000] text-[18px] font-normal mb-[38px]">
            Dolor consectetuer posuere maecenas tempor. <br /> Nec
            eros curae luctus hac elementum penatibus <br /> faucibus
            potenti vestibulum blandit.
            </p>
            </div>
            <div className="bg-[#F6EEE1] rounded-[10px] py-[60px] px-[100px]">
            <form onSubmit={handleAddBooks}>
            <div className="lg:flex gap-[50px] mb-8">
              <div className="mb-[20px]">
                <h6 className="text-[#000] text-[20px] font-normal mb-2">
                  Image
                </h6>
                <input
                  className="rounded-[10px]  w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                  type="url"
                  placeholder="image"
                  name="image"
                />
              </div>

              <div className="mb-[20px]">
                <h6 className="text-[#000] text-[20px] font-normal mb-2 ">
                  Name
                </h6>
                <input
                  className="rounded-[10px]  w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                  type="text"
                  placeholder="name"
                  name="name"
                  required
                />
              </div>
            </div>

            <div className="lg:flex gap-[50px] mb-8">
                <div>
                    <h6 className="text-[#000] text-[20px] font-normal mb-2">
                       Job Category
                    </h6>
                    <select
                    className="rounded-[10px]  w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                    name="type">
                    <option value="remote">Remote</option>
                    <option value="onSite">On-Site</option>
                    <option value="partTime">Part-time</option>
                    <option value="hybrid">Hybrid</option>
                    <option value="fullTime">Full-Time</option>
                    </select>
                </div>
                <div>
                    <h6 className="text-[#000] text-[20px] font-normal mb-2">
                        Author Name
                    </h6>
                    <input
                className="rounded-[10px]  w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                type="text"
                placeholder="Author Name"
                name="author"
              />
                </div>
            </div>
           <div className="lg:flex gap-[50px] mb-8">
           <div className="">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
                Job Posting Date
              </h6>
              <input
                className="rounded-[10px]  w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                type="date"
                name="quantity"
              />
            </div>
            <div className="">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
                Applications deadline
              </h6>
              <input
                className="rounded-[10px] w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                type="date"
                name="deadline"
                required
              />
            </div>
           </div>

           <div className="mb-8">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
              Salary range
              </h6>
              <input
                className="rounded-[10px] w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                placeholder="Salary Range "
                type="number"
                name="salary" 
                required
              />
            </div>
           <div className="mb-8">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
              Email
              </h6>
              <input
                className="rounded-[10px] w-[270px] lg:w-[400px] py-[16px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                placeholder="Salary Range "
                type="email"
                name="email"
                defaultValue={user.email} 
                required
              />
            </div>

            <div className="mb-8 lg:flex items-center gap-2">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
                Rating :
              </h6>
              <Rating
                initialRating={rating}
                emptySymbol={<i className="fa fa-star-o" style={{ fontSize: '20px', color: '#F2B200' }}/>}
                fullSymbol={<i className="fa fa-star" style={{ fontSize: '20px', color: '#F2B200' }}/>}
                onChange={handleRatingChange}
              />
            </div>

            <div className="mb-9">
              <h6 className="text-[#000] text-[20px] font-normal mb-2">
                Short Description
              </h6>
              <input
                className="rounded-[10px] lg:w-[850px] w-[270px] pt-[16px] pb-[100px] px-[16px] border-2 bg-[transparent] border-[#000] text-[#000] outline-none"
                type="text"
                placeholder="Short Description"
                name="description"
              />
            </div>
            <div>
              <button className="px-8 py-4 rounded-[30px] bg-[#1376e0] text-white font-semibold text-[18px]">
                Add Job
              </button>
            </div>
          </form>
        </div>
      </div>
        </div>
    );
};

export default AddJob;