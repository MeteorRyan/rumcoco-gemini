"use server";

import prisma from "@/lib/db";

export async function getDatabaseStatus() {
    try {
        const userCount = await prisma.user.count();
        return { success: true, count: userCount, message: "Connected to Supabase!" };
    } catch (error) {
        console.error("Database connection error:", error);
        return { success: false, error: "Failed to connect to database." };
    }
}
