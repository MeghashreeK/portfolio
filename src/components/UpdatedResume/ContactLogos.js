import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const ContactLogos = () => {
  return (
    <div className="hidden md:flex flex-col items-center fixed bottom-0 left-10 z-50">
      <ul className="flex flex-col gap-6 mb-6">
        <li>
          <a
            href="https://github.com/MeghashreeK"
            target="_blank"
            rel="noreferrer"
            className="text-[#8892b0] hover:text-[#64FFCF] transition duration-300"
          >
            <GitHubIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/meghashree-kunder-017166288/"
            target="_blank"
            rel="noreferrer"
            className="text-[#8892b0] hover:text-[#64FFCF] transition duration-300"
          >
            <LinkedInIcon fontSize="medium" />
          </a>
        </li>
        <li>
          <a
            href="mailto:kundermeghashree279@gmail.com"
            className="text-[#8892b0] hover:text-[#64FFCF] transition duration-300"
          >
            <EmailIcon fontSize="medium" />
          </a>
        </li>
      </ul>
      <div className="w-[1px] h-24 bg-[#8892b0]" />
    </div>
  );
};

export default ContactLogos;
