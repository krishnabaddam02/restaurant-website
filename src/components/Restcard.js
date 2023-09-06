const Restcard = (props)=>{
    const {resData} = props
    //console.log(resData)
    const {name,avgRating,cuisines,cloudinaryImageId} = resData.info
    //console.log(cloudinaryImageId)
    return (
        <div className="p-4 m-5  bg-gray-100 w-50 h-38 hover:bg-gray-300 cursor-pointer rounded-md">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + cloudinaryImageId} alt="res" className="h-24 w-48"/>
            <h3 className="text-sm font-bold text-start py-1 w-48">{name}</h3>
            <h4 className="text-sm w-48">{cuisines.join(" ")}</h4>
            <h3 className="text-sm font-bold text-start py-1">{avgRating}</h3>
        </div>
    )
}

export default Restcard