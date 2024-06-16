
import * as React from 'react';
import Link from 'next/link';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Footer = () => {
    return (
        <footer className="bg-gray-950 shadow dark:bg-gray-950 py-8 px-4 md:px-6">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex items-center gap-2">
                    <MountainIcon className="w-6 h-6 text-green-500" />
                    <span className="text-lg font-bold text-green-500">Quick Cart</span>
                </div>
                <div className="md:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
                    <div className="grid gap-2">
                        <h4 className="text-sm font-medium text-gray-300">Company</h4>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            About
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Contact
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Careers
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-medium text-gray-300">Shop</h4>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Electronics
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Clothing
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Home
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Beauty
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Sports
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-medium text-gray-300">Support</h4>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Help Center
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Returns
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Shipping
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            FAQs
                        </Link>
                    </div>
                    <div className="grid gap-2">
                        <h4 className="text-sm font-medium text-gray-300">Legal</h4>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Terms of Service
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="#"
                            className="text-sm text-gray-400 hover:text-green-500 dark:text-gray-400 dark:hover:text-green-500"
                            prefetch={false}
                        >
                            Cookie Policy
                        </Link>
                    </div>
                </div>
                <div className="col-span-1 md:col-span-3 flex flex-col md:flex-row items-center md:items-end gap-4 md:justify-between">
                    <div className="flex items-center gap-2">
                        <MailIcon className="w-5 h-5 text-gray-400 dark:text-gray-400" />
                        <span className="text-sm text-gray-400 dark:text-gray-400">Subscribe to our newsletter:</span>
                    </div>
                    <form className="flex gap-2">
                        <Input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full rounded-full bg-gray-800 dark:bg-gray-800 focus:bg-gray-950 focus:ring-2 focus:ring-green-500 focus:outline-none"
                        />
                        <Button type="submit" className="rounded-full bg-green-500 hover:bg-green-600 text-white">
                            Subscribe
                        </Button>
                    </form>
                </div>
            </div>
        </footer>
    );
};
export default Footer;

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

function MailIcon(props: any) {
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
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
    )
}
