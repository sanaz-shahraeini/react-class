import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import "./styles.css"
const App = () => {
  let number = 80;


  return(
 <>
 <p className="pclass">{number}</p>
 <Header/>
 <Main/>
 <Footer/>

 
 </>
  )
}
export  default App;