import React from 'react';
import './GetStart.css';
import { useContext } from "react";
import { LoggedIn } from "../App";
import SignIn from './SignIn';
import FormInput from '../components/FormInput';




export default function GetStart() {
    const { isLoggedIn } = useContext(LoggedIn);
    
    return (
        <section>

            {isLoggedIn ? (
        <div className="section-hero text-center">

                <div className="flex ">
                <div className="platinum-hero blockk w-full">
                    <div className="choose-option">
                        <a href="/">
                            "platinum"
                            <br />
                            "Membership"
                        </a>
                        <hr />
                    </div>
                </div>
                <div className="classic-hero blockk w-full">
                    <div className="choose-option">
                        <a href="/">
                            "club"
                            <br />
                            "based"
                            <br />
                            "membership"
                        </a>
                        <hr />
                    </div>
                </div>
            </div>
            
            </div>
            ):(
                <div className='flex flex-col leading-10 align-middle items-center'>
                    <FormInput/>
                    <div className='pr-48 mb-10'>
                    <SignIn/>
                    </div>
                </div>
            )}
        </section>

    )
}
