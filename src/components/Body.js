import { useState, useEffect } from "react"
import Restcard from "./Restcard"
// import Shimmer from "./Shimmer"
import {Link} from 'react-router-dom'
import Shimmer from "./Shimmer"

const Body = ()=>{

     const [lisOfRestaurants,setListOfRestaurants] = useState([])
     const [filteredRestaurants,setFilteredRestaurants] = useState([])
     const [searchText, setSearchText] = useState("")

    useEffect(()=>{
        fetchData()
    },[])

    const fetchData = async()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json()
       // console.log(json)
        setListOfRestaurants(json.data?.cards[2]?.data?.data?.cards)
        setFilteredRestaurants(json.data?.cards[2]?.data?.data?.cards)

    }


    // console.log(searchText)

    return lisOfRestaurants.length=== 0 ? <Shimmer/> :(
        <div>
            <div className="flex">
                <div className="search">
                <input type="search" value = {searchText} onChange = {(e)=>(setSearchText(e.target.value))} className="border-2 border-gray-300 ml-6"/>
                
                <button onClick = {()=>{
                    const filteredRestaurants = lisOfRestaurants.filter((restaurant)=>restaurant.data.name.toLowerCase().includes(searchText.toLowerCase()))
                    setFilteredRestaurants(filteredRestaurants)
                }} className="text-md p-1 m-4 h-8 w-24 bg-indigo-600 rounded-md text-white">Search</button>
                </div>
                
                <button onClick ={()=>{
                    const filteredRestaurants = lisOfRestaurants.filter((restaurant)=>(restaurant.data.avgRating >4 ))
                    setFilteredRestaurants(filteredRestaurants)
                }} className="text-md p-1 m-4 h-8 w-34 bg-indigo-600 rounded-md text-white">Top Rated Restauransts</button>
            </div>
            <div className="p-8 m-8 flex flex-wrap">
            {filteredRestaurants.map((restaurant) => (<Link key={restaurant.data.id} to={"/restaurants/"+restaurant.data.id} ><Restcard  resData ={restaurant}/></Link>))}
            </div>
        </div>
    )
              
}

export default Body