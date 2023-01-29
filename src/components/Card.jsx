import { BsFillCartPlusFill,  } from 'react-icons/bs'

export default props => {
    return(
        <div className="dark:bg-zinc-700 dark:text-white transition-all flex flex-col items-center p-2 h-[300px] w-[200px] mx-4 my-4 rounded-lg bg-white hover:bg-slate-50">
            <img className="h-1/2 w-auto rounded-lg" src={props.img}/>
            <div className="mt-2">
                <h2 className="font-bold">{props.title}</h2>
                <div className='flex mx-1 items-center justify-between'>
                    <h3 className="mt-2">R${props.price}</h3>
                    {props.icon}
                </div>
            </div>
        </div>
    )
}