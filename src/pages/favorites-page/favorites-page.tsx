import { AppProps } from '../../components/app/app';
import FavoriteList from '../../components/favorites-list/favorites-list';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';

export default function FavoritePage({
  logged,
}: Pick<AppProps, 'logged'>): JSX.Element {
  return (
    <div className="page">
      <Header logged={logged} />
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
