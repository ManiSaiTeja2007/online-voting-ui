import React, { useState } from 'react';
import ResultBar from '../components/ResultBar';

export default function VotePage() {
  const [selected, setSelected] = useState(null);
  const [voted, setVoted] = useState(false);

  const options = [
    { label: 'Java', percentage: 35, color: 'bg-blue-600' },
    { label: 'Python', percentage: 45, color: 'bg-green-500' },
    { label: 'JavaScript', percentage: 15, color: 'bg-yellow-400' },
    { label: 'Go', percentage: 5, color: 'bg-purple-500' },
  ];

  return (
    <main className="max-w-5xl mx-auto p-4">
      <header className="bg-white shadow sticky top-0 z-50 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">🗳️ Online Voting System</h1>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Logout</button>
      </header>

      <div className="bg-white shadow-md rounded-xl p-6 mt-6">
        <h2 className="text-2xl font-semibold mb-2">Poll: What's your favorite programming language?</h2>
        <p className="text-gray-600 mb-4">Choose one option below. Live results will update in real-time.</p>

        {!voted ? (
          <form onSubmit={e => { e.preventDefault(); setVoted(true); }} className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
              {options.map((opt, idx) => (
                <label key={idx} className="flex items-center space-x-2">
                  <input
                    type="radio"
                    value={opt.label}
                    checked={selected === opt.label}
                    onChange={() => setSelected(opt.label)}
                    className="accent-blue-600"
                  />
                  <span>{opt.label}</span>
                </label>
              ))}
            </div>
            <button
              type="submit"
              disabled={!selected}
              className="mt-4 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Cast Vote
            </button>
          </form>
        ) : (
          <div className="mt-6 space-y-4">
            <h3 className="text-lg font-bold">📊 Live Results:</h3>
            {options.map((opt, idx) => (
              <ResultBar key={idx} label={opt.label} percentage={opt.percentage} color={opt.color} />
            ))}
            <button
              onClick={() => { setVoted(false); setSelected(null); }}
              className="mt-4 text-blue-600 underline hover:text-blue-800"
            >
              Vote Again
            </button>
          </div>
        )}
      </div>

      <footer className="text-center text-gray-500 py-6 text-sm mt-12">
        &copy; 2025 Online Voting System. All rights reserved.
      </footer>
    </main>
  );
}