 import logo from"../assets/logo.png";
 import { FaLinkedin } from "react-icons/fa";
 import { FaGithub } from "react-icons/fa";
//  import { FaSquareXTwitter } from "react-icons/fa";
 import { FaInstagram } from "react-icons/fa";

 const Navbar = () => {
  return <nav className="bg-black mx-10 mb-3 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
    <img src={logo} alt="logo" className="w-40 h-auto " />
    </div>
    <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <FaLinkedin/>
        <FaGithub/>
        <FaInstagram/>
    </div>
  </nav>
}

export default Navbar
