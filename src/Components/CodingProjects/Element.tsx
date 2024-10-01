import "./CodingProjects.css"

interface ElementProps {
    link?: string;
    skills?: string;
    description?: string;
  }
  
  function Element(props: ElementProps) {

    return(
        <div className="Coding-link-Dscrp-Cnt">
            <a className="Coding-Link" href={props.link}> View Project</a>
            <p className="Coding-Link-Dscrp"> Skills: {props.skills}</p>
            <p className="Coding-Link-Dscrp"> {props.description}</p>
        </div>

    )
}

export {Element};