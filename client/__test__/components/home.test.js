import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Home from '../../src/components/home'

const mockStore = configureMockStore();
const store = mockStore({});

describe("App Component", () => {
    test("renders the App Component", () => {
        const wrapper = shallow(<Provider store={store}><Home /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});