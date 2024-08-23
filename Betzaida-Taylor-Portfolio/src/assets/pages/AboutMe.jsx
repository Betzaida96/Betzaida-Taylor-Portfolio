import React from "react";
import profilePicture from '../images/betzy.jpg'

const AboutMe = () => {
    return (
    <section className="py-12 bg-lightLightPink">
        <div className="container mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center lg:flex-row lg:items-start lg:space-x-8">
            <img
            src={profilePicture}
            alt="Betzaida Taylor"
            className="w-40 h-40 rounded-full shadow-lg mb-6 lg:mb-0"
            />
            <div className="text-center lg:text-left">
        <h2 className="text-4xl font-bold text-pinkyRed mb-4">About Me</h2>
        <p className="text-lg text-darkRed mb-6">My name is Betzaida Taylor, and I am a 27-year-old web developer from Utah with a passion for creating beautiful and functional websites. My journey into web development began when I met someone who was a Software Engineer. Curious about what they did, I started researching and found myself captivated by the world of technology. The more I learned, the more I realized this was the path I wanted to take.
            <br /><br />
            I dove into the tech world, eager to undersand the intricacies of web development, and now I'm committed to continuously learning and refining my skills. I'm proficient in JavaScript, React, and Node.js, and I thrive in collaborative environments where I can contribute to innovative projects.
            <br /><br />
            When I'm not coding, you'll find me exploring new music, attending raves, reading, or traveling. My ultimate goal is to land a web development job where I can apply my skills and passion to create impactful digital experinces.
        </p>
        </div>
        </div>
        </div>
    </section>
    );
};

export default AboutMe;