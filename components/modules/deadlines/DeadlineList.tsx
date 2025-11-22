import { Deadline } from "@prisma/client";
import { DeadlineCard } from "./DeadlineCard";

interface DeadlineListProps {
    deadlines: Deadline[];
}

export function DeadlineList({ deadlines }: DeadlineListProps) {
    if (deadlines.length === 0) {
        return (
            <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
                <p className="text-gray-500">No deadlines found. Create one to get started!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deadlines.map((deadline) => (
                <DeadlineCard key={deadline.id} deadline={deadline} />
            ))}
        </div>
    );
}
