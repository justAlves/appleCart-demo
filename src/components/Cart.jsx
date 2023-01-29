import { useState, useEffect } from 'react'
import { getItem, setItem } from '../services/LocalStoreFuncs'
import { BiTrash } from 'react-icons/bi'

export default props => {

    const [cart, setCart] = useState(getItem('Cart') || [])

    useEffect(() => {
        const interval = setInterval(() => setCart(getItem('Cart') || [...cart]), 1);
        return () => {
            clearInterval(interval);
        };
        }, []);

    const deleteItem = (obj) => {
        const element = cart.find((e) => e.id === obj.id)
        if(element){
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('Cart', arrFilter)
        }
    }

    

    const total = cart.reduce((acc, cur) => acc + cur.price ,0)

    return(
        <div className="dark:bg-zinc-800 dark:text-white transition-all p-5 fixed flex flex-col gap-4 justify-between bg-white h-auto w-[400px] rounded-lg mt-[75px] shadow-xl">
            <h1 className="text-xl font-bold">Carrinho</h1>
                {
                    cart.map((i) => (
                        <div className='dark:bg-zinc-600 dark:border-gray-800 bg-white rounded-lg border flex flex-col justify-center p-1'>
                            <div className='flex flex-row w-[300px] justify-center items-center' key={i.id}>
                                <img className='rounded-lg' src={i.thumbnail}/>
                                <h4 className='ml-3'>{i.title}</h4>
                            </div>
                            <div className='flex items-center justify-between mx-4'>
                                <h4 className='font-bold'>R${i.price}</h4>
                                <BiTrash onClick={() => deleteItem(i)} className='text-xl transition-all hover:scale-110 hover:cursor-pointer text-red-500 dark:text-violet-400'/>
                            </div>
                        </div>
                    ))
                }
                <div className='flex justify-between font-bold'>
                    <h2>{total === 0 ? 'Total:' : `Total: R$${total}`}</h2>
                    <button onClick={props.buy} disabled={cart.length > 0 ? false : true} className={`${cart.length > 0 ? 'dark:bg-violet-400 bg-red-500 hover:scale-105' : 'bg-gray-500'} transition-all px-10 py-2 text-white rounded-xl`}><h2>Finalizar Compra</h2></button>
                </div>
        </div>
    )
}