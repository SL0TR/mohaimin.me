import { ScrollArea } from "@/components/ui/scroll-area";
import { summarySections } from "./summarySections";
import Link from "next/link";

export default function Summary() {
  // TODO: Add line numbers to the left of the text.
  return (
    <ScrollArea className="px-2 lg:px-4 xl:px-10 flex justify-center mt-5 2xl:mt-20 mb-10">
      {summarySections.map((section) => (
        <div key={section.title} className="mb-4">
          <p className="text-amber-600 2xl:text-lg text-sm">
            <span className="text-indigo-400">const </span>
            <span className="text-indigo-500"> {section.title} </span>
            <span className="text-indigo-400 dark:font-thin "> = </span>`
            <span className="font-thin">{section.content}`</span>
            <span className="dark:text-indigo-200 text-indigo-400">;</span>
          </p>
        </div>
      ))}
      <div className="h-[100px]" />
    </ScrollArea>
  );
}
