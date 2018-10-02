import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Layout from '../src/js/components/layout';
import Adapter from 'enzyme-adapter-react-16';
import { Provider } from 'react-redux';
import store from '../src/js/store';

Enzyme.configure({ adapter: new Adapter() });

describe("main Layout", () => {
    test("renders", () => {
        const wrapper = shallow(
            <Provider store={store}>
                <Layout />
            </Provider>
        );
        expect(wrapper.exists()).toBe(true)
    })
})