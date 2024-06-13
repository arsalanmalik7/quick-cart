'use client';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex items-center justify-between h-16 px-4 md:px-6 bg-violet-100 shadow dark:bg-gray-950">
            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                <MountainIcon className="w-6 h-6 text-green-500" />
                <span className="text-lg font-bold text-green-500">Quick Cart</span>
            </Link>
            <div className="flex-1 max-w-md mx-4">
                <div className="relative">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
                    <Input
                        type="search"
                        placeholder="Search products..."
                        className="pl-10 w-full rounded-full bg-slate-50 dark:bg-gray-800 focus:bg-white focus:ring-2 focus:ring-green-500 focus:outline-none"
                    />
                </div>
            </div>
            <nav className="hidden md:flex items-center gap-4 text-sm font-medium">
                <Link
                    href="#"
                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    prefetch={false}
                >
                    Electronics
                </Link>
                <Link
                    href="#"
                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    prefetch={false}
                >
                    Clothing
                </Link>
                <Link
                    href="#"
                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    prefetch={false}
                >
                    Home
                </Link>
                <Link
                    href="#"
                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    prefetch={false}
                >
                    Beauty
                </Link>
                <Link
                    href="#"
                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    prefetch={false}
                >
                    Sports
                </Link>
            </nav>

            <div
                className={`fixed top-0 left-0 z-50 h-full w-full bg-gray-900/50 transition-all duration-300 ${isOpen ? "visible opacity-100" : "invisible opacity-0"
                    }`}
                onClick={() => setIsOpen(false)}
            >
                <div
                    className={`absolute top-0 left-0 h-full w-[80%] max-w-[320px] bg-white dark:bg-gray-950 shadow-lg transition-all duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                        }`}
                >
                    <div className="flex flex-col h-full">
                        <div className="flex items-center justify-between h-16 px-4 border-b">
                            <Link href="#" className="flex items-center gap-2" prefetch={false}>
                                <MountainIcon className="w-6 h-6 text-green-500" />
                                <span className="text-lg font-bold text-green-500">Quick Cart</span>
                            </Link>
                            <Button variant="ghost" size="icon" className="rounded-full" onClick={() => setIsOpen(false)}>
                                <XIcon className="w-6 h-6" />
                                <span className="sr-only">Close navigation</span>
                            </Button>
                        </div>
                        <nav className="flex-1 px-4 py-6 overflow-y-auto">
                            <div className="grid gap-4 text-sm font-medium">
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Electronics
                                </Link>
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Clothing
                                </Link>
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Beauty
                                </Link>
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Sports
                                </Link>
                                <Link
                                    href="/login"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    <span className=" flex gap-2">
                                        <UserIcon className="w-5 h-5" />
                                        Login
                                    </span>
                                </Link>
                            </div>

                        </nav>
                    </div>
                </div>
            </div>



            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon" className="rounded-full  md:hidden " onClick={() => setIsOpen(true)}>
                    <MenuIcon className="w-6 h-6" />
                    <span className="sr-only">Open navigation</span>
                </Button>
                <Link
                    href="/login"
                    className="hidden md:inline-flex items-center gap-2 px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500"
                    prefetch={false}
                >
                    <UserIcon className="w-5 h-5" />
                    Login
                </Link>

            </div>
        </header>
    )
}

function MountainIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
        </svg>
    )
}


function SearchIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
        </svg>
    )


}
function UserIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
function XIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}

function MenuIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
        </svg>
    )
}