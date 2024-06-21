
import * as React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';


export default function WebLayout({ children, }: Readonly<{
    children: React.ReactNode;
}>) {

    

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}