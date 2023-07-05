
import {Link} from 'react-router-dom'
const Header = ()=>{
    return (
    <div className="flex justify-between border-2 border-black p-4">
        <img src="https://tse4.mm.bing.net/th?id=OIP.RdNN9GEvTFDohpXmSeeplwHaGd&pid=Api&P=0&h=180" alt ="logo" className="h-16 w-16"/>
        <div className="flex">
            <ul className="flex p-4">
                <li className="px-4 font-bold text-md"><Link to="/">Home </Link></li>
                <li className="px-4 font-bold text-md"><Link to="/about">About Us </Link></li>
                <li className="px-4 font-bold text-md"><Link to="/contact">Contact Us</Link></li>
            </ul>
            <button className="text-md px-4  mt-2 h-10 w-30 bg-indigo-600 rounded-md text-white">Login</button>
        </div>
      
    </div>
    )
}

export default Header