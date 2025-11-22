"use server";

import { z } from "zod";
import prisma from "@/lib/db";
import { revalidatePath } from "next/cache";
import { Priority, DeadlineStatus } from "@prisma/client";

// Validation Schema
const CreateDeadlineSchema = z.object({
    title: z.string().min(1, "Title is required"),
    dueDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: "Invalid date",
    }),
    priority: z.nativeEnum(Priority),
});

export async function getDeadlines() {
    try {
        // In a real app, we would filter by the authenticated user's business
        // For now, we just fetch all deadlines
        const deadlines = await prisma.deadline.findMany({
            orderBy: {
                dueDate: "asc",
            },
        });
        return { success: true, data: deadlines };
    } catch (error) {
        console.error("Failed to fetch deadlines:", error);
        return { success: false, error: "Failed to fetch deadlines" };
    }
}

export async function createDeadline(formData: FormData) {
    const rawData = {
        title: formData.get("title"),
        dueDate: formData.get("dueDate"),
        priority: formData.get("priority"),
    };

    const result = CreateDeadlineSchema.safeParse(rawData);

    if (!result.success) {
        return { success: false, error: result.error.flatten().fieldErrors };
    }

    const { title, dueDate, priority } = result.data;

    try {
        // 1. Find or Create a Default Business (Temporary Logic)
        let business = await prisma.business.findFirst();

        if (!business) {
            business = await prisma.business.create({
                data: {
                    name: "My Florida Business",
                    entityType: "LLC",
                },
            });
        }

        // 2. Create the Deadline
        await prisma.deadline.create({
            data: {
                title,
                dueDate: new Date(dueDate),
                priority,
                status: DeadlineStatus.PENDING,
                businessId: business.id,
            },
        });

        revalidatePath("/dashboard/deadlines");
        return { success: true };
    } catch (error) {
        console.error("Failed to create deadline:", error);
        return { success: false, error: "Failed to create deadline" };
    }
}
