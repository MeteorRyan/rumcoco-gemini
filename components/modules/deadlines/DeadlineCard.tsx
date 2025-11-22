import { format } from "date-fns";
import { CalendarDays, AlertCircle } from "lucide-react";
import { cn } from "@/components/ui/button";
import { Deadline, Priority } from "@prisma/client";

interface DeadlineCardProps {
    deadline: Deadline;
}

export function DeadlineCard({ deadline }: DeadlineCardProps) {
    const priorityStyles = {
        [Priority.HIGH]: "border-neon-pink text-neon-pink bg-neon-pink/5",
        [Priority.MEDIUM]: "border-pineapple-yellow text-pineapple-yellow bg-pineapple-yellow/5",
        [Priority.LOW]: "border-palm-green text-palm-green bg-palm-green/5",
    };

    return (
        <div className="group relative overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                    <div className={cn("p-2 rounded-lg", priorityStyles[deadline.priority])}>
                        <CalendarDays className="h-5 w-5" />
                    </div>
                    <div>
                        <h3 className="font-semibold text-charcoal group-hover:text-neon-pink transition-colors">
                            {deadline.title}
                        </h3>
                        <p className="text-sm text-gray-500">
                            Due: {format(new Date(deadline.dueDate), "MMM dd, yyyy")}
                        </p>
                    </div>
                </div>
                <span
                    className={cn(
                        "px-2 py-1 rounded-full text-xs font-medium border",
                        priorityStyles[deadline.priority]
                    )}
                >
                    {deadline.priority}
                </span>
            </div>

            <div className="w-full bg-gray-100 h-1 rounded-full overflow-hidden">
                <div
                    className={cn("h-full rounded-full", priorityStyles[deadline.priority].split(" ")[1].replace("text-", "bg-"))}
                    style={{ width: "0%" }} // Dynamic progress could go here
                />
            </div>
        </div>
    );
}
