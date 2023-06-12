import { useRef } from 'react';
import Classes from './Classes/Classes';
import DisciplinesList from './DisciplinesList/DisciplinesList';
import DownloadApp from './DownLoadApp/DownloadApp';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
import FreeTrial from './FreeTrial/FreeTrial';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import MotivanionalSection from './MotivanionalSection/MotivanionalSection';
import QuestionsAndAnswers from './Q&A/QA';
import Team from './Team/Team';
import VideoSection from './VideoSection/VideoSection';

export const App = () => {
  const classesSection = useRef(null);
  const teamSection = useRef(null);
  const aboutUsSection = useRef(null);
  const gallerySection = useRef(null);
  const handleUsersSectionІScroll = ref => {
    // if (ref) ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header
        scrollFunc={handleUsersSectionІScroll}
        classesSectionRef={classesSection}
        teamSectionRef={teamSection}
        aboutUsSectionRef={aboutUsSection}
        gallerySectionRef={gallerySection}
      />
      <Hero />
      <DisciplinesList />
      <MotivanionalSection />
      <Classes ref={classesSection} />
      <Team ref={teamSection} />
      <DownloadApp />
      <VideoSection />
      <FeedBack />
      <QuestionsAndAnswers />
      <FreeTrial />
      <Footer />
    </>
  );
};
