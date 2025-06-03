"use client"
import { FormEvent, useRef, useState } from "react";
import { Dropdown } from "react-bootstrap";
import emailjs from '@emailjs/browser'; 

const AppointForm = () =>{
    const [selectCat, setSelectCat] = useState("Angioplasty");
    const form = useRef<HTMLFormElement>(null);
    const sendEmail = (e: FormEvent<HTMLFormElement>) => {
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
    return(
        <form ref={form} onSubmit={sendEmail} className="dzForm" method="POST">
            <input type="hidden" className="form-control" name="dzToDo" value="Contact" />
            <input type="hidden" className="form-control" name="reCaptchaEnable" value="0" />
            <div className="dzFormMsg"></div>
            <div className="row">
                <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                        <input name="dzName" type="text" className="form-control" id="inputYourName" placeholder="Your Name" />
                        <label htmlFor="inputYourName">Your Name</label>
                    </div>
                </div>
                <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                        <input name="dzEmail" type="email" className="form-control" id="inputYourEmail" placeholder="Your Email" />
                        <label htmlFor="inputYourEmail">Your Email</label>
                    </div>
                </div>
                <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                        <input name="dzPhoneNumber" type="number" className="form-control dz-number" id="inputPhoneNumber" placeholder="Phone Number" />
                        <label htmlFor="inputPhoneNumber">Phone Number</label>
                    </div>
                </div>
                <div className="col-sm-6 m-b30">
                    <div className="form-floating floating-underline input-light">
                        <Dropdown className="form-control bs-select">
                            <Dropdown.Toggle as="div" >
                                {selectCat}
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item onClick={() => setSelectCat("Angioplasty")}>Angioplasty</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectCat("Cardiology")}>Cardiology</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectCat("Dental")}>Dental</Dropdown.Item>
                                <Dropdown.Item onClick={() => setSelectCat("Eye Care")}>Eye Care</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </div>
                </div>
                <div className="col-sm-12 m-b30">
                    <div className="form-floating floating-underline input-light">
                        <textarea name="dzMessage" className="form-control" id="inputMessage" rows={6} placeholder="Select Service"></textarea>
                        <label htmlFor="inputMessage">Message</label>
                    </div>
                </div>
                <div className="col-sm-12">
                    <button type="submit" name="submit" value="submit" className="btn btn-lg btn-icon btn-white hover-secondary btn-shadow">
                        Appointment <span className="right-icon"><i className="feather icon-arrow-right" /></span>
                    </button>
                </div>
            </div>
        </form>
    )
}
export default AppointForm;