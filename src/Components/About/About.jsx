import React from "react";


export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="./public/assets/aboutpage_1.jpg"
                            alt="image"
                            className="w-[500px] h-[500px] rounded-2xl overflow-hidden object-cover"
                            
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                            React development is carried out by passionate developers
                        </h2>
                        <p className="mt-6 text-gray-600">
                        React development thrives on the passion and creativity of developers who are dedicated to building dynamic and user-friendly web applications. React, a popular JavaScript library developed by Facebook, empowers developers to create reusable components, enabling efficient and organized coding. The community of React developers is vibrant and collaborative, contributing to open-source projects, sharing knowledge, and solving challenges collectively. This passion drives them to explore advanced features like hooks, the virtual DOM, and state management tools such as Redux or Context API, ensuring optimized and high-performance applications.
                        </p>
                        <p className="mt-4 text-gray-600">
                        React developers are not just coders; they are problem-solvers who focus on delivering seamless user experiences. They pay close attention to responsive design, accessibility, and cross-device compatibility, ensuring their applications meet diverse user needs. The ever-evolving React ecosystem keeps developers motivated, as they continuously learn and experiment with new tools like Next.js or React Native.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
  }