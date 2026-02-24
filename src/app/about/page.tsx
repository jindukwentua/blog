"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const roles = [
  "Data Scientist",
  "Data Engineer",
  "Analytics Engineer",
  "Cloud Analytics Specialist",
  "ML Engineer",
];

export default function About() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    if (typing) {
      if (typed.length < roles[roleIndex].length) {
        timeout = setTimeout(() => {
          setTyped(roles[roleIndex].slice(0, typed.length + 1));
        }, 60);
      } else {
        timeout = setTimeout(() => setTyping(false), 1000);
      }
    } else {
      timeout = setTimeout(() => {
        setTyped("");
        setTyping(true);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 800);
    }
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typed, typing, roleIndex]);

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header - reuse homepage header for consistency */}
      <header className="border-b border-gray-100 bg-[#1a237e] px-4 py-2 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-white tracking-tight">
            <span className="text-[#42a5f5]">&gt;</span>
            <span className="text-white">Jindu</span>
            <span className="text-[#42a5f5]"> Kwentua</span>
          </span>
        </div>
        <nav className="flex items-center gap-6 text-base">
          <a href="/" className="hover:underline text-white">Home</a>
          <a href="/about" className="hover:underline text-white font-semibold">About</a>
        </nav>
      </header>

      <main className="max-w-2xl mx-auto py-8 px-4">
        <div className="flex flex-col items-center">
          <div className="w-32 h-32 mb-4 flex items-center justify-center overflow-hidden rounded-full border-4 border-white shadow-md bg-white">
            <Image
              src="/profile.jpg"
              alt="Jindu Kwentua"
              width={128}
              height={128}
              className="object-cover w-full h-full"
              priority
            />
          </div>
        </div>
        <div className="max-w-xl mx-auto text-gray-800">
          <h1 className="text-2xl font-bold text-[#1a237e] mb-2">Jindu Kwentua</h1>
          <p className="mb-4">
            Hi, I'm <span className="font-semibold">Jindu Kwentua</span>. I am a 
            <span className="font-semibold text-[#1a237e] transition-all duration-300 min-w-[180px] inline-block">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </p>
          <p className="mb-6">I help fintech, banking, and energy companies turn data into business value. I specialize in predictive modeling, customer segmentation, and building scalable data pipelines. I love making data simple, actionable, and impactful.</p>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1a237e] mb-2">Key Skills</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>Machine Learning (Regression, Classification, Clustering, Forecasting)</li>
              <li>Python, SQL, R, Airflow, Spark</li>
              <li>Cloud: AWS, GCP</li>
              <li>Dashboards: Tableau, PowerBI, Metabase</li>
              <li>ETL, Data Engineering, Feature Engineering</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1a237e] mb-2">Experience</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li><span className="font-semibold">Data Engineer</span>, Asharami Innovations (2024–Now): Built ETL pipelines and ML models for customer insights and retention.</li>
              <li><span className="font-semibold">Senior Data Scientist</span>, Ecobank Nigeria (2022–2024): Led CLV modeling, segmentation, and campaign analytics for banking products.</li>
              <li><span className="font-semibold">Data Scientist</span>, OnePipe (2020–2022): Developed credit scoring and fraud detection systems for fintech clients.</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1a237e] mb-2">Education</h2>
            <ul className="list-disc ml-6 space-y-1">
              <li>B.Sc Industrial Mathematics, University of Lagos</li>
              <li>Diploma in Information Technology</li>
            </ul>
          </div>

          <div className="mb-6">
            <h2 className="text-lg font-semibold text-[#1a237e] mb-2">Contact</h2>
            <div className="flex gap-6 items-center ml-2 mt-2">
              <a href="mailto:kwentuajindu@gmail.com" title="Email" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#EA4335"/>
                  <path d="M6 8l6 5 6-5" stroke="#fff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <rect x="6" y="8" width="12" height="8" rx="2" fill="#fff"/>
                  <path d="M6 8l6 5 6-5" stroke="#EA4335" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/jindukwentua/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#0A66C2"/>
                  <path d="M7.5 8.5v7" stroke="#fff" strokeWidth="1.5" strokeLinecap="round"/>
                  <circle cx="7.5" cy="6.5" r="1" fill="#fff"/>
                  <path d="M10.5 11.5v4h2v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2h2v-4c0-1.1-.9-2-2-2s-2 .9-2 2z" stroke="#fff" strokeWidth="1.5" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="https://twitter.com/jindukwentua" title="Twitter" target="_blank" rel="noopener noreferrer">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="24" height="24" rx="4" fill="#1DA1F2"/>
                  <path d="M19 7.5a6.5 6.5 0 01-1.89.52A3.28 3.28 0 0018.5 6a6.56 6.56 0 01-2.08.8A3.28 3.28 0 0012 9.5c0 .26.03.52.08.76A9.32 9.32 0 015 7.1a3.28 3.28 0 001.01 4.37c-.28-.01-.54-.08-.77-.2v.02c0 1.54 1.1 2.83 2.57 3.12-.27.07-.56.1-.85.04.24.75.93 1.3 1.75 1.32A6.6 6.6 0 015 17.5c.41 0 .81-.02 1.2-.07A9.29 9.29 0 0012 19c5.52 0 8.54-4.57 8.54-8.54 0-.13 0-.26-.01-.39A6.1 6.1 0 0021 8.5a6.36 6.36 0 01-1.82.5z" fill="#fff"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
