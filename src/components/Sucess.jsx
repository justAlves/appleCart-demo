import { AiOutlineCheckCircle } from 'react-icons/ai'

export default props => {
    return(
        <div className="dark:bg-zinc-800 dark:text-white transition-all p-5 fixed flex flex-col gap-4 justify-center items-center bg-white h-[300px] w-[400px] rounded-lg mt-[75px] shadow-xl">
            <AiOutlineCheckCircle className='text-6xl text-green-500'/>
            <h1>Compra realizada com sucesso!</h1>
        </div>
    )
}