import {render, screen, fireEvent} from "@testing-library/react";
import FormInput from "../../../../shared/components/FormInput/FormInput";

describe('Form Input', () => {
    test('Render Successfully', () => {
        render(
            <FormInput label='dummy label' value='dummy text'/>
        )
        const labelElem = screen.getByText('dummy label');
        expect(labelElem).toBeInTheDocument();
        const valueElem = screen.getByDisplayValue('dummy text');
        expect(valueElem).toBeInTheDocument();
    });

    test('should call onchange function with correct param when input is change', () => {
        const mockOnValueChange = jest.fn()
        render(<FormInput id='dummyId' label='dummy label' value='dummy text' onValueChange={mockOnValueChange}/>);
        const inputElem = screen.getByRole('textbox');
        fireEvent.change(inputElem, {target : {value : '23'}});
        expect(mockOnValueChange).toHaveBeenCalledWith('dummyId', '23')
    })
})