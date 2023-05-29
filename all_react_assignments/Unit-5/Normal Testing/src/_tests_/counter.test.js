import { fireEvent, render, screen } from "@testing-library/react";
import { Counter } from "../components/Counter";
import {userEvent} from "@testing-library/react"
//for Counter
describe("Test the counter Component",()=>{
    it("Counter should render",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("counter")
        const button=screen.getByTestId("custom-button")
        expect(text).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    })
    it("It should have intial value 0",()=>{
        render(<Counter/>)
        const text=screen.getByTestId("counter")
        screen.debug()
        expect(text).toHaveTextContent("counter: 0")
      ;
    })
    it("on clicking the add button count should increase",()=>{
        render(<Counter/>)
        const text = screen.getByTestId("counter")
        expect(text).toHaveTextContent("counter: 0")

        const addBtn=screen.getByTestId("custom-button")
        fireEvent.click(addBtn)
     screen.debug()
     expect(text).toHaveTextContent("counter: 1")
     fireEvent.click(addBtn)
     expect(text).toHaveTextContent("counter: 2")
    })
})