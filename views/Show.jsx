const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')


    class Show extends React.Component {
       render () {
           const ball = this.props.ball
        return (
            <DefaultLayout>
          <h3> Item Page </h3>
          <hr></hr>

          The {ball.color} {ball.name} {ball.type} Balls costs ${ball.price} per ball.
          <div>
          <img src={ball.image} alt="image"/>
          </div>
          <div>
          {(ball.stock >= 1) && <p>There are {ball.stock} balls available</p>}
          </div>
          <div>
          <button id="buyButton" hidden={ball.stock === 0}>Buy Item</button>
                {(ball.stock === 0) && <p>Out of Stock</p>}
          </div>
          <div>
            <form action={`/balls/${ball._id}?_method=DELETE`}  method="POST">
               <input type="submit" value="Delete Item"/>
               </form>
               </div>
               <div>
               <button><a href={`/balls/${ball._id}/edit`}>{`Edit ${ball.name} Ball`}</a></button>
               </div>
               <div>
                <button id="bottom"><a href={'/balls'}>Home Page</a></button>
                </div>
            </DefaultLayout>
         );
        }
     }
     module.exports  = Show;
