import Classes from './Classes/Classes';
import DisciplinesList from './DisciplinesList/DisciplinesList';
import DownloadApp from './DownLoadApp/DownloadApp';
import Footer from './Footer/Footer';
import FreeTrial from './FreeTrial/FreeTrial';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import QuestionsAndAnswers from './Q&A/QA';
import Team from './Team/Team';
import VideoSection from './VideoSection/VideoSection';

export const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <DisciplinesList />
      <Classes />
      <Team />
      <DownloadApp />
      <VideoSection />
      <QuestionsAndAnswers />
      <FreeTrial />
      <Footer />
    </>
  );
};
