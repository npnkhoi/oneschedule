import React from "react"
import { render } from "@testing-library/react"
import NavBar from "./NavBar"
import { HashRouter } from "react-router-dom"

describe('Navigation bar', () => {
  test('nav bar render Schedule text', () => {
    const component = render(
      <HashRouter>
        <NavBar />
      </HashRouter>
    )
    expect(component.container.textContent).toContain('Schedule')
  })
})