import React from "react";

function GdprData() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">
        GDPR Data Protection Rights:
      </p>{" "}
      <span className="">
        We would like to make sure you are fully aware of all of your data
        protection rights. Every user is entitled to the following:
      </span>
      <ul className="list-disc list-inside ml-8">
        {gdpr.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
    </div>
  );
}

const gdpr = [
  "The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.",
  "The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the information you believe is incomplete.",
  "The right to erasure – You have the right to request that we erase your personal data, under certain conditions.",
  "The right to restrict processing – You have the right to request that we restrict the processing of your personal data, under certain conditions.",
  "The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.",
  "The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.",
  "If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.",
];

export default GdprData;
