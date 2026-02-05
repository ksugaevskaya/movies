import "./Header.css";
export default function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <span className="header__logo">MovieApp</span>
      </div>

      <div className="header__right">
        <button
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
