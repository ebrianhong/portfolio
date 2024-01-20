import React from "react";
import JobPage from "./Job";
import { JobProps } from "../interfaces/interfaces";
import { BsFillPersonLinesFill } from "react-icons/bs";

const jobs: JobProps[] = [
  {
    company: "LinkedIn",
    startDate: "sep 2022",
    endDate: "nov 2023",
    role: "UI Frontend Engineer",
    description: [
      "Front-end development (Ember.js, React, TypeScript) - developed and maintained client-side features for the Online Jobs team, enhancing the job posting experience for recruiters and businesses seeking potential candidates for hire",
      "Generative AI - integrated AI-generated job descriptions on the job-posting page, dramatically reducing the time and effort expended by businesses while posting job listings",
      "GraphQL migration - improved developer experience by contributing to GraphQL migration, fostering agility and collaboration with a more intuitive API",
      "Testing - ensured code quality and stability through comprehensive unit and integration testing using the Ember.js testing suite (based on QUnit)",
      "Accessibility - enhanced user experience to be more inclusive through the use of assistive technology",
    ],
  },
  {
    company: "Age of Learning",
    startDate: "aug 2018",
    endDate: "aug 2022",
    role: "Software Engineer II",
    description: [
      "Front-end development (lit-HTML based framework) - worked on core products such as ABCmouse, ABCmouse.jp, Adventure Academy, and ReadingIQ with some exposure to PHP backend",
      "Marketing - increased opportunities for product growth by routinely conducting A/B testing, integrating iTunes/Amazon/Paypal IAP (In-App Purchase) payment methods, and updating design/legal copies",
      "Internal Tools - championed team collaboration by developing easily accessible internal tools used to create and monitor surveys, A/B testing, and ad campaigns",
      "Web Performance - improved Google Lighthouse website performance scores to 90+ by hosting modern image formats (webp) over Cloudfront CDN (Content Delivery Network) and lazy-loading them on the client side",
    ],
  },
  {
    company: "Radial3D",
    startDate: "jul 2018",
    endDate: "aug 2023",
    role: "Software Engineering Intern",
    description: [
      "Front-end Development (Vue.js) - spearheaded the early development phase in coordination with the CTO",
      "Testing - heightened reliability of code by writing and maintaining tests using Mocha/Chai",
    ],
  },
];

const Experience = () => {
  return (
    <div
      id="experience"
      className="flex w-full flex-col items-center bg-[#cfcfcf] text-[#000000]"
    >
      <div className="mb-20 flex flex-col items-center px-5 sm:max-w-[800px] sm:px-16">
        <h2 className="my-20 self-start text-2xl sm:text-3xl lg:text-4xl">
          Professional Experience
        </h2>
        <div>
          {jobs.map((job) => {
            return <JobPage key={job.company} {...job}></JobPage>;
          })}
        </div>
        <a
          href="/Resume_Hong_Brian.pdf"
          className="flex items-center justify-end self-end duration-300 hover:scale-110 hover:text-[#0077b5]"
          target="_blank"
          rel="noreferrer"
        >
          <BsFillPersonLinesFill size={30} className="mr-3" />
          Download my resume
        </a>
      </div>
    </div>
  );
};

export default Experience;
