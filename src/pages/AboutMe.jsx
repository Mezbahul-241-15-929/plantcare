import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AboutMe = () => {
    return (


        <div className="w-11/12 mx-auto">
            <div className="my-5">
                <Navbar></Navbar>
            </div>

            <div className="">
                <section className="bg-gray-50 py-12 px-6 md:px-16 lg:px-32 rounded">
                    <div className="max-w-4xl mx-auto text-center">
                   
                        <div className="flex justify-center mb-6">
                            <img
                                src="https://scontent.frjh7-1.fna.fbcdn.net/v/t39.30808-6/486615039_2349383768777067_2472992010317111584_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHhweh_1q3iXu-4f6-hU5tNPMZhfrmIfhM8xmF-uYh-E2YrqwTblJrvQ_UIhc4E1JjXOjX97_Fu01DbH2_C6y6w&_nc_ohc=Nhb9YOyMszwQ7kNvwG8Srwu&_nc_oc=AdmrHCAgqMbxFrx2WIcVwFVJDGtVM0CenmSHBb9wa-DvOf5ksRmV57GEcgIZ5zfs8oQ&_nc_zt=23&_nc_ht=scontent.frjh7-1.fna&_nc_gid=hRRutRgS-YplfWKl-Ia12Q&oh=00_Afb1_fXxDHSqhMZApVytLFakuoKr6w6wWpJBsXBuBfOfzg&oe=68C25281"
                                alt="Profile"
                                className="w-32 h-32 rounded-full shadow-lg object-cover"
                            />
                        </div>

                    
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Me</h2>

                  
                        <p className="text-gray-600 text-lg leading-relaxed">
                            Hi I am <span className="font-semibold text-indigo-600">Md. Mezbahul Islam</span>,
                            a passionate developer who loves building modern web applications.
                            I enjoy working with technologies like <span className="font-medium">React, Tailwind CSS, and Node.js</span>.
                            My goal is to create clean, user-friendly, and scalable applications.
                        </p>

                      
                        <div className="mt-6 flex flex-wrap justify-center gap-3">
                            {["HTML","CSS", "Tailwind CSS","JavaScript","React", "Node.js"].map((skill) => (
                                <span
                                    key={skill}
                                    className="px-4 py-2 text-sm bg-indigo-100 text-indigo-600 font-medium rounded-full shadow-sm"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="mt-8">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition"
                            >
                                Contact Me
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        <Footer></Footer>
            
        </div>

    );
};

export default AboutMe;
