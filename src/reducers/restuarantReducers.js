import { type } from "@testing-library/user-event/dist/type";
import { SUCCESS, FAIL } from "../constants/restuarantConstants";

export const restaurantListReducers = (state = { restuarant: [] }, action) => {
    switch (action.type) {

        case SUCCESS:
            return { restuarant: action.payload }

        case FAIL:
            return { restuarant: action.error }

        default:
            return state
    }

}