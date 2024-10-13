

import React, { useEffect, useState } from 'react'

export const HebrewTyping = () => {
 const [htmlContent, setHtmlContent] = useState("");

 useEffect(() => {
   // Load the external HTML file
   fetch("/improved-purple-binary-hebrew-demo.html")
     .then((response) => response.text())
     .then((data) => {
       setHtmlContent(data);
     });

   // Dynamically load the JS file
   const script = document.createElement("script");
   script.src = "/script.js"; // Ensure script.js is in the public folder or use the correct path
   script.async = true;
   document.body.appendChild(script);

   return () => {
     document.body.removeChild(script);
   };
 }, []);

 return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />;
}
export default HebrewTyping;
