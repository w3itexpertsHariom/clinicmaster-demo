"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import React, { Fragment, useEffect, useRef, useState } from "react";
import { menudata } from "../constant/alldata";
import emailjs from '@emailjs/browser'; 
import ShopSidebar from "../component/shopsidebar";
import Image from "next/image";

interface MenuItem {
  id?: string | number;
  title: string;
  to?: string;
  image?: string;
  classChange?: string;
  content: { id?: string | number; title: string; to: string; image?: any }[];
}

function Header() { 
    const [show, setShow] = useState<number | null>(null);
    const [isActive, setIsActive] = useState<number | null>(null);
    const [scroll, setScroll] = useState(false);
    // toggle show 
    const handleclick = (index : number) => {
        setShow(index)
        console.log(index)
    }; 
    function menuHandler(index : number) {
        if (isActive == index) {
            setIsActive(null)
        }
        else {
            setIsActive(index)
        }
    } 
    // is-fixed 
    function scrollHandler() {
        if (window.scrollY >= 90) {
            setScroll(true)
        }
        else {
            setScroll(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)
        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [])
   const form = useRef<HTMLFormElement | null>(null); 
    const sendEmail = (e : React.FormEvent<HTMLFormElement>) => {
        e.preventDefault(); 
        if (!form.current) return;
        emailjs.sendForm('service_61hny88', 'template_vvlidif', form.current, {publicKey: 'aYOgb_ORYkjD-hXhl',})
        .then((result) => {
            console.log('SUCCESS!', result.text);
        },(error) => {
            console.log('FAILED...', error.text);
        },
        );
    }; 
    return (
        <>
            <header className="site-header header header-transparent style-2 header-light header-toggle">
                <div className={`sticky-header main-bar-wraper ${scroll ? 'is-fixed' : ''}`}>
                    <div className="main-bar clearfix">
                        <div className="container-fluid clearfix inner-bar">
                            <div className="extra-nav-left">
                                <button onClick={() => handleclick(1)} 
                                    type="button" className="toggler1" data-bs-toggle="offcanvas"                                     
                                >
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </button>
                            </div>
                            <div className="logo-header logo-light">
                                <Link href="/"><Image src={IMAGES.logowhite} alt="logo" /></Link>
                            </div>
                            <div className="logo-header logo-dark">
                                <Link href="/"><Image src={IMAGES.logo} alt="logo" /></Link>
                            </div>
                            <button onClick={() => handleclick(3)} className={`w3menu-toggler navicon ${show ? 'open' : ''}`} type="button" data-target="#W3Menu">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                            <div onClick={() => setShow(null)} className="menu-close fade-overlay"></div>
                            <div className={show == 3 ? 'header-nav w3menu w3menu-start mo-left show' : 'header-nav w3menu w3menu-start mo-left'} id="W3Menu">
                                <div className="logo-header logo-dark">
                                    <Link href="/"><Image src={IMAGES.logo} alt="" /></Link>
                                </div>
                                <ul className="nav navbar-nav">
                                    {menudata.map((data : MenuItem, i : number) => (
                                        <Fragment key={i}>
                                            {data.classChange && data.classChange.includes('has-mega-menu') ? (
                                                <li className={`has-mega-menu sub-menu-down auto-width menu-left ${i === isActive ? 'open' : ''}`}>
                                                    <Link onClick={() => menuHandler(i)} href={"#"} scroll={false}>
                                                        <span>{data.title}</span>
                                                        <i className="fas fa-chevron-down tabIndex" />
                                                    </Link>
                                                    <div className="mega-menu">
                                                        <ul className="demo-menu">
                                                            {data.content.map((item, index) => (
                                                                <li key={index}>
                                                                    <Link href={item.to}>
                                                                        <Image src={item.image} alt={"demo"} />
                                                                        <span className="menu-title">{item.title}</span>
                                                                    </Link>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                </li>
                                            ) : (
                                                <li className={`sub-menu-down ${i === isActive ? 'open' : ''}`}>
                                                    <Link onClick={() => menuHandler(i)} href={"#"} scroll={false}>
                                                        <span>{data.title}</span>
                                                        <i className="fas fa-chevron-down tabIndex" />
                                                    </Link>
                                                    <ul className="sub-menu">
                                                        {data.content.map((item, index) => (
                                                            <li key={index}>
                                                                <Link href={item.to}>{item.title}</Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </li>
                                            )}
                                        </Fragment>
                                    ))}
                                </ul>
                                <div className="dz-social-icon">
                                    <ul>
                                        <li> <Link href="https://www.linkedin.com/showcase/dexignzone/" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                        <li> <Link href="https://www.instagram.com/dexignzone/" target="_blank"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                        <li> <Link href="https://www.facebook.com/dexignzone" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                        <li> <Link href="https://x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                    </ul>
                                </div>
                            </div>
                            <div className={`extra-nav ${scroll ? 'active' : ''}`}>             
                                <div className="extra-cell">
                                    <ul className="header-right">
                                        <li onClick={() => handleclick(2)} className="nav-item">
                                            <Link href={"#"} scroll={false} className="nav-link cart-btn" data-bs-toggle="offcanvas" data-bs-target="#sidebarCart" aria-controls="sidebarCart">
                                                <i className="feather icon-shopping-cart" />
                                                <span className="badge badge-circle">5</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item item-call">
                                            <div className="info-widget style-5">
                                                <div className="widget-media">
                                                    <i className="feather icon-phone-call dz-ring-effect" />
                                                </div>
                                                <div className="widget-content">
                                                    <h6 className="title text-primary">Contact us?</h6>
                                                    <Link href="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>
                                                </div>
                                            </div>
                                        </li>
                                        <li className="nav-item item-btn">
                                            <Link href="/appointment" className="btn btn-primary btn-hover1"> Appointment </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show == 1 ? 'show' : ''}`} tabIndex={-1} id="headerSidebar">
                    <button onClick={() => setShow(null)} type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    <div className="offcanvas-body">
                        <div className="widget">
                            <div className="sidebar-header m-b20">
                                <Link href="/"><Image src={IMAGES.logo} alt="/" /></Link>
                            </div>
                            <p>ClinicMaster is a modern and responsive Bootstrap HTML template designed for health and medical websites. Ideal for clinics, hospitals, and healthcare professionals seeking a professional online presence with an elegant and user-friendly design.</p>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Contact Us</h4>
                            </div>
                            <ul className="list-check">
                                <li>785 15h Street, Office 478 Berlin, De 81566</li>
                                <li><Link href="mailto:email@domain.com" className="text-body">email@domain.com</Link></li>
                                <li><Link href="tel:+11234567890" className="text-body">+1 123 456 7890</Link></li>
                            </ul>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Newsletter</h4>
                            </div>
                            <form className="dzSubscribe style-2" ref={form} onSubmit={sendEmail} method="post">
                                <div className="dzSubscribeMsg"></div>
                                <div className="form-group">
                                    <div className="input-group mb-0">
                                        <input name="dzEmail" required type="email" className="form-control" placeholder="Your Email Address" />
                                        <div className="input-group-addon">
                                            <button name="submit" value="Submit" type="submit" className="btn text-primary btn-transparent p-2">
                                                <i className="fa-solid fa-paper-plane" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="widget">
                            <div className="widget-title">
                                <h4 className="title">Follow Us</h4>
                            </div>
                            <div className="dz-social-icon style-1">
                                <ul>
                                    <li> <Link href="https://www.linkedin.com/showcase/dexignzone/" target="_blank"> <i className="fa-brands fa-linkedin" /> </Link> </li>
                                    <li> <Link href="https://www.instagram.com/dexignzone/" target="_blank"> <i className="fa-brands fa-instagram" /> </Link> </li>
                                    <li> <Link href="https://www.facebook.com/dexignzone" target="_blank"> <i className="fa-brands fa-facebook-f" /> </Link> </li>
                                    <li> <Link href="https://x.com/dexignzone" target="_blank"> <i className="fa-brands fa-x-twitter" /> </Link> </li>
                                    <li> <Link href="https://www.youtube.com/@dexignzone" target="_blank"> <i className="fa-brands fa-youtube" /> </Link> </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`offcanvas dz-offcanvas offcanvas offcanvas-end ${show == 2 ? 'show' : ''}`} tabIndex={-1} id="sidebarCart">
                    <button onClick={() => setShow(null)} type="button" className="btn-close m-t10 m-l10" data-bs-dismiss="offcanvas"></button>
                    <div className="offcanvas-body">
                        <ShopSidebar/>
                    </div>
                </div>
            </header >
        </>
    );
}
export default Header;