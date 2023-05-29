import React from "react";

function YouMayConsider() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        We may consider and approve other link requests from the following types
        of organizations:
      </p>
      <ul className="list-disc list-inside md:ml-8 ml-4">
        {ConsiderAndApprove.main.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <ul className=" md:ml-16 ml-6">
        {ConsiderAndApprove.sub1.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      {/* ========> */}
      <p>These organizations may link to our home page so long as the link:</p>
      <ul className=" md:ml-16 ml-6">
        {ConsiderAndApprove.sub2.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <p>
        If you are one of the organizations listed in paragraph 2 above and are
        interested in linking to our website, you must inform us by sending an
        e-mail to WEBME Information Technology Consultancy. Please include your
        name, your organization name, contact information as well as the URL of
        your site, a list of any URLs from which you intend to link to our
        Website, and a list of the URLs on our site to which you would like to
        link. Wait 2-3 weeks for a response.
      </p>
    </div>
  );
}

const ConsiderAndApprove = {
  main: [
    "commonly-known consumer and/or business information sources;",
    "dot.com community sites;",
    "associations or other groups representing charities;",
    "online directory distributors;",
    "internet portals;",
    "accounting, law and consulting firms; and educational institutions and trade associations.",
    "We will approve link requests from these organizations if we decide that:",
  ],
  sub1: [
    "(a) the link would not make us look unfavorably to ourselves or to our accredited businesses;",
    "(b) the organization does not have any negative records with us;",
    " (c) the benefit to us from the visibility of the hyperlink compensates the absence of WEBME Information Technology Consultancy; and",
    "(d) the link is in the context of general resource information.",
  ],
  sub2: [
    "(a) is not in any way deceptive; ",
    "(b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and",
    "(c) fits within the context of the linking party&apos;s site.",
  ],
};

export default YouMayConsider;
