import React from 'react';
import Logo from '../../assets/images/blockchain.png';
import { FiSettings } from 'react-icons/fi';
import { HiOutlineChevronLeft } from 'react-icons/hi2';
import { uiSelector } from '../../redux/ui/uiSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = () => {
    const state = useSelector(uiSelector);

    return (
        <header style={{ backdropFilter: "blur(10px)" }} className=' z-50 w-full border-b border-[#ffffff17] flex px-5 items-center justify-between  h-20 bg-[#8b324d81] fixed top-0 left-0'>
            <div className=" flex w-[60px] overflow-hidden items-center justify-center relative  h-full  ">
                <h2 className={` text-2xl text-slate-100 font-bold absolute duration-300 ${state.navigated && 'translate-x-[-4rem]'}`}>2023</h2>
                <div className={`absolute duration-300 left-0 ${!state.navigated && 'translate-x-16'}`}>
                    <Link to="/">
                        <HiOutlineChevronLeft className=' text-2xl text-slate-100 font-bold' />
                    </Link>
                </div>
            </div>

            <div className="">
                <img className=' cursor-pointer w-10' src={Logo} alt="" />
            </div>

            <div className=" text-2xl text-slate-100">
                <FiSettings />
            </div>
        </header>
    );
};
