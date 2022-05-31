const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout')


class Index extends React.Component {
  render() {
    return(
        <DefaultLayout>
        <h2>Jonathan's Juggling Ball Market</h2>
        <hr></hr>
        <ul>
            {
                this.props.balls.map((ball, i) => {
                    return (
                        <ul>
                            <a href={`/balls/${ball._id}`}>{ball.stock} {ball.color} {ball.name} Balls
                            <p>
                            <img src={ball.image} alt="image"/> 
                            </p>
                            ${ball.price} Per Ball</a>
                            <p>
                            <button><a href={`/balls/${ball._id}/edit`}>{`Edit ${ball.name} Ball`}</a></button>
                            <form action={`/balls/${ball._id}?_method=DELETE`}  method="POST">
                            <input type="submit" value="Delete Item"/>
                            </form>
                            </p>
                            <button id="buyButton" hidden={ball.stock === 0}>Buy Item</button>
                            <hr></hr>
                        </ul>
                        )
                    })
                }
        </ul>
                <div>
                <button id="creation"><a href="/balls/new">Create New Listing</a></button>
                </div>
            
         </DefaultLayout>
    )
  }
}

module.exports = Index;