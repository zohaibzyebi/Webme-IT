import Head from "next/head";
import React from "react";
import Payment from "../../components/Service/Payment";
import { featuredPortfolio } from "../../data/services";

const Service = ({ service }) => {
  if (!service) return <h1>No service found</h1>;

  return (
    <div className="container my-5 mb-10 px-4 md:px-8">
      <Head>
        <title>{service.title}</title>
      </Head>
      <img src={service.img} className="w-full h-[200px] sm:h-[300px] md:h-[400px] mx-auto" alt="" />
      <div className="flex flex-col gap-6">
        <h1 className="title pt-6">{service.title}</h1>
        {service.listData && (
          <>
            <p>{service.listData.listHeading}</p>
            <ul className="list-decimal list-inside ml-8">
              {service.listData.list.map((item, index) => {
                return <li key={index}>{item}</li>;
              })}
            </ul>
          </>
        )}
        <p className="-mt-8 md:-mt-4">{service.description.subMain}</p>
        {service.description.subMain2 && <p>{service.description.subMain2}</p>}
        {service.description.sub &&
          service.description.sub.map((item, index) => {
            return (
              <div key={index} className="flex flex-col">
                <p className="text-indigo-600 font-bold text-[24px]">
                  {item.heading}
                </p>
                <p>{item.description}</p>
              </div>
            );
          })}
      </div>
      <Payment service={service} />
    </div>
  );
};

export const getStaticPaths = () => {
  const paths = featuredPortfolio.map((item,index) => `/services/${item.id}`);
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = (context) => {
  console.log(context);
  const currentService = featuredPortfolio.find(
    (item) => item.id === +context.params.id
  );

  return {
    props: { service: currentService || null },
  };
};

export default Service;
