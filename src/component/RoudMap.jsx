import Section from "./Section"
import Heading from "./Heading"
import TagLine from "./TagLine"
import {roadmap} from '../components/index'
import {  grid, loading1 , loading , check, check2 } from "../assets"
import { Gradient } from "./design/Roadmap"
import Button from "./Button"
const RoudMap = () => {
  return (
    <Section id='roadmap'>
      <div className="container mb-9">
        <Heading tag='get started into a new world of AI' title='Enter the new world of AI '/>
        <div className="grid lg:grid-cols-2 gap-6 mt-4 justify-center mb-7  ">
             
            {roadmap.map((item ,i) =>{
                const status = item.status === 'done' ? 'Done' : 'Prograsing'

                return (
                    <div className={`flex items-center h-full ${item.colorful ? 'bg-conic-gradient '   : 'bg-n-8'} z-1 rounded-[5rem]   p-0.25 even:md:translate-y-[5rem]  max-w-[40rem]`} key={item.id}>
                        <div className=" rounded-[5rem] relative z-2 w-full border border-n-7 bg-n-8 h-[100%] overflow-hidden p-10 md:p-15">
                            <div className=" absolute top-0 left-0 w-full">
                                <img src={grid} className="w-full h-full  overflow-hidden" width={400} height={300} alt="grid" />
                            </div>
                            <div className="relative z-2">
                                <div className="flex justify-between items-center max-w-[35rem] ">
                                    <TagLine>{item.date}</TagLine>
                                    <div  className="bg-n-1 rounded-sm px-3 py-2 ">
                                        <div className="flex items-center gap-3 pr-1 ">
                                            <img src={item.status === 'done' ? check2 : loading} width={25} height={25} alt="check" />
                                            <h4 className="  font-code font-bold text-sm tracking-wider text-n-7 ">{status}</h4>
                                        </div>
                                    </div>
                                </div>
                                    <div className=" flex justify-center items-center py-10">
                                        <img src={item.imageUrl} className="w-full h-full " alt={item.title} />
                                    </div>
                                 <div className="">
                                    <h2 className="h3 mb-4 ">{item.title}</h2>
                                    <p className="body-2 text-n-4">{item.text}</p>
                                 </div>
                            </div>
                        </div>
                    </div>
                )
            })}
     
        </div>
        <Gradient/>
        <div className="flex justify-center items-end h-[10rem]">
            <Button className='p-3 px-6' href='#roadmap'>RoadMap</Button>
        </div>
      </div>
    </Section>
  )
}

export default RoudMap
