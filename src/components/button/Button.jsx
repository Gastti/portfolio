import './Button.css'

function Button({ type, size, href, children, onClick }) {
    return (
        <button className={`btn ${type} ${size}`} onClick={onClick}>
            {
                href ? <a href={href}><span>{children}</span></a> : <span>{children}</span>
            }
        </button>
    )
}

export default Button