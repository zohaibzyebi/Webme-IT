import React from "react";

function YouMustNot() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">You must not:</p>
      <ul className="list-disc list-inside md:ml-8 ml-4">
        {MustNot.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <p>
        Parts of this website offer an opportunity for users to post and
        exchange opinions and information in certain areas of the website. WEBME
        Information Technology Consultancy does not filter, edit, publish or
        review Comments prior to their presence on the website. Comments do not
        reflect the views and opinions of WEBME Information Technology
        Consultancy,its agents and/or affiliates. Comments reflect the views and
        opinions of the person who post their views and opinions. To the extent
        permitted by applicable laws, WEBME Information Technology Consultancy
        shall not be liable for the Comments or for any liability, damages or
        expenses caused and/or suffered as a result of any use of and/or posting
        of and/or appearance of the Comments on this website.
      </p>
      <p>
        WEBME Information Technology Consultancy reserves the right to monitor
        all Comments and to remove any Comments which can be considered
        inappropriate, offensive or causes breach of these Terms and Conditions.
      </p>
    </div>
  );
}

const MustNot =  [
    "Republish material from WEBME Information Technology Consultancy.",
    "Sell, rent or sub-license material from WEBME Information Technology Consultancy.",
    "Reproduce, duplicate or copy material from WEBME Information Technology Consultancy.",
    "Redistribute content from WEBME Information Technology Consultancy.",
    "This Agreement shall begin on the date hereof. Our Terms and Conditions were created with the help of the H-supertools Terms And Conditions Generator.",
  ]


export default YouMustNot;
