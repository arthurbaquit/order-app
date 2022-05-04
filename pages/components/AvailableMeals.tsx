import React from 'react';
import {DUMMY_MEALS} from "../dummy-meals";
import styles from '../../styles/AvailableMeals.module.css'
import {MealItem} from "./MealItem";
import {Card} from "../UI/Card";

export const AvailableMeals = () => {
    return (
        <div className={styles.meals}>
            <Card>
                <ul>
                    {DUMMY_MEALS.map((meal) =>
                        <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description}
                                  price={meal.price}/>)}
                </ul>
            </Card>
        </div>
    )
}
