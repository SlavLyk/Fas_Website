import React from 'react'
import "./Button.css"

//array of available styles that we will write in our css
const styles = [
    'btn--primary',
    'btn--secondary',
    'btn--callToAction',
]

function Button({children, type, onClick, buttonStyle}) {
    const checkButtonStyle = styles.includes(buttonStyle) ? buttonStyle : styles[0]

    return (
            <button className={`btn ${checkButtonStyle}`} onClick={onClick} type={type}>
                {children}
            </button>
    )
}

export default Button
