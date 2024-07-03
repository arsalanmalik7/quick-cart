import React from "react";
import { Carousel } from "antd";
import Image from "next/image";
import mobile from '../../../public/mobile.jpg';
import mobile2 from '../../../public/mobile2.jpg';
import mobile3 from '../../../public/mobile3.jpg';
import './carousel.css'; // Import the custom CSS file

const Home: React.FC = () => {

    const contentStyle: React.CSSProperties = {
        height: '600px',
        width: '100%',
        textAlign: 'center',
    };

    return (
        <>
            <Carousel autoplay speed={700} arrows={true}  draggable className="w-full p-2">
                <div>
                    <Image style={contentStyle} src={mobile} alt="mobile" className=" object- w-full h-full" />
                </div>
                <div>
                    <Image style={contentStyle} src={mobile2} alt="mobile" className=" object- w-full h-full" />
                </div>
                <div>
                    <Image style={contentStyle} src={mobile3} alt="mobile" className=" object- w-full h-full" />
                </div>
            </Carousel>
        </>
    );
}

export default Home;
