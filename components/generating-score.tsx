import { ReloadIcon } from "@radix-ui/react-icons";

type Props = {
  originalImage: string;
};

export function GeneratingScore({ originalImage }: Props) {
  return (
    <div className="max-w-4xl mx-auto my-8">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold">Generating Score</h1>
        <p className="text-lg text-gray-500 p-3 m-3">
          Please be patient while we&apos;re generating your score
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex flex-col items-center justify-center">
          <img
            alt="Guess the prompt illustration"
            className="aspect-[3/2] object-cover p-5"
            height="400"
            src={originalImage}
            width="600"
          />
        </div>
        <div className="relative flex flex-col items-center justify-center p-5">
          <ReloadIcon
            className="absolute z-10 h-8 w-8 animate-spin text-slate-800"
            style={{ top: "50%", left: "50%" }}
          />
          <img
            alt="Loading placeholder"
            className="aspect-[3/2] object-cover bg-gray-300 "
            height="400"
            src="/placeholder.svg"
            width="600"
          />
        </div>
      </div>
    </div>
  );
}