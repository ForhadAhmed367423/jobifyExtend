import { Link } from "react-router-dom";
import gif from "../public/9SKB1aSUCp.gif"
const Eroor = () => {
    return (
        <div className="">
            <img className="max-w-xl mx-auto" src={gif} alt="" />
            <div className="flex justify-center">
            <Link to={'/'} className="btn bg-[#1376e0] hover:bg-[#1376e0] text-white text-center">
                Go back Home
            </Link>
            </div>
            
        </div>
    );
};

export default Eroor;