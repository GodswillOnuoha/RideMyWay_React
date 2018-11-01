import React from "react";
import { shallow } from "enzyme";
import RideDetails from '../../src/containers/RideDetail/RideDetail'
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";

const mockStore = configureMockStore();
const store = mockStore({});
describe("Auth Container", () => {
    test("renders the Auth container", () => {
        const wrapper = shallow(<Provider store={store}><RideDetails /></Provider>);
        expect(wrapper.exists()).toBe(true);
    });
});