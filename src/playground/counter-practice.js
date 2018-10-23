
const user = {
    name: 'Andrew',
    age: 61,
    location: 'New York'
}

function getLocation(location){
    if (location) {
        return <p>Location: {location}</p>
    } else {
        return undefined
    } 
}




let count = 0;
const addOne = () =>{
    count ++
    renderCounterApp();
}
const minusOne = () =>{
    count --;
    console.log('- 1')
    renderCounterApp();


}
const reset = () =>{
    count = 0
    console.log('-reset')
    renderCounterApp();
}







const renderCounterApp = () => {
    const templateTwo = (
        <div>
            <h1>Count:  {count}</h1>
            <button onClick={addOne} >+ 1</button>
            <button onClick={minusOne} >- 1</button>
            <button onClick={reset} >Reset</button>
        </div>
    )

    ReactDOM.render(templateTwo, appRoot)
}

renderCounterApp();