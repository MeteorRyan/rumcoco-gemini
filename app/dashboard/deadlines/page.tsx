import { getDeadlines } from "@/app/actions/deadline-actions";
import { CreateDeadlineForm } from "@/components/modules/deadlines/CreateDeadlineForm";
import { DeadlineList } from "@/components/modules/deadlines/DeadlineList";

export default async function DeadlinesPage() {
    const { data: deadlines } = await getDeadlines();

    return (
        <div className="space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-charcoal">Deadlines</h1>
                    <p className="text-gray-500">Manage your compliance schedule.</p>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Main List Area */}
                <div className="lg:col-span-2">
                    <DeadlineList deadlines={deadlines || []} />
                </div>

                {/* Sidebar / Create Form */}
                <div>
                    <CreateDeadlineForm />
                </div>
            </div>
        </div>
    );
}
