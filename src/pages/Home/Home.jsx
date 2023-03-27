import Header from "../../components/Header/Header";
import "./Home.css"

const Home = () => {
  return (
    <div>

      <Header/>

      <main className="section">
          <div className="container">
            <div className="projectDetails">
              <h1 className="section__title">Skills</h1>

              <ul className="skills">
                <li className="skills__item">
                  Frontend
                  <p className="skills__item__details">
                    JavaScript, TypeScript, ReactJS, Angular, Redux, HTML, CSS,
                    NPM, BootStrap, MaterialUI, Yarn, TailwindCSS,
                    StyledComponents
                  </p>
                </li>

                <li className="skills__item">
                  Backend
                  <p className="skills__item__details">
                    NodeJS, MySQL, MongoDB, PHP, Laravel
                  </p>
                </li>
              </ul>
            </div>
          </div>
      </main>

    </div>
  );
};

export default Home;
