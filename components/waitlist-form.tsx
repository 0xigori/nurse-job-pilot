import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface WaitListProps {
  background?: 'light' | 'dark';
  buttonText?: string;
}

const buttonClass = {
  light: "bg-primary text-primary-foreground",
  dark: "bg-primary-foreground text-primary",
};

const inputClass = {
  light: "text-foreground placeholder:text-muted-foreground",
  dark: "bg-white/10 border-white/20 text-white placeholder:text-white/50 focus-visible:border-white/50 focus-visible:ring-white/20",
};

export function WaitListForm({ background = 'light', buttonText = "Join the waitlist" }: WaitListProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
      <Input
        type="text"
        className={`px-4 py-6 w-full sm:min-w-sm sm:w-auto placeholder:text-sm md:placeholder:text-base ${inputClass[background]}`}
        placeholder="Enter your email" />
      <Button className={`w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-6 ${buttonClass[background]}`}>
        <img src={background === "dark" ? "/icon-dark-32x32.png" : "/icon-light-32x32.png"} alt="NurseJobPilot Logo" className="h-4 w-4" />
        {buttonText}
      </Button>
    </div>
  )
}