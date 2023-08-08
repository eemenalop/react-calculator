import '../stylesheet/Button.css'

function Boton(props) {
    const IsOperator = (value) => {
        return (isNaN(value) && (value !== '.') && (value !== '=')
        )

    };

    return (
        <div className={`button-container ${IsOperator(props.children) ? 'operator' : ''}`.trimEnd()} onClick={() => props.clickHandler(props.children)}>
            {props.children}
        </div>
    )

};

export default Boton;