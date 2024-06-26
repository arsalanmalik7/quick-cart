import Header from "../../components/header";
import Footer from "../../components/footer";
import  GetProfile  from "./getProfile";


export default function WebLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {



    return (
        <>
            <GetProfile />
            <Header />
            {children}
            <Footer />
        </>
    );
}