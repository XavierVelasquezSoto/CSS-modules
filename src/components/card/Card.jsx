import styles from "./card.module.css"

const Card = ({bodyColor, img, title, text, buttonText}) => { 

    return <div className={`${styles.body} ${styles[`body-${bodyColor}`]}`}>
        <img className ={styles.img} src={img} alt="" />
        <h2 className = {styles.title}>{title}</h2>
        <span  className = {styles.text}>{text}</span>
        <button className = {`${styles.button} ${styles[`button-${bodyColor}`]}`}>{buttonText}</button>
    </div>
}
export default Card


// public/assets/images/sedan.svg