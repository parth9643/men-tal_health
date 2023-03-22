import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const socialMediaLinks = [
  { href: "https://www.facebook.com", icon: FaFacebook },
  { href: "https://www.twitter.com", icon: FaTwitter },
  { href: "https://www.instagram.com", icon: FaInstagram },
  { href: "https://www.linkedin.com", icon: FaLinkedin }
];

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-400 py-8">
      <div className="container mx-auto flex justify-evenly">
        <div>
          <h3 className="text-lg font-semibold mb-2">Address</h3>
           <a href=""> <p>123 Main St.</p></a>
           <a href=""> <p>Anytown, USA 12345</p></a>
            <a href=""> <p>Phone: 555-555-5555</p></a>
           <a href=""> <p>Email: info@example.com</p></a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Company</h3>
           <a href=""> <p>About</p></a>
           <a href=""> <p>Terms</p></a>
            <a href=""> <p>Privacy</p></a>
           <a href=""> <p>Careers</p></a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Directory</h3>
           <a href=""> <p>Resources</p></a>
           <a href=""> <p>Experts</p></a>
            <a href=""> <p>Collaboration</p></a>
           
        </div>
        
        
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex justify-center">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.href} className="mx-3">
                <link.icon size={24} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
