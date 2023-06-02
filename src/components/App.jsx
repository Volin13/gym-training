import Classes from './Classes/Classes';
import DownloadApp from './DownLoadApp/DownloadApp';
import Footer from './Footer/Footer';
import FreeTrial from './FreeTrial/FreeTrial';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Team from './Team/Team';
import VideoSection from './VideoSection/VideoSection';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <Team />
      <DownloadApp />
      <VideoSection />
      <FreeTrial />
      <Footer />
    </>
  );
};
