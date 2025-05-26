import { NavLink, Outlet } from "react-router-dom";

const PageHome = () => {
    return (
        <div className="h-screen flex gap-4 p-4 bg-[#171846]">
            <header className="w-[270px] bg-slate-50 rounded-md p-4">
                <img className="w-[250px]" src="./src/assets/imgs/inbecLogo.png" alt="" />
                <nav className="grid *:text-center *:font-semibold gap-5 mt-10 *:leading-[40px] *:border *:border-white *:pl-4 *:rounded-md *:text-white *:duration-150 ">
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="segurancadainformacao">Segurança Da Informação</NavLink>
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="redesdecomputadores">Redes De Computadores</NavLink>
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="programacaocompython">Programação Com Python</NavLink>
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="arquieteturadesistemasope">Arquitetura de S.O</NavLink>
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="bancodedados">Banco De Dados</NavLink>
                    <NavLink end className="bg-[#931813] text-white hover:bg-[#171846] [&.active]:bg-[#171846]" to="projetosdeextensao">Projetos de Extensão</NavLink>
                </nav>
                <footer className="text-center mt-16">
                    <span className="">&copy; 2025 - Todos os direitos reservados.</span> 
                </footer>
            </header>
            <div className="flex-1 p-4 bg-slate-50 rounded-md overflow-auto">
                <Outlet />
            </div>
        </div>
    );
}

export default PageHome;

