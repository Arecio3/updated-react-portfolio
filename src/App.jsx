import NavBar from "./components/navbar/NavBar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import "./app.scss";
import { useState } from "react";
import Budget from "./components/pages/Budget";
import Quiz from "./components/pages/quiz/Quiz";
import Scheduler from "./components/pages/Scheduler";
import Astroscope from "./components/pages/astroscope/Astroscope";
import Parthub from "./components/pages/parthub/Parthub";
import Stonk from "./components/pages/stockchasr/Stockchasr";
import Pass from "./components/pages/password/Password";
import Employee from "./components/pages/Employee";
import Fitness from "./components/pages/Fitness";
import Notes from "./components/pages/Notes";
import Team from "./components/pages/Team";
import Weather from "./components/pages/Weather"; 
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="App">
      <NavBar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <div className="sections">
          <Intro />
          <Portfolio />
          <Budget />
          <Quiz />
          <Scheduler />
          <Astroscope />
          <Parthub />
          <Employee />
          <Fitness/>
          <Pass />
          <Stonk />
          <Notes />
          <Team />
          <Work />
          <Contact />
          <Weather />
        </div>
    </div>
  );
}

export default App;
