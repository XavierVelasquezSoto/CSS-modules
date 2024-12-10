import styles from "./card.module.css"

const Card = ({ img, title, text, buttonText}) => { 
    
    return <div className={styles}>
        <img  className = ""src={img} alt="" />
        <h2 className = "">{title}</h2>
        <span  className = "">{text}</span>
        <button className = "">{buttonText}</button>
    </div>
}
export default Card