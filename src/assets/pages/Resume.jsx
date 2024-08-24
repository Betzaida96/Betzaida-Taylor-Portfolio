import React from "react";

const Resume = () => {
    return (
        <section className="py-12 bg-lightLightPink">
            <div className="container mx-auto max-w-4xl bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-4xl font-bold text-pinkyRed mb-6 text-center">Resume</h2>
            <p className="text-lg text-darkRed mb-6 text-center">
                You can download my resume <a href="/Betzaida-Taylor-Resume.pdf" className="text-brightLavender hover:underline" download>here</a>.
            </p>
            <h3 className="text-3xl font-semibold text-pinkyRed mb-4">Proficiencies</h3>
            <ul className="list-disc list-inside text-lg text-darkRed space-y-2">
              <li>JavaScript, HTML5, CSS3, React, Node.js, Express.js, PostgreSQL</li>
              <li>Front-End Development: Responsive Design, Cross-Browser Compatibility</li>
              <li>Back-End Development: RESTful APIs, Database Design</li>
              <li>Version Control: Git, GitHub</li>
              <li>Soft Skills: Excellent customer service, strong communications skills, Team collaboration</li>
            </ul>
            </div>
        </section>
    );
};

export default Resume;