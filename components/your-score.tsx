import { GuessScore, OrginalGuess } from "@/app/page";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
type Props = {
  score: GuessScore;
  originalGuess: OrginalGuess;
  userPrompt: string;
  reset: () => void;
}; 

export function YourScore({ score, originalGuess, userPrompt, reset }: Props) {
  const [similarityScore, setSimilarityScore] = useState(0);
  const [scoreColorClass, setScoreColorClass] = useState("");

  useEffect(() => {
    const newSimilarityScore = parseFloat((score.score * 100).toFixed(2));
    setSimilarityScore(newSimilarityScore);
    const newScoreColorClass =
      newSimilarityScore < 40
        ? "#ef4444"
        : newSimilarityScore < 70
        ? "#eab308"
        : "#22c55e";
    setScoreColorClass(newScoreColorClass);
  }, [score]);

  const handleShareOnX = () => {
    const gameUrl = window.location.href;
    const tweetText = `I scored ${similarityScore}% on the "what's the Prompt" game! Can you beat my score? #GuessThePrompt built by @siddhant_0223\n\nPlay the game: ${gameUrl}`;
    const tweetUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(
      tweetText
    )}`;
    window.open(tweetUrl, "_blank");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-3">Guess the prompt</h1>
      <p className="text-center text-lg mb-12">Let&apos;s see how you scored</p>
      <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
        <div className="max-w-sm">
          <img
            alt="Original illustration of two astronauts playing chess in space."
            className="rounded-lg mb-4"
            height="400"
            src={originalGuess.imageUrl}
            style={{ aspectRatio: "300/400", objectFit: "cover" }}
            width="300"
          />
          <h2 className="text-lg font-semibold mb-2">Original prompt</h2>
          <p className="text-gray-600">{originalGuess.prompt}</p>
        </div>
        <div className="max-w-sm">
          <img
            alt="Your guess illustration of astronauts playing chess."
            className="rounded-lg mb-4"
            height="400"
            src={score.generatedImage}
            style={{ aspectRatio: "300/400", objectFit: "cover" }}
            width="300"
          />
          <h2 className="text-lg font-semibold mb-2">Your guess</h2>
          <p className="text-gray-600">{userPrompt}</p>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="bg-gray-200 w-64 h-6 rounded-full mb-4">
          <div
            className={`h-6 rounded-full`}
            style={{
              width: `${similarityScore}%`,
              backgroundColor: scoreColorClass,
            }}
          />
        </div>
        <p className="font-bold text-lg mb-4 text-red">Similarity score</p>
        <p
          className={`text-2xl font-bold mb-6`}
          style={{ color: scoreColorClass }}
        >
          {similarityScore}%
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Button
            className="bg-blue-500 text-white px-6 py-2 rounded-md"
            onClick={handleShareOnX}
          >
            Share on X(Twitter)
          </Button>
          <Button
            className="bg-gray-300 px-6 py-2 rounded-md"
            onClick={reset}
          >
            Play again
          </Button>
        </div>
      </div>
    </div>
  );
}