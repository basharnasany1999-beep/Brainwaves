import { notificationImages } from "../components"
import { notification1 } from "../assets"
const Noticfication = ({className , title}) => {
  return (
    <div className={`lg:flex gap-4 hidden    text-base ${className || ''} bg-n-6/40 py-2 px-3 rounded-[1.3rem] backdrop-blur  `}>
        <img src={notification1} className="w-[25%] rounded-[0.90rem]"  width={50} alt="" />
      <div className=' flex flex-col '>
        <p>Code generation</p>
    
      <div className="">
        <ul className=" flex mt-3 gap-3 ">
        {notificationImages.map((img , i)=>(
            <li key={i}><img src={img} className=" rounded-full overflow-hidden" width={25} height={25} alt='img' /></li>
        ))}
        </ul>
      </div> 
      </div>
    </div> 
    
  )
}

export default Noticfication
