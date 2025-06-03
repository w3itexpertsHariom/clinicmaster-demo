"use client"
import Link from "next/link";
import { IMAGES } from "../constant/theme";
import LightGallery from 'lightgallery/react';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import Image from "next/image";

function LightGalleryData() {
    return (        
        <div className="overflow-hidden">
            <LightGallery
                zoom={true}
                thumbnail={true}
                plugins={[lgThumbnail, lgZoom]}
                selector='.lightimg'
            >
                <div className="dz-img-wrapper" id="lightgallery">
                    <div className="left-wrapper">
                        <div className="dz-media media-lg">
                            <Link href={IMAGES.portfolio1.src} data-src={IMAGES.portfolio1} className="lg-item lightimg">
                                <Image src={IMAGES.portfolio1} alt="portfolio" />
                            </Link>
                        </div>
                        <div className="media-inner">
                            <div className="dz-media media-md">
                                <Link href={IMAGES.portfolio2.src} data-src={IMAGES.portfolio2} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio2} alt="portfolio" />
                                </Link>
                            </div>
                            <div className="dz-media media-sm">
                                <Link href={IMAGES.portfolio3.src} data-src={IMAGES.portfolio3} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio3} alt="portfolio" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-wrapper">
                        <div className="media-inner">
                            <div className="dz-media media-sm">
                                <Link href={IMAGES.portfolio4.src} data-src={IMAGES.portfolio4} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio4} alt="portfolio" />
                                </Link>
                            </div>
                            <div className="dz-media media-md">
                                <Link href={IMAGES.portfolio5.src} data-src={IMAGES.portfolio5} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio5} alt="" />
                                </Link>
                            </div>
                        </div>
                        <div className="dz-media media-lg">
                            <Link href={IMAGES.portfolio6.src} data-src={IMAGES.portfolio6} className="lg-item lightimg">
                                <Image src={IMAGES.portfolio6} alt="portfolio" />
                            </Link>
                        </div>
                    </div>
                    <div className="left-wrapper">
                        <div className="dz-media media-lg">
                            <Link href={IMAGES.portfolio1.src} data-src={IMAGES.portfolio1} className="lg-item lightimg">
                                <Image src={IMAGES.portfolio1} alt="portfolio" />
                            </Link>
                        </div>
                        <div className="media-inner">
                            <div className="dz-media media-md">
                                <Link href={IMAGES.portfolio2.src} data-src={IMAGES.portfolio2} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio2} alt="portfolio" />
                                </Link>
                            </div>
                            <div className="dz-media media-sm">
                                <Link href={IMAGES.portfolio3.src} data-src={IMAGES.portfolio3} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio3} alt="portfolio" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="right-wrapper">
                        <div className="media-inner">
                            <div className="dz-media media-sm">
                                <Link href={IMAGES.portfolio4.src} data-src={IMAGES.portfolio4} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio4} alt="portfolio" />
                                </Link>
                            </div>
                            <div className="dz-media media-md">
                                <Link href={IMAGES.portfolio5.src} data-src={IMAGES.portfolio5} className="lg-item lightimg">
                                    <Image src={IMAGES.portfolio5} alt="portfolio" />
                                </Link>
                            </div>
                        </div>
                        <div className="dz-media media-lg">
                            <Link href={IMAGES.portfolio6.src} data-src={IMAGES.portfolio6} className="lg-item lightimg">
                                <Image src={IMAGES.portfolio6} alt="portfolio" />
                            </Link>
                        </div>
                    </div>
                </div>
            </LightGallery >
        </div >        
    )
}
export default LightGalleryData;