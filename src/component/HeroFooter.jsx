import { companyLogos } from "../components"

const HeroFooter = ({className}) => {
  return (
    <div className={className}>
      <h5 className=" text-center tagline z-100 text-xs text-n-1/30 mb-12">helpin people create beautiful content at</h5>
      <div className="flex justify-center items-center  ">
        {companyLogos.map((logo , i )=>(
            <div className="flex-1 flex items-center justify-center">
                <img src={logo} alt={i} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default HeroFooter
