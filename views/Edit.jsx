const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component{
    render() {
        const ball = this.props.ball
        return(
            <DefaultLayout>
                <h3>Edit the Current {ball.name} Listing</h3>
                <hr></hr>
        
            <form action={`/balls/${ball._id}?_method=PUT`} method="POST">
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" defaultValue={ball.name}/>
                </div>
                <div>
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" name="type" defaultValue={ball.type}/>
                </div>
                <div>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" name="color" defaultValue={ball.color}/>
                </div>
                <div>
                <label htmlFor="stock">Current Stock:</label>
                <input type="number" id="stock" name="stock" defaultValue={ball.stock}/>
                </div>
                <div>
                <label htmlFor="price">Price Per Ball:</label>
                <input type="number" id="price" name="price" defaultValue={ball.price}/>
                </div>
                <div>
                <label htmlFor="image">Image URL:</label>
                <input type="text" id="image" name="image" defaultValue={ball.image}/>
                </div>
                <input type="submit" value="Modify Current Listing"/>
            </form>
            </DefaultLayout>
        )
    }
}