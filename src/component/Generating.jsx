import { loading } from "../assets"

const Generating = ({className}) => {
  return (
    <div className={`flex z-10 bg-n-7/80 gap-3  rounded-[1.7rem] items-center pr-10 pl-3 lg:w-[25rem] py-3 h-[3rem] ${className || ''} text-base `}>
      <img src={loading}  className="w-6 " alt="loading" />
      <p className="body-2">AI is Generating</p>
    </div>
  )
}

export default Generating
