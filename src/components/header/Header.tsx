import { useState, type ChangeEvent } from "react";
import "./Header.css";

type HeaderProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

export default function Header({ onChange, value }: HeaderProps) {
  const [isClicked, setClicked] = useState(false);

  const handleClick = () => {
    if (isClicked === false) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">MovieApp</span>
      </div>

      <input
        onChange={onChange}
        value={value}
        className={isClicked ? "input__field" : "input__field hidden"}
        type="text"
        name="search"
        placeholder="Search movies..."
      ></input>

      <div className="header__right">
        <button
          onClick={handleClick}
          className="header__icon header__icon--active"
          aria-label="Search"
        >
          <ion-icon name="search"></ion-icon>
        </button>
        <button
          className="header__icon header__icon--active"
          aria-label="Profile"
        >
          <ion-icon name="person"></ion-icon>
        </button>
      </div>
    </header>
  );
}
