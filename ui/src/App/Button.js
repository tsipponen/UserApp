function Button(props) {

    return(
    <button onClick={() => 
        console.log(`${props.username}, ${props.password}, ${props.db}`)
        }>
        Connect
    </button>
    )
}


export default Button;