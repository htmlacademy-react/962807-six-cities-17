import FavoriteList from '../../components/favorites-list/favorites-list';
import UserNav from '../../components/header-user-nav/header-user-nav';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

type FavoritePageProps = {
  logged?: true;
};

export default function FavoritePage({
  logged,
}: FavoritePageProps): JSX.Element {
  return (
    <div className="page">
      <Header>{logged && <UserNav />}</Header>
      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <FavoriteList />
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
