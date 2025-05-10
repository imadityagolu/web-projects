const ReactAppFromCDN = ()=>{
    return (
        <div>
            <h1>Learn web development</h1>
            <p>Welcome to the MDN learning area. This set of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
        </div>
    )
}
   
ReactDOM.render(<ReactAppFromCDN />, document.querySelector('#root'));