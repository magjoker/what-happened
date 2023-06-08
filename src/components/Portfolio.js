import Project from "./Project";
import '../App.css';
import proj from './images/proj.png';
import proj1 from './images/proj1.png';
import proj2 from './images/proj2.png';
import proj3 from './images/proj3.png';
import proj4 from './images/proj4.png';
import proj5 from './images/proj5.png';

function Portfolio() {


    let projects = [
        {
            
            image: proj,
            title: "Workday Planner",
            link: "https://magjoker.github.io/RANDOM-ACCESS-MEMORIES/",
            githubLink: "https://github.com/magjoker/RANDOM-ACCESS-MEMORIES"
        },
        {
            image: proj2,
            title: "Forecast Forever",
            link: "https://magjoker.github.io/ALIVE-1997/",
            githubLink: "https://github.com/magjoker/ALIVE-1997"
        },
        {
            image: proj3,
            title: "The Elements",
            link: "https://room-on-fire.herokuapp.com/",
            githubLink: "https://github.com/magjoker/CANARY---YELLOW"
        },
        {
            image: proj4,
            title: "Lightspeed",
            link: "https://magjoker.github.io/TRON-LEGACY/index.html",
            githubLink: "https://github.com/magjoker/TRON-LEGACY"
        },
        {
            image: proj5,
            title: "Sky Jam",
            link: "https://j3rkstore.github.io/weatheringo/",
            githubLink: "https://j3rkstore.github.io/weatheringo/"
        },
        {
            image: proj1,
            title: "Note Taker",
            link: "https://musique-vol-1-1993-2005.herokuapp.com/",
            githubLink: "https://github.com/magjoker/IS-THIS-IT"
        }
        
    ];
    return (
        <div>
            <h1 className="port-title">Applications</h1>
            <div className="projects">
                {projects.map((proj) => (
                    <Project 
                        image={proj.image}
                        title={proj.title}
                        link={proj.link}
                        githubLink={proj.githubLink}
                    />
                ))}
            </div>
        </div>
    );
}

export default Portfolio;