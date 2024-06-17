import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/projects/Projects";
import {ContactMe} from "./layout/sections/contactMe/ContactMe";
import {Footer} from "./layout/footer/Footer";

// style={{overflowX: 'clip'}}

function App() {
    return (
        <div style={{overflowX: 'clip'}}>
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <ContactMe/>
            <Footer/>
        </div>
    );
}

export default App;
