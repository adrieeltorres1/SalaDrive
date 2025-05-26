import { NavLink, Outlet } from "react-router";

const PageHome = () => {
    return (
        <div className="h-screen flex gap-4 p-4 bg-[#171846]">
            <header className="w-[270px] bg-white rounded-md p-4">
                <img className="w-[250px]" src="./src/assets/imgs/inbecLogo.png" alt="" />
                <nav className="grid *:text-center *:font-semibold gap-3 mt-6 *:leading-[40px] *:border *:border-slate-300 *:pl-4 *:rounded-md *:text-slate-500 *:duration-150 ">
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="/segurancadainformacao">Segurança Da Informação</NavLink>
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="/programcaocompython">Redes De Computadores</NavLink>
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="">Programação Com Python</NavLink>
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="">Arquitetura de S.O</NavLink>
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="">Banco De Dados</NavLink>
                    <NavLink end className="hover:bg-[#931813] hover:text-white [&.active]:bg-[#171846] [&.active]:text-white" to="">Projetos de Extensão</NavLink>
                </nav>
            </header>
            <div className="flex-1 p-4 bg-white rounded-md overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default PageHome;