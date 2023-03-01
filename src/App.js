
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title="TextUtilsharsh" about="about us"/>
    <div className="container my-3">
    <TextForm heading="Fill up this form."/>
    </div>
    </>
    
  );
}

export default App;
