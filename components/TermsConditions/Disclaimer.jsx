import React from "react";

function Disclaimer() {
  return (
    <div className="flex flex-col gap-3">
      <p className="text-indigo-600 font-bold text-[24px]">Disclaimer:</p>
      <p>
        To the maximum extent permitted by applicable law, we exclude all
        representations, warranties and conditions relating to our website and
        the use of this website. Nothing in this disclaimer will:
      </p>
      <ul className="list-disc list-inside md:ml-8 ml-4">
        {DisclaimerData.main.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <ul className="md:ml-16 ml-6">
        {DisclaimerData.sub.map((value, index) => {
          return <li key={index}>{value}</li>;
        })}
      </ul>
      <p>
        As long as the website and the information and services on the website
        are provided free of charge, we will not be liable for any loss or
        damage of any nature.
      </p>
    </div>
  );
}

const DisclaimerData = {
  main: [
    "limit or exclude our or your liability for death or personal injury;",
    "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
    "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
    "exclude any of our or your liabilities that may not be excluded under applicable law.",
    "The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: ",
  ],
  sub: [
    "(a) are subject to the preceding paragraph;",
    "(b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty",
  ],
};

export default Disclaimer;
