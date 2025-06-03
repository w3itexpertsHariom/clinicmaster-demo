import Footer from "@/layout/Footer";
import Header from "@/layout/Header";
import BestDentist from "@/component/BestDentist";
import PageBanner from "@/component/PageBanner";
import Teams from "@/component/Teams";
import WhyChoose from "@/component/WhyChoose";

function TeamPage() {
    return (
        <>
            <Header />
            <main className="page-content">
                <PageBanner title={"Team"} />
                <section className="content-inner bg-light gradient-bottom-light">
                    <div className="container">
                        <div className="section-head style-3 text-center wow fadeInUp" data-wow-delay="0.2s" data-wow-duration="0.8s">
                            <h2 className="title m-b10"> We Employ only Specialists </h2>
                            <p> It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </p>
                        </div>
                        <div className="row">
                            <Teams />
                        </div>
                    </div>
                </section>
                <section className="content-inner-3 bg-light pb-0 overflow-hidden">
                    <div className="container">
                        <div className="row content-wrapper style-17 align-items-end justify-content-center">
                            <BestDentist />
                        </div>
                    </div>
                </section>
                <section className="content-inner">
                    <div className="container">
                        <div className="row content-wrapper style-14 align-items-center">
                            <WhyChoose />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />            
        </>
    )
}
export default TeamPage;