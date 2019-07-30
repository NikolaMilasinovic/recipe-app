import React, {Component} from 'react';
import './Recipe.css';



class Recipe extends Component {
  render(){
    const {title, instructions,ingredients,img} = this.props;
    const ingredient = ingredients.map((ingr, index) => (
      <li key={index}>{ingr}</li>
    ))
    return (
      <div className="recipe-card">
        <div className="recipe-card-img">
          <img src={img} alt={title} />
        </div>
        <div className="recipe-card-content">
          <h3 className="recipe-title">{title}</h3>
          <h4>Ingredients:</h4>
          <ul>
            {ingredient}
          </ul>
          <h4>Instructions:</h4>
          <p>{instructions}</p>
        </div>
      </div>

    );
  }
 
}

export default Recipe;
