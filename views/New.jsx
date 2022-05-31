const React = require('react');
const DefaultLayout = require('./layout/DefaultLayout');


class New extends React.Component {
  render() {
    return ( 
        <DefaultLayout>
        <h3>
            Add a New Item
        </h3>
        <form action="/balls" method="POST">
                <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name"/>
                </div>
                <div>
                <label htmlFor="type">Type:</label>
                <input type="text" id="type" name="type"/>
                </div>
                <div>
                <label htmlFor="color">Color:</label>
                <input type="text" id="color" name="color"/>
                </div>
                <div>
                <label htmlFor="stock">Current Stock:</label>
                <input type="number" id="stock" name="stock"/>
                </div>
                <div>
                <label htmlFor="price">Price Per Ball:</label>
                <input type="number" id="price" name="price"/>
                </div>
                <div>
                <label htmlFor="image">Image URL:</label>
                <input type="string" id="image" name="image"/>
                </div>
                <input type="submit" value="Add Product"/>
            </form>
            <div>
                <button><a href={'/balls'}>Home Page</a></button>
            </div>
        </DefaultLayout>
        )
  }
}

module.exports = New;