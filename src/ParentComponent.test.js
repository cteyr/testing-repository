import {render, screen, fireEvent} from '@testing-library/react';
import ParentComponent from './ParentComponent';

describe ('<ParentComponent />', () => {
    test('update the parent component text when the child component buttom is clicked', () => {
        render(<ParentComponent/>);

        const inputElement = screen.getByRole('textbox');
        const submitButtom = screen.getByRole('button', {name: /Submit/i });

        fireEvent.change(inputElement,  {target: {value: "Hello World"}});
        fireEvent.click(submitButtom);

        const updateText = screen.getByText(/Text: Hello World/i);
        expect(updateText).toBeInTheDocument();
    })
})