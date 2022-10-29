import styles from '../css/Box_cont4.module.css';

function Box4() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titulo}><h2>Escolha as melhores</h2><p>das nossas especialidades</p></div>

                <div className={styles.boxes}>
                    <div className={styles.box1}>
                        <div className={styles.imgDireita}></div>
                        <div className={styles.textoBaixo}><p>Controle o uso do seu dinheiro</p></div>
                    </div>
                    <div className={styles.box2}>
                        <div className={styles.imgDireita2}></div>
                        <div className={styles.textoBaixo}><p>Invista com segurança e rentabilidade</p></div>
                    </div>
                    <div className={styles.box3}>
                        <div className={styles.imgDireita3}></div>
                        <div className={styles.textoBaixo}><p>Tenha o máximo equilíbrio de renda</p></div>
                    </div>
                </div>
            </div>

        </>
    )
};

export default Box4;