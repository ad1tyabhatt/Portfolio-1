import React from "react";

const About = () => {
   return (
      <div name="about" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
         <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
            <div className="pb-8">
               <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
            </div>
            <p className="text-xl mt-20">
               I am a highly motivated software developer enthusiast, currently
               working on upgrading my skills in the Full-Stack Software
               development arena. My passion and interest in this field are
               driven by my curiosity and willingness to keep learning and
               create things that can change lives or amaze people.
            </p>
            <br />
            <p className="text-xl">
               I have developed various Full-Stack Applications using MERN
               Stack. I am hands-on in all MERN Stack Technologies like ReactJS,
               NodeJs, ExpressJS, and MongoDB. I did this by reading books and
               official documentation, taking online courses,(and solving
               problem sets in the courses).
            </p>
         </div>
      </div>
   );
};

export default About;
