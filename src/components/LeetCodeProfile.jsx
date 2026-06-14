import React, { useState, useEffect } from 'react';
import { CheckCircle2, Star, Trophy, Users } from 'lucide-react';

const LeetCodeProfile = () => {
  const [leetcodeData, setLeetcodeData] = useState({
    solved: 6,
    easy: 4,
    medium: 2,
    hard: 0,
    totalEasy: 950,
    totalMedium: 2069,
    totalHard: 943,
    totalQuestions: 3962,
    ranking: 5000001,
    acceptanceRate: 66.7
  });

  const [codeforcesData, setCodeforcesData] = useState({
    rating: "Unrated",
    maxRating: "N/A",
    rank: "Unranked",
    maxRank: "N/A",
    solved: 2,
    contributions: 0
  });


  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Fetch LeetCode Data
        const lcRes = await fetch("https://alfa-leetcode-api.onrender.com/userProfile/hiroKrishna");
        if (lcRes.ok) {
          const lcData = await lcRes.json();
          setLeetcodeData({
            solved: lcData.totalSolved || 6,
            easy: lcData.easySolved || 4,
            medium: lcData.mediumSolved || 2,
            hard: lcData.hardSolved || 0,
            totalEasy: lcData.totalEasy || 950,
            totalMedium: lcData.totalMedium || 2069,
            totalHard: lcData.totalHard || 943,
            totalQuestions: lcData.totalQuestions || 3962,
            ranking: lcData.ranking || 5000001,
            acceptanceRate: lcData.totalSolved ? parseFloat(((lcData.totalSolved / (lcData.totalSubmissions?.[0]?.submissions || lcData.totalSolved * 1.5)) * 100).toFixed(1)) : 66.7
          });
        }
      } catch (err) {
        console.error("Error fetching LeetCode data", err);
      }

      try {
        // Fetch Codeforces User Info
        const cfInfoRes = await fetch("https://codeforces.com/api/user.info?handles=Krishnapathak7");
        if (cfInfoRes.ok) {
          const cfInfo = await cfInfoRes.json();
          if (cfInfo.status === "OK" && cfInfo.result.length > 0) {
            const user = cfInfo.result[0];
            setCodeforcesData(prev => ({
              ...prev,
              rating: user.rating !== undefined ? user.rating : "Unrated",
              maxRating: user.maxRating !== undefined ? user.maxRating : "N/A",
              rank: user.rank !== undefined ? user.rank : "Unranked",
              maxRank: user.maxRank !== undefined ? user.maxRank : "N/A",
              contributions: user.contribution !== undefined ? user.contribution : 0
            }));
          }
        }

        // Fetch Codeforces Submissions for Solved Count
        const cfStatusRes = await fetch("https://codeforces.com/api/user.status?handle=Krishnapathak7");
        if (cfStatusRes.ok) {
          const cfStatus = await cfStatusRes.json();
          if (cfStatus.status === "OK") {
            const solvedProblems = new Set();
            cfStatus.result.forEach(submission => {
              if (submission.verdict === 'OK' && submission.problem) {
                const probId = `${submission.problem.contestId}-${submission.problem.index}`;
                solvedProblems.add(probId);
              }
            });
            setCodeforcesData(prev => ({
              ...prev,
              solved: solvedProblems.size
            }));
          }
        }
      } catch (err) {
        console.error("Error fetching Codeforces data", err);
      }
    };

    fetchStats();
  }, []);

  return (
    <section id="leetcode" className="py-24 px-4 bg-white relative border-y border-gray-100">
      <div className="container mx-auto max-w-6xl">
        {/* SECTION HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4 animate-fade-in-up">
            Problem Solving & Competitive Programming
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto animate-fade-in-up delay-200">
            Live statistics fetched in real-time from coding profiles.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* ================= LEETCODE CARD ================= */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/1/19/LeetCode_logo_black.png"
                      alt="LeetCode Logo"
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">LeetCode</h3>
                    <p className="text-gray-500 text-sm font-semibold">@hiroKrishna</p>
                  </div>
                </div>
                <a
                  href="https://leetcode.com/u/hiroKrishna/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#FFA116] hover:bg-[#ff9200] text-white text-sm font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                >
                  Visit Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Main Solved Stats */}
              <div className="flex flex-col md:flex-row items-center gap-8 mb-8 justify-around">
                {/* Circular Indicator */}
                <div className="relative w-36 h-36 flex-shrink-0">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="#e5e7eb" strokeWidth="4" />
                    {/* Easy Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#00b8a3"
                      strokeWidth="5.5"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * (leetcodeData.easy / leetcodeData.totalQuestions))}
                      strokeLinecap="round"
                    />
                    {/* Medium Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ffc01e"
                      strokeWidth="5.5"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * ((leetcodeData.easy + leetcodeData.medium) / leetcodeData.totalQuestions))}
                      strokeLinecap="round"
                    />
                    {/* Hard Segment */}
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      fill="none"
                      stroke="#ef4743"
                      strokeWidth="5.5"
                      strokeDasharray="283"
                      strokeDashoffset={283 - (283 * (leetcodeData.solved / leetcodeData.totalQuestions))}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className="text-3xl font-black text-gray-900">{leetcodeData.solved}</div>
                    <div className="text-xs font-semibold text-gray-400">/ {leetcodeData.totalQuestions}</div>
                    <div className="text-gray-500 text-[10px] font-bold tracking-wider uppercase mt-1">Solved</div>
                  </div>
                </div>

                {/* Stat Bars */}
                <div className="flex-1 w-full space-y-4">
                  {/* Easy */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                      <span className="text-[#00b8a3]">Easy</span>
                      <span className="text-gray-800">{leetcodeData.easy} / {leetcodeData.totalEasy}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#00b8a3] h-full rounded-full transition-all duration-1000" style={{ width: `${(leetcodeData.easy / leetcodeData.totalEasy) * 100}%` }}></div>
                    </div>
                  </div>
                  {/* Medium */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                      <span className="text-[#ffc01e]">Medium</span>
                      <span className="text-gray-800">{leetcodeData.medium} / {leetcodeData.totalMedium}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#ffc01e] h-full rounded-full transition-all duration-1000" style={{ width: `${(leetcodeData.medium / leetcodeData.totalMedium) * 100}%` }}></div>
                    </div>
                  </div>
                  {/* Hard */}
                  <div>
                    <div className="flex justify-between text-xs font-bold text-gray-500 mb-1">
                      <span className="text-[#ef4743]">Hard</span>
                      <span className="text-gray-800">{leetcodeData.hard} / {leetcodeData.totalHard}</span>
                    </div>
                    <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden">
                      <div className="bg-[#ef4743] h-full rounded-full transition-all duration-1000" style={{ width: `${(leetcodeData.hard / leetcodeData.totalHard) * 100}%` }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Footer Stats */}
            <div className="border-t border-gray-200 pt-6 grid grid-cols-2 gap-4 text-center mt-auto">
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Global Ranking</div>
                <div className="text-xl font-bold text-gray-800 font-mono">
                  {leetcodeData.ranking.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Acceptance Rate</div>
                <div className="text-xl font-bold text-gray-800 font-mono">{leetcodeData.acceptanceRate}%</div>
              </div>
            </div>
          </div>

          {/* ================= CODEFORCES CARD ================= */}
          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-md transition duration-300 flex flex-col justify-between">
            <div>
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-gray-200 pb-6">
                <div className="flex items-center gap-4">
                  {/* Custom Codeforces SVG Icon */}
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100 p-2">
                    <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="2" y="4" width="4" height="16" rx="1" fill="#3B5998" />
                      <rect x="9" y="8" width="4" height="12" rx="1" fill="#FF4C4C" />
                      <rect x="16" y="11" width="4" height="9" rx="1" fill="#FFC107" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Codeforces</h3>
                    <p className="text-gray-500 text-sm font-semibold">@Krishnapathak7</p>
                  </div>
                </div>
                <a
                  href="https://codeforces.com/profile/Krishnapathak7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold rounded-xl shadow-md transition-all hover:-translate-y-0.5"
                >
                  Visit Profile
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {/* Solved Problems */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm group">
                  <div className="bg-emerald-50 text-emerald-600 p-3 rounded-xl">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Solved</div>
                    <div className="text-2xl font-black text-gray-900">{codeforcesData.solved}</div>
                  </div>
                </div>

                {/* Rating */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="bg-blue-50 text-blue-600 p-3 rounded-xl">
                    <Trophy className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Rating</div>
                    <div className="text-xl font-black text-gray-900">{codeforcesData.rating}</div>
                  </div>
                </div>

                {/* Max Rating */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="bg-purple-50 text-purple-600 p-3 rounded-xl">
                    <Star className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Max Rating</div>
                    <div className="text-xl font-black text-gray-900">{codeforcesData.maxRating}</div>
                  </div>
                </div>

                {/* Contributions */}
                <div className="bg-white p-5 rounded-2xl border border-gray-100 flex items-center gap-4 shadow-sm">
                  <div className="bg-amber-50 text-amber-600 p-3 rounded-xl">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-gray-400 text-xs font-bold uppercase tracking-wider">Contribution</div>
                    <div className="text-xl font-black text-gray-900">{codeforcesData.contributions}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Dashboard Footer Stats */}
            <div className="border-t border-gray-200 pt-6 grid grid-cols-2 gap-4 text-center mt-auto">
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Current Rank</div>
                <div className="text-xl font-bold text-gray-800 capitalize font-sans">{codeforcesData.rank}</div>
              </div>
              <div>
                <div className="text-gray-400 text-xs font-bold uppercase tracking-wider mb-1">Max Rank</div>
                <div className="text-xl font-bold text-gray-800 capitalize font-sans">{codeforcesData.maxRank}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeetCodeProfile;
