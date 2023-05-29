import React from "react";
import Image from "next/image";
import HowWeUseInform from "./HowWeUseInform";
import CcpaPolicy from "./CcpaPolicy";
import GdprData from "./GdprData";


function PrivacyPolicy() {
  return (
    <div className="container my-20 flex flex-col justify-start text-start md:text-left items-start gap-8 px-4 md:px-8">
      {/* ===========>image */}
      <div className="w-full h-[250px] xs:h-[310px] sm:h-[350px] md:h-[450px] lg:h-[500px] relative">
        <Image
          src="/Assets/privacy.jpg"
          layout="fill"
          alt="terms and condition image"
        ></Image>
      </div>
      <h1 className="text-indigo-600 w-full flex justify-center items-centertext-center text-[36px] font-bold mb-0 md:mb-6">
        Privacy Policy
      </h1>
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Privacy Policy for WEBME Information Technology Consultancy
        </p>

        <p>
          {" "}
          At WEBME Information Technology Consultancy, accessible from
          webmedigital.com, one of our main priorities is the privacy of our
          visitors. This Privacy Policy document contains types of information
          that is collected and recorded by WEBME Information Technology
          Consultancy and how we use it.
        </p>
        <p>
          If you have additional questions or require more information about our
          Privacy Policy, do not hesitate to contact us.
        </p>
        <p>
          This Privacy Policy applies only to our online activities and is valid
          for visitors to our website with regards to the information that they
          shared and/or collect in WEBME Information Technology Consultancy.
          This policy is not applicable to any information collected offline or
          via channels other than this website. Our Privacy Policy was created
          with the help of the H-supertools Privacy Policy Generator.
        </p>
      </div>
      {/* ==========>Consent */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">Consent:</p>
        <p>
          {" "}
          By using our website, you hereby consent to our Privacy Policy and
          agree to its terms.
        </p>
      </div>

      {/* =========> information we collect */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Information we collect:
        </p>
        <p>
          The personal information that you are asked to provide, and the
          reasons why you are asked to provide it, will be made clear to you at
          the point we ask you to provide your personal information.
        </p>
        <p>
          If you contact us directly, we may receive additional information
          about you such as your name, email address, phone number, the contents
          of the message and/or attachments you may send us, and any other
          information you may choose to provide.
        </p>
        <p>
          When you register for an Account, we may ask for your contact
          information, including items such as name, company name, address,
          email address, and telephone number.
        </p>
      </div>
      {/* ========> how we use your information */}
        <HowWeUseInform/>
      {/* ==========> cookies and web bacons */}
      <div>
        <p className="text-indigo-600 font-bold text-[24px]">
          Cookies and Web Beacons:
        </p>{" "}
        <br />
        <p>
          Like any other website, WEBME Information Technology Consultancy uses
          {"cookies"}. These cookies are used to store information including
          visitors preferences, and the pages on the website that the visitor
          accessed or visited. The information is used to optimize the users
          experience by customizing our web page content based on visitors
          browser type and/or other information.
        </p>
      </div>
      {/* =========>Google DoubleClick DART Cookie */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Google DoubleClick DART Cookie:
        </p>{" "}
        <p className="">
          Google is one of a third-party vendor on our site. It also uses
          cookies, known as DART cookies, to serve ads to our site visitors
          based upon their visit to www.website.com and other sites on the
          internet. However, visitors may choose to decline the use of DART
          cookies by visiting the Google ad and content network Privacy Policy
          at the following URL –{" "}
          <span className="text-indigo-500 cursor-pointer">
            https://policies.google.com/technologies/ads.
          </span>
        </p>
      </div>
      {/* ============>Our Advertising Partners */}
      <div className="flex flex-col gap-3">
        <div className="text-indigo-600 font-bold text-[24px]">
          Our Advertising Partners:
        </div>{" "}
        <div className="">
          Some of advertisers on our site may use cookies and web beacons. Our
          advertising partners are listed below. Each of our advertising
          partners has their own Privacy Policy for their policies on user data.
          For easier access, we hyperlinked to their Privacy Policies below.
          <br />
          <div className="text-indigo-500 cursor-pointer">
            https://policies.google.com/technologies/ads.
          </div>
        </div>
      </div>
      {/* ========> Advertising Partners Privacy Policies */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Advertising Partners Privacy Policies
        </p>{" "}
        <p className="">
          You may consult this list to find the Privacy Policy for each of the
          advertising partners of WEBME Information Technology Consultancy.
        </p>
        <p>
          Third-party ad servers or ad networks uses technologies like cookies,
          JavaScript, or Web Beacons that are used in their respective
          advertisements and links that appear on WEBME Information Technology
          Consultancy, which are sent directly to users browser. They
          automatically receive your IP address when this occurs. These
          technologies are used to measure the effectiveness of their
          advertising campaigns and/or to personalize the advertising content
          that you see on websites that you visit.
        </p>
        <p>
          Note that WEBME Information Technology Consultancy has no access to or
          control over these cookies that are used by third-party advertisers.
        </p>
      </div>
      {/* ==============>Third Party Privacy Policies */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Third Party Privacy Policies
        </p>{" "}
        <p className="">
          WEBME Information Technology Consultancy&apos;s Privacy Policy does not
          apply to other advertisers or websites. Thus, we are advising you to
          consult the respective Privacy Policies of these third-party ad
          servers for more detailed information. It may include their practices
          and instructions about how to opt-out of certain options.
        </p>
        <p>
          You can choose to disable cookies through your individual browser
          options. To know more detailed information about cookie management
          with specific web browsers, it can be found at the browsers
          respective websites.
        </p>
      </div>

      {/* =============>CCPA Privacy Rights */}
      <CcpaPolicy/>

      {/* ============>GDPR Data Protection Rights */}
        <GdprData/>

      {/* ============> children information */}
      <div className="flex flex-col gap-3">
        <p className="text-indigo-600 font-bold text-[24px]">
          Children&apos;s Information:
        </p>{" "}
        <p className="">
          Another part of our priority is adding protection for children while
          using the internet. We encourage parents and guardians to observe,
          participate in, and/or monitor and guide their online activity.
        </p>
        <p>
          WEBME Information Technology Consultancy does not knowingly collect
          any Personal Identifiable Information from children under the age of
          13. If you think that your child provided this kind of information on
          our website, we strongly encourage you to contact us immediately and
          we will do our best efforts to promptly remove such information from
          our records.
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
