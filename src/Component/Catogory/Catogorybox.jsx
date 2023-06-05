import queryString from 'query-string';
import { useNavigate, useSearchParams } from 'react-router-dom';


const Catogorybox = ({ label, icon: Icon }) => {

const [params,setparams] = useSearchParams();
const category = params.get("category")
const navigate = useNavigate();

const handleUrl = () =>{
  let currentQurry = {};
console.log(category);
  if(params){
    currentQurry=queryString.parse(params.toString());
  }

  const updateQuiry = {
    ...currentQurry,
    category:label,
  }

  const url = queryString.stringifyUrl(
    {
      url:"/",
      query:updateQuiry
    },
    {skipNull:true}
  )

  navigate(url);
}


    return (
       
            <div onClick={handleUrl}
            className="p-5
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