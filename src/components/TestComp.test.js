import { render, screen } from "@testing-library/react";
import TestComp from "./TestComp";


describe('render Test comp', () => {
  
    test('paragraph should display', () => {
        render(<TestComp />);
        const paraId = screen.getByTestId('para');
        expect(paraId).toBeInTheDocument()
    })

    test('heading should display', async() => {
        render(<TestComp />);
        const h1El = await screen.findByTestId('head');
        await expect(h1El).toBeInTheDocument()
    })
    


})