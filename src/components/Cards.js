import React from 'react';

// const styles = {
//   container: {
//     "width":"18rem",
//     "height":"15rem",
//     "background":"rgba(0,0,0,0.6)"
//   },
//   img:{
//     "width":"100%",
//     "height":"100%",
//     "overflow":"hidden"
//   },
//   backgroundStage:{
//     // "backgroundImage":"url('./superSmashStage.jpg')",
//     "backgroundRepeat": "no-repeat",
//     "backgroundSize": "cover",
//     "backgroundPosition": "center center",
//   }
// }

const Card = props =>
  <div className="row backgroundStage" >
      {props.portraits.map(champ =>
        <div className="card m-auto col-4-lg cardContainer" key={champ.name} name={champ.name} >
          <img className="card-img-top p-3 imgContainer" 
          name={champ.name} 
          src={champ.image} 
          alt={champ.name} 
          onClick={props.handleOnClick}/>
        </div>
      )}
  </div>

export default Card;