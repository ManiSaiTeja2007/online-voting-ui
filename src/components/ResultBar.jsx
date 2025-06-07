import React from 'react';

export default function ResultBar({ label, percentage, color }) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <span>{label}</span><span>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded h-4">
        <div className={`${color} h-4 rounded`} style={{ width: `${percentage}%` }}></div>
      </div>
    </div>
  );
}