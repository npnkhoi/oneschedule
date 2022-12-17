import Footer from "./Footer";
import renderer from "react-test-renderer";

test.skip('footer', () => {
    const footer = renderer.create(<Footer />)
    const tree = footer.toJSON()

    expect(tree).toMatchSnapshot()
})