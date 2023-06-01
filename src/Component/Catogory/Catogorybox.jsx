

const Catogorybox = ({ label, icon: Icon }) => {
    return (
       
            <div className="p-5
          bg-slate-50 
          text-xl 
          text-center 
          mx-1 flex 
        flex-col 
        items-center 
        justify-center 
        gap-2
        
        border-b-2
        hover:text-neutral-800
        transition
        cursor-pointer ">
                <Icon size={26} />
                <h1>{label}</h1>

            </div>
       
    );
};

export default Catogorybox;