import "./Header.css"

const Header = () => {
	return ( 

	  <header className="header">
	  <div className="header__wrapper">
		<div className="header__title">
		  <strong>
			Hi, my name is <span className="header__titleAccent">Muhammad</span>
		  </strong>
		  <br />a frontend developer
		</div>
		<div className="header__subtitle">
		  <p>with passion for learning and creating.</p>
		</div>
		<a href="#!" className="header__btn">
		  Download CV
		</a>
	  </div>
	</header>
	
	);
}
 
export default Header;