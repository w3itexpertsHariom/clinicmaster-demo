import Link from "next/link"
import { IMAGES, SVGICONS } from "./theme"
import Image, { StaticImageData } from "next/image"

// layout 
// header 
export const headerinfo = [
    { image: IMAGES.svgicon1, title: 'Contatc Us', paragraph: <Link href="tel:+11234567890" className="text-secondary">+1 123 456 7890</Link>, },
    { image: IMAGES.svgicon2, title: 'Email Supports', paragraph: <Link href="mailto:email@domain.com" className="text-secondary">email@domain.com</Link>, },
    { image: IMAGES.svgicon3, title: 'Online Appointment', paragraph: <span>Book Now<i className="feather icon-arrow-right" /></span>, },
    { image: IMAGES.svgicon4, title: 'Supports', paragraph: '24x7 Supports', },
    { image: IMAGES.svgicon5, title: 'Payment', paragraph: <span>Pay Online <i className="feather icon-arrow-right" /></span>, },
    { image: IMAGES.svgicon6, title: 'My Cart', paragraph: '2 Items', },
]



export type HeaderContentItem = {
  title: string;
  to: string;
  image?: string | StaticImageData;
};

export type HeaderItem = {
  title: string;
  to?: string;
  classChange?: string;
  content?: HeaderContentItem[];
};


export const headerdata : HeaderItem[] = [
    {
        title: "Home",
        classChange: "has-mega-menu",
        content: [
            { title: "01 Skin Care", to: "#", image: IMAGES.demohome3, },
            { title: "02 Dentist", to: "#", image: IMAGES.demohome2, },
            { title: "03 Medical", to: "/", image: IMAGES.demohome1, },
        ],
    },
    {
        title: "Pages",
        classChange: "sub-menu-down",
        content: [
            { title: "About Us", to: "/about-us" },
            { title: "Appointment", to: "/appointment" },
            { title: "Pricing Table", to: "/pricing-table" },
            { title: "Patient Info", to: "/patient-info" },
            { title: "Testimonial", to: "/testimonial" },
            { title: "Faqs", to: "/faqs" },
            { title: "Error 404", to: "/error-404" },
            { title: "Coming Soon", to: "/coming-soon" },
            { title: "Under construction", to: "/under-construction" },
        ],
    },
    {
        title: "Team",
        classChange: "sub-menu-down",
        content: [
            { title: "Team", to: "/team" },
            { title: "Team Detail", to: "/team-detail" },
        ],
    },
    {
        title: "Services",
        classChange: "sub-menu-down",
        content: [
            { title: "Services", to: "/services" },
            { title: "Service Detail", to: "/service-detail" },
        ],
    },
    {
        title: "Blogs",
        classChange: "sub-menu-down",
        content: [
            { title: "Blog Grid", to: "/blog-grid" },
            { title: "Blog List Sidebar", to: "/blog-list-sidebar" },
            { title: "Blog Details", to: "/blog-details" },
        ],
    },
    { title: "Contact Us", to: "/contact-us", },
]
// footer 
export const footerdata1 = [
    { delay: '0.4s', icon: <i className="feather icon-phone" />, title: 'Call Us', paragraph: <Link href="tel:+11234567890" className="text-body">+1 123 456 7890</Link>, },
    { delay: '0.6s', icon: <i className="feather icon-mail" />, title: 'Send us a Mail', paragraph: <Link href="mailto:info@example.com" className="text-body">info@example.com</Link>, },
    { delay: '0.8s', icon: <i className="feather icon-clock" />, title: 'Opening Time', paragraph: "Mon -Sat: 7:00 - 17:00", },
]
export const footerdata2 = [
    {
        title: 'Our Services', span1: 'Emergency Care', span2: 'Operation Theater', span3: 'Medical Checkup', span4: 'Diagnostic Center', span5: 'Outdoor Checkup',
        link1: '/service-detail', link2: '/service-detail', link3: '/service-detail', link4: '/service-detail', link5: '/service-detail', delay: '0.4s',
    },
    {
        title: 'Useful Links', span1: 'Privacy Policy', span2: 'Terms & Conditions', span3: 'Contact Us', span4: 'Latest News', span5: 'Our Sitemap',
        link1: '#', link2: '#', link3: '/contact-us', link4: '/blog-grid', link5: '#', delay: '0.6s',
    },
    {
        title: 'Our Stores', span1: 'New York', span2: 'London SF', span3: 'Edinburgh', span4: 'Los Angeles', span5: 'Las Vegas',
        link1: '#', link2: '#', link3: '#', link4: '#', link5: '#', delay: '0.8s',
    },
    {
        title: 'Quick Links', span1: 'About Us', span2: 'Our Services', span3: 'Our Team', span4: 'Appointments', span5: 'Contact Us',
        link1: '/about-us', link2: '/services', link3: '/team', link4: '/appointment', link5: '/contact-us', delay: '1.0s',
    },
]
// pages 
// testimonial 
export const testidata = [
    { delay: '0.2s', title: 'Kenneth Fong', position: 'Patient', image: IMAGES.testimonial2 },
    { delay: '0.4s', title: 'Danial Frankie', position: 'Patient', image: IMAGES.testimonial3 },
    { delay: '0.6s', title: 'Rihana Roy', position: 'Patient', image: IMAGES.testimonial4 },
    { delay: '0.8s', title: 'Kenneth Fong', position: 'Patient', image: IMAGES.testimonial5 },
]
export const testiswipeerdata2 = [
    { image: IMAGES.testimonialsmall1 },
    { image: IMAGES.testimonialsmall2 },
    { image: IMAGES.testimonialsmall3 },
]
// bloggrid 
export const blogdata = [
    { image: IMAGES.blogoverlaylarge1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.blogoverlaylarge2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.blogoverlaylarge3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.blogoverlaylarge4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.blogoverlaylarge5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.blogoverlaylarge6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
export const blogdata2 = [
    { image: IMAGES.bloggrid1, dealy: '0.1s', title: 'The Art of Managing Business and Patient Care.', }, 
    { image: IMAGES.bloggrid2, dealy: '0.2s', title: 'Successful Transitional Rehab: More Than Just Exercise', },
    { image: IMAGES.bloggrid3, dealy: '0.3s', title: 'What is Respite Care and Why is it Important?', },
    { image: IMAGES.bloggrid4, dealy: '0.4s', title: 'The Art of Managing Business and Patient Care', },
    { image: IMAGES.bloggrid5, dealy: '0.5s', title: 'Three Years Post Injury: Persistence and Progress', },
    { image: IMAGES.bloggrid6, dealy: '0.6s', title: 'How Transitional Rehabilitation Aids in Stroke Recovery', },
]
// servicedetails 
export const servicedetails = [
    { columnstand: 'active', title: 'Angioplasty', },
    { title: 'Cardiology', },
    { title: 'Dental', },
    { title: 'Endocrinology', },
    { title: 'Eye Care', },
    { title: 'Neurology', },
    { title: 'Orthopedics', },
    { title: 'RMI', },
]
// teamdetail
export const empolydata = [
    { id: 1, delay: '0.2s', image: IMAGES.team1, title: "Nashid Martines", position: "Cardiac Surgery" },
    { id: 2, delay: '0.4s', image: IMAGES.team2, title: "Danial Frankie", position: "Pediatric Clinic" },
    { id: 3, delay: '0.6s', image: IMAGES.team3, title: "Rihana Roy", position: "Gynecology" },
    { id: 4, delay: '0.8s', image: IMAGES.team4, title: "Kenneth Fong", position: "Neurology" },
    { id: 5, delay: '1.0s', image: IMAGES.team1, title: "Nashid Martines", position: "Cardiac Surgery" },
    { id: 6, delay: '1.2s', image: IMAGES.team2, title: "Danial Frankie", position: "Pediatric Clinic" },
    { id: 7, delay: '1.4s', image: IMAGES.team3, title: "Rihana Roy", position: "Gynecology" },
    { id: 8, delay: '1.6s', image: IMAGES.team4, title: "Kenneth Fong", position: "Neurology" },
]
// component 
// alllocation
export const locationdata = [
    { delay: '0.2s', title: 'United State', },
    { delay: '0.4s', title: 'Canada', },
];
// awards 
export const awardswiperdata = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
    { image: IMAGES.logo3 },
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
    { image: IMAGES.logo3 },
]
export const awarddata = [
    { delay: '0.5s', title: '2024', },
    { delay: '0.6s', title: '2023', },
    { delay: '0.7s', title: '2022', },
    { delay: '0.8s', title: '2021', },
    { delay: '0.9s', title: '2020', },
    { delay: '1.0s', title: '2019', },
    { delay: '1.1s', title: 'View All', },
]
// clientswiper1 
export const clientswiperdata1 = [
    { image: IMAGES.logomiddle1, delay: '0.1s', },
    { image: IMAGES.logomiddle2, delay: '0.2s', },
    { image: IMAGES.logomiddle3, delay: '0.3s', },
    { image: IMAGES.logomiddle4, delay: '0.4s', },
    { image: IMAGES.logomiddle1, delay: '0.5s', },
    { image: IMAGES.logomiddle2, delay: '0.6s', },
    { image: IMAGES.logomiddle3, delay: '0.7s', },
    { image: IMAGES.logomiddle4, delay: '0.8s', },
]
// clientswiper2 
export const clientswiperdata2 = [
    { image: IMAGES.logosmall1, delay: '0.1s', },
    { image: IMAGES.logosmall2, delay: '0.2s', },
    { image: IMAGES.logosmall3, delay: '0.3s', },
    { image: IMAGES.logosmall4, delay: '0.4s', },
    { image: IMAGES.logosmall5, delay: '0.5s', },
    { image: IMAGES.logosmall6, delay: '0.6s', },
    { image: IMAGES.logosmall1, delay: '0.7s', },
    { image: IMAGES.logosmall2, delay: '0.8s', },
    { image: IMAGES.logosmall3, delay: '0.9s', },
    { image: IMAGES.logosmall4, delay: '1.0s', },
    { image: IMAGES.logosmall5, delay: '1.1s', },
    { image: IMAGES.logosmall6, delay: '1.2s', },
]
// counter 
export const countupdata = [
    { title: 'Specialists', delay: '0.4s', countup: 200, span: '+', },
    { title: 'Happy Patients', delay: '0.6s', countup: 45,  span: 'K', },
    { title: 'Winning Awards', delay: '0.8s', countup: 150, span: '+', },
]
// frequently 
export const accordiondata = [
    { delay: '0.5s', key: "0", title: 'How much do you charge for pedicure ?' },
    { delay: '0.6s', key: "1", title: 'What types of treatments do you offer?' },
    { delay: '0.7s', key: "2", title: 'How do i book my appointment ?' },
    { delay: '0.8s', key: "3", title: 'Can i cancel my appointment' },
]
// howitwork 
export const howitworkdata = [
    { delay: '0.2s', icon: <i className="feather icon-clock" />, title: 'Book an Appointment', },
    { delay: '0.4s', icon: <i className="flaticon-list" />, title: 'Conduct Checkup', },
    { delay: '0.6s', icon: <i className="flaticon-stethoscope" />, title: 'Perform Treatment', },
    { delay: '0.8s', icon: <i className="flaticon-hand-holding-usd" />, title: 'Prescribe & Payment', },
]
// inspirational 
export const inspirationaldata = [
    { columnstand: 'm-r25', delay: '0.2s', title: 'Mission', svg: SVGICONS.mission },
    { columnstand: 'm-l25', delay: '0.4s', title: 'Vision', svg: SVGICONS.vision },
    { columnstand: 'm-r25', delay: '0.6s', title: 'Values', svg: SVGICONS.values },
]
// mapwraper
export const mapdata = [
    { id: 1, delay: '0.2s', icon: <i className="feather icon-map-pin" />, title: "Address", para: <p>234 Oak Drive, Villagetown, USA</p>, },
    { id: 2, delay: '0.4s', icon: <i className="feather icon-phone" />, title: "Call Us", para: <p><Link href="tel:+11234567890">+1 123 456 7890</Link></p>, },
    { id: 3, delay: '0.6s', icon: <i className="feather icon-mail" />, title: "Send us a Mail", para: <p><Link href="mailto:info@example.com">email@domain.com</Link></p>, },
    { id: 4, delay: '0.8s', icon: <i className="feather icon-clock" />, title: "Opening Time", para: <p>Mon-Thu: 8:00am-5:00pm <br /> Fri: 8:00am-1:00pm</p>, },
]
// meetdr 
export const meetdrdata1 = [
    { title: 'Radiant Skin Dermatology', },
    { title: 'Laser Resurfacing', },
    { title: 'Flawless Dermatology', },
    { title: 'Refined Skin Dermatology', },
    { title: 'Luminous Dermatology', },
    { title: 'Anti Aging', },
]
export const meetdrdata2 = [
    { image: IMAGES.logo1 },
    { image: IMAGES.logo2 },
]
// pricing 
export const pricingdata1 = [
    { title: 'Cardiovascular Services', },
    { title: 'Weight Management', },
    { title: 'Dental Services', },
    { title: 'Women\'s Health', },
    { title: 'Emergency Medicine', },
    { title: 'Family Medicine', },
    { title: '24/7 customer support', },
    { title: 'Video Call Support', },
]
export const pricingdata2 = [
    {
        delay: '0.4s', title: <h2 className="pricingtable-bx">Free<small>/ Lifetime</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.6s', coloumnstand: 'active', title: <h2 className="pricingtable-bx">$25<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
            <li className="disable"><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
    {
        delay: '0.8s', title: <h2 className="pricingtable-bx">$40<small>/ Month</small></h2>,
        feature: <ul className="pricingtable-features">
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
            <li><Image src={IMAGES.Check} alt="" /></li>
        </ul>,
    },
]
// raelpatient 
export const testiswipeerdata = [
    { image: IMAGES.testimonial1 },
    { image: IMAGES.testimonial2 },
    { image: IMAGES.testimonial3 },
]
// servicebox
export const serviceboxdata = [    
    { id: 1, delay: '0.1s', title: 'Angioplasty', svg1: SVGICONS.iconcell1, svg2: SVGICONS.iconbg1, },
    { id: 2, delay: '0.2s', title: 'Cardiology', svg1: SVGICONS.iconcell2, svg2: SVGICONS.iconbg2, },
    { id: 3, delay: '0.3s', title: 'Dental', svg1: SVGICONS.iconcell3, svg2: SVGICONS.iconbg3, },
    { id: 4, delay: '0.4s', title: 'Endocrinology', svg1: SVGICONS.iconcell4, svg2: SVGICONS.iconbg4, },
    { id: 5, delay: '0.5s', title: 'Eye Care', svg1: SVGICONS.iconcell5, svg2: SVGICONS.iconbg5, },
    { id: 6, delay: '0.6s', title: 'Neurology', svg1: SVGICONS.iconcell6, svg2: SVGICONS.iconbg6, },
    { id: 7, delay: '0.7s', title: 'Orthopedics', svg1: SVGICONS.iconcell7, svg2: SVGICONS.iconbg7, },
    { id: 8, delay: '0.8s', title: 'RMI', svg1: SVGICONS.iconcell8, svg2: SVGICONS.iconbg8, },
]
// sidebar 
export const tagdata = [
    { title: 'Acupressure', num: '(10)', },
    { title: 'Allgemein', num: '(5)', },
    { title: 'Blood', num: '(17)', },
    { title: 'Food', num: '(13)', },
    { title: 'Health', num: '(06)', },
    { title: 'Mental Health', num: '(17)', },
    { title: 'Therapy', num: '(13)', },
    { title: 'Walking', num: '(06)', },
]
export const sidebarpostdata = [
    { image: IMAGES.blogsmall1, },
    { image: IMAGES.blogsmall2, },
    { image: IMAGES.blogsmall3, },
]
// whychoose 
export const whychoosedata = [
    { delay: '0.4s', title: 'More Experience', },
    { delay: '0.6s', title: 'Seamless care', },
    { delay: '0.8s', title: 'The right answers?', },
    { delay: '1.0s', title: 'Unparalleled expertise', },
]
// worldclass
export const worldclasslistdata = [
    { title: 'Comprehensive Specialties', },
    { title: 'Research and Development', },
    { title: 'Emergency Services', },
    { title: 'Advanced Imaging Services', },
    { title: 'Intensive Care Units (ICUs)', },
    { title: 'Rehabilitation Services', },
    { title: 'Telemedicine Facilities', },
    { title: 'Patient-Centric Approach', },
    { title: 'Multidisciplinary Team', },
    { title: 'Health Information Technology', },
]

