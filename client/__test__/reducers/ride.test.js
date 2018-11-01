import ride from '../../src/reducers/ride'
import reducers from '../../src/reducers'
import * as types from '../../src/action.types/ride'

describe('ride reducers', () => {
    it("should return initial state", () => {
        expect(ride(undefined, {})).toEqual(
            {
                loading: false,
                error: "",
                success: false,
                rides: []
            }
        );
    })

    it('should handle ERROR', () => {
        const action = { type: types.ERROR, payload: "error message" }
        expect(ride({}, action)).toEqual({ success: false, error: action.payload })
    })

    it('should handle CLEAR', () => {
        const action = { type: types.CLEAR }
        expect(ride({}, action)).toEqual({ success: false, error: '' })
    })

    it('should handle LOADING', () => {
        const action = { type: types.LOADING, payload: true }
        expect(ride({}, action)).toEqual({ success: false, error: '', loading: action.payload })
    })

    it('should handle API_CALL_SUCCESS', () => {
        const action = { type: types.API_CALL_SUCCESS }
        expect(ride({}, action)).toEqual({ success: true })
    })

    it('should handle FETCH_RIDES', () => {
        const action = { type: types.FETCH_RIDES, payload: [] }
        expect(ride({}, action)).toEqual({ rides: action.payload })
    })


})