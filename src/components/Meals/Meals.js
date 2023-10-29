import { Fragment } from "react";
import MealsAvailable from "./AvailableMeals";
import MealsSummary from "./MealsSummary";

const Meals =()=>{
    return(
        <Fragment>
            <MealsSummary />
            <MealsAvailable />
        </Fragment>
    );
}
export default Meals;
