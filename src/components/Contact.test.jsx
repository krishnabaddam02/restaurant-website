import { fireEvent, render, screen } from "@testing-library/react";
import Contact from "./Contact";


describe("contacts component",()=>{
    it("it should not show any contacts",()=>{
        render(<Contact showContact ={false}/>)
    })

    it("it should show contacts",()=>{
        render(<Contact showContact ={true}/>)
    })

    
    it("it should trigger handle click function on click of address button",()=>{
        render(<Contact showContact ={true} onClick={()=>{}}/>)
        const btn = screen.getByTestId("address-btn")
        fireEvent.click(btn)
    })

    
})