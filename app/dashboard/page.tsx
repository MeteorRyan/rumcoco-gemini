import { CalendarDays, CheckCircle2, AlertCircle } from "lucide-react";

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Welcome Card */}
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-charcoal to-[#2a2a2a] p-8 shadow-lg">
                <div className="relative z-10">
                    <h1 className="text-3xl font-bold text-white mb-2">
                        Welcome back to Paradise, <span className="text-neon-pink">Demo User</span>
                    </h1>
                    <p className="text-gray-400 max-w-xl">
                        Your business compliance is on track. You have 2 upcoming deadlines this week.
                    </p>
                </div>
                {/* Decorative Palm Leaf Effect (CSS/SVG could go here) */}
                <div className="absolute right-0 top-0 h-full w-1/3 bg-gradient-to-l from-palm-green/10 to-transparent pointer-events-none" />
            </div>

            {/* Dashboard Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {/* Upcoming Deadlines */}
                <div className="col-span-2 bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-lg font-semibold text-charcoal flex items-center gap-2">
                            <CalendarDays className="h-5 w-5 text-neon-pink" />
                            Upcoming Deadlines
                        </h2>
                        <button className="text-sm text-gray-500 hover:text-neon-pink">View All</button>
                    </div>

                    <div className="space-y-4">
                        {/* Dummy Item 1 */}
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-neon-pink/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
                                    <AlertCircle className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Florida Annual Report</p>
                                    <p className="text-sm text-gray-500">Due: May 1, 2025</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-orange-100 text-orange-700">
                                High Priority
                            </span>
                        </div>

                        {/* Dummy Item 2 */}
                        <div className="flex items-center justify-between p-4 rounded-lg bg-gray-50 border border-gray-100 hover:border-neon-pink/30 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                                    <CheckCircle2 className="h-5 w-5" />
                                </div>
                                <div>
                                    <p className="font-medium text-charcoal">Sales Tax Filing (Monthly)</p>
                                    <p className="text-sm text-gray-500">Due: Nov 20, 2025</p>
                                </div>
                            </div>
                            <span className="px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                                Upcoming
                            </span>
                        </div>
                    </div>
                </div>

                {/* Quick Stats / Status */}
                <div className="space-y-6">
                    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                        <h3 className="text-sm font-medium text-gray-500 mb-4">Compliance Score</h3>
                        <div className="flex items-end gap-2">
                            <span className="text-4xl font-bold text-palm-green">92%</span>
                            <span className="text-sm text-gray-400 mb-1">Excellent</span>
                        </div>
                        <div className="w-full bg-gray-100 h-2 rounded-full mt-3 overflow-hidden">
                            <div className="bg-palm-green h-full rounded-full" style={{ width: "92%" }} />
                        </div>
                    </div>

                    <div className="bg-palm-green/10 rounded-xl p-6 border border-palm-green/20">
                        <h3 className="font-semibold text-palm-green mb-2">Quick Action</h3>
                        <p className="text-sm text-gray-600 mb-4">
                            Need to file a new document or add a credential?
                        </p>
                        <button className="w-full bg-palm-green text-white py-2 rounded-lg font-medium hover:bg-[#3d7d22] transition-colors shadow-sm">
                            + Add New Item
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}
