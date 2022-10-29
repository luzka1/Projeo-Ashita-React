import styles from '../css/Footer.module.css';

function Footer() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.boxes}>
                <div className={styles.logo}></div>
                    <div className={styles.box}>Home</div>
                    <div className={styles.box}>Serviços</div>
                    <div className={styles.box}>Fale Conosco</div>
                    <div className={styles.box}>Sobre Nós</div>
                </div>
                <div className={styles.linha}></div>
                <div className={styles.contato}><text>Coded by: lucasgsantos1727@gmail.com</text></div>
                <div className={styles.contato2}><text>Ashita 2022 © Todos os direitos reservados</text></div>
            </div>

        </>
    )
};

export default Footer;