
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import Shimmer from "./Shimmer"

const RestaurantMenu = ()=>{
   

   
    const {id} = useParams()
    const resInfo = useRestaurantMenu(id)
   console.log(resInfo)
       
   
  

    if (resInfo === undefined) return   <Shimmer/>  ;

  const {name,cuisines} = resInfo?.data?.cards[0]?.card?.card?.info
 const {itemCards} =resInfo?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card
      return (

        <div className="p-4 m-4">
            <h1 className="text-md font-bold text-black py-2">{name}</h1>
            <h1 className="text-xs font-normal text-gray-600">{cuisines.join(" ")}</h1> 
            <h1 className="text-2xl font-bold text-black py-2 underline">Menu</h1>   
            <ul>
            {itemCards.map((item)=>(<li className="text-md font-bold text-gray-700 py-4" key={item.card.info.id}>{item.card.info.name} <br/>{'Rs '}{item.card.info.price/100}</li>))}
          </ul> 
         
        </div>
        
    )
}

export default RestaurantMenu