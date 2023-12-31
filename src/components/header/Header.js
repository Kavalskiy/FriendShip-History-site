import "./Header.css";
import { animated, useSpring, config } from "react-spring";
import nastya_logo from "../Assets/nastya_logo_1.png";

const Header = () => {
  const [beautyStyle] = useSpring(
    () => ({
      from: { opacity: 0, y: -300, color: "#000" },
      to: { opacity: 1, y: 0, color: "#06A77D" },
      config: config["molasses"],
    }),
    []
  );

  return (
    <header className="header">
      <div className="navbar">
        <div className="for-you">
          <div className="for-you-logo__container">
            <img src={nastya_logo} alt=""></img>
          </div>
          <p>Для тебя, Настюша</p>
        </div>
        <div className="year">
          <p>2024</p>
        </div>
      </div>
      <div className="header__body">
        <div className="header__title">
          <animated.p className="beauty" style={beautyStyle}>
            BEAUTY
          </animated.p>
          <p className="for-you__text">Для тебя, Настюша</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
