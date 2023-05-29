import React from "react";

function ApprovedOrganization() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        Approved organizations may hyperlink to our Website as follows:
      </p>
      <ul className="list-disc list-inside md:ml-8 ml-4">
        {ApprovedOrganizations.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

const ApprovedOrganizations = [
  "By use of our corporate name; or",
  "By use of the uniform resource locator being linked to; or",
  "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.",
  "No use of WEBME Information Technology Consultancy's logo or other artwork will be allowed for linking absent a trademark license agreement.",
];

export default ApprovedOrganization;
