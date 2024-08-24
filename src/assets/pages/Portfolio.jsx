import React from "react";
import gameGalaxxyImg from '../images/game-galaxxy.png';
import weatherDashboardImg from '../images/weather-dashboard.png';
import noteTakerImg from '../images/note-taker.png';
import planPalImg from '../images/planpal.png';
import campingProcrastinatorImg from '../images/camping-procrastinator.png';
import employeeTrackerImg from '../images/employee-tracker.png';

const Portfolio = () => {
    const projects = [
        {
            title: 'GVM3 GVLVXXY',
            imageUrl: gameGalaxxyImg,
            deployedUrl: 'https://game-galaxxy.onrender.com/',
            githubUrl: 'https://github.com/TheKyleKirby/GAME-GALAXXY'
        },
        {
            title: 'Weather Dashboard',
            imageUrl: weatherDashboardImg,
            deployedUrl: 'https://betzaida96.github.io/weather-dashboard/',
            githubUrl: 'https://github.com/Betzaida96/weather-dashboard'
        },
        {
            title: 'Note Taker',
            imageUrl: noteTakerImg,
            deployedUrl: 'https://note-taker-upjv.onrender.com/',
            githubUrl: 'https://github.com/Betzaida96/note-taker'
        },
        {
            title: 'PlanPal',
            imageUrl: planPalImg,
            deployedUrl: 'https://planpal-yz2w.onrender.com/',
            githubUrl: 'https://github.com/BradBurr-Github/PlanPal'
        },
        {
            title: 'Camping Procrastinator',
            imageUrl: campingProcrastinatorImg,
            deployedUrl: 'https://joel-fischer.github.io/CampingProcrastinator/',
            githubUrl: 'https://github.com/Joel-Fischer/CampingProcrastinator'
        },
        {
            title: 'Employee Tracker SQL',
            imageUrl: employeeTrackerImg,
            videoUrl: 'https://drive.google.com/file/d/1nfdz_23AcwjfITI7ZWZS07uWRqsNX7bW/view',
            githubUrl: 'https://github.com/Betzaida96/employee-tracker-SQL'
        },
       
    ];

    return (
        <section className="py-9 bg-lightLightPink">
            <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-pinkyRed mb-8">Portfolio</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item border-4 border-lavender rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img src={project.imageUrl} alt={`${project.title} screenshot`} className="w-full h-auto"/>
                        <div className="p-4">
                        <h3 className="text-2xl font-semibold text-pinkyRed text-center mb-2">{project.title}</h3>
                        <div className="portfolio-links flex justify-center space-x-4">
                            {project.deployedUrl ? (
                                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer" className="text-brightLavender hover:text-rosePink">View App</a>
                            ): (
                                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer" className="text-brightLavender hover:text-rosePink">Watch Video</a>
                            )}
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-brightLavender hover:text-rosePink">View Code</a>
                        </div>
                    </div>
                    </div>
                ))}
            </div>
          </div>
        </section>
    );

};

export default Portfolio;