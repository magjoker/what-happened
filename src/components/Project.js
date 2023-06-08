
function Project (props) {
    return(
        <div className="projDisplay">
            <h3 id="projTitle">{props.title}</h3>
            <img src={props.image} alt="A Student's Website" className="projDisplay"/>
            <a href={props.link} className="projDisplay" id="link1">Deployed Application</a>
            <a href={props.githubLink} className="projDisplay" id="link2">GitHub Repo</a>
        </div>
    )
};

export default Project;