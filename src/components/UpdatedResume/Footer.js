import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

const Footer=()=>{
    return(
        <div className="w-[100%] flex flex-col justify-center items-center px-4">
             <div className="flex md:hidden  items-center ">
                  <ul className="flex flex gap-6 mb-6">
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
                </div>
                    <p  className="text-[#8892b0] text-center text-[12px] font-mono pb-4">Designed by Brittany Chiang & Built by Meghashree Kunder</p>

        </div>
    )
}

export default Footer;