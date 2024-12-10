import styles from "./card-flex.module.css";

const CardFlex = (container) => {
    // console.log(props.children[0])
    return <div className={styles.flex}>{container.children}</div>
};

export default CardFlex;