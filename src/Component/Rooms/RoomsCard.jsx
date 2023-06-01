import HeartButtoon from "../Button/HeartButtoon";


const RoomsCard = ({roomData}) => {
    console.log(roomData);
    const {category,dateRange,image,location,price} = roomData;
    return (
        <div className='col-span-1 cursor-pointer group'>
      <div className='flex flex-col gap-2 w-full'>
        <div
          className='
            aspect-square 
            w-full 
            relative 
            overflow-hidden 
            rounded-xl
          '
        >
          <img
            className='
              object-cover 
              h-full 
              w-full 
              group-hover:scale-110 
              transition
            '
            src={image}
            alt='Room'
          />
          <div
            className='
            absolute
            top-3
            right-3
          '
          >
          <HeartButtoon></HeartButtoon>
          </div>
        </div>
      <div className="text-center text-xl">
      <div className='font-semibold  '>{category}</div>
        <div className='font-light text-neutral-500'>
         {dateRange}
        </div>
        <div className='font-light'>{location}</div>
          <div className='font-semibold text-red-700'>${price}</div>
        
      </div>
    
      </div>
    </div>
    );
};

export default RoomsCard;