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
      "Developed client-side features for the Online Jobs team, enhancing the job posting experience for recruiters and businesses seeking potential candidates for hire",
      "Integrated AI-generated job descriptions on the job-posting page, dramatically reducing the time and effort expended by businesses while posting job listings",
      "Enhanced developer experience with heavy contribution to the team’s migration from legacy API query to GraphQL, fostering agility and collaboration with a more intuitive API",
      "Ensured code quality and stability through comprehensive testing with Ember.js testing suite (based on QUnit)",
      "Heightened user experience and accessibility to be more inclusive through the use of assistive technology",
    ],
  },
  {
    company: "Age of Learning",
    startDate: "aug 2018",
    endDate: "aug 2022",
    role: "Software Engineer II",
    description: [
      "Built and managed the frontend for core products like ABCmouse, ABCmouse.jp, Adventure Academy, and ReadingIQ with some work on the backend (PHP)",
      "Increased opportunities for product growth by routinely conducting A/B testing, integrating iTunes/Amazon/Paypal IAP (In-App Purchase) payment methods, and updating design/legal copies",
      "Optimized team collaboration by developing internal tools for managing surveys, A/B testing, and ad campaigns",
      "Improved Google Lighthouse website performance scores to 90+ by hosting modern image formats (webp) over Cloudfront CDN (Content Delivery Network) and lazy-loading them on the client side",
    ],
  },
  {
    company: "Radial3D",
    startDate: "jul 2018",
    endDate: "aug 2023",
    role: "Software Engineering Intern",
    description: [
      "Spearheaded the early development phase in coordination with the CTO",
      "Protected reliability of code by writing and maintaining tests using Mocha/Chai",
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
