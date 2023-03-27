import "./GithubBtn.css"
import githubLogo from "./blackGithubIcon.png"
import { NavLink } from "react-router-dom";
const GithubBtn = (props) => {
  return (
    <div>
      <NavLink to = {props.link} target="_blank" rel="noopener noreferrer" className="projectDetails__githubRepoLinkBtn">
        <img src={githubLogo} alt="githubLogo"/>
        GitHub repo
      </NavLink>
    </div>
  );
};

export default GithubBtn;
