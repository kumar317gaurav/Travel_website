import React,{useEffect} from "react";
import './footer.css'
import video from '../../Assets/video2.mp4'
import {FiSend} from 'react-icons/fi'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillYoutube} from 'react-icons/ai'
import {AiFillInstagram} from 'react-icons/ai'
import {FaTripadvisor} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Footer=()=>{

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className="footer">
            <div className="videoDiv">
                <video src={video} loop autoPlay muted type="video/mp4"></video>
            </div>

            <div className="secContent container">
                <div className="contactDiv flex">
                    <div data-aos="fade-up" className="text">
                        <small>KEEP IN TOUCH</small>
                        <h2>Travel with us</h2>
                    </div>

                    <div className="inputDiv flex">
                        <input type="text" placeholder='Enter Email Address' />
                        <button className="btn flex" type='submit'>
                            SEND <FiSend className="icon"/> 
                        </button>
                    </div>
                </div>

                <div className="footerCard flex">
                    <div className="footerIntro flex">
                        <div className="logoDiv">
                            <a href="#" className="logo flex">
                               <MdOutlineTravelExplore className="icon"/> Travel
                            </a>
                        </div>

                        <div data-aos="fade-up" className="footerPragraph">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum expedita nihil, debitis in esse repellat, vero similique obcaecati incidunt architecto pariatur voluptate tempora repudiandae reprehenderit deleniti quo dolor! Ducimus, sunt?
                        </div>

                        <div data-aos="fade-up" className="footerSocials">
                                <AiOutlineTwitter className="icon"/>
                                <AiFillYoutube className="icon"/>
                                <AiFillInstagram className="icon"/>
                                <FaTripadvisor className="icon"/>
                        </div>

                    </div>

                    <div className="footerlinks grid">

                         <div data-aos="fade-up" data-aos-duration="3000" className="linkgroup">
                            <span className="groupTitle">
                                OUR AGENCY
                            </span>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Services
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Insurance
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Agency
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Tourism
                            </li>
                            
                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Payment
                            </li>
                         </div>

                         <div data-aos="fade-up" data-aos-duration="4000" className="linkgroup">
                            <span className="groupTitle">
                                PARTNERS
                            </span>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Bookings
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Rentcars
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                HostelWorld
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Trivago
                            </li>
                            
                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                TripAdviser
                            </li>
                         </div>

                         <div data-aos="fade-up" data-aos-duration="6000" className="linkgroup">
                            <span className="groupTitle">
                                LAST MINUTE
                            </span>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                London
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                California
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Indonesia
                            </li>

                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Europe
                            </li>
                            
                            <li className="footerList">
                                <FiChevronRight className="icon"/>
                                Oceania
                            </li>
                         </div>
                    </div>

                    <div className="footerDiv flex">
                        <small> BEST TRAVEL WEBSITE THEME</small>
                        <small>COPYRIGHTS RESERVED-KRG 2023</small>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Footer