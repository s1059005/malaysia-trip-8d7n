import React, { useState, useEffect } from 'react';
import { ITINERARY_DATA as INITIAL_DATA } from '../../constants';
import { fetchItinerary, saveItinerary } from '../services/itineraryService';
import { Link } from 'react-router-dom';

const Admin: React.FC = () => {
    const [data, setData] = useState(INITIAL_DATA);
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchItinerary().then(fetchedData => {
            setData(fetchedData);
        });
    }, []);

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            await saveItinerary(data);
            setMessage('✅ Saved successfully to Firebase!');
            setHasUnsavedChanges(false);
        } catch (err) {
            console.error(err);
            setMessage('❌ Error saving data.');
        } finally {
            setSaving(false);
            setTimeout(() => setMessage(''), 3000);
        }
    };

    const updateDayTitle = (dayIndex: number, newTitle: string) => {
        const newData = [...data];
        newData[dayIndex].title = newTitle;
        setData(newData);
    };

    const updateActivity = (dayIndex: number, actIndex: number, field: string, value: string) => {
        const newData = [...data];
        // @ts-ignore
        newData[dayIndex].activities[actIndex][field] = value;
        setData(newData);
    };

    const addActivity = (dayIndex: number) => {
        const newData = [...data];
        const newId = `new-${Date.now()}`;
        newData[dayIndex].activities.push({
            id: newId,
            time: "09:00",
            title: "New Activity",
            location: "Location",
            mapQuery: "Malaysia",
            icon: "sight",
            description: "Description"
        });
        setData(newData);
    };

    const deleteActivity = (dayIndex: number, actIndex: number) => {
        if (!confirm("Delete this activity?")) return;
        const newData = [...data];
        newData[dayIndex].activities.splice(actIndex, 1);
        setData(newData);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8 pb-32">
            <div className="max-w-4xl mx-auto">
                <div className="flex justify-between items-center mb-6 sticky top-0 bg-gray-100 py-4 z-10 border-b">
                    <div>
                        <h1 className="text-3xl font-bold text-gray-800">Trip Admin Panel</h1>
                        <Link to="/" className="text-blue-600 hover:underline">Back to App</Link>
                    </div>
                    <div className="flex items-center gap-4">
                        {message && <span className="font-bold animate-pulse">{message}</span>}
                        <button
                            onClick={handleSave}
                            disabled={saving}
                            className="px-6 py-2 bg-green-600 text-white rounded-lg font-bold hover:bg-green-700 disabled:opacity-50"
                        >
                            {saving ? 'Saving...' : '💾 SAVE CHANGES'}
                        </button>
                    </div>
                </div>

                <div className="space-y-8">
                    {data.map((day, dayIndex) => (
                        <div key={day.day} className="bg-white rounded-xl shadow-sm p-6 border border-gray-200">
                            <div className="flex items-center gap-4 mb-4 pb-4 border-b">
                                <span className="text-xl font-bold text-blue-600 w-16">Day {day.day}</span>
                                <input
                                    type="text"
                                    value={day.title}
                                    onChange={(e) => updateDayTitle(dayIndex, e.target.value)}
                                    className="flex-1 text-xl font-bold text-gray-800 border-b-2 border-transparent focus:border-blue-500 outline-none px-2 py-1 bg-gray-50 hover:bg-white transition-colors"
                                />
                            </div>

                            <div className="space-y-4 pl-4">
                                {day.activities.map((act, actIndex) => (
                                    <div key={act.id} className="group relative bg-gray-50 p-4 rounded-lg border border-gray-100 hover:border-blue-300 transition-colors">
                                        <button
                                            className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                            onClick={() => deleteActivity(dayIndex, actIndex)}
                                        >
                                            🗑️
                                        </button>
                                        <div className="grid grid-cols-12 gap-2 text-sm">
                                            <div className="col-span-2">
                                                <label className="text-xs text-gray-400 block">Time</label>
                                                <input
                                                    value={act.time}
                                                    onChange={e => updateActivity(dayIndex, actIndex, 'time', e.target.value)}
                                                    className="w-full font-mono bg-transparent border-b border-gray-200 focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div className="col-span-5">
                                                <label className="text-xs text-gray-400 block">Title</label>
                                                <input
                                                    value={act.title}
                                                    onChange={e => updateActivity(dayIndex, actIndex, 'title', e.target.value)}
                                                    className="w-full font-bold bg-transparent border-b border-gray-200 focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div className="col-span-5">
                                                <label className="text-xs text-gray-400 block">Location</label>
                                                <input
                                                    value={act.location}
                                                    onChange={e => updateActivity(dayIndex, actIndex, 'location', e.target.value)}
                                                    className="w-full bg-transparent border-b border-gray-200 focus:border-blue-500 outline-none"
                                                />
                                            </div>
                                            <div className="col-span-12 mt-2">
                                                <label className="text-xs text-gray-400 block">Description</label>
                                                <textarea
                                                    value={act.description}
                                                    onChange={e => updateActivity(dayIndex, actIndex, 'description', e.target.value)}
                                                    className="w-full bg-transparent border-b border-gray-200 focus:border-blue-500 outline-none resize-none h-16"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))}

                                <button
                                    onClick={() => addActivity(dayIndex)}
                                    className="w-full py-2 border-2 border-dashed border-gray-300 text-gray-400 rounded-lg hover:border-blue-400 hover:text-blue-500 transition-colors flex items-center justify-center gap-2"
                                >
                                    <span>➕ Add Activity</span>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Admin;
