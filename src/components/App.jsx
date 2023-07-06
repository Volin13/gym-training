import { useRef } from 'react';
import Classes from './Classes/Classes';
import DisciplinesList from './DisciplinesList/DisciplinesList';
import DownloadApp from './DownLoadApp/DownloadApp';
import FeedBack from './FeedBack/FeedBack';
import Footer from './Footer/Footer';
import FreeTrial from './FreeTrial/FreeTrial';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import QuestionsAndAnswers from './Q&A/QA';
import Team from './Team/Team';
import VideoSection from './VideoSection/VideoSection';

export const App = () => {
  const classesSection = useRef(null);
  const teamSection = useRef(null);
  const qASectionRef = useRef(null);
  const feedbackSectionRef = useRef(null);

  const handleUsersSectionІScroll = ref => {
    if (ref) ref.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <Header
        scrollFunc={handleUsersSectionІScroll}
        classesSectionRef={classesSection}
        teamSectionRef={teamSection}
        qASectionRef={qASectionRef}
        feedbackSectionRef={feedbackSectionRef}
      />
      <Hero />
      <DisciplinesList />
      <Classes
        classesSectionRef={classesSection}
        scrollFunc={handleUsersSectionІScroll}
      />
      <Team
        teamSectionRef={teamSection}
        scrollFunc={handleUsersSectionІScroll}
      />
      <DownloadApp />
      <VideoSection />
      <FeedBack feedbackSectionRef={feedbackSectionRef} />
      <QuestionsAndAnswers qASectionRef={qASectionRef} />
      <FreeTrial />
      <Footer />
    </>
  );
};
