import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import './loading-page.css';

export default function LoadingPage(): JSX.Element {
  return (
    <div className="page">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <span className="header__logo-link">
                <img
                  className="header__logo"
                  src="img/logo.svg"
                  alt="6 cities logo"
                  width={81}
                  height={41}
                />
              </span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <h1 className="visually-hidden">Loading...</h1>
        <div className="loading-spinner__spinner">
          <LoadingSpinner />
          <b className="loading-spinner__status">Loading...</b>
        </div>
      </main>
      <footer className="footer container">
        <span className="footer__logo-link">
          <img
            className="footer__logo"
            src="img/logo.svg"
            alt="6 cities logo"
            width={64}
            height={33}
          />
        </span>
      </footer>
    </div>
  );
}
