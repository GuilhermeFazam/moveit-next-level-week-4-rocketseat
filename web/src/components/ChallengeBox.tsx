import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/ChallengeBox.module.css';

function ChallengeBox() {
    const { activeChallenge, resetChallenge } = useContext(ChallengesContext);

    return (
        <div className={styles.challengeBoxConteiner}>
            {activeChallenge ? (
                <div className={styles.challengeActive}>
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img
                            src={`icons/${activeChallenge.type}.svg`}
                            alt="Tipo do Exercício"
                        />
                        <h3>Exercite-se</h3>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button
                            type="button"
                            className={`${styles.challengeButton} ${styles.buttonFailed}`}
                            onClick={resetChallenge}
                        >
                            Falhei
                        </button>
                        <button
                            type="button"
                            className={`${styles.challengeButton} ${styles.buttonSucceed}`}
                        >
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challengeNotActive}>
                    <h2>
                        Inicie um ciclo para receber desafios a serem
                        completados
                    </h2>
                    <p>
                        <img src="/icons/level-up.svg" alt="Subir de nivel" />
                        Complete-os e ganhe experiência e avance de leve.
                    </p>
                </div>
            )}
        </div>
    );
}

export default ChallengeBox;
