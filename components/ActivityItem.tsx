
import React from 'react';
import { Activity } from '../types';

interface Props {
  activity: Activity;
  isLast: boolean;
}

const ActivityItem: React.FC<Props> = ({ activity, isLast }) => {
  const getIcon = (type?: string) => {
    switch (type) {
      case 'flight': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
        </svg>
      );
      case 'hotel': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      );
      case 'food': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
      case 'transport': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
      );
      case 'shopping': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
      );
      case 'nature': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
        </svg>
      );
      case 'money': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      case 'entertainment': return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      );
      default: return (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      );
    }
  };

  return (
    <div className="flex gap-4 relative group">
      {/* Timeline Line - Fixed position relative to icon */}
      <div className="flex flex-col items-center">
        <div
          className="w-1 bg-gray-200 absolute top-0 bottom-0 left-[26px] -z-10"
          style={{ display: isLast ? 'none' : 'block' }}
        ></div>
        {/* Icon Wrapper - Enlarged for better visibility */}
        <div className="w-14 h-14 rounded-full bg-white border-2 border-blue-50 shadow-sm flex items-center justify-center z-10">
          {getIcon(activity.icon)}
        </div>
      </div>

      {/* Content Card */}
      <div className="flex-grow pb-12">
        <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm active:scale-[0.99] transition-transform duration-100">
          <div className="flex justify-between items-start mb-4">
            {/* Time Badge - Enlarged text */}
            <span className="inline-block px-4 py-1.5 rounded-lg text-lg font-bold bg-gray-100 text-gray-800">
              {activity.time}
            </span>
          </div>

          {/* Title - Significantly Larger (text-3xl) */}
          <h3 className="text-3xl font-extrabold text-gray-900 leading-tight mb-4">
            {activity.title}
          </h3>

          {/* Description - Larger body text (text-xl) and darker color for contrast */}
          {activity.description && (
            <p className="text-gray-800 text-xl mb-6 leading-relaxed font-medium whitespace-pre-line">
              {activity.description}
            </p>
          )}

          {/* Map Action Bar */}
          <div className="flex flex-col gap-4 mt-5 pt-5 border-t border-dashed border-gray-200">
            <div className="flex items-start gap-3 text-gray-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="font-medium text-lg leading-snug">{activity.location}</span>
            </div>

            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(activity.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 px-6 py-4 bg-blue-600 text-white text-xl font-bold rounded-2xl shadow-lg shadow-blue-200 hover:bg-blue-700 transition-colors w-full"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0121 18.382V7.618a1 1 0 01-.447-.894L15 7m0 13V7" />
              </svg>
              開啟地圖導航
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;
