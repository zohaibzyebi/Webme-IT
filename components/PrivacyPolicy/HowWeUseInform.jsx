import React from "react";

function HowWeUseInform() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        How we use your information:
      </p>
      <p>We use the information we collect in various ways, including to:</p>
      <ul className="list-disc list-inside ml-8">
        {HowUseInformatiom.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>

      <p>
        WEBME Information Technology Consultancy follows a standard procedure of
        using log files. These files log visitors when they visit websites. All
        hosting companies do this and a part of hosting services analytics. The
        information collected by log files include internet protocol (IP)
        addresses, browser type, Internet Service Provider (ISP), date and time
        stamp, referring/exit pages, and possibly the number of clicks. These
        are not linked to any information that is personally identifiable. The
        purpose of the information is for analyzing trends, administering the
        site, tracking users movement on the website, and gathering demographic
        information.
      </p>
    </div>
  );
}

const HowUseInformatiom = [
  "Provide, operate, and maintain our website",
  "Improve, personalize, and expand our website",
  "Understand and analyze how you use our website",
  "Develop new products, services, features, and functionality",
  "Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes",
  "Send you emails",
  "Find and prevent fraud",
  "Log Files",
];

export default HowWeUseInform;
