import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';

function App(props) {
  return (
    <div>
    <Header name="Dell PC" email="dell@support"/>
    <Header name="Asus PC"/>
        <div className="App">
        <h1>Hello Sachin !!</h1>
        <h3>Welcome To React App !!..</h3>
        </div>
    <Footer id='foot' name = 'MyCompany'/>
    </div>
  );
}

export default App;
