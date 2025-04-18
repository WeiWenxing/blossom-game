"use client";

import { useState, useEffect } from "react";
import { content } from "@/config/content";
import { generateRatingSchema } from "@/app/schema";

export function Rating() {
  const [rating, setRating] = useState(content.rating.initialRating);
  const [votes, setVotes] = useState(content.rating.initialVotes);
  const [userRating, setUserRating] = useState(0);
  const [hasVoted, setHasVoted] = useState(false);

  useEffect(() => {
    const savedRating = localStorage.getItem('globalRating');
    const savedVotes = localStorage.getItem('totalVotes');
    const savedUserRating = localStorage.getItem('userRating');
    const savedHasVoted = localStorage.getItem('hasVoted');

    if (savedRating) setRating(parseFloat(savedRating));
    if (savedVotes) setVotes(parseInt(savedVotes));
    if (savedUserRating) setUserRating(parseInt(savedUserRating));
    if (savedHasVoted) setHasVoted(savedHasVoted === 'true');
  }, []);

  const handleVote = (star: number) => {
    if (!hasVoted) {
      setUserRating(star);
      setHasVoted(true);
      const newTotalVotes = votes + 1;
      const newRating = ((rating * votes) + star) / newTotalVotes;
      const finalRating = Number(newRating.toFixed(1));

      setRating(finalRating);
      setVotes(newTotalVotes);

      localStorage.setItem('hasVoted', 'true');
      localStorage.setItem('userRating', star.toString());
      localStorage.setItem('globalRating', finalRating.toString());
      localStorage.setItem('totalVotes', newTotalVotes.toString());
    }
  };

  return (
    <section className="mb-16" id="rating">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateRatingSchema(rating, votes))
        }}
      />

      <div className="container mx-auto">
        <div className="bg-[#fff2cb] rounded-lg p-6 mb-6">
          <h2 className="text-3xl font-bold text-center">{content.rating.title}</h2>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <div className="flex items-center space-x-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => handleVote(star)}
                disabled={hasVoted}
                className={`w-12 h-12 flex items-center justify-center rounded-full transition-all ${
                  (hasVoted && star <= userRating) || (!hasVoted && star <= userRating)
                    ? 'bg-yellow-400 text-white'
                    : hasVoted
                    ? 'bg-gray-200 cursor-not-allowed'
                    : 'bg-gray-200 hover:bg-yellow-200 cursor-pointer'
                }`}
                aria-label={`Rate ${star} stars`}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            ))}
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">{rating}</div>
            <div className="text-gray-500">
              <span className="font-semibold">{votes.toLocaleString()}</span> {content.rating.votes}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}