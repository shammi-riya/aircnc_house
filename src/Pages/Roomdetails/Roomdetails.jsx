import Header from "../../Component/Header/Header";
import RoomInfo from "../../Component/Rooms/RoomInfo";
import Roomresurvation from "../../Component/Rooms/Roomresurvation";
import Container from "../../Component/Shared/Container";


const Roomdetails = () => {
    return (
        <div>
            <Container>
      <div className='max-w-screen-lg mx-auto '>
        <div className='flex flex-col gap-6'>
          <Header />
          <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
            <RoomInfo />
            <div className='mb-10 md:col-span-3 order-first md:order-last'>
             <Roomresurvation></Roomresurvation>
            </div>
          </div>
        </div>
      </div>
    </Container>
        </div>
    );
};

export default Roomdetails;