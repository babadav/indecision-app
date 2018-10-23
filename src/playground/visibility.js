
const title = 'Visibility Toggle';
let visibility = false;



const handleButton = () => {

    console.log('hit')

    visibility = !visibility; 
    
    render();
}

const appRoot = document.getElementById('app');

const render = () => {
 
    const template = (
        <div>
            <h1>{title}</h1>
            <button onClick={handleButton}> {visibility ? 'Hide details' : 'Show details' } </button>
            <p>{ visibility ? 'These are details' : ' '}</p>
        </div>
    );
    ReactDOM.render(template , appRoot )
}
render();



