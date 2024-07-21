import {  NavLink } from "react-router-dom";
import Logo from "./Logo";
import { Button } from 'primereact/button';
import Search from "./Search";

const Header = () => {

    return (
        <header className="bg-white w-full h-12rem md:shadow-2 px-8 py-4 gap-8 justify-content-around">
            <section className="flex mx-auto align-items-center gap-10">
                <div className="flex flex-1 align-items-center pl-4  gap-8">
                    <Logo />
                    <Search />
                </div>
                <div className="flex align-items-center justify-content-center gap-8 p-2 w-auto height 60px">
                    <a href="" className="text-gray-900 hover:text-primary ease-in transition-all duration-300">Cadastre-se</a>
                    <Button className="w-7rem h-2.50rem" label="Entrar" />
                    <a href="">
                        <i className="pi pi-cart-minus cursor-pointer text-primary hover:text-tertiary ease-in transition-all duration-300" style={{ fontSize: '1.5rem', color: '#EE4266' }}></i>
                    </a>
                </div>
            </section>
            <section className="flex gap-5 pt-6 pl-4">
                <NavLink className={"text-gray-900 hover:text-pink-500 no-underline hover:underline"} to={"/"}>Home</NavLink>
                <NavLink className={"text-gray-900 hover:text-pink-500 no-underline hover:underline"} to={"/produtos"}>Produtos</NavLink>
                <NavLink className={"text-gray-900 hover:text-pink-500 no-underline hover:underline"} to={"/categorias"}>Categorias</NavLink>
                <NavLink className={"text-gray-900 hover:text-pink-500 no-underline hover:underline"} to={"/meus pedidos"}>Meus Pedidos</NavLink>
            </section>
        </header>
    )
}

export default Header;