import './Button.css'

function Button({ type, size, href, children, onClick, target }) {
    return (
        <button className={`btn ${type} ${size}`} onClick={onClick}>
            {
                href ? <a href={href} target={target}><span>{children}</span></a> : <span>{children}</span>
            }
        </button>
    )
}

export default Button