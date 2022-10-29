import styles from '../css/Slider.module.css';


function Slider() {
    return (
        <>
            <div className={styles.container}>
           <div className={styles.slider}>
            <div className={styles.textfrente}>
                <h1>Conheça o <text className={styles.futuro}>Futuro</text> em suas mãos</h1>
            </div>
           </div>
           </div>
        </>
    )
}
export default Slider;