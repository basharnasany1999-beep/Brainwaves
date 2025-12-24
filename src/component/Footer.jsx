import Section from "./Section"
import { socials } from "../components"
const Footer = () => {
  return (
    <Section crosses className={'!py-0 m-0'}>
      <div className=" container flex items-center max-sm:flex-col sm:justify-between justify-center py-4 px-10 ">
        <p className="body-2 text-n-4 font-code uppercase tracking-wider font-bold text-sm">{new Date().getFullYear()} new AI gonna serve you</p>
        <ul className="flex justify-center gap-8 py-5 ">

            {socials.map((item , i)=>(
                <a href="" className=" flex justify-center items-center rounded-full w-10 h-10 bg-n-7" >
                    <img src={item.iconUrl} alt="" />
                </a>
            ))}
        </ul>
      </div>
    </Section>
  )
}

export default Footer
