import { Link } from "react-router-dom";
import logo from "../../../../public/logo.png"
const Footer = () => {
    return (
      <div className="">
        <footer className="footer p-10 bg-[#222B38] text-white ">
  <aside>
    <img  className="mb-4 w-36 h-20" src={logo} alt="" />
    <p className=""><Link to={'/'} className="link link-hover">Jobify Extend</Link><br/>alright reserved &#169;Jobify</p>
  </aside> 
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Remote Jobs</a> 
    <a className="link link-hover">On-site Jobs</a> 
    <a className="link link-hover">Hybrid Jobs</a> 
    <a className="link link-hover">Part-time Jobs</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <header className="footer-title">Legal</header> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
      </div>
    );
};

export default Footer;