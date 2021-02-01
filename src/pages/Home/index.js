import { lazy } from "react";

import NewIntroBlock from "../../content/NewIntroBlock.json";
import ShortBlockContent from "../../content/ShortBlockContent.json";
import OverviewContent from "../../content/OverviewContent.json";

const ShortBlock = lazy(() => import("../../components/ShortBlock"));
const ContactFrom = lazy(() => import("../../components/ContactForm"));
const ContentBlock = lazy(() => import("../../components/ContentBlock"));
const MiddleBlock = lazy(() => import("../../components/MiddleBlock"));
const Container = lazy(() => import("../../common/Container"));
const ScrollToTop = lazy(() => import("../../common/ScrollToTop"));
const OverviewBlock = lazy(() => import("../../components/OverviewBlock"));
const NextStepsBlock = lazy(() => import("../../components/NextStepsBlock"));

const Home = () => {
  return (
    <Container>
      {/* <ScrollToTop /> */}
      {/* <ContentBlock
        type="right"
        first="true"
        title={IntroContent.title}
        content={IntroContent.text}
        button={IntroContent.button}
        icon="developer.svg"
        id="intro"
      /> */}
      <MiddleBlock
        title={NewIntroBlock.title}
        content={NewIntroBlock.text}
        subtext={NewIntroBlock.subtext}
      />
      <ShortBlock
        title={ShortBlockContent.title}
        content={ShortBlockContent.text}
      />
      <OverviewBlock
      />
      <NextStepsBlock/>
    </Container>
  );
};

export default Home;
