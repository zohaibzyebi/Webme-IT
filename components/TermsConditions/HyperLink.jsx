import React from "react";

function HyperLink() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        Hyperlinking to our Content:
      </p>
      <p>
        The following organizations may link to our Website without prior
        written approval:
      </p>
      <ul className="list-disc list-inside md:ml-8 ml-4">
        {HyperlinkData.main.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <ul className="md:ml-16 ml-6">
        {HyperlinkData.sub.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

const HyperlinkData = {
  main: [
    "Government agencies;",
    "Search engines;",
    "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
    "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
    "These organizations may link to our home page, to publications or to other Website information so long as the link:  ",
  ],
  sub: [
    "(a) Is not in any way deceptive; ",
    "(b) Does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and",
    "(c) Fits within the context of the linking party’s site.",
  ],
};

export default HyperLink;
