import { Helmet } from 'react-helmet-async';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';

export default function LoadingPage(): JSX.Element {
  return (
    <div className="page">
      <Helmet>
        <title>6 cities: loading...</title>
      </Helmet>
      <Header logged={false} enableUserNav={false} />
      <main>
        <h1 className="visually-hidden">Loading...</h1>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '80vh',
          }}
        >
          <LoadingSpinner />
        </div>
      </main>
      <Footer />
    </div>
  );
}
