import React, { useEffect, useState } from "react";

export default function GitHubStats() {
  const username = "mishita27twr";
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      const headers = {
        "User-Agent": "MishitaPortfolio",
        Accept: "application/vnd.github.v3+json",
      };

      // Fetch profile
      const profileRes = await fetch(
        `https://api.github.com/users/${username}`,
        { headers }
      );
      const profileData = await profileRes.json();
      setProfile(profileData);

      // Fetch repos
      const reposRes = await fetch(
        `https://api.github.com/users/${username}/repos?per_page=100`,
        { headers }
      );

      let reposData = await reposRes.json();

      // ⭐ FINAL FIX: force reposData to be an array
      if (!Array.isArray(reposData)) {
        console.error("GitHub API error:", reposData);
        reposData = []; // prevent crash
      }

      setRepos(reposData);

      // Calculate top languages safely
      const langCount = {};

      reposData.forEach((repo) => {
        if (repo.language) {
          langCount[repo.language] =
            (langCount[repo.language] || 0) + 1;
        }
      });

      setLanguages(langCount);
      setLoading(false);
    }

    fetchData();
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [username]);

  if (loading) return <p className="loading-text">Loading GitHub stats...</p>;

  return (
    <section id="github-stats" className="section">
      <h2 className="heading">My GitHub Stats</h2>

      <div className="github-stats-grid">

        <img
          src={`https://github-readme-stats.vercel.app/api?username=${username}&show_icons=true&theme=radical`}
          alt="GitHub Stats"
          className="fade-card"
        />

        <img
          src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=radical`}
          alt="Top Languages"
          className="fade-card"
        />

        <div className="card fade-card">
          <h3>{profile?.name || username}</h3>
          <p><strong>Public Repos:</strong> {profile?.public_repos}</p>
          <p><strong>Followers:</strong> {profile?.followers}</p>
          <p><strong>Following:</strong> {profile?.following}</p>
        </div>

        <div className="card fade-card">
          <h3>Top Languages</h3>
          <ul>
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .map(([lang, count]) => (
                <li key={lang}>
                  {lang}: {count} repo(s)
                </li>
              ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
