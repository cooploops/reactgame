import React from 'react';

const styles = {
  container: {
    "width":"18rem",
    "height":"15rem"
  },
  img:{
    "width":"100%",
    "height":"100%",
    "overflow":"hidden"
  }
}

const Card = props =>
  <div className="row mx-2">
      {props.portraits.map(champ =>
        <div className="card m-auto col-3-md" key={champ.name} name={champ.name} style={styles.container}>
          <img className="card-img-top p-3" 
          style={styles.img} 
          name={champ.name} 
          src={champ.image} 
          alt={champ.name} 
          onClick={props.handleOnClick}/>
        </div>
      )}
  </div>

export default Card;