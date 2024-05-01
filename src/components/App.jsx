import { useState } from 'react';
import Description from './Description/Description'
import Options from './Options/Options';
import Feedback from './Feedback/Feedback';

const App = () => {

  const [data, setData] = useState({
	good: 0,
	neutral: 0,
	bad: 0
})

  const updateFeedback = feedbackType => {
    
  }
  
  return <div>
    <Description />
    <Options />
    <Feedback data={data} />
  </div>


}

export default App
