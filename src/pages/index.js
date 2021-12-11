
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Intro from '../components/Intro/Intro';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Intro  />
        { <BgAnimation /> }
       </Section> 
      <Projects />
      <Technologies />
      <Timeline />
      
    </Layout>
  );
};

export default Home;
