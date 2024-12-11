import styles from "./card-flex.module.css";

const CardFlex = ({children}) => {
    // console.log(props.children[0])
    return <div className={styles.flex}>{children}</div>
};

export default CardFlex;