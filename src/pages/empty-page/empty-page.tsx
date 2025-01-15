import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
type EmptyPageProps = {
  logged: boolean;
};

export default function EmptyPage({ logged }: EmptyPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header logged={logged} enableUserNav={false} />
      <main className="page__main page__main--index page__main--index-empty">
        <div className="cities">
          <div className="cities__places-container cities__places-container--empty container">
            <section className="cities__no-places">
              <div className="cities__status-wrapper tabs__content">
                <b className="cities__status">404 Not Found</b>
                <p className="cities__status-description">
                  This is not the page you are looking for
                </p>
              </div>
            </section>
            <div className="cities__right-section" />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
