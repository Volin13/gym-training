import DownloadApp from './DownLoadApp/DownloadApp';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';
import Title from './UI/Title/Title';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Title text="instructors" />
      <Team />
      <DownloadApp />
      <Footer />
    </>
  );
};
