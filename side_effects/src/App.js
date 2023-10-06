import { useState } from 'react';

import BlogPosts from './components/BlogPosts';
import Alert from './components/Alert';
import Alert2 from './components/Alert2';
import Alert3 from './components/Alert3';
import Form from './components/Form';

const App = () => {
  // const [showAlert, setShowAlert] = useState(false);

  // const showAlertHandler = () => {
  //   setShowAlert(isShowing => !isShowing);
  // }

  return (
    <>
      {/* <button onClick={showAlertHandler}>
        {showAlert ? 'Hide' : 'Show'} Alert
      </button>
      {showAlert && <Alert />} */}

      {/* <Alert3 /> */}

      <Form />

    </>
  );
}

export default App;
