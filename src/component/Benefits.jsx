import Section from './Section'
import Heading  from './Heading'
import { benefits } from '../components'
import Arrow from '../assets/svg/Arrow'
import {GradientLight} from './design/Benefits'
const Fetures = () => {
  return (
    <Section  id='features'  >
      <div className='relative container z-2'>
     <Heading title={"Chat Smarter, Not Harder with Brainwave"} 
     className={'max-w-[55rem] lg:max-w-[70rem]'} />

     <div className="flex flex-wrap justify-center mb-10 gap-7">
      {benefits.map((item , i )=>(
            <div
              className="  block relative z-3  p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
               
              }}
              key={item.id}
            >
          <div className=' border border-n-6 rounded-2xl flex flex-col z-2 p-[2rem] pointer-events-none min-h-[22rem] '>
            <h5 className='h5 mb-5'>{item.title}</h5>
            <p className='body-2 flex-1  mb-10 text-n-3'>{item.text}</p>
            <div className='flex items-center '>
              <img src={item.iconUrl} width={50} height={50} alt={item.title} />
              <p className='text-n-1 ml-auto font-code font-bold uppercase tracking-wider text-[0.90rem]'> Explore more</p>
       {item.light && <GradientLight />}
              <Arrow />
            </div>
            
        </div>
       <div className=" absolute -z-10 inset-0.5 bg-n-8">
        <div className="absolute indent-0 opacity-0 transition-opacity hover:opacity-10">
         { item.imageUrl && <img src={item.imageUrl} width={380} height={362} className='sm:w-full sm:h-full w-[80%] h-[80%] object-cover ' alt="" />}
        </div>
       </div>
            </div>
      ))}
     </div>
      </div>
    </Section>
  )
}

export default Fetures
