import React from 'react'

function Card() {
    const cardStyle = {
        width: "15vw",
        margin: "3% 5%",
        verticalAlign: "top",
      };
  return (
    <div style={cardStyle}>
         <img src="https://via.placeholder.com/150" alt="Card" />
            <div>
              <h5>Card</h5>
              <p>This is a short description.</p>
            </div>
    </div>
  )
}

export default Card