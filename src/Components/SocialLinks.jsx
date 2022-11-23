import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
   const links = [
      {
         id: 1,
         child: (
            <>
               LinkedIn <FaLinkedin size={30} />
            </>
         ),
         href: "https://www.linkedin.com/in/aditya-bhatt-89b001153/",
         style: "rounded-tr-md",
         color: 'bg-gray-800'
      },
      {
         id: 2,
         child: (
            <>
               GitHub <FaGithub size={30} />
            </>
         ),
         href: "https://github.com/ad1tyabhatt",
         color:'bg-black'
      },
      {
         id: 3,
         child: (
            <>
               Mail <HiOutlineMail size={30} />
            </>
         ),
         href: "mailto:foo@gmail.com",
         style: "rounded-br-md",
         color:'bg-blue-500'
      },
   ];
   return (
      <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
         <ul>
            {links.map(({ id, child, href,color }) => (
               <li
                  key={id}
                  className={`
                     "flex justify-between items-center w-40 h-14 px-4 ml-[-100px] bg-gray-500 hover:ml-[-10px] hover:{color} hover:rounded-md duration-200 m-1 ${color} pt-3`
                  }
               >
                  <a
                     href={href}
                     className="flex justify-between items-center w-full text-white"
                  >
                     <>{child}</>
                  </a>
               </li>
            ))}
         </ul>
      </div>
   );
};

export default SocialLinks;
