import React from "react";
import { motion } from 'framer-motion'
const OurProcess = (props) => {
  return (
    <>
      <div className="row">
        <motion.div
          initial={{ x: '-100%' }}
          whileInView={{ x: '0' }}
          transition={{ duration: 1 }}
        >
          <div className="col-md-5 our-process-steps">

            <div className="process-box process-left">
              <div className="row">
                <div className="col-md-5 steps">
                  <div className="process-step">
                    {props.icons}
                  </div>
                </div>
                <div className="col-md-7">
                  <h5>{props.heading}</h5>
                  <p><small> {props.info}
                  </small></p>
                </div>
              </div>
            </div>
            <div className='col-md-7'></div>

          </div>
        </motion.div>
      </div >

      {/* <=======setp2=====> */}
      < div className="row" >
      {/* <motion.div
          initial={{ x: '100%' }}
          whileInView={{ x: '0' }}
          transition={{ duration: 1 }}

        > */}
        < div className='col-md-7' ></div >
       
        <div className="col-md-5 our-process-steps">
       
          <div className="process-box process-left1">
      
            <div className="row">
              
                
                <div className="col-md-5 steps">
                  <div className="process-step">
                    {props.icons1}
                  </div>
                </div>

                <div className="col-md-7">
                  <h5>{props.heading1}</h5>
                  <p><small>{props.info1}</small></p>
                </div>
             
            </div>

          </div>
         
        </div>
        {/* </motion.div> */}
      </div >
    </>
  )
}
export default OurProcess