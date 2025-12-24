import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({px , href , className , children , white , onClick }) => {

 const classs = ` button  relative inline-flex  
                  transition-colors hover:text-color-1 items-center 
                  justify-center h-11 ${ `px-${px}` || 'px-7'} ${className || ''}      
 `
const spanClass ='relative z-10 text-purple-700'
   const renderButton = ()=>(
    <button className={classs} onClick={onClick}>
  <span className={spanClass}>{children}</span>
  {ButtonSvg(white)}
    </button>
)
const renderLink = ()=>(
  <a href={href} className={classs}>
   <span className={spanClass}>
  {children}</span>{ButtonSvg(white)}</a>
)
return href ? renderLink() : renderButton() 

}

export default Button
