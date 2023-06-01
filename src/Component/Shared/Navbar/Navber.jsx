import Container from "../Container";
import Logo from "./Logo";
import Menudropdowen from "./Menudropdowen";
import Search from "./Search";


const Navber = () => {
    return (
        <div className="bg-white w-full fixed z-10 shadow-sm">
            <div className="py-6 border-b-2 ">
            <Container>
               <div className="flex justify-between items-center">
               <div><Logo></Logo></div>
                <div><Search></Search></div>
                <Menudropdowen></Menudropdowen>

               </div>
            </Container>
            </div>
        </div>
    );
};

export default Navber;
