import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { Ride } from '../../src/actions/ride'
import * as types from '../../src/action.types/ride';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const moxios = new MockAdapter(axios);

describe("ride actions", () => {
    afterEach(() => {
        moxios.reset();
    });

    describe('create ride ', () => {
        it("dispatches success on done", () => {
            const ride = { destination: "test", time: "21:30" }
            moxios.onPost(`${__API__}/api/v1/users/rides`, ride).reply(200, {
                message: 'ride created successfully'
            });
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { type: types.API_CALL_SUCCESS }
            ];
            const store = mockStore({ auth: {} });
            return store.dispatch(Ride.createRide(ride)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });

        it("dispatches error on error", () => {
            const ride = { destination: "test", time: "21:30" }
            moxios.onPost(`${__API__}/api/v1/users/rides`, ride).reply(401, {

                message: 'something went wrong'

            });
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { payload: 'something went wrong', type: "ERROR" }
            ];
            const store = mockStore({ auth: {} });
            return store.dispatch(Ride.createRide(ride)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        });
    })

    describe('fetch rides ', () => {
        it('dispatches success on done', () => {
            moxios.onGet(`${__API__}/api/v1/rides`).reply(200, {
                rides: []
            });
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "payload": [], "type": "FETCH_RIDES" }
            ]
            const store = mockStore({ auth: {} });
            return store.dispatch(Ride.fetchRides()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })

        it('dispatches error on error', () => {
            moxios.onGet(`${__API__}/api/v1/rides`).reply(401, {
                message: "something went wrong"
            });
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "payload": "something went wrong", "type": "ERROR" }
            ]
            const store = mockStore({ auth: {} });
            return store.dispatch(Ride.fetchRides()).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
    })


    describe('join rides request ', () => {
        it('dispatches success on done', () => {
            moxios.onPost(`${__API__}/api/v1/rides/1/requests`, {}).reply(200, {});
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "type": "API_CALL_SUCCESS" }
            ]
            const store = mockStore({});
            return store.dispatch(Ride.requestJoin(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })

        it('dispatches error on error', () => {
            moxios.onPost(`${__API__}/api/v1/rides/1/requests`).reply(401, {});
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "payload": undefined, "type": "ERROR" }
            ]
            const store = mockStore({ auth: {} });
            return store.dispatch(Ride.requestJoin(1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
    })

    describe('respondToJoinRequest', () => {
        it('dispatches success on done', () => {
            moxios.onPut(`${__API__}/api/v1/users/rides/1/requests/1`, { accept: 1 }).reply(200, {});
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "type": "API_CALL_SUCCESS" }
            ]
            const store = mockStore({});
            return store.dispatch(Ride.respondToJoinRequest(1, 1, 1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })

        it('dispatches error on error', () => {
            moxios.onPut(`${__API__}/api/v1/users/rides/1/requests/1`, { accept: 1 }).reply(401, {
                message: 'something went wrong'
            });
            const expectedActions = [
                { "payload": true, "type": "LOADING" },
                { "payload": false, "type": "LOADING" },
                { "payload": "something went wrong", "type": "ERROR" }
            ]
            const store = mockStore({});
            return store.dispatch(Ride.respondToJoinRequest(1, 1, 1)).then(() => {
                expect(store.getActions()).toEqual(expectedActions);
            });
        })
    })

    describe('clear', () => {
        it('should dispatche clear', () => {
            const store = mockStore({});
            store.dispatch(Ride.clear())
            expect(store.getActions()).toEqual([{ "type": "CLEAR" }])
        })
    })

})