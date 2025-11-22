import { Search, Bell, User } from "lucide-react";

export function TopNav() {
    return (
        <header className="fixed top-0 left-64 right-0 z-30 h-16 bg-white/95 backdrop-blur-sm border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
            {/* Search Bar */}
            <div className="flex items-center w-full max-w-md bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-neon-pink/50 focus-within:bg-white transition-all">
                <Search className="h-4 w-4 text-gray-400" />
                <input
                    type="text"
                    placeholder="Search deadlines, documents, or clients..."
                    className="flex-1 bg-transparent border-none focus:ring-0 text-sm px-3 outline-none text-gray-700 placeholder:text-gray-400"
                />
            </div>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
                <button className="relative text-gray-500 hover:text-neon-pink transition-colors">
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-neon-pink rounded-full border-2 border-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-6 border-l border-gray-200">
                    <div className="text-right hidden md:block">
                        <p className="text-sm font-medium text-gray-900">Demo User</p>
                        <p className="text-xs text-gray-500">Owner</p>
                    </div>
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-pink to-purple-500 flex items-center justify-center text-white shadow-md">
                        <User className="h-5 w-5" />
                    </div>
                </div>
            </div>
        </header>
    );
}
