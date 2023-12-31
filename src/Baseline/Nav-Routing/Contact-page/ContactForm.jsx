import React, { useState } from "react";
import PhoneInput from "react-phone-number-input";
// import { v4 as uuidv4, v5 as uuidv5 } from 'uuid';
import "../Contact-page/CForm.less";
import EmailPopup from "../../../popup/Emailpopup";
import { URL } from "../../constant/constant";

const ContactForm = () => {
  const [SelectCountry, setSelectCountry] = useState();

  const [thankupopup, setThankupopup] = useState();
  var number = SelectCountry;
  const [data, setData] = useState({
    name: "",
    email: "",
    phone: number,
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    let validationErrors = {};
    let isValid = true;

    // Validate name
    if (data.name.trim() === "") {
      validationErrors.name = "Please enter your name";
      isValid = false;
    }

    // Validate email
    if (data.email.trim() === "") {
      validationErrors.email = "Please enter your email";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      validationErrors.email = "Please enter a valid email";
      isValid = false;
    }

    if (data.service.trim() === "") {
      validationErrors.service = "Please enter your type of Service";
      isValid = false;
    }

    setErrors(validationErrors);
    return isValid;
  };

  const handlechange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    if (name === "phone") {
      value = e.target.value;
    }

    setData({ ...data, [name]: value });
    validateForm()

  };

  const submitData = (e) => {
    e.preventDefault();
    if (validateForm()) {
    setIsSubmitting(true);

      // Send form data to backend
      fetch(`${URL}/contact_us`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => {
          if (res.status === "success") {
            setThankupopup(true);
            setIsSubmitting(false);
          } else {
            console.log(res, "erre4ry"); // Optional: Handle response from backend
          }
        })
        .catch((error) => {
          console.error(error);
        });

      // Reset form fields
      setData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
    }

    // let emaildata = [{ name: data.name, email: data.email, service: data.service, phone: number }]
    // console.log("email", emaildata[0].name)
    // if (!(emaildata.name && emaildata.email && emaildata.service && emaildata.message && emaildata.phone)) {
    //     emailjs.send('service_5nor23t', 'template_7o2rbto', {
    //         from_name: emaildata[0].name,
    //         from_service: emaildata[0].service,
    //         Phone: emaildata[0].phone,
    //         to_name: "pankaj",
    //         from_email: emaildata[0].email,
    //         // to_email: "pankajman803@gmail.com",
    //         message: data.message
    //     },
    //         'nP5XCuqy1L_S_hLQV').then(res => {
    //             console.log(res)
    //             setThankupopup(true)
    //             alert("true")
    //         }).catch(err => {

    //             alert("not found")
    //         })
    //     setData({
    //         name: "",
    //         email: "",
    //         service: "",
    //         message: ""
    //     })
    // } else {
    //     console.log("k", data, SelectCountry)
    // }
  };

  return (
    <div className="row sub-contact-page">
      <div className="col-md-6 contact-page-main">
        <form className="form-set">
          <div className="contactheading">
            <h4>Contact Us</h4>
          </div>
          <div className="mb-13">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
              name="name"
              onChange={handlechange}
              value={data.name}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="mb-13">
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handlechange}
              value={data.email}
              aria-describedby="emailHelp"
              placeholder="Email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="mb-13">
            <div className="numberinput">
              <PhoneInput
                className="phonr-input"
                placeholder="Phone"
                value={SelectCountry}
                name="phone"
                onChange={(SelectCountry) => setSelectCountry(SelectCountry)}
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>

            <div className="mb-13">
              <select
                name="service"
                onChange={handlechange}
                value={data.service}
                placeholder="select"
                className="form-control selectinput"
              >
                <option name="service" tyle={{ width: "100%" }} value="">
                  ----please choose a service------{" "}
                </option>
                <option style={{ width: "100%" }} value="Webdevelopment">
                  Web development
                </option>
                <option style={{ width: "100%" }} value="Webdesign">
                  Web design
                </option>
                <option style={{ width: "100%" }} value="Digitalmarketing">
                  Digital marketing
                </option>
                <option style={{ width: "100%" }} value="SEO">
                  SEO
                </option>
              </select>
              {errors.service && (
                <span className="error">{errors.service}</span>
              )}
            </div>
          </div>
          {/* <div className="">
                        <label htmlFor="meetingtime">Schedule A Meeting Time</label><br />
                        <input className="form-control" onChange={handlechane} name="date" style={{ width: "100%" }} type="date"  placeholder="Schedule A Meeting Time" required="" ></input>
                    </div> */}
          <div className="message py-3">
            <textarea
              id=""
              cols="30"
              name="message"
              onChange={handlechange}
              value={data.message}
              rows="10"
              style={{ width: "100%", height: "150px" }}
              className="form-control"
              placeholder="message"
            ></textarea>
          </div>

          <div className="col-12">
            <button
              onClick={submitData}
              className="btn btn-primary submit_btn"
              id="submit"
              type="button"
              name="submit"
              disabled={isSubmitting}
            > 
              {isSubmitting ?
                      <>
                      <span>Sending...</span> <img src="/src/image/loading.gif"  className="loading-gif"/>
                      </>
                       : "Send"}
            </button>
          </div>
        </form>
      </div>
      <div className=" col-md-6 contact-svg">
        <div className="svg-box">
          <img
            src="https://baselineitdevelopment.com/assets/images/Image%20(1).png"
            alt=""
            style={{ width: "100%" }}
          />
        </div>
      </div>
      <EmailPopup setThankupopup={setThankupopup} thankupopup={thankupopup} />
    </div>
  );
};
export default ContactForm;
