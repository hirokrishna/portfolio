import React from 'react';
import { GraduationCap, Briefcase, Heart, Cpu, Calendar, Award } from 'lucide-react';

const MILESTONES = [
  {
    id: 1,
    title: "AI Healthcare Companion (MediMate)",
    subtitle: "Lead Developer / Active Project",
    date: "2026 - Present",
    icon: Heart,
    iconColor: "text-red-500 bg-red-50 border-red-100",
    description: "Developing an AI-powered medical chat and helper application built with Next.js. Engineered conversational API routes, implemented local browser audio helper functions, and integrated a Progressive Web App (PWA) service worker to enable offline availability.",
    tags: ["Next.js", "React", "AI Integration", "PWA", "Web Audio API"]
  },
  {
    id: 2,
    title: "Advanced Software Engineering Virtual Experience",
    subtitle: "JPMorgan Chase & Co. (Forage)",
    date: "Feb 2026",
    icon: Briefcase,
    iconColor: "text-blue-500 bg-blue-50 border-blue-100",
    description: "Engineered the 'Midas Core' real-time transaction processing system using Spring Boot and Apache Kafka. Structured JPA/H2 schema for persistence, integrated third-party Incentive REST API for reward calculations, and exposed custom endpoints.",
    tags: ["Java", "Spring Boot", "Apache Kafka", "Spring Data JPA", "REST APIs", "H2 Database"]
  },
  {
    id: 3,
    title: "B.Tech in Information Technology",
    subtitle: "Indira Gandhi Engineering College (IGEC), Sagar",
    date: "2024 - Present (2nd Year)",
    icon: GraduationCap,
    iconColor: "text-emerald-500 bg-emerald-50 border-emerald-100",
    description: "Currently pursuing B.Tech in Information Technology, affiliated with RGPV Bhopal. Actively involved in campus technical clubs, collaborating with peers on web development projects, and mentoring juniors in Python and basic data structures.",
    tags: ["RGPV", "IT Core", "DSA", "Problem Solving", "Object-Oriented Programming"]
  },
  {
    id: 4,
    title: "AI Agents & Advanced Python Certifications",
    subtitle: "Specialized Upskilling Courses",
    date: "2025 - 2026",
    icon: Cpu,
    iconColor: "text-purple-500 bg-purple-50 border-purple-100",
    description: "Acquired certifications in AI and automated workflows. Completed the Google x Kaggle AI Agents Course, JPMorgan Software Engineering program, AI & Python Development Course, and the be10x AI Tools Workshop.",
    tags: ["AI Agents", "Kaggle", "LLM APIs", "Python Development", "Automation"]
  },
  {
    id: 5,
    title: "Secondary & Higher Secondary Education",
    subtitle: "Paras Vidhya Vihar, Tili Sagar",
    date: "Completed",
    icon: Award,
    iconColor: "text-amber-500 bg-amber-50 border-amber-100",
    description: "Completed foundational schooling in Sagar, Madhya Pradesh with a focus on Physics, Chemistry, Mathematics, and Computer Science.",
    tags: ["Science & Math", "Computer Science Foundations", "Sagar"]
  }
];

const ExperienceTimeline = () => {
  return (
    <section id="experience-timeline" className="py-24 px-4 bg-gray-50 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-5xl">
        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 animate-fade-in-up">
            Milestones & Learning Journey
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            A chronological timeline of my academic foundations, professional simulations, and core project work.
          </p>
        </div>

        {/* TIMELINE TRACK */}
        <div className="relative border-l-2 border-blue-200 md:ml-32 ml-4 space-y-12">
          {MILESTONES.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div key={item.id} className="relative group pl-8 md:pl-12 transition-all">
                {/* ICON MARKER */}
                <span className={`absolute top-0 md:left-0 -left-[21px] transform -translate-y-1/4 w-10 h-10 rounded-full flex items-center justify-center border-2 shadow-md z-10 transition-transform duration-300 group-hover:scale-110 ${item.iconColor}`}>
                  <IconComponent className="w-5 h-5" />
                </span>

                {/* DATE SLIDER (Desktop side-tag) */}
                <div className="hidden md:block absolute left-[-150px] top-1.5 w-32 text-right">
                  <span className="text-sm font-bold text-blue-600 font-mono tracking-wider">
                    {item.date}
                  </span>
                </div>

                {/* CARD CONTENT */}
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 group-hover:shadow-md group-hover:border-blue-100 transition-all duration-300">
                  {/* Title Bar */}
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-sm font-semibold text-gray-500">
                        {item.subtitle}
                      </p>
                    </div>
                    {/* Date Tag for Mobile */}
                    <div className="md:hidden flex items-center gap-1.5 text-blue-600 text-xs font-bold font-mono bg-blue-50 px-2.5 py-1 rounded-full border border-blue-100">
                      <Calendar className="w-3.5 h-3.5" />
                      {item.date}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Tag Badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-50 text-gray-600 text-xs font-semibold rounded-full border border-gray-100 group-hover:bg-blue-50/50 group-hover:text-blue-700 transition-colors">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
