
import React from "react";
import Typewriter from "typewriter-effect";


function Type() {
 return (
   <Typewriter
     options={{
       strings: [
         "Software Developer",
         "Full-Stack Engineer",
         "Machine Learning Researcher",
         "Open Source Contributor",
       ],
       autoStart: true,
       loop: true,
       deleteSpeed: 40,
     }}
   />
 );
}


export default Type;
