import React from "react";
import '../App.css';

export default function GitHubStats() {
  const username = "mishita27twr"; // replace with your GitHub username
  const timestamp = Date.now(); // forces fresh fetch from API

  return (
    <section id="github-stats" className="section">
      <h2 className="heading">My GitHub Stats</h2>

      <div className="github-stats-grid">

        {/* First row */}
        <div className="card">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=${username}&theme=github&t=${timestamp}`}
            alt="Top Languages by Repo"
          />
        </div>

        <div className="card">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=${username}&theme=github&t=${timestamp}`}
            alt="Top Languages by Commit"
          />
        </div>

        <div className="card">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/stats?username=${username}&theme=github&t=${timestamp}`}
            alt="Commits per hour"
          />
        </div>

        {/* Second row */}
        <div className="card">
          <img
            src={`https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=${username}&theme=github&t=${timestamp}`}
            alt="Stats Summary"
          />
        </div>

      </div>
    </section>
  );
}
