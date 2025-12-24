import Section from "./Section"
import { curve, heroBackground, robot } from "../assets"
import Button from './Button'
import { BackgroundCircles , BottomLine , Gradient } from './design/Hero'
import { heroIcons } from "../components"
import {ScrollParallax} from 'react-just-parallax'
import Generating from "./Generating"
import Noticfication from "./Noticfication"
import HeroFooter from "./HeroFooter"
const Hero = () => {
  return (
    <Section className='pt-[12rem] -mt-[5.25rem]'
     crosess 
     crossesOffset='lg:translate-y-[5.25rem]' 
     customPaddings 
     id='hero'>
    
    <div className="container relative">
        <div className="text-center relative z-1 max-w-[62rem] mx-auto mb-10 lg:mb-[2rem]  ">
            <h1 className="h1 mb-6 z-0 ">  Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
                <span className=" inline-block  relative">Brainwave{" "}
                 <img className=" absolute top-full w-full left-0  "
                width={624}
                height={28}
                alt="Curve" src={curve}  />
                </span>
            </h1>
            <p className="body-1 max-w-3xl text-n-2 mx-auto mb-3 lg:mb-8">
            Unleash the power of AI within Brainwave. Upgrade your productivity
            with Brainwave, the open AI chat app.
            </p>
            <Button white className={'px-6 text-n-6' }>Let's div in</Button>
        </div>
        <div className=" relative max-w-[23rem] mx-auto mb-20 lg:max-w-5xl">
          <div className="bg-conic-gradient z-1 p-0.25 rounded-2xl relative ">
            <div className="bg-n-8 relative rounded-[1rem]">
              <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem] " />
              <div className=" aspect-[33/40]  md:aspect-[688/490] lg:aspect-[1024/490] overflow-hidden rounded-b-[0.9rem]">
                <img width={1024} height={490} className="scale-[1.7] w-full  translate-y-[8%] md:scale-[1]  md:-translate-y-[10%] lg:-translate-y-[23%]" src={robot} alt="robot" />
             <ScrollParallax isAbsolutelyPositioned>
                <Noticfication className={'absolute -right-[5.7rem] top-[60%] '}/>
                 </ScrollParallax>
                 <Generating className={'absolute left-[20%]  bottom-0 md:left-[20%] lg:translate-x-[30%]'}/>
                <ScrollParallax isAbsolutelyPositioned>
                  <ul className="hidden absolute -left-[5rem] top-1/2 bg-n-9/40 border px-1 py-1 border-n-1/10 rounded-2xl backdrop-blur xl:flex">
                    {heroIcons.map((icon , index)=>(
                      <li className="py-2 px-4" key={index}><img src={icon} alt="" /></li>
                    ))}
                  </ul>
                </ScrollParallax>
              </div>
            </div>
            <Gradient />
          </div>
          <div className=" absolute top-0 -z-4 -translate-x-[50.20%] left-1/2 w-[50rem]   lg:-translate-x-[50%] lg:w-[90rem] -translate-y-[20%] lg:-translate-y-[35%] ">
            <img src={heroBackground} className="w-full" alt="hero-background" />

          </div>
          <BackgroundCircles />
        </div>
        <BottomLine />
    <HeroFooter className={'hidden lg:block w-full my-5 '}/>
    </div>

    </Section>
  )
}

export default Hero
