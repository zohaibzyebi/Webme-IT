import React from "react";
import Image from "next/image";
import YouMustNot from "./YouMustNot";
import WarrentAndRepresent from "./WarrentAndRepresent";
import HyperLink from "./HyperLink";
import YouMayConsider from "./YouMayConsider";
import ApprovedOrganization from "./ApprovedOrganization";
import Disclaimer from "./Disclaimer";

function TermsConditions() {
  return (
    <div className="container my-20 flex flex-col justify-start text-start md:text-left items-start gap-8 px-4 md:px-8">
      {/* ===========>image */}
      <div className="w-full h-[250px] xs:h-[310px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative">
        <Image
          src="/Assets/condition.jpg"
          layout="fill"
          alt="terms and condition image"
        ></Image>
      </div>
      <h1 className="text-indigo-600 w-full flex justify-center items-centertext-center text-[36px] text-center font-bold mb-0 md:mb-6 leading-10 md:leading-none">
        Terms and Conditions
      </h1>
      <div className="flex flex-col gap-3">
        <p className="w-full">
          Welcome to WEBME Information Technology Consultancy!
        </p>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of WEBME Information Technology Consultancy&apos;s Website,
          located at
          <span className="text-indigo-500 cursor-pointer">
            https://webmedigital.com.
          </span>
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use WEBME Information Technology
          Consultancy if you do not agree to take all of the terms and
          conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: {"Client"}
          ,{"You"} and {"Your"} refers to you, the person log on this website
          and compliant to the Company’s terms and conditions. {"The Company"},
          {"Ourselves"}, {"We"}, {"Our"} and {"Us"}, refers to our Company.{" "}
          {"Party"},{"Parties"}, or {"Us"}, refers to both the Client and
          ourselves. All terms refer to the offer, acceptance and consideration
          of payment necessary to undertake the process of our assistance to the
          Client in the most appropriate manner for the express purpose of
          meeting the Client’s needs in respect of provision of the Company’s
          stated services, in accordance with and subject to, prevailing law of
          Netherlands. Any use of the above terminology or other words in the
          singular, plural, capitalization and/or he/she or they, are taken as
          interchangeable and therefore as referring to same.
        </p>
      </div>
      {/* =========> cookies */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">Cookies:</p>
        <p>
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user’s
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
      </div>
      {/* =========> License */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">License:</p>
        <p>
          Unless otherwise stated, WEBME Information Technology Consultancy
          and/or its licensors own the intellectual property rights for all
          material on WEBME Information Technology Consultancy. All intellectual
          property rights are reserved. You may access this from WEBME
          Information Technology Consultancy for your own personal use subjected
          to restrictions set in these terms and conditions.
        </p>
      </div>
      {/* ===========> you must not */}
      <YouMustNot />
      {/* ============>You warrant and represent that: */}
      <WarrentAndRepresent />
      {/* ============> hyperlink to our content */}
      <HyperLink />
      {/* ==============> */}
      <YouMayConsider />

      {/* =======>Approved organizations */}
      <ApprovedOrganization />
      {/* =======> i frames */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">iFrames:</p>
        <p>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>
      </div>
      {/* ========>content Liability */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Content Liability:
        </p>
        <p>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>
      </div>
      {/* ==========>Your Privacy */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">Your Privacy:</p>
        <p>Please read Privacy Policy.</p>
      </div>

      {/* ==========>Reservation of Rights */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Reservation of Rights:
        </p>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it&apos;s linking policy at any time.
          By continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>
      </div>
      {/* =========Removal of links from our website */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Removal of links from our website:
        </p>

        <p>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>
        <p>
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </p>
      </div>
      {/* ==========>Disclaimer */}
      <Disclaimer />
    </div>
  );
}

export default TermsConditions;
