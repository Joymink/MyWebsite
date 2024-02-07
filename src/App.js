
import { Personal, Professional, Projects, Api, Header, Footer} from './containers';
import { Navbar } from './components';
import './App.css';
import './index.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Personal />
      <Professional />
      <Projects />
      <Api />
      <Footer />
    </div>
  );
}

export default App;
