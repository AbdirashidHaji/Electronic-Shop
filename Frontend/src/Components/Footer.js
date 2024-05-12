import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='bg-slate-200'>
      <div className='container mx-auto p-4 flex justify-center items-center'>
        <p className='text-center font-bold' title="Abdirashid Haji">&copy;Abdirashid Haji 2024</p>
        <div className="ml-4 flex">
          <Link to="" className="mr-2 hover:text-blue-500">
            <FaFacebook size="2em" />
          </Link>
          <Link to="" className="mr-2 hover:text-blue-500">
            <FaTwitter size="2em" />
          </Link>
          <Link to="" className="mr-2 hover:text-blue-500">
            <FaInstagram size="2em" />
          </Link>
          <Link to="" className="mr-2 hover:text-blue-500">
            <FaLinkedin size="2em" />
          </Link>
          <Link to="" className="hover:text-blue-500">
            <FaGithub size="2em" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
