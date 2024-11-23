import React from 'react';
import InteractiveImg from '@/components/ui/InteractiveImg';
import NavBar from '@/components/ui/NavBar';

const Main = () => {
    return (
        <>
            <NavBar />
            <InteractiveImg
                src="/logo.png"
                alt="Example Image 2"
                width="400"
                height="300"
            />
        </>
    );
};

export default Main;
