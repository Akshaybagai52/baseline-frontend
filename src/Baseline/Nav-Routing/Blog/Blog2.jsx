import React from "react";
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const Blog2 = (props) => {
    return (
        <>
            <div className="row">
                <div className="col-md-12">
                    <div className="blog-content" style={{backgroundColor:"#ededee", padding:"65px 0"}}>
                        
                        <div className="row your-business-blog">
                            <div className="col-md-7 seo-content">
                                <div className="hedingseo">
                                    <h1 style={{ fontSize: "30px" }} ><Link style={{ textDecoration: "none", color: "#343a40" }} to={props.link}>{props.heading}</Link></h1>

                                    <div className="inrp" >
                                        <p  style={{ fontSize: "17px",lineHeight:'29px' }}>{props.dscp}</p>
                                    </div>

                                </div>
                            </div>
                            <div className="col-md-5 seo-content">
                                {/* <div className="svg-blog-seo" style={{backgroundColor:"#fff", padding:"60px 0"}}> */}
                                    <motion.div
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.8 }}
                                    >
                                        <div className="svg-set">
                                            {props.image}
                                        </div>
                                    </motion.div>
                                </div>
                            {/* </div> */}
                        </div>
                    </div>
                </div>
            </div>
            {/* ---------- */}
            <div className="row">
                <div className="col-md-12">
                    <div className="blog-content">
                        <div className="row your-business-blog your-business-blog2">
                            <div className="col-md-5 seo-content">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.8 }}
                                >
                                    <div className="svg-set">
                                        {props.image1}
                                        {/* <img style={{ width: "100%",padding:"10px",height:"300px" }} src={image} alt="" /> */}
                                    </div>
                                </motion.div>
                            </div>
                            <div className="col-md-7 seo-content ">
                                <div className="svg-blog-seo">

                                    <div className="hedingseo">
                                        <h1 style={{ fontSize: "30px" }} ><a style={{ textDecoration: "none", color: "#343a40" }} href={props.link1}>{props.heading1}</a></h1>
                                        <div className="inrp">
                                            <p style={{ fontSize: "17px",lineHeight:'29px' }}>{props.dscp1}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog2