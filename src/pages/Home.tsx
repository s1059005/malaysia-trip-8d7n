import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA as INITIAL_DATA } from '../../constants';
import { fetchItinerary } from '../services/itineraryService';
import { ItineraryDay } from '../../types';
import ActivityItem from '../../components/ActivityItem';
import AIChatModal from '../../components/AIChatModal';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
    const [itineraryData, setItineraryData] = useState<ItineraryDay[]>(INITIAL_DATA);
    const [loading, setLoading] = useState(true);
    const [selectedDayIndex, setSelectedDayIndex] = useState(0);
    const [isAiChatOpen, setIsAiChatOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const loadData = async () => {
            try {
                const data = await fetchItinerary();
                setItineraryData(data);
            } catch (error) {
                console.error("Failed to load itinerary:", error);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // Handle Sticky Header Shadow on scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const currentDayData = itineraryData[selectedDayIndex] || itineraryData[0];

    return (
        <div className="min-h-screen bg-slate-50 font-sans text-gray-900 pb-24 safe-area-pb">

            {/* 1. Sticky Navigation Bar */}
            <header className={`sticky top-0 z-40 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${isScrolled ? 'shadow-md' : ''} safe-area-pt`}>
                <div className="max-w-3xl mx-auto">
                    {/* Title Area */}
                    <div className="px-4 py-4 flex justify-between items-center">
                        <div>
                            <h1 className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-cyan-600">
                                🇲🇾 馬來西亞親子遊
                            </h1>
                            <p className="text-sm text-gray-600 font-bold mt-1">吉隆坡・馬六甲・怡保・檳城</p>
                        </div>
                        {/* Small AI trigger for header */}
                        <button
                            onClick={() => setIsAiChatOpen(true)}
                            className="p-3 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors sm:hidden"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </button>
                        <Link to="/admin" className="hidden sm:block text-xs text-gray-400 hover:text-blue-500 underline ml-4">
                            Admin
                        </Link>
                    </div>

                    {/* Day Selector (Horizontal Scroll) - Enlarged Targets */}
                    <div className="flex overflow-x-auto pb-3 px-4 scrollbar-hide gap-3 no-scrollbar">
                        {itineraryData.map((day, index) => (
                            <button
                                key={day.day}
                                onClick={() => {
                                    setSelectedDayIndex(index);
                                    window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className={`flex-shrink-0 flex flex-col items-center justify-center w-16 h-20 rounded-2xl transition-all duration-300 border-2 ${index === selectedDayIndex
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-200 scale-105'
                                    : 'bg-white border-gray-100 text-gray-400 hover:border-blue-200'
                                    }`}
                            >
                                <span className="text-xs font-bold uppercase tracking-wider opacity-90 mb-1">
                                    {day.day === 0 ? 'INFO' : 'Day'}
                                </span>
                                <span className="text-3xl font-bold leading-none">
                                    {day.day === 0 ? 'ℹ️' : day.day}
                                </span>
                            </button>
                        ))}
                        <div className="w-2 flex-shrink-0" /> {/* Spacer */}
                    </div>
                </div>
            </header>

            {/* 2. Main Content Area */}
            <main className="max-w-3xl mx-auto px-4 pt-8">

                {/* Day Header */}
                <div className="mb-8 animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-100 text-blue-800 text-sm font-bold mb-3">
                        {currentDayData.day === 0 ? "TRIP INFO" : `DAY ${currentDayData.day} 行程`}
                    </div>
                    <h2 className="text-4xl font-extrabold text-gray-900 leading-tight">
                        {currentDayData.title}
                    </h2>
                </div>

                {/* Timeline Activities */}
                <div className="animate-fade-in space-y-4">
                    {currentDayData.activities.map((activity, idx) => (
                        <ActivityItem
                            key={activity.id}
                            activity={activity}
                            isLast={idx === currentDayData.activities.length - 1}
                        />
                    ))}
                </div>

                {/* Bottom Helper Info */}
                <div className="mt-16 text-center pb-10">
                    <p className="text-gray-500 text-sm font-medium">行程僅供參考，實際時間依當日交通狀況為準。</p>
                    <p className="text-gray-400 text-xs mt-2">
                        IOS: Share &gt; Add to Home Screen | Android: Menu &gt; Install App
                    </p>
                    <Link to="/admin" className="inline-block mt-4 text-xs text-gray-300 hover:text-gray-500">Admin Login</Link>
                </div>
            </main>

            {/* 3. Floating Action Button (AI) */}
            <button
                onClick={() => setIsAiChatOpen(true)}
                className="fixed bottom-8 right-6 w-16 h-16 bg-gradient-to-tr from-blue-600 to-cyan-500 rounded-full shadow-2xl shadow-blue-400/50 flex items-center justify-center text-white z-30 hover:scale-110 active:scale-95 transition-transform duration-300 group"
                aria-label="Open AI Assistant"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 group-hover:rotate-12 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                </svg>
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-red-500 rounded-full animate-pulse border-2 border-white"></span>
            </button>

            {/* 4. AI Modal */}
            <AIChatModal
                isOpen={isAiChatOpen}
                onClose={() => setIsAiChatOpen(false)}
                currentDay={currentDayData}
                allItinerary={itineraryData}
            />

        </div>
    );
};

export default Home;
