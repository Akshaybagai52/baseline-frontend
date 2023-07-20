import React from 'react'
import NavBar from '../../Navbar/Nav';
import '../Service/Services.less';
import ServiceRoutes from './ServiceRoutes';
import Aboutfooter from '../../Footer/Aboutfooter';
import { motion } from 'framer-motion'



function SeverciesRoute() {


    return (
        <>

            <NavBar />
            <div className="main-service">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 service-title" >
                            <div className="services-heading">
                                <h2 className="orgnicetxt"><span style={{ color: "#bb372a" }}>Organise</span> Projects.<br />
                                    Get More Done.</h2>
                                <a style={{ background: "#bb372a", color: "white" }} className="btn ms-4" href="https://baselineitdevelopment.com/contact" role="button">Get Started</a>

                            </div>
                        </div>
                        <div className="col-md-6">
                        </div>
                    </div>
                </div>
            </div>
            <div className='section-committed-delivering-main'>
                <div className="container">

                    <div className="our-service">
                        <motion.div
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1, x: 0 }}
                            transition={{ duration: 1 }}>
                            <h2 style={{ fontSize: "60px", fontWeight: "700" }} className=" aos-animate">Our <span style={{ color: "#bb372a" }}>Services</span></h2>
                        </motion.div>
                        <p style={{ fontSize: "18px", color: "#444345", lineHeight: "24px", marginTop: "20px" }}>
                            Despite being the most trusted website development &amp; <a href="https://baselineitdevelopment.com/web-designing-company-in-mohali">web designing company in Mohali</a>
                            , we also offer result-driven digital marketing solutions. We do everything for your impeccable growth, from providing you with the
                            <a href="https://baselineitdevelopment.com/seo-company-mohali">best SEO services in Mohali</a> to other digital solutions.
                        </p>
                    </div>
                    <div className="row">
                        <ServiceRoutes
                            heading="php developer"
                            heading1="php"
                            heading2="development/Customaization"
                            list1="Web Portal Development"
                            list2="Web Services & API Integration"
                            list3="CMS Development"
                            list4="Integrating Payment Getways"
                            info="Web design innovative , user-friendly, and result driven website for our customers"
                            icons={<i className="brand-icons fa-brands fa-php"></i>}
                            icons1={<i className="brand-icons fa-brands fa-php"></i>}

                            // ==web design  
                            headingmiddle="Web Designer"
                            headingmiddle1="Website Desining"
                            listmiddle1="Website Desinging and Re-desing"
                            listmiddle2="UI/UX, HTML, JavaScript, and other Software  Designing"
                            listmiddle3=" Unique and Interactive web designs"
                            listmiddle4="User interfaces, and Mobile Websites Desing"
                            listmiddle5="PSD to HTML "
                            infomiddle="Our Web design services include all aspects off the process, from creation to maintenance."
                            iconsmiddle={<i className="brand-icons fa-solid fa-tv"></i>}
                            iconsmiddle1={<i className="brand-icons fa-solid fa-tv"></i>}
                            // =Digital Marketing
                            headingright="Digital Marketing"
                            headingright1=" Digital marketing"
                            listright1="Website Audit"
                            listright2="Technical SEO"
                            listright3="Content Optimization."
                            listright4="SEO, SMO, SMM"
                            listright5="Google search Console "
                            listright6="Google analytics "
                            inforight="We offer solutions to bulid and highlight the online business presence and boots sales."
                            iconsright={<i className="brand-icons fa-solid fa-globe"></i>}
                            iconsright1={<i className="brand-icons fa-solid fa-globe"></i>}
                        />

                        <ServiceRoutes
                            heading="React.js"
                            heading1="React JS"
                            list1="JSX"
                            list2="Components"
                            list3="Simplicity"
                            list4="Performance"
                            list5="States"
                            info="The Reactjs web and mobile development services we provide are best suited for startups and established enterprise. "
                            icons={<i className="brand-icons fa-brands fa-react"></i>}
                            icons1={<i className="brand-icons fa-brands fa-react"></i>}

                            // =====Big Commerce
                            headingmiddle="Big Commerce"
                            headingmiddle1="Bigcommerce"
                            listmiddle1="Stencil Theme Customizations"
                            listmiddle2="Custom Payment Gateways using Javascript API"
                            listmiddle3="API integrations Third Party Softwares"
                            listmiddle4="Manage Products, oOders, and Customers"
                          
                           
                            infomiddle="Web develop a high performing, comprehensive Big Commerce solutions for virtual eCommerce stores which is compatible with mobile platforms."
                            iconsmiddle={<i className="brand-icons fa-solid fa-cart-shopping"></i>}
                            iconsmiddle1={<i className="brand-icons fa-solid fa-cart-shopping"></i>}

                            // =====Graphic designer

                            headingright="Graphic designer"
                            headingright1=" Lorem"
                            listright1="Lorem"
                            listright2="Lorem"
                            listright3="Lorem"
                            listright4="Lorem"
                            listright5="Lorem "
                            listright6="Lorem "
                            inforight="WE create visual concept, using computer software or only by hand, we create visual concept to communicate ideas that inspire ,inform,and
                            amnd captivate customers."
                            iconsright={<i className="brand-icons  fa-solid fa-pen-nib"></i>}
                            iconsright1={<i className="brand-icons  fa-solid fa-pen-nib"></i>}



                        />


                        <ServiceRoutes
                            heading="Laravel"
                            heading1="Laravel"
                            list1="Restful APIs development"
                            list2="CRM development"
                            list3="Laravel Ecommerce Development"
                            list4="Integrating Third Party Libraries and Scripts into web app"
                            list5="Build enterprise web apps"
                            list6="Validate form data &amp; uploaded files"
                            info="The Laravel development services we offer are specially designed to migrate the websites from the existing platform to the Laravel framework without causing any data loss and downtime.  "
                            icons={<i className="brand-icons fa-brands fa-laravel" style={{ fontWeight: "700" }}></i>}

                            icons1={<i className="brand-icons fa-brands fa-laravel" style={{ fontWeight: "700" }}></i>}
                            // ===shopify
                            headingmiddle="Shopify"
                            headingmiddle1="Shopify"
                            listmiddle1="Creating Online Store"
                            listmiddle2="Custom Storefront tools"
                            listmiddle3="disclosure-closed"
                            listmiddle4="Themes Development/Customization"
                            listmiddle5="Mange Products, Categories, Orders, Customers, "
                            listmiddle6="Custom Shipping Prices"
                            infomiddle="We always ready to help you manage your E-commerce store more efficently from products to payments,third party apps integratons, Shopify theme & app updates,web security, maintenance."
                            iconsmiddle={<i className="brand-icons fa-solid fa-cart-shopping"></i>}
                            iconsmiddle1={<i className="brand-icons fa-solid fa-cart-shopping"></i>}


                            // ===google
                            headingright="Google ads"
                            headingright1="Paid/Free Ads"
                            listright1="Google ads"
                            listright2="facebook ads"
                            listright3="Instagram ads"
                            listright4="Linedin ads"
                            listright5="Twetter ads"

                            inforight="We are all Google ads certified digital advertising Google ads specialists with many years of exprience in getting brands just like yours better returns on their pay per Click marketing spend."
                            iconsright={<i className=" brand-icons fa-brands fa-google"></i>}
                            iconsright1={<i className=" brand-icons fa-brands fa-google"></i>}
                        />
                    </div>



                </div>
            </div >

            <div className="section-Benefits">
                <div className="container">
                    <div className="Benefits">
                        <motion.div
                            initial={{ x: 100 }}
                            whileInView={{ x: '0' }}
                            transition={{ duration: 1 }}

                        >
                            <h1 className="orgnicetxt" style={{ fontSize: "47px", fontWeight: "700" }}> Benefits of working <br /><span style={{ color: "#bb372a" }}>with us</span></h1>
                        </motion.div>
                        <p style={{ marginTop: '25px', marginBottom: "50px" }}>Working is the better way to keep you busy, challenge you, and give you the means to develop yourself to get an identity and <br />personal achievement. It provides you with income and builds up your skills and knowledge.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 d-flex pb-3">
                            <div className="icn" style={{ margin: '10px 20px 0px 0px' }}>
                                <img src="https://baselineitdevelopment.com/assets/images/02.png" alt="Baseline" />
                            </div>
                            <div className="txt">
                                <h3 className='fw-bold'>Teamwork</h3>
                                <p>Our team always works together to achieve a goal. Good teamwork is possible when team members work with a positive attitude.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex pb-3">
                            <div className="icn" style={{ margin: '10px 20px 0px 0px' }}>
                                <img src="https://baselineitdevelopment.com/assets/images/02.png" alt="Baseline" />
                            </div>
                            <div className="txt">
                                <h3 className='fw-bold'>Discipline</h3>
                                <p>We are maintaining discipline in our company for a safe and pleasant work environment for everyone. Business discipline is managing marketing, information technology, and finances.</p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="icn">
                                <img src="https://baselineitdevelopment.com/assets/images/02.png" alt="Baseline" />
                            </div>
                            <div className="txt">
                                <h3 className='fw-bold'>Perseverance</h3>
                                <p>If our company faces something despite difficulties we are continued efforts to achieve the goal. We keep trying despite the challenges to show perseverance. </p>
                            </div>
                        </div>
                        <div className="col-md-6 d-flex">
                            <div className="icn">
                                <img src="https://baselineitdevelopment.com/assets/images/02.png" alt="Baseline" />
                            </div>
                            <div className="txt">
                                <h3 className='fw-bold'>Client focus</h3>
                                <p>If you hire us then we focus on client requirements and get all details about the project. We got great reviews from previous clients for development and design work.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div >


            <div className="section-HEAR">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 1 }}>
                                <h2 data-aos="zoom-in" data-aos-duration="1000" className="aos-init aos-animate">The <span style={{ color: "#bb372a" }}>simplest</span> solution to the most complex problem is provided by us.</h2>
                            </motion.div>
                            <a className="btn btn-primary ms-4" href="https://baselineitdevelopment.com/contact" role="button" style={{ background: "#bb372a", boxShadow: "2px 5px 9px -2px #e55959c7" }}>Contact us</a>

                        </div>
                    </div>
                </div>
            </div>

            <Aboutfooter />




        </>
    )
}

export default SeverciesRoute