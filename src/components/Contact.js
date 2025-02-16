const Contact = (props)=>{
    const {showContact,onClick} = props

    if(!showContact){
        return(
            <div>No contact found</div>
        )
    }


    return (
        <div>
            <h1 className="text-lg font-bold p-5 m-5 underline">Contact Us</h1>
            <div className="m-4 p-4 ">
                <h1 className="text-md font-semibold text-indigo-500 py-5">Name : Krishna Reddy Baddam</h1>
                <h1 className="text-md font-semibold text-indigo-500 py-5"> Phone No: +917997914001</h1>
                <h1 className="text-md font-semibold text-indigo-500 py-5"> Email : krishnabaddam676@gmail.com</h1>
                <h1 data-testid="address-btn" className="text-md font-semibold text-indigo-500 py-5" onClick={props.onClick}> Address : Maktha Kothagudem, Athmakur(s) </h1>
            </div>
        </div>
    )
}

export default Contact