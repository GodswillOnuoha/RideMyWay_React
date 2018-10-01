export function fetchRides() {
    return {
        type: "FETCH_RIDES_FULFILLED",
        payload: {
            rides: [
                { id: 1, destination: 'CMS', boardingStop: "Ikorodu" },
                { id: 2, destination: 'Ikeja', boardingStop: "Ojota" }
            ],
            fetching: false,
            fetched: true,
            error: null
        }
    }
}