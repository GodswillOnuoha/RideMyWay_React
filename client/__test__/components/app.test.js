import React from "react";
import { shallow } from "enzyme";
import App from '../../src/components/App'

describe("App Component", () => {
    test("renders the App Component", () => {
        const wrapper = shallow(<App />);
        expect(wrapper.exists()).toBe(true);
    });
});
