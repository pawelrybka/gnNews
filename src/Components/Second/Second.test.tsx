import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import Second from './Second'

describe('App', () => {
    it('Renders hello world', () => {
        render(<Second/>)
        expect(
            screen.getByRole('button')
        ).toHaveTextContent('Change')
    })
    it('Shows the div when button toggle', () => {
        const { getByText } = render(<Second />)
        const buttonElement = getByText('Change')
        fireEvent.click(buttonElement)
        const divElement = getByText('Yoo')
        expect(divElement).toBeInTheDocument()
    })
})



