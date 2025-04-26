import HomePage from "./UserComponents/HomePage";
import { BrowserRouter as Router, Route, Routes,} from "react-router-dom";




function App() {
    return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </Router>
    );
  }

export default App;