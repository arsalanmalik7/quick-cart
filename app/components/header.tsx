'use client';
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import React, { useState, useEffect } from "react"
import { ChevronDown } from "lucide-react";
import { Popover } from "antd";
import { useAppSelector } from "../hook";
import '../globals.css';
import axios from "axios";

const Header: React.FC = () => {



    const [showProducts, setShowProducts]: any = useState(false);
    const [animate, setAnimate] = useState(false);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (showProducts) {
            setAnimate(true);
        } else {
            const timer = setTimeout(() => setAnimate(false), 300);
            return () => clearTimeout(timer);
        }
    }, [showProducts]);

    const user: any = useAppSelector((state: any) => state.user.user);



    useEffect(() => {
        const fetchProductData = async () => {
            try {
                const fetcheProducts = await axios.get('/api/products');
                console.log(fetcheProducts.data);
                setProducts(fetcheProducts.data);
                console.log(products);
            } catch (error) {
                console.log(error);
            };
        };
        fetchProductData();
    }, [])

    const content = (
        <div className=" flex flex-col gap-2">
            {
                user.length !== 0 ? <Link
                    href="/account"
                    className="inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-green-500/10 hover:text-green-500"
                    prefetch={false}
                >
                    {user[0]?.firstName + " " + user[0]?.lastName}
                </Link>

                    :

                    <>
                        <Link
                            href="/account/login"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-green-500/10 hover:text-green-500"
                            prefetch={false}
                        >
                            Login
                        </Link>
                        <Link
                            href="/account/signup"
                            className="inline-flex items-center gap-2 px-3 py-2 rounded-md transition-colors hover:bg-green-500/10 hover:text-green-500"
                            prefetch={false}
                        >
                            Signup
                        </Link>
                    </>
            }
        </div>
    );

    const [isOpen, setIsOpen] = useState(false);
    return (
        <header className="flex flex-col items-center md:px-6  shadow dark:bg-gray-950 ">

            <div className=" flex p-4 justify-around  w-full items-center">
                <Link href="/" className="flex items-center gap-1" prefetch={false}>
                    <MountainIcon className="w-8 h-8 md:w-6 md:h-6 text-green-500" />
                    <span className="text-2xl md:text-lg font-bold text-green-500">Quick Cart</span>
                </Link>
                <div className=" flex gap-2 items-center">
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
                    <div className="md:flex hidden items-center gap-4">
                        <Button variant="ghost" size="icon" className="rounded-full  " onClick={() => setIsOpen(true)}>
                            <MenuIcon className="w-6 h-6" />
                            <span className="sr-only">Open navigation</span>
                        </Button>

                    </div>

                    <Popover content={content} className="m-2 md:hidden">
                        <div className=" p-3 text-blue-500  ">
                            <UserIcon className="w-6 h-6" />
                        </div>

                    </Popover>
                </div>
            </div>

            <div className=" w-full flex justify-center items-center">
                <nav className="flex md:hidden items-center justify-evenly gap-4 text-sm font-medium p-2  w-3/4" >
                    <Link
                        href="/"
                        className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                        prefetch={false}
                    >
                        Home
                    </Link>

                    <Link

                        href="#"
                        className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                        prefetch={false}
                    >
                        New Arrivals
                    </Link>
                    <div
                        onMouseEnter={() => {
                            setShowProducts(true)
                        }}
                        onClick={() => {
                            setShowProducts(!showProducts)
                        }}

                        className="flex items-center gap-4 justify-center hover:cursor-pointer px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                    >
                        Products <ChevronDown />
                    </div>
                    {
                        animate ? (

                            <div
                                onMouseLeave={() => setShowProducts(false)}
                                className={`absolute z-10 top-40 left-0 w-full justify-center items-center bg-white shadow-lg rounded-md p-4 flex flex-col gap-2 ${showProducts ? "slide-down" : "slide-up"
                                    }`}
                            >

                                <div className="flex gap-2 flex-wrap w-3/4">
                                    {products?.map((product: any) => (
                                        <Link
                                            key={product.id}
                                            href={`/products/${product.productName.toLowerCase().replace(/ /g, '-')}`}
                                            className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white flex-grow self-center text-center transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                        >

                                            {product.productName}

                                        </Link>
                                    ))}
                                </div>
                            </div>

                        )
                            :
                            null
                    }

                    <Link
                        href="#"
                        className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                        prefetch={false}
                    >
                        About
                    </Link>

                    <Link
                        href="#"
                        className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                        prefetch={false}
                    >
                        Beauty
                    </Link>
                    <Link
                        href="#"
                        className="px-3 py-3 ease-linear hover:rounded-full bg-green-500 rounded text-white  flex-grow self-center text-center  transition-colors hover:bg-green-500/10 hover:font-bold hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                        prefetch={false}
                    >
                        Sports
                    </Link>



                </nav>
            </div>

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
                            <Link href="/" className="flex items-center gap-2" prefetch={false}>
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
                                    href="/"
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
                                    Beauty
                                </Link>
                                <Link
                                    href="#"
                                    className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                    prefetch={false}
                                >
                                    Sports
                                </Link>
                                {
                                    user.length !== 0 ?
                                        <Link
                                            href="/account"
                                            className="px-2 py-2 flex gap-1 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                            prefetch={false}
                                        >
                                            <UserIcon className="w-5 h-5" />
                                            {user[0]?.firstName + " " + user[0]?.lastName}
                                        </Link>
                                        :
                                        <Link
                                            href="/account/login"
                                            className="px-3 py-2 rounded-full transition-colors hover:bg-green-500/10 hover:text-green-500 data-[active=true]:bg-green-500/20 data-[active=true]:text-green-500"
                                            prefetch={false}
                                        >
                                            <span className=" flex gap-2">
                                                <UserIcon className="w-5 h-5" />
                                                Login
                                            </span>
                                        </Link>
                                }
                            </div>

                        </nav>
                    </div>
                </div>
            </div>



        </header>
    )
};

export default Header;

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
