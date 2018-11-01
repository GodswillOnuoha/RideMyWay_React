import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { auth } from '../../src/actions/auth';
import * as types from '../../src/action.types/auth';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("auth actions", () => {
  afterEach(() => {
    moxios.reset();
  });

  it("dispatches on registration done", () => {
    const user = { lastname: "test", username: "test" }
    moxios.onPost(`${__API__}/api/v1/auth/signup`, user).reply(200, {
      user: {
        id: 2, lastname: "test", username: "test"
      }
    });
    const expectedActions = [
      { "payload": true, "type": "LOADING" },
      { "payload": false, "type": "LOADING" },
      { "payload": { "user": { "id": 2, "lastname": "test", "username": "test" } }, "type": "LOGIN_SUCCESS" }
    ];
    const store = mockStore({ auth: {} });
    return store.dispatch(auth.register(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches on registration error ", () => {
    const user = { lastname: "test", username: "test" }
    moxios.onPost(`${__API__}/api/v1/auth/signup`, user).reply(401, {
      error: {
        message: "something went wrong"
      }
    });
    const expectedActions = [
      { "payload": true, "type": "LOADING" },
      { "payload": false, "type": "LOADING" },
      { "payload": { "error": { "message": "something went wrong" } }, "type": "LOGIN_ERROR" }
    ]
    const store = mockStore({ auth: {} });
    return store.dispatch(auth.register(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches on login error ", () => {
    const user = { lastname: "test", username: "test" }
    moxios.onPost(`${__API__}/api/v1/auth/login`, user).reply(200, {
      user: {
        firstname: "test", username: "test", id: 2
      }
    });
    const expectedActions = [
      { "payload": true, "type": "LOADING" },
      { "payload": false, "type": "LOADING" },
      { "payload": { user: { firstname: "test", username: "test", id: 2 } }, "type": "LOGIN_SUCCESS" }
    ]
    const store = mockStore({ auth: {} });
    return store.dispatch(auth.login(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  it("dispatches on login error ", () => {
    const user = { lastname: "test", username: "test" }
    moxios.onPost(`${__API__}/api/v1/auth/login`, user).reply(401, {
      error: {
        message: "something went wrong"
      }
    });
    const expectedActions = [
      { "payload": true, "type": "LOADING" },
      { "payload": false, "type": "LOADING" },
      { "payload": { "error": { "message": "something went wrong" } }, "type": "LOGIN_ERROR" }
    ]
    const store = mockStore({ auth: {} });
    return store.dispatch(auth.login(user)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });

  describe('logoutUser', () => {
    it('clears user data from localStorage', () => {
      localStorage.setItem('user', { name: 'the user' });
      const store = mockStore({});
      store.dispatch(auth.logoutUser());

      expect(store.getActions()).toEqual([{ type: types.LOG_USER_OUT }]);
    });
  });

  describe('logoutUser', () => {
    it('clears user data from localStorage', () => {
      localStorage.setItem('user', { name: 'the user' });
      const store = mockStore({});
      store.dispatch(auth.logoutUser());

      expect(store.getActions()).toEqual([{ type: types.LOG_USER_OUT }]);
    });
  });

  describe('setLoggedIn', () => {
    it('dispatches LOG_USER_IN', () => {
      const store = mockStore({})
      store.dispatch(auth.setLoggedIn({ id: 2, firstname: 'test' }))

      expect(store.getActions()).toEqual([{ type: types.LOG_USER_IN, payload: { id: 2, firstname: 'test' } }])
    })
  })

})
