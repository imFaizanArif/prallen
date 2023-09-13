import React, {useRef, useState} from 'react';
import emailjs from '@emailjs/browser';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {contactUs} from "../assets/index.js";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};

        if (formData.name === '') {
            newErrors.name = 'Name is required';
        }

        if (formData.email === '') {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (formData.message === '') {
            newErrors.message = 'Message is required';
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            emailjs.sendForm('service_jeckmsc', 'template_wsk3klg', form.current, 'YjrrdFgQhKvnf9eM9')
                .then((result) => {
                    toast.success("Message Sent");
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                    e.target.reset();
                    console.log(result.text);
                }, (error) => {
                    toast.error("Message not Sent");
                    console.log(error.text);
                });
        }
    };

    const form = useRef();

    return (
        <section id={`contactus`}>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <div className={`container mx-auto p-5 py-20 md:py-28`}>
                <div className={`mx-0 md:mx-12 flex flex-wrap md:flex-nowrap mb-8 md:mb-[84px] space-x-0 md:space-x-96`}>
                    <h1 className={`text-[44px]`}>CONTACT&nbsp;US</h1>
                    <p className={`text-lg`}>
                        Partner with us to design and develop consumer Partner with us to design and develop consumer
                    </p>
                </div>
                <div className={`flex items-center space-x-0 md:space-x-40`}>
                    <img
                        src={contactUs}
                        className={`hidden md:inline w-[40%] h-[780px] object-center object-cover rounded-sm`} alt={`contact-img`}/>
                    <div className={`w-full md:w-[40%] px-2 md:p-5`}>
                        <form ref={form} onSubmit={handleSubmit}>
                            {/*Name */}
                            <div>
                                <label htmlFor={`name`} className={`block text-[18px] my-[12px]`}>Name <span
                                    className={`text-red-600`}>*</span></label>
                                <input name="name"
                                       className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                       value={formData.name}
                                       onChange={handleChange}
                                />
                                <div className={`text-red-600 text-base py-4`}>{errors.name}</div>
                            </div>
                            {/*Email */}
                            <div>
                                <label htmlFor={`email`} className={`block text-[18px] my-[12px]`}>Email <span
                                    className={`text-red-600`}>*</span></label>
                                <input
                                    name="email"
                                    type="email"
                                    className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                <div className={`text-red-600 text-base py-4`}>{errors.email}</div>
                            </div>
                            {/*Company */}
                            <div>
                                <label htmlFor={`company`} className={`block text-[18px] my-[12px]`}>Company</label>
                                <input name="company"
                                       className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                />
                            </div>
                            {/*Phone Number*/}
                            <div>
                                <label htmlFor={`phoneNo`} className={`block text-[18px] my-[12px]`}>Phone
                                    Number</label>
                                <input name="phoneNo"
                                       className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                />
                            </div>
                            {/*Message*/}
                            <div>
                                <label htmlFor={`message`} className={`block text-[18px] my-[12px]`}>How we can help?
                                    (Describe your project) <span className={`text-red-600`}>*</span></label>
                                <textarea name="message" rows={6}
                                          className={`border border-[#DDDDDD] text-black placeholder-text-black text-base block rounded-md focus:ring-blue-500 focus:border-blue-500 p-3 w-full`}
                                          value={formData.message}
                                          onChange={handleChange}
                                ></textarea>
                                <div className={`text-red-600 text-base py-4`}>{errors.message}</div>
                            </div>
                            {/*Button */}
                            <button type="submit"
                                    className={`my-[32px] py-[16px] px-[24px] bg-black rounded-md text-white w-full`}>
                                Get Started
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;
