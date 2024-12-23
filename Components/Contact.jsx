import React from 'react';
import './.Contact.css'
import Mobile from './phone.svg';
import Gmail from './gmail.svg';
import Location from './location.svg';
import Axios from 'axios';
import { useForm } from 'react-hook-form';

const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onsubmit = async (data) => {
        try {
            const response = await Axios.post("http://localhost:3000/contact", data);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="bigcontainer">
                <div className="side">
                    <h1>Let's Get In Touch</h1>
                    <div className="extra">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea itaque illo sint voluptates dolorum deleniti odio nemo molestiae explicabo vitae laborum pariatur possimus dolor dolorem quasi, nulla at veritatis rerum.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi quisquam porro ab quasi, consequuntur amet possimus exercitationem unde quidem dolores. Fuga, laudantium! Aliquid, quam distinctio nemo voluptas natus iure perspiciatis?</p>
                        <div className="address">
                            <img src={Location} alt="Location Icon" />
                            <span>59 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, fugit.</span>
                        </div>
                        <div className="email">
                            <img src={Gmail} alt="Gmail Icon" />
                            <span>@mail.com</span>
                        </div>
                        <div className="mobile">
                            <img src={Mobile} alt="Mobile Icon" />
                            <span>84847575949</span>
                        </div>
                    </div>
                    <div className="contactus">
                        <h1>Contact with us</h1>
                    </div>
                </div>

                <div className="opposite">
                    <h1>Contact us</h1>
                    <form className="form" onSubmit={handleSubmit(onsubmit)}>
                       <div className="class">
                       <div className="input5">
                            <input
                                type="text"
                                {...register('username', { minLength: { value: 3, message: "Enter username Min 3 characters" } })}
                                placeholder="Username"
                            />
                            <div className="red">{errors.username && <p>{errors.username.message}</p>}</div>
                        </div>
                        <div className="input5">
                            <input
                                type="email"
                                {...register("email", { required: { value: true, message: "Enter Email" } })}
                                placeholder="Email"
                            />
                            <div className="red">{errors.email && <p>{errors.email.message}</p>}</div>
                        </div>
                        <div className="input5">
                            <input
                                type="text"
                                {...register("mobile", {
                                    required: { value: true, message: "Enter Mobile No." },
                                    pattern: { value: /^[0-9]{10}$/, message: "Enter a valid 10-digit Mobile No." },
                                })}
                                placeholder="Mobile No."
                            />
                            <div className="red">{errors.mobile && <p>{errors.mobile.message}</p>}</div>
                        </div>
                        <textarea
                            className="message"
                            placeholder="Message for us"
                            {...register("message")}
                        ></textarea>
                        <div className="button">
                            <button type="submit">Send</button>
                        </div>
                       </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Contact;
