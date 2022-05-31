const React = require('React')

class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/styles.css"/>
                </head>
                <body>
                    <h3>{this.props.title}</h3>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = DefaultLayout