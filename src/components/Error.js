import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError()
    return (
        <div className="flex flex-col items-center p-10 m-10">
            <h1 className="text-lg font-extrabold text-blue-500">Oops !! Something went wrong</h1>
            <h2 className="text-md font-semibold text-gray-500">{err.status}</h2>
            <h2 className="text-md font-semibold text-gray-500">{err.statusText}</h2>
        </div>
    )
}

export default Error