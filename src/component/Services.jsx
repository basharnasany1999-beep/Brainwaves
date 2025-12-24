import Heading from "./Heading"
import Section from "./Section"
import { service1 , service2 , service3 , check } from "../assets"
import { brainwaveServices , brainwaveServicesIcons } from "../components"
import{ PhotoChatMessage ,  VideoChatMessage , VideoBar , Gradient} from '../component/design/Services'
import Generating from "./Generating"
const Services = () => {
  return (
    <Section id='how-to-use'>
      <div className="container">
        <Heading title='Generative AI made for creators' text='Brainwavs unlock the potaintal of AI Powered Applications' />
        <div className=" relative">
        <div className="relative z-1 min-h-[39rem]  flex rounded-3xl overflow-hidden mb-9  p-8 lg:p-20 xl:h-[46rem]">
            <div className=" absolute top-0 left-0 w-full pointer-events-none  md:w-3/5  right-0 h-full">
                <img src={service1} width={900}  className="w-full h-full object-cover md:object-right" height={800} alt="smartest AI" />
            </div>
            <div className="z-2 relative max-w-[19rem] ml-auto  mt-[5rem]  ">
              <h4 className="h4 mb-5">Smartest AI</h4>
              <p className="body-2 text-n-4 mb-15">Brainwavs unlock the potaintal of AI Powered Applications</p>
              <ul>
                {brainwaveServices.map((items , i)=>(
                  <li className="flex items-start  mb-10 gap-5   ">
                    <img src={check} alt="check" />
                    <p>{items}</p>
                  </li>
                ))}
              </ul>
            
            </div>
      <Gradient />
                    <Generating  className={'mt-[6rem] absolute left-1/2 -translate-x-[50%] w-[60%] lg:translate-y-[1000%] translate-y-[900%] '}/>
        </div>
        <div className=" grid lg:grid-cols-2  gap-5 z-2 ">
          <div className="h-[39rem] overflow-hidden relative rounded-3xl flex items-center border border-n-1/10 lg:p-10 xl:h-[46rem] ">
          <div className="  absolute inset-0 bg-gradient-to-b  from-n-5/5 to-n-8/90">
            <img src={service2} className="w-full h-full object-cover" width={900} height={700} alt="robot" />
          </div>
              <div className=" absolute  inset-0 flex h-full items-end flex-col p-4 justify-end ">
              <h4 className="h4 mb-5">Photo editing</h4>
              <p className="body-2 text-n-4 mb-15 w-[80%]">Automatically enhance your photos using out AI app's photo editing feature . try it now !</p>
              </div>
          <PhotoChatMessage />

          </div>
          <div className="min-h-[39rem] overflow-hidden pt-12 px-6 lg:px-10 bg-n-7 rounded-3xl relative mb-10">
            <div className="mb-4 ">
              <h4 className="h4 mb-5 ">Video Generating</h4>
              <p className="body-2 text-n-4 mb-5">The world's most Powerful AI photo and video art generation engine , what will you  create ? </p>
              <ul className="flex justify-between items-center  py-5 ">
                {brainwaveServicesIcons.map((items , i)=>(
                  <li className={` rounded-2xl flex justify-center bg-n-6  items-center ${i === 2 ? ' w-[3rem] h-[3rem] bg-conic-gradient p-0.25  md:w-[4.5rem] md:h-[4.5rem] ' : ' flex w-10 h-10 md:w-15 md:h-15 ' }`}>
                    <div className={`${i === 2 ? 'bg-n-7 flex items-center justify-center w-full h-full rounded-[1rem]' : ''}`}>
                      <img src={items}  width={25} height={25} alt={items} />
                    </div>
                  </li>
                ))} 
              </ul>
            </div>
            <div className=" relative overflow-hidden  ">
              <img src={ service3} className="w-full h-full object-cover  " alt="scary robot" />
             
             <VideoChatMessage />
             <VideoBar />
            </div>
          </div>
        </div>

        </div>
      </div>
    </Section>
  )
}

export default Services
 