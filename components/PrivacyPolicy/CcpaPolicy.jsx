import React from "react";

function CcpaPolicy() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        CCPA Privacy Rights (Do Not Sell My Personal Information):
      </p>{" "}
      <span className="">
        Under the CCPA, among other rights, California consumers have the right
        to:
      </span>
      <ul className="list-disc list-inside ml-8">
        {PrivacyRight.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

const PrivacyRight = [
  "Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.",
  "Request that a business delete any personal data about the consumer that a business has collected.",
  "Request that a business that sells a consumer's personal data, not sell the consumer's personal data.",
  "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
];

export default CcpaPolicy;
