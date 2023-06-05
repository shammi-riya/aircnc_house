

const Heading = ({title,subtitle,center}) => {
    return (
        <div className={center? "text-center mt-10" : "text-start mt-10"}>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <h1 className='font-light text-neutral-500 mt-2'>{subtitle}</h1>
        </div>
    );
};

export default Heading;