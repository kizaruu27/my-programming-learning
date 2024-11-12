import MealItem from "./meal-item";
import style from "./meals-grid.module.css";

export default function MealsGrid({ meals }) {
  return (
    <ul className={style.meals}>
      {meals.map((meal, index) => (
        <li key={index}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}
