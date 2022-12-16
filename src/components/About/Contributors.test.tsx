import { render, screen, waitForElementToBeRemoved } from '@testing-library/react'
import Contributors from './Contributors'
import "@testing-library/jest-dom/extend-expect"

test('At least 3 developers should appear', async () => {
    render(<Contributors />)
    screen.getByText('Loading ...')
    
    await waitForElementToBeRemoved(() => screen.queryByText('Loading ...'), {timeout: 3000})
    const developers = await screen.findAllByAltText(/developer avatar/i)
    expect(developers.length).toBeGreaterThan(2)
})