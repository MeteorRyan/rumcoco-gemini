"use client";

import { createDeadline } from "@/app/actions/deadline-actions";
import { Button } from "@/components/ui/button";
import { Priority } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRef } from "react";

export function CreateDeadlineForm() {
    const formRef = useRef<HTMLFormElement>(null);

    async function action(formData: FormData) {
        const result = await createDeadline(formData);
        if (result?.success) {
            formRef.current?.reset();
            // Ideally show a toast here
        } else {
            console.error(result?.error);
        }
    }

    return (
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-semibold text-charcoal mb-4 flex items-center gap-2">
                <Plus className="h-5 w-5 text-neon-pink" />
                New Deadline
            </h3>
            <form ref={formRef} action={action} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Title
                    </label>
                    <input
                        name="title"
                        type="text"
                        required
                        placeholder="e.g. Annual Report Filing"
                        className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date
                        </label>
                        <input
                            name="dueDate"
                            type="date"
                            required
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Priority
                        </label>
                        <select
                            name="priority"
                            className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-neon-pink focus:ring-1 focus:ring-neon-pink transition-all bg-white"
                        >
                            <option value={Priority.MEDIUM}>Medium</option>
                            <option value={Priority.HIGH}>High</option>
                            <option value={Priority.LOW}>Low</option>
                        </select>
                    </div>
                </div>

                <Button className="w-full bg-neon-pink hover:bg-[#e55eb0] text-white font-bold shadow-md hover:shadow-lg transition-all">
                    Create Deadline
                </Button>
            </form>
        </div>
    );
}
