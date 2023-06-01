import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";
import Container from "../Shared/Container";


const Rooms = () => {
    const [roomsData,setRoomsData]= useState([])

    useEffect(()=>{

      fetch("/Rooms.json")
      .then(res=>res.json())
      .then(data=>{
        setRoomsData(data)
      })

    },[])



    return (
       <Container>
         <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
            {
                roomsData.map(roomData=><RoomsCard
                    key={roomData.price}
                    roomData={roomData}
                    ></RoomsCard>)
            }
        </div>
       </Container>
    );
};

export default Rooms;