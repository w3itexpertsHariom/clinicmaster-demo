"use client"
import { useState } from "react";
import Link from "next/link";
import { pricingplandata } from "../constant/alldata";
import Image from "next/image";

function Faqdata() {
    const [isYearly, setIsYearly] = useState(true);
    
    return (
        <>
            <div className={`toggle-tabs toggle-tabs1 wow fadeInUp ${isYearly ? 'yearly' : 'monthly'}`} data-wow-delay="0.4s" data-wow-duration="0.8s">
                <span className={`monthly ${!isYearly ? 'active' : ''}`} onClick={() => setIsYearly(false)} >Monthly</span>
                <span className={`yearly ${isYearly ? 'active' : ''}`} onClick={() => setIsYearly(true)}>Yearly</span>
            </div>
            <div className="row">
                {pricingplandata.map((data, i) => (
                    <div className="col-xl-6 m-b30 wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s" key={i}>
                        <div className="pricingtable-wrapper style-2">
                            <div className="pricingtable-inner">
                                <div className="dz-media">
                                    <Image src={data.image} alt="price" />
                                </div>
                                <div className="pricingtable-info">
                                    <div className={`pricingtable-price month ${isYearly ? 'd-none' : 'd-block'}`}>
                                        <h2 className="pricingtable-bx">{data.month}<small>/ Monthly</small></h2>
                                    </div>
                                    <div className={`pricingtable-price year ${isYearly ? 'd-block' : 'd-none'}`}>
                                        <h2 className="pricingtable-bx">{data.year}<small>/ Yearly</small></h2>
                                    </div>
                                    <div className="pricingtable-title">
                                        <h3 className="title">{data.title}</h3>
                                    </div>
                                    <div className="pricingtable-list">
                                        {data.feature}
                                    </div>
                                    <div className="pricingtable-button">
                                        <Link href="/pricing-table" className="btn btn-secondary w-100 btn-hover1"><span>Choose Plans</span></Link>
                                    </div>
                                </div>
                            </div>
                            <span className="vertical-text">{data.vertical}</span>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
export default Faqdata;