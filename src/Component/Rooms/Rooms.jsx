import { useEffect, useState } from "react";
import RoomsCard from "./RoomsCard";
import Container from "../Shared/Container";

import Spnineer from "../Spnineer/Spnineer";
import { useSearchParams } from "react-router-dom";
import Heading from "../Heading/Heading";


const Rooms = () => {
    const [roomsData,setRoomsData]= useState([])
    const [params,setParams] = useSearchParams()
    const [loading,setLoading] = useState(false);
    const category = params.get("category")
    
 
    useEffect(()=>{
      setLoading(true)
      fetch("/Rooms.json")
      .then(res=>res.json())
      .then(data=>{
        if(!category){
          setRoomsData(data)
         
        }else{
          const filter = data.filter(room=>room.category == category);
          setRoomsData(filter);
         
        }
        setLoading(false)
      })
      .catch(err => console.log(err))
    },[category])

    

    if(loading){
      return <Spnineer></Spnineer>
    }

    return (
       <Container>
        {
          roomsData && roomsData.length >0 ? <>
           <div className="my-16 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-8">
            {
                roomsData.map(roomData=><RoomsCard
                    key={roomData.price}
                    roomData={roomData}
                    ></RoomsCard>)
            }
        </div>
          </>:<>
          <Heading
           title="No Rooms Avalable In this catogory"
           subtitle="Please select Other Catogorys"
           center={true}
          ></Heading>
          </>
        }
       </Container>
    );
};

export default Rooms;