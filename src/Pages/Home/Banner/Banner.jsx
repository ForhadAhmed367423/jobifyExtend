import { Link } from "react-router-dom";
import banner from "../../../../public/banner.jpg"
const Banner = () => {
    return (
        <div className="mb-4">
            <div className="relative"><img src={banner} alt="" />
            <div className="absolute top-[300px] right-[360px] ">
                <h1 className="text-5xl font text-white font-bold text-center">Find the career you deserve</h1>
                <p className="text-base font text-white mt-3 text-center">Your job search starts and ends with us.</p>
                <div className="flex justify-center mt-4">
                <Link to={'/alljob'} className="btn btn-wide bg-[#1E83F0] btn-outline border-[#1E83F0] hover:bg-transparent hover:border-[#1E83F0] text-white ">See our curated Jobs</Link>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Banner;