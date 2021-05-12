import React from 'react';
import AfterTrioCards from '../AfterTrioCards/AfterTrioCards';
import FourthBody from '../FourthBody/FourthBody';
import Home from '../Home/Home';
import SecondBody from '../SecondBody/SecondBody'
import SideBar from '../SideBar/SideBar';
import ThirdBodysImg from '../ThirdBodysImg/ThirdBodysImg';
import TopicCard from '../TopicCard/TopicCard';
import TopicList from '../TopicList/TopicList';
import TrioTitle from '../TrioTitle/TrioTitle';

const MainPage = () => {
    return (
        <>
            <Home/>
            <SecondBody/>
            <ThirdBodysImg/>
            <TrioTitle/>
            <AfterTrioCards/>
            <FourthBody/>
            {/* <TopicCard/> */}
            <SideBar/>
            <TopicList/>
        </>
    );
};

export default MainPage;