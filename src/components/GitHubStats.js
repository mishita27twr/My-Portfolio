import React, { useEffect, useState } from "react";
export default function GitHubStats() {
  const username = "mishita27twr"; // your GitHub username
  const [profile, setProfile] = useState(null);
  const [repos, setRepos] = useState([]);
  const [languages, setLanguages] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);

      // Fetch profile info
      const profileRes = await fetch(`https://api.github.com/users/${username}`);
      const profileData = await profileRes.json();
      setProfile(profileData);

      // Fetch repos
      const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
      const reposData = await reposRes.json();
      setRepos(reposData);

      // Calculate top languages
      const langCount = {};
      reposData.forEach(repo => {
        if (repo.language) {
          langCount[repo.language] = (langCount[repo.language] || 0) + 1;
        }
      });
      setLanguages(langCount);

      setLoading(false);
    }

    fetchData();

    // Refresh every 60 seconds
    const interval = setInterval(fetchData, 60000);
    return () => clearInterval(interval);
  }, [username]);

  if (loading) return <p>Loading GitHub stats...</p>;

  return (
    <section id="github-stats" className="section">
      <h2 className="heading">My GitHub Stats</h2>

      <div
        className="github-stats-grid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
        }}
      >
        {/* Summary Card Images */}
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github`}
          alt="GitHub Profile Details"
          loading="lazy"
        />
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=github`}
          alt="Top Languages by Repo"
          loading="lazy"
        />
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github`}
          alt="Top Languages by Commit"
          loading="lazy"
        />
        <img
          src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=github`}
          alt="GitHub Stats"
          loading="lazy"
        />

        {/* Live Data (Optional) */}
        <div className="card">
          <h3>{profile.name || username}</h3>
          <p><strong>Public Repos:</strong> {profile.public_repos}</p>
          <p><strong>Followers:</strong> {profile.followers}</p>
          <p><strong>Following:</strong> {profile.following}</p>
        </div>

        <div className="card">
          <h3>Top Languages</h3>
          <ul>
            {Object.entries(languages)
              .sort((a, b) => b[1] - a[1])
              .map(([lang, count]) => (
                <li key={lang}>{lang}: {count} repo(s)</li>
              ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
