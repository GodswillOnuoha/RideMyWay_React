import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';
import auth from '../../src/actions/auth';
import * as types from '../../src/action.types/auth';


const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('sign in actions', () => {
    afterEach(() => {
        fetchMock.reset();
        fetchMock.restore();
    });

    it('calls SET_LOGGED_IN_USER when user sign is has been done', () => {
        fetchMock.get('http://localhost:3000/api/v1/users', {
            body: {
                status: 'success',
                user: {
                    email: 'user@mail.com',
                    fullName: 'Some User',
                    phone: null,
                    userId: 1,
                },
            },
        });
    })
})