import {render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';


describe ("Testing <Counter />",  () => {
    test ("render the Counter component", () => {
        render(<Counter />);

        const countElement = screen.getByText(/Count:/i);
        const buttonElement = screen.getByText(/Increment/i);

        expect(countElement).toBeInTheDocument();
        expect(buttonElement).toBeInTheDocument();
    });

    test ("increment the count when the buttom is clicked", () => {
        render(<Counter/>);
        
        const buttomElement = screen.getByText(/Increment/i);

        fireEvent.click(buttomElement);

        const countElement = screen.getByText(/Count: 1/i);

        expect(countElement).toBeInTheDocument();
    })
})