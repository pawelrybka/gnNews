import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Third from './Third';

describe('App', () => {
    it('Should render Modal component after clicking button', () => {
        render(<Third/>);
        
        const modalElement = screen.queryByTestId('modal');
        expect(modalElement).not.toBeInTheDocument();
    
        const buttonElement = screen.getByRole('button');
        fireEvent.click(buttonElement);
    
        const submitButton = screen.getByText('Submit')
        expect(submitButton).toBeInTheDocument();
    })
})



