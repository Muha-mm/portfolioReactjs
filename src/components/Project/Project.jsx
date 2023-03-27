import { NavLink } from "react-router-dom";
import "./Project.css"

const Project = (props) => {
  return (
    <NavLink to={`/projectPage/` + props.id}>
      <li className="projects__list__item">
        {console.log(props.title)}
        <img
          className="projects__list__item__img"
          src={props.img}
          alt={props.img}
        />
        <h3 className="projects__list__item__title">{props.title}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
