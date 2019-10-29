import React from 'react';

function FoodBox({food, addTodaysFood}) {
  return (
    <div>
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src={food.image} />
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>{food.name}</strong> <br />
                <small>{food.calories}</small>
              </p>
            </div>
          </div>
          <div className="media-right">
            <div className="field has-addons">
              <div className="control">
                <input
                  id="quantity"
                  className="input"
                  type="number"
                  defaultValue="1"
                />
              </div>
              <div className="control">
                <button
                  onClick={() =>
                    addTodaysFood({
                      name: food.name,
                      calories: food.calories,
                      quantity: document.getElementById('quantity').value,
                    })
                  }
                  className="button is-info"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}

export default FoodBox;
