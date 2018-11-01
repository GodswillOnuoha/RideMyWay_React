import React from "react";
import { shallow } from "enzyme";
import Auth from '../../src/containers/auth/Auth'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
describe("Auth Container", () => {
    test("renders the Auth container", () => {
        const wrapper = shallow(<Provider store={store}><Auth /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});