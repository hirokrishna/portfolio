import React from 'react';

const AboutMe = () => {
  return (
    <section
      id="about-me"
      className="py-24 px-4 bg-gray-100 text-gray-900 min-h-screen flex items-center"
    >
      <div className="container mx-auto max-w-6xl">

        {/* HEADING */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 text-center mb-10">
          Beyond the Code: My Journey
        </h2>

        {/* ===== MOBILE LAYOUT (below md): stacked, image on top ===== */}
        <div className="block md:hidden">
          <div className="flex justify-center mb-[-40px] relative z-20">
            <img
              src="/about_me_image.png"
              alt="Krishna Pathak"
              className="w-[260px] object-contain"
            />
          </div>
          <div
            className="
              bg-white
              rounded-[2rem]
              shadow-[0_15px_50px_rgba(0,0,0,0.08)]
              border border-blue-100
              relative
              z-10
              pt-12 pb-10 px-6
            "
          >
            <div className="text-base leading-relaxed text-gray-700">
              <p className="mb-5">
                As a B.Tech (Information Technology) student in my 2nd year at{" "}
                <span className="font-semibold text-blue-600">Indira Gandhi Engineering College (IGEC) Sagar</span>,
                affiliated with{" "}
                <span className="font-semibold text-blue-600">RGPV Bhopal</span>,
                and with a foundational education from{" "}
                <span className="font-semibold text-blue-600">Paras Vidhya Vihar (Tili Sagar)</span>,
                my journey has been defined by a relentless pursuit of engineering excellence.
              </p>
              <p className="mb-5">
                My core technical interests span across{" "}
                <span className="font-semibold text-blue-600">Python with deep DSA expertise</span>,
                robust <span className="font-semibold text-blue-600">Web Development</span> using modern frameworks like React and Next.js,
                efficient <span className="font-semibold text-blue-600">DevOps</span>,
                and cutting-edge <span className="font-semibold text-blue-600">AI/ML</span> agentic workflows.
              </p>
              <p>
                My technical acumen is further amplified by strong{" "}
                <span className="font-semibold text-blue-600">communication skills</span>,
                proven{" "}
                <span className="font-semibold text-blue-600">leadership abilities</span>,
                adaptability, and a proactive approach to solving complex problems.
              </p>
            </div>
          </div>
        </div>

        {/* ===== DESKTOP LAYOUT (md+): overlay effect ===== */}
        <div className="hidden md:block">
          <div className="relative pt-36 lg:pt-44">

            {/* CARD */}
            <div
              className="
                bg-white
                rounded-[2rem]
                shadow-[0_15px_50px_rgba(0,0,0,0.08)]
                border border-blue-100
                relative
                z-10
              "
              style={{
                marginLeft: '150px',
                paddingTop: '56px',
                paddingBottom: '56px',
                paddingLeft: '48px',
                paddingRight: '48px',
              }}
            >
              <div className="text-lg leading-relaxed text-gray-700">
                <p className="mb-5">
                  As a B.Tech (Information Technology) student in my 2nd year at{" "}
                  <span className="font-semibold text-blue-600">Indira Gandhi Engineering College (IGEC) Sagar</span>,
                  affiliated with{" "}
                  <span className="font-semibold text-blue-600">RGPV Bhopal</span>,
                  and with a foundational education from{" "}
                  <span className="font-semibold text-blue-600">Paras Vidhya Vihar (Tili Sagar)</span>,
                  my journey has been defined by a relentless pursuit of engineering excellence.
                </p>
                <p className="mb-5">
                  My core technical interests span across{" "}
                  <span className="font-semibold text-blue-600">Python with deep DSA expertise</span>,
                  robust <span className="font-semibold text-blue-600">Web Development</span> using modern frameworks like React and Next.js,
                  efficient <span className="font-semibold text-blue-600">DevOps</span>,
                  and cutting-edge <span className="font-semibold text-blue-600">AI/ML</span> agentic workflows.
                </p>
                <p>
                  My technical acumen is further amplified by strong{" "}
                  <span className="font-semibold text-blue-600">communication skills</span>,
                  proven{" "}
                  <span className="font-semibold text-blue-600">leadership abilities</span>,
                  adaptability, and a proactive approach to solving complex problems.
                </p>
              </div>
            </div>

            {/* IMAGE — overlay */}
            <div
              className="
                absolute
                bottom-0
                left-0
                z-20
                pointer-events-none
              "
              style={{ marginBottom: '20px' }}
            >
              <img
                src="/about_me_image.png"
                alt="Krishna Pathak"
                className="
                  md:w-[380px]
                  lg:w-[440px]
                  object-contain
                "
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;