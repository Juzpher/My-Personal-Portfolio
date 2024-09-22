import React from "react";
import { Link } from "react-scroll";
import logo from "../../assets/Img/Logo/Logo.png";

const quickLinks = ["Home", "About", "Experience", "Contact"];
const socialLinks = [
  { name: "Github", url: "https://github.com/EijiroNotME" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/juspher-vergara/" },
  { name: "Facebook", url: "https://www.facebook.com/Juspher.VergaraRomano/" },
];

const Footer = () => {
  return (
    <footer className="bg-primary-default py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-2 flex items-center">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="logo" className="w-12 h-12 flex-shrink-0" />
              <div>
                <h2 className="font-work text-xl sm:text-2xl lg:text-3xl capitalize">
                  Looking for a web developer?
                </h2>
                <p className="font-default text-sm font-extralight mt-2">
                  Let's start building the future of your business.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 lg:col-span-2">
            <div>
              <h3 className="font-work text-lg capitalize mb-4">Links</h3>
              <ul className="font-extralight text-sm space-y-2">
                {quickLinks.map((link) => (
                  <li key={link}>
                    <Link
                      to={link.toLowerCase()}
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="cursor-pointer"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-work text-lg capitalize mb-4">Social</h3>
              <ul className="font-extralight text-sm space-y-2">
                {socialLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cursor-pointer"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
