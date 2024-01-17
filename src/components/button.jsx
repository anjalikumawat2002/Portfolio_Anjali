import "./card.css"
// function Button(props)

// props.children
// props.handleClick
function Button({children, handleClick}){
   // const {children, handleClick} = props;
    return(
        <>
        <button onClick={handleClick} className="btn">{children}</button>
        
        </>
    )
}
export default Button;