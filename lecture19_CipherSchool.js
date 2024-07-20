//functional component
function Pizza() {
    return(
        //React.createElement(div,.....)
        <div class='pizza'><h1>
            Pizza</h1>
            </div>
    )
}
ReactDom.render(<Pizza/>, document.getElementById('root'))