import Section from "./Section"
import Heading from "./Heading"
import PricingList from "./PricingList"
import { smallSphere , stars } from "../assets"
import {LeftLine , RightLine} from '../component/design/Pricing'
const Pricing = () => {
  return (
    <Section id='pricing'>
      <div className="container relative">
        <div className="hidden z-2 mb-12 lg:flex justify-center items-center">
            <img src={smallSphere} width={300} height={150} alt="smallSphere" />
        <div className="  z-1 absolute top-0 left-[50%]  -translate-x-1/2 -translate-y-1/2 w-[60rem] pointer-events-none">
            <img src={stars} className="w-full " width={900} height={500} alt="stars" />
        </div>
        </div>
        <Heading tag='Get started with brainWave' title='pay once , use for ever'  />

        <div className="relative">
          <LeftLine />
           <PricingList />
           <RightLine />
        </div>
        <div className="flex items-center justify-center mt-9 ">
          <a href="#pricing" className=" text-xs underline uppercase tracking-wider 
                                        font-code font-bold hover:no-underline">Explore more detalis</a>
        </div>
      </div>
    </Section>
  )
}

export default Pricing
