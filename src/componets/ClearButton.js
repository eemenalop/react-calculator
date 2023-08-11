import '../stylesheet/ClearButton.css'

const ClearButton = (props) => (
    <div className="clear-button" onClick={props.clickHandler}>
        {props.children}

    </div>

);
export default ClearButton;