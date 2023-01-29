import { BsApple, BsCart, BsSun, BsMoonStarsFill } from 'react-icons/bs'

export default props => {
    return(
        <div className="fixed flex justify-between items-center px-14 w-full h-[75px] bg-black drop-shadow-xl">
            <BsApple className="text-white text-2xl font-bold"/>
            <div className='flex flex-row gap-9'>
                <BsMoonStarsFill onClick={props.darkClick} className="transition-all text-white text-2xl font-bold hover:scale-110 cursor-pointer"/>
                <BsCart onClick={props.dropCart} className="transition-all text-white text-2xl font-bold hover:scale-110 cursor-pointer"/>
            </div>
        </div>
    )
}