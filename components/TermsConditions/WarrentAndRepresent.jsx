import React from "react";

function WarrentAndRepresent() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        {" "}
        You warrant and represent that:
      </p>

      <ul className="list-disc list-inside md:ml-8 ml-4">
        {WarrantAndRepresent.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}


const WarrantAndRepresent = [
  "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
  "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
  "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
  "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
  "You hereby grant WEBME Information Technology Consultancy a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.",
];

export default WarrentAndRepresent;
