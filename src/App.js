import { 
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./components/home";
import Auth from "./components/auth";
import Reg from "./components/reg";

function App() {
  return (
    <main>
      <Router>

        <Routes>
          <Route exact path="/" element={<Home login="hi"/>}/>
          <Route path="/auth" element={<Auth />}/>
          <Route path="/reg" element={<Reg />}/>
        </Routes>

      </Router>
    </main>
  );
}

export default App;
