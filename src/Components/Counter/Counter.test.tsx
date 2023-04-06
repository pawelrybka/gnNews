import { describe, expect, it } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('App', () => {
    it('Renders hello world', () => {
        render(<Counter/>);
        expect(
            screen.getByRole('heading', {
                level: 1,
            })
        ).toHaveTextContent('Vite + React')
    })
    it('increments count when the button is clicked', () => {
        const { getByText } = render(<Counter />);
        const countButton = getByText(/Count is/);
    
        fireEvent.click(countButton);
        expect(countButton).toHaveTextContent('Count is 1');
    });
})


