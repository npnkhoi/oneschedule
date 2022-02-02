import { render } from "@testing-library/react";
import CTA from "./CTA";

test('cta button', () => {
    const btn = render(
        <CTA link='https://google.com' text='Text' />
    )

    expect(btn.container).toHaveTextContent('Text')
})