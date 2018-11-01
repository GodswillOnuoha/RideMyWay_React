import React from "react";
import { shallow } from "enzyme";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import Header from '../../src/components/Header/Header'
import Authmenu from '../../src/components/Header/AuthMenu'
import Menu from '../../src/components/Header/Menu'

const mockStore = configureMockStore();
const store = mockStore({});

describe("Header Component", () => {
    test("renders the Header Component", () => {
        const wrapper = shallow(<Provider store={store}><Header /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });

    test("renders the Authmenu Component", () => {
        const wrapper = shallow(<Authmenu />);
        expect(wrapper.exists()).toBe(true);
    });

    test("renders the Menu Component", () => {
        const wrapper = shallow(<Menu />);
        expect(wrapper.exists()).toBe(true);
    });
});