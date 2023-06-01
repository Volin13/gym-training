import Classes from './Classes/Classes';
import DownloadApp from './DownLoadApp/DownloadApp';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';
import Title from './UI/Title/Title';
import VideoSection from './VideoSection/VideoSection';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <Title text="instructors" />
      <Team />
      <DownloadApp />
      <VideoSection />
      <Footer />
    </>
  );
};
