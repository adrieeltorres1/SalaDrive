import { IoShieldCheckmarkSharp } from "react-icons/io5";

const SegurancaDaInformacao = () => {
    return (
        <div>
            <h2 className="sm:text-xl text-xl font-semibold py-2 mb-2">
                Arquivos para a segunda avaliação (AV2)
            </h2>
            <div className="flex flex-wrap gap-6 items-center">
                <div className="bg-[#1d1e46] w-[250px] h-[240px] rounded-lg text-white shadow-md">
                    <div className="flex justify-center">
                        <div>
                            <IoShieldCheckmarkSharp className=" text-7xl mt-4" />
                        </div>
                    </div>
                    <h2 className="flex justify-center text-xl font-bold mt-6">Aula 1</h2>
                    <div className="flex justify-center gap-5 mt-8">
                        <button
                            className="rounded-md px-6 py-3 bg-[#931813]"
                            onClick={() => {
                                window.open("https://drive.google.com/uc?export=download&id=1u_U4atesGggF5Oj3nlP4Z6XV-Tt_VsjO", "_blank");
                            }}
                        >
                            Visualizar
                        </button>
                         <button
                            className="rounded-md px-6 py-3 bg-[#931813]"
                            onClick={() => {
                                window.open("https://drive.google.com/uc?export=download&id=1u_U4atesGggF5Oj3nlP4Z6XV-Tt_VsjO", "_blank");
                            }}
                        >
                            Baixar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SegurancaDaInformacao;

