import "./Main.css"
import Hero from "./Sections/Hero";
import Wrapper from "./Sections/Wrapper";
import People from './Sections/People';
import Check from "./Sections/Check";
import Fits from "./Sections/Fits";
import Over from "./Sections/Over";

function Main() {
    return(
        <>
            <main>
                <Hero/>
                <Wrapper/>
                <People/>
                <Check/>
                <Fits/>
                <Over/>
            </main>
        </>
    )
}
export default Main;