import TagLine from "./TagLine"


const Heading = ({className , title , text , tag }) => {
  return (
    <div className={`${className} mb-12 lg:mb-20 max-w-[24rem] lg:max-w-[100%] md:text-center  `}>
      { tag && <TagLine className='md:justify-center mb-3'>{tag}</TagLine>}
      {title && <h2 className="h2 mt-5">{title}</h2>}
      {text && <p className="text-n-4 body-2 mt-4">{text} </p>}
    </div>
  )
}

export default Heading
