import brackets from '../assets/svg/Brackets'

const TagLine = ({className , children}) => {
  return (
    <div className={`tagline flex items-center  ${className || ''}`}>
    {brackets('left')}
    <div className=" text-n-4 px-2  ">{children}</div>
    {brackets('right')}
    </div>
  )
}

export default TagLine
