import Navbar from './components/Navbar';
import Calculator from './components/Calculator';
import Chatify from './components/Chatify';
import FirstLinkComponent from './components/FirstLinkComponent';




export default function App() {
  return (
    <div>
    <Navbar title="QuickTools" firstLink="Calculator" secondLink="Chatify"/>
    </div>
  )
};