"use client"

import { useState } from 'react';

const emojis = [
    { label: 'Terrible', symbol: '😞' },
    { label: 'Bad', symbol: '😕' },
    { label: 'Okay', symbol: '😐' },
    { label: 'Good', symbol: '😊' },
    { label: 'Great', symbol: '😁' },
];

const responses = {
    Terrible: "We're sorry to hear that your experience was terrible. We strive to do better.",
    Bad: "We apologize for your bad experience. Your feedback will help us improve.",
    Okay: "Thank you for your feedback. We hope to make your next experience better.",
    Good: "We're glad you had a good experience. Thank you for your feedback!",
    Great: "Fantastic! We're thrilled to hear you had a great experience!",
};

const ExperienceRating = () => {
    const [selectedEmoji, setSelectedEmoji] = useState(null);

    const handleEmojiClick = (emoji) => {
        setSelectedEmoji(emoji);
        console.log(`User selected: ${emoji.label}`);
    };

    return (
        <div className="flex flex-col items-center justify-center h-screen  p-4">
            <h2 className="text-2xl font-bold mb-4">How was your experience?</h2>
            {!selectedEmoji ? (
                <div className="flex space-x-4">
                    {emojis.map((emoji) => (
                        <button
                            key={emoji.label}
                            onClick={() => handleEmojiClick(emoji)}
                            className={`text-4xl ${selectedEmoji === emoji ? 'scale-110' : ''} transform transition-transform duration-200 ease-in-out`}
                            aria-label={emoji.label}
                        >
                            {emoji.symbol}
                        </button>
                    ))}
                </div>
            ) : (
                <div className="mt-4 text-xl text-gray-700 text-center space-y-4">
                    {selectedEmoji.label === 'Terrible' || selectedEmoji.label === 'Bad' ? (
                        <div className="text-red-500">
                            <p>{responses[selectedEmoji.label]}</p>
                            <p>We sincerely apologize for the inconvenience caused.</p>
                        </div>
                    ) : (
                        <div>
                            <p>{responses[selectedEmoji.label]}</p>
                        </div>
                    )}
                    <button className='
                                    px-4 py-2 text-lg
                                    bg-pink-800 text-white rounded-full
                                    focus:outline-none
                                    focus:ring-2 focus:ring-red-600
                                    focus:ring-opacity-50
                                    disabled:opacity-50
                                    disabled:cursor-not-allowed 
                            '>
                        <a href="/">Back to Home</a>
                    </button>
                </div>
            )}
        </div>
    );
};

export default ExperienceRating;
