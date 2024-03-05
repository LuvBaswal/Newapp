import { useState } from "react";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App() {
  const [Progress, setProgress] = useState(0);

  const SetProgress = (Progress)=>{
    setProgress(Progress + 10)
  }
  return (
    <div className="App">
       <Router>
       <LoadingBar
        color='#f11946'
        progress={Progress}
        onLoaderFinished={() => setProgress(0)}
      />
       <Navbar/>
       
       <Routes>
          <Route exact path="/" element={<News setprogress={SetProgress} key="Business" Catagory="Business"/>}/>
          <Route exact path="/Sports" element={<News setprogress={SetProgress}key="Sports" Catagory="Sports"/>}/>
          <Route exact path="/Politics" element={<News setprogress={SetProgress}key="Politics" Catagory="Politics"/>}/>
          <Route exact path="/Entertainment" element={<News setprogress={SetProgress}key="Entertainment" Catagory="Entertainment"/>}/>
          <Route exact path="/General" element={<News setprogress={SetProgress}key="General" Catagory="General"/>}/>
          <Route exact path="/Health" element={<News setprogress={SetProgress}key="Health" Catagory="Health"/>}/>
          <Route exact path="/Science" element={<News setprogress={SetProgress}key="Science" Catagory="Science"/>}/>
          <Route exact path="/Technology" element={<News setprogress={SetProgress}key="Technology" Catagory="Technology"/>}/>
          
        </Routes>
       </Router>
    </div>
  );
}

export default App;