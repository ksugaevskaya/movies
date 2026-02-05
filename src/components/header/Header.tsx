import type { ChangeEvent } from "react";
import "./Header.css";

type HeaderProps = {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onClick: () => void;
};

export default function Header({ onChange, value, onClick }: HeaderProps) {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">MovieApp</span>
      </div>

      <input
        value={value}
        onChange={onChange}
        className="input__field"
        type="text"
        name="search"
        placeholder="Search movies..."
      ></input>

      <div className="header__right">
        <button
          onClick={onClick}
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
