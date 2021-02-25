import React, {useState} from 'react';

import StartScreen from '../StartScreen';
import FeedbackScreen from '../FeedbackScreen';
import JournalScreen from '../JournalScreen';
import TextScreen from '../TextScreen';

const Home = (props) => {
  const {response} = props;
  const [step, setStep] = useState(0);
  const totalInfo = response?.fields?.screens || [];
  const totalSteps = totalInfo.length;
  const currentInfo =
    step === 0 ? {type: 'startScreen'} : totalInfo?.[step - 1];
  const Screens = {
    startScreen: StartScreen,
    textScreen: TextScreen,
    journalScreen: JournalScreen,
    lessonFeedBackScreen: FeedbackScreen,
  };

  const onReset = () => setStep(0);

  const onNext = () => setStep((prev) => (prev === totalSteps ? 0 : prev + 1));

  const onPrev = () => setStep((prev) => prev - 1);

  const Component = Screens[currentInfo.type || 'startScreen'];

  return (
    <Component
      info={currentInfo}
      onNext={onNext}
      onPrev={onPrev}
      onReset={onReset}
    />
  );
};

export default Home;
