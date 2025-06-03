import Link from "next/link";
import PageBanner from "@/component/PageBanner";
import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import Sidebar from "@/component/Sidebar";
import { blogdata } from "@/constant/alldata";
import Image from "next/image";

function BlogGrid() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Blog Grid"} />
                <section className="content-inner bg-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-12 m-b30">
                                <div className="row loadmore-content">
                                    {blogdata.map((data, i) => (
                                        <div className="col-md-6 m-b30 wow fadeInUp" data-wow-delay={data.delay} data-wow-duration="0.8s" key={i}>
                                            <div className="dz-card style-4">
                                                <div className="dz-media">
                                                    <Image src={data.image} alt="" />
                                                </div>
                                                <div className="dz-info">
                                                    <div className="dz-meta">
                                                        <ul>
                                                            <li className="post-date">17 May 2025</li>
                                                            <li className="post-author">By <Link href={"#"} scroll={false}>Nashid Martines</Link></li>
                                                        </ul>
                                                    </div>
                                                    <h3 className="dz-title"><Link href="/blog-details" >{data.title}</Link></h3>
                                                    <p>It is a long established fact that a reader will be distracted by the readable content.</p>
                                                    <Link href="/blog-details" className="btn-link icon-link-hover-end">
                                                        Read more <i className="feather icon-arrow-right" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <div className="text-center m-t30 m-lg-t0 wow fadeInUp" data-wow-delay="1.4s" data-wow-duration="0.8s">
                                    <Link href={"#"} scroll={false} className="btn btn-lg btn-icon btn-secondary dz-load-more" rel="ajax/blog-grid ">
                                        Load More <span className="right-icon"><i className="feather icon-refresh-ccw" /></span>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12">
                                <Sidebar />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <Footer />           
        </>
    )
}
export default BlogGrid;
