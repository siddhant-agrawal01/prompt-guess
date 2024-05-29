import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { OrginalGuess } from "@/app/page";
import { useState } from "react";
import { ReloadIcon } from "@radix-ui/react-icons";

type Props = {
  onSubmit: (text: string) => void;
  originalGuess?: OrginalGuess;
};

export function EnterGuess({ onSubmit, originalGuess }: Props) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(inputValue);
  };

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-white p-8">
      <div className="flex max-w-4xl flex-wrap items-center justify-center gap-8">
        <div className="flex w-full justify-center">
          <h1 className="text-3xl font-bold">Guess the prompt</h1>
        </div>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
          <div className="relative">
            {!originalGuess?.imageUrl && (
              <ReloadIcon
                className="absolute z-10 h-8 w-8 animate-spin text-slate-800"
                style={{ top: "50%", left: "50%" }}
              />
            )}
            <img
              className="w-full object-cover"
              height="400"
              src={originalGuess?.imageUrl || "/placeholder.svg"}
              style={{ aspectRatio: "600/400", objectFit: "cover" }}
              width="600"
            />
          </div>
          <div className="flex flex-col items-start space-y-4">
            <p className="text-sm font-medium">
              Can you guess the prompt used to generate this image?
            </p>
            <Textarea
              className="h-24 w-full resize-none rounded-md border p-2"
              placeholder="Guess the prompt used to generate the image"
              value={inputValue}
              onChange={handleInputChange}
            />
            {originalGuess?.hints && (
              <p className="text-sm">Hints: {originalGuess?.hints.join()}</p>
            )}
            <Button
              className="mt-2 w-full"
              onClick={handleSubmit}
              disabled={!originalGuess}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
