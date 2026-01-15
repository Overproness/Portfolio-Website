"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";

const dateInYears = new Date().getFullYear() - 2020;

const Stats = () => {
  const [githubStats, setGithubStats] = useState({
    totalCommits: 300,
    totalRepos: 26,
  });

  useEffect(() => {
    const fetchGithubStats = async () => {
      try {
        const response = await fetch("/api/github-stats");
        if (response.ok) {
          const data = await response.json();
          // console.log("🚀 ~ fetchGithubStats ~ data:", data);
          setGithubStats({
            totalCommits: data.totalCommits,
            totalRepos: data.totalRepos,
          });
        }
      } catch (error) {
        console.error("Failed to fetch GitHub stats:", error);
      }
    };

    fetchGithubStats();
  }, []);

  const stats = [
    {
      num: dateInYears,
      text: "Years of Experience",
    },
    {
      num: githubStats.totalRepos,
      text: "Projects Completed",
    },
    {
      num: 7,
      text: "Technologies Mastered",
    },
    {
      num: githubStats.totalCommits,
      text: "Code Commits",
    },
  ];

  return (
    <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex gap-4 items-center justify-center xl:justify-start"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:text-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
