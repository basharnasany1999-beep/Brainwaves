import Section from "./Section"
import { collabContent  , collabApps} from "../components"
import { brainwaveSymbol, check } from "../assets"
import Button from "./Button"
import {LeftCurve  , RightCurve} from './design/Collaboration'
const Collaboration = () => {
 

  return (
    <Section crosses >
      <div className="container lg:flex ">
        <div className="">
        <h2 className="h2 mb-12 lg:mb-20">AI Chat App for seamless collaboration</h2>

        <div className="max-w-[22rem] relative ">
            {collabContent.map((items , i )=>(
                <div className="">
                <div className="flex items-center mb-3 mt-7 lg:mb-9">
                    <div className="mr-6">
                        <img src={check} width={22} height={22} alt="check" />
                    </div>
                    <h6 className=""> {items.title}</h6>
                </div>
                { items.text && <p className="mb-10 body-2 text-n-4">{items.text}</p> }
                </div>
            ))}
        </div>
   <Button className={'p-2 mt-12'}>Try it NOW!</Button>
      </div>
      <div className=" mt-3 mb-12 xl:max-w-[32rem] max-w-[22rem]">
        <p className="body-2 mb-7 text-n-4 ">With smart automation and top-notch security , it's perfect solution for teams looking to work smarter</p>

        <div className="relative left-1/2 flex rounded-full aspect-square border w-[22rem] lg:translate-y-[30%] md:-translate-x-[10%]  lg:-translate-x-[60%]  -translate-x-[50%] border-n-6  scale-75 lg:scale-100 ">
        <div className="flex w-60 m-auto aspect-square border border-n-6 rounded-full">
          <div className="flex m-auto items- aspect-square  rounded-full bg-conic-gradient w-[6rem] p-0.5 ">
            <div className="bg-n-8 w-full h-full rounded-full flex justify-center items-center z-3 ">
              <img src={brainwaveSymbol}height={63} width={ 63}  className="animate-pulse" alt="brainwave" />
            </div>
          </div>
        </div>
        <ul className={` `}>
          {collabApps.map((items , i) => (
            <li className={`absolute left-[50%] top h-1/2 -ml-[1.6rem]   rounded-full rotate-${ i * 45} origin-bottom `}>
              <div className={` relative -top-[1.6rem] flex w-[3.2rem ] border border-n-1/40 rounded-xl p-1 -rotate-${i * 45}`}>
                <img src={items.icon} className="m-auto" width={items.width} height={items.height} alt={items.title} />
              </div>
            </li>
          ))}
         </ul>
         <LeftCurve/>
         <RightCurve />
        </div>
      </div>
      </div>
    </Section>
  )
}

export default Collaboration
