import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
     <Header />
     <div className="app__body">
     <Sidebar />
     <Section />
     </div>
    </div>
  );
}

export default App;
