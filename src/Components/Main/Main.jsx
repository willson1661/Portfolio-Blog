import Mainimg from "../Main/Images/Mainimg.png";

import "./Main.css";

const Main = () => {
  return (
    <div className="Main">
      <div className="total_main">
        <div className="bodyimg">
          <img src={Mainimg} alt="www" />
          <div className="txtonimg">
            <p className="hlo">Hello, I'M</p>
            <div class="deconstructed">
              Willson Raj Manda
              <div>Willson Raj Manda</div>
              <div>Willson Raj Manda</div>
              <div>Willson Raj Manda</div>
              <div>Willson Raj Manda</div>
            </div>
            <p className="role">FRONT-END DEVELOPER </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Main;
