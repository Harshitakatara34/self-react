import App from "../App";
import {fireEvent, render,screen} from "@testing-library/react";
import { Button } from "../Components/Button"
import renderer from "react-test-renderer"

describe("Testing Button component",()=>{
    it("Buttons should render on DOM",()=>{
        render (
       <Button size={"large"} color={"teal"}>
        Click Me</Button>
            )
        const button=screen.getByText("Click Me")
        expect(button).toBeInTheDocument()
            // screen.debug();
    })
    it("Buttons should be present on DOM",()=>{
        render (
       <Button>
      Custom Button</Button>
            )
        const button=screen.getByTestId("custom-button")
        expect(button).toBeInTheDocument()
            // screen.debug();
    })
    it("Check for button text content",()=>{
        render(<App/>)
        const button=screen.getAllByTestId("custom-button")
        expect(button[0]).toHaveTextContent("Click Me")
        expect(button[1]).toHaveTextContent("Click")
    })
   it("should incoke the function",()=>{
const mockFunc=jest.fn();
    render(<Button handleAdd={mockFunc}/>)
    const button=screen.getByTestId("custom-button")
fireEvent.click(button)
expect(mockFunc).toBeCalledTimes(1)
})
    

//snapShot testing
it("should match the snapshot",()=>{
const tree=renderer.create(<Button color={"blue"} size={"large"} >Click Me</Button>).toJSON()
expect(tree).toMatchSnapshot();


})

   
})