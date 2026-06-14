import React from 'react';

const LeadershipCommunication = () => {
  return (
    <section id="leadership-communication" className="py-24 px-4 bg-gray-100 text-gray-900 min-h-screen">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-5xl font-extrabold text-center text-blue-600 mb-20 animate-fade-in-up">Leading & Connecting: My Impact</h2>

        <div className="mb-20 bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-left">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Leadership in Action</h3>
          <div className="space-y-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-blue-200">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Project Lead: University Hackathon Team</h4>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Situation:</span> Led a team of 4 students to develop an
                innovative smart city solution within a 48-hour hackathon.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Task:</span> Design and implement a prototype that addresses
                urban traffic congestion using AI and IoT.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Action:</span> Coordinated team roles, managed project
                timeline, facilitated brainstorming sessions, and ensured seamless integration of
                components. Mentored junior members on new technologies.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Result:</span> Our team secured 1st place, praised for our
                innovative approach and functional prototype. I fostered a collaborative environment,
                enhancing team productivity and morale.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-blue-200">
              <h4 className="text-2xl font-semibold text-blue-600 mb-3">Technical Mentor: Coding Club</h4>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Situation:</span> Identified a need for structured guidance
                among new coding club members struggling with DSA concepts.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Task:</span> Develop and deliver weekly workshops on Python
                and Data Structures & Algorithms.
              </p>
              <p className="text-gray-700 mb-2">
                <span className="font-bold">Action:</span> Prepared comprehensive lesson plans, conducted
                interactive coding sessions, and provided one-on-one mentorship, adapting teaching methods
                to individual learning styles.
              </p>
              <p className="text-gray-700">
                <span className="font-bold">Result:</span> Improved understanding and confidence among
                mentees, evidenced by increased participation in coding challenges and positive feedback
                on workshop effectiveness.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-20 bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-right">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">Effective Communication</h3>
          <div className="space-y-8 text-lg text-gray-700">
            <p className="flex items-start">
              <span className="mr-4 text-blue-600 text-3xl">🗣️</span>
              <span className="flex-1">
                <span className="font-bold text-gray-900">Public Speaking & Presentations:</span>
                Regularly present complex technical topics to diverse audiences, from peer groups to
                faculty, ensuring clarity and engagement. (e.g., "Demystifying Docker" workshop).
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-4 text-blue-600 text-3xl">📝</span>
              <span className="flex-1">
                <span className="font-bold text-gray-900">Technical Documentation:</span> Excel at
                creating clear, concise, and comprehensive documentation for software projects, APIs, and
                system architectures, facilitating seamless collaboration.
              </span>
            </p>
            <p className="flex items-start">
              <span className="mr-4 text-blue-600 text-3xl">🤝</span>
              <span className="flex-1">
                <span className="font-bold text-gray-900">Collaborative Communication:</span> Skilled in
                fostering open communication within teams, actively listening, providing constructive
                feedback, and resolving conflicts to achieve shared goals.
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white p-10 rounded-3xl shadow-xl border border-blue-300 animate-fade-in-up">
          <h3 className="text-4xl font-bold text-gray-900 mb-8 text-center">What Others Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-blue-200 italic text-gray-700">
              <p className="mb-5 leading-relaxed">"Krishna's leadership during the hackathon was exceptional. He kept the team focused, motivated, and his ability to explain complex ideas made a huge difference. A true team player!"</p>
              <p className="text-right font-semibold text-blue-600">- Professor Rawat, IGEC Sagar</p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl shadow-md border border-blue-200 italic text-gray-700">
              <p className="mb-5 leading-relaxed">"His technical communication skills are top-notch. Krishna can break down the most challenging concepts into easily understandable terms, which is invaluable for any project."</p>
              <p className="text-right font-semibold text-blue-600">- Pandey Sir, A.P. Computers</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadershipCommunication;