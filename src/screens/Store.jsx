import { useEffect, useState } from "react"
import { BsFillCartCheckFill, BsFillCartPlusFill } from "react-icons/bs"
import Card from '../components/Card'
import Cart from "../components/Cart"
import Header from '../components/Header'
import Sucess from "../components/Sucess"
import { getItem, setItem } from "../services/LocalStoreFuncs"

export default props => {

    const apiURL = 'https://api.mercadolibre.com/sites/MLB/search?q=iphone'
    const [data, setData] = useState([])
    const [cartShow, setCartShow] = useState(false)
    const [cart, setCart] = useState(getItem('Cart') || [])
    const [dark, setDark] = useState(true);
    const [buy, setBuy] = useState(false)

    useEffect(() => {
        const fetchApi = async () => {
            const response = await fetch(apiURL)
            const objJson = await response.json()
            setData(objJson.results)
            console.log(objJson.results)
        }
        fetchApi()
        
    }, [])

    useEffect(() => {
        const interval = setInterval(() => setCart(getItem('Cart') || [...cart]), 1);
        return () => {
            clearInterval(interval);
        };
        }, []);

    function handleClick (obj){
        const element = cart.find((e) => e.id === obj.id)
        if(element){
            const arrFilter = cart.filter((e) => e.id !== obj.id)
            setCart(arrFilter)
            setItem('Cart', arrFilter)
        } else {
            setCart([...cart, obj])
            setItem('Cart', [...cart, obj])
        }
    }

    const buyItem = () => {
        setBuy(true)
        localStorage.clear()
        setCart([])
        const interval = setInterval(() => setBuy(false), 3000);
        return () => {
            clearInterval(interval);
        };
    }

    const showCart = () => {
        if(cartShow && buy){
            return <Sucess/>
        }else if(cartShow && buy === false){
            return <Cart buy={() => buyItem()}/>
        }else{
            return null
        }
    }

    return(
        <div className={dark ? 'dark' : ''}>
            <Header darkClick={() => setDark(!dark)} dropCart={() => setCartShow(!cartShow)}/>
            <div className="flex justify-end mr-4 max-sm:mr-0">
                {showCart()}
            </div>
            <div className="bg-slate-100 flex justify-center w-full h-full dark:bg-zinc-900">
                <div className="mt-[85px] grid place-items-center xl:grid-cols-7 max-lg:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 max-sm:grid-cols-1">
                    {data.map(i => {
                        return(
                            <Card icon={<div onClick={() => handleClick(i)}>
                                {cart.some((itemCart) => itemCart.id === i.id) ? (
                                <BsFillCartCheckFill className='transition-all text-xl hover:scale-125 hover:cursor-pointer text-red-500 dark:text-violet-400'/>
                            ) : <BsFillCartPlusFill className='transition-all text-xl hover:scale-125 hover:cursor-pointer text-red-500 dark:text-violet-400'/>
                                }
                            </div>} key={i.id } title={i.title} img={i.thumbnail} price={i.price}/>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}