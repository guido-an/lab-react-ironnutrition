import React from 'react';
import FoodBox from './FoodBox'

export function TodaysFood({todaysFood}) {
  return (
    <div>
      <h2>Today's food</h2>
      {todaysFood.map(food => {
          return (
              <div>
                  <p><strong>name</strong></p>
                  <p>{food.name}</p>
                  <p><strong>total calories</strong></p>
                  <p>{food.calories * food.quantity}</p>
                  <p></p>
             </div>
          )
        
        })}
    </div>
  );
}
