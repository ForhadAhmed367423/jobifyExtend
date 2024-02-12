import test from "../../../../public/pexels-karolina-grabowska-4491460 1 (1).png"
const Testimonial = () => {
    return (
        <div className="container max-w-4xl mx-auto border rounded-xl mb-10">
            <h1 className="font font-bold text-4xl text-center mt-4">Testimonial</h1>
            <div className=" max-[450px]:flex-col max-[450px]:w-[90%] max-[450px]:mx-auto  lg:flex justify-between  p-10 gap-10 items-center">
                <div className=" lg:w-[50%] ">
                    <img className="" src={test} alt="" />
                </div>
                <div className="lg:w-[50%] ">
                    <h1 className="font text-2xl font-bold lg:mb-4 mt-5">“ I cant stress how important it is to have all of our information in one place . We use asana to capture all of our documant</h1>
                    <p className="font text-base">@Cecilia gomes || (Web developer and web designer) </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;