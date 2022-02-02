import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from '../store'
import config from "../utils/config";
import { prettyTerm } from "../utils/term";
import TermSwitch from "./TermSwitch";

beforeEach(() => {
    render(
        <Provider store={store}>
            <TermSwitch />
        </Provider>
    )
})

test('TermSwitch shows current term', () => {
    expect(screen.getByText(prettyTerm(config.currentTerm)))
})

test('TermSwitch has buttons', () => {
    // TODO: Assert something with the button
})