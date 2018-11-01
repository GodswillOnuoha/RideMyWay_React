import React from "react";
import { shallow } from "enzyme";
import Logout from '../../src/components/Logout'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
describe("Login Component", () => {
    test("renders the Login Component", () => {
        const wrapper = shallow(<Provider store={store}><Logout /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});