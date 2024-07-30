import MealItem from './MealItem.jsx';
import useHttp from './hooks/useHttp.js';
import Error from './Error.jsx';
const reqestConfig = {};
export default function Meals() {
    const { data: mealsAvailable, isLoading, error } =
        useHttp('http://localhost:3000/meals', reqestConfig, []);

    if (isLoading) {
        <p className='center'>Fetching the meals data...</p>
    }
    if(error){
        return <Error title="Failed to Fetch meals" message={error}/>
    }

    return (
        <ul id="meals">
            {mealsAvailable.map(meal =>
                <MealItem key={meal.id} meal={meal} />
            )}
        </ul>
    );
}