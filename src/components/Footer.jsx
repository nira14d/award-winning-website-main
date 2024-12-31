import { FaSquareGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";


const socialLinks = [
  
  { href: "https://github.com/nira14d", icon: <FaSquareGithub /> },
  { href: "https://x.com/ilm_niraj?t=6Au2eASzMJYLLfbCspaFag&s=09", icon:<FaSquareXTwitter /> },



];

const Footer = () => {
  return (
    <footer className="w-screen bg-[#5542ff] py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
      

        <div className="flex justify-center gap-4  md:justify-start">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <a
          href="#privacy-policy"
          className="text-center text-sm font-light hover:underline md:text-right"
        >
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
