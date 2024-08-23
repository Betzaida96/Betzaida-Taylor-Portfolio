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
        <section>
            <h2>Portfolio</h2>
            <div className="portfolio-grid">
                {projects.map((project, index) => (
                    <div key={index} className="portfolio-item">
                        <img src={project.imageUrl} alt={`${project.title} screenshot`} />
                        <h3>{project.title}</h3>
                        <div className="portfolio-links">
                            {project.deployedUrl ? (
                                <a href={project.deployedUrl} target="_blank" rel="noopener noreferrer">View App</a>
                            ): (
                                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">Watch Video</a>
                            )}
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">View Code</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );

};

export default Portfolio;