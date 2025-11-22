"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
    LayoutDashboard,
    CalendarDays,
    Lock,
    Briefcase,
    GraduationCap,
    Settings
} from "lucide-react";
import { cn } from "@/components/ui/button"; // Reusing cn utility

const navItems = [
    { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
    { name: "Deadlines", href: "/dashboard/deadlines", icon: CalendarDays },
    { name: "Vault", href: "/dashboard/vault", icon: Lock },
    { name: "Formation", href: "/dashboard/formation", icon: Briefcase },
    { name: "Academy", href: "/dashboard/academy", icon: GraduationCap },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <aside className="fixed left-0 top-0 z-40 h-screen w-64 bg-charcoal text-white border-r border-white/10 flex flex-col">
            {/* Logo Area */}
            <div className="h-16 flex items-center px-6 border-b border-white/10">
                <h1 className="text-2xl font-bold text-neon-pink tracking-tight">
                    RumCoCo
                </h1>
            </div>

            {/* Navigation */}
            <nav className="flex-1 px-4 py-6 space-y-2">
                {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                                isActive
                                    ? "bg-white/5 text-palm-green shadow-[0_0_10px_rgba(76,154,42,0.2)] border-l-2 border-palm-green"
                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                            )}
                        >
                            <item.icon className={cn("h-5 w-5", isActive ? "text-palm-green" : "text-gray-400")} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-white/10">
                <button className="flex items-center gap-3 px-4 py-3 w-full rounded-lg text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-colors">
                    <Settings className="h-5 w-5" />
                    Settings
                </button>
            </div>
        </aside>
    );
}
