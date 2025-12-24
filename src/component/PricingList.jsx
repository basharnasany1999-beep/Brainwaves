import { pricing } from "../components"
import Button from '../component/Button'
import { check } from "../assets"

const PricingList = () => {
  return (
    <div className="flex max-lg:flex-wrap gap-[1rem]">
      
        {pricing.map((item , i )=>(
            <div className="h-full  w-[19rem] max-lg:w-full border  border-n-6 rounded-[2rem] 
            lg:w-auto even:py-14 odd:py-6 odd:my-6 px-3 [&>h4]:first:text-color-1 [&>h4]:even:text-color-2 [&>h4]:last:text-color-3">
               <h4 className="h4 mb-3"> {item.title}</h4>
               <p className="body-2 text-n-1/50 min-h-[10rem]">{item.description}</p>
               <div className="flex items-center mx-2 min-h-[5rem] ">
               {item.price && 
               <>
               <div className="text-[2rem]">$</div>
               <div className="text-[6rem] font-bold">{item.price}</div>
               </>
               }
               </div>
              <Button className={`px-4 mt-5 w-full mb-10 
                `} white={!!item.price}>
                {item.price ? 'get started' : 'contact us'}
              </Button>
              <ul>
              {item.features.map((feature , i )=>(
               <li className="flex  items-start py-3 border-t border-n-6/50">
                  <img src={check} alt="chek" />
                  <p className="body-2 ml-4 ">{feature}</p>
               </li>
              ))}
              </ul>
            </div>
        ))}
      </div>
    
  )
}

export default PricingList
