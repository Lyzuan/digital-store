import LogoSvg from "../assets/logo-header.svg"
const Logo = () => {
    return ( 
        <div>
        <img src={LogoSvg}
         alt="Logo da aplicação"
         className="flex flex-1 justify-content-center"
         />
        </div>
     );
}
 
export default Logo;