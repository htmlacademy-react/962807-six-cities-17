import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

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
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '70vh',
            flexDirection: 'column',
          }}
        >
          <LoadingSpinner />
          <b
            className="favorites__status"
            style={{
              margin: '20px',
            }}
          >
            Loading...
          </b>
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
