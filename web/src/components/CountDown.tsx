import { useContext } from 'react';
import { CountDownContext } from '../contexts/CountDownContext';
import styles from '../styles/components/CountDown.module.css';

function CountDown() {
    const {
        resetCountDown,
        starCountDown,
        hasFinished,
        isActive,
        minutes,
        seconds,
    } = useContext(CountDownContext);

    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');

    return (
        <div>
            <div className={styles.countDownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button
                    type="button"
                    disabled
                    className={styles.countDownButton}
                >
                    Ciclo Encerrado
                </button>
            ) : (
                <>
                    {isActive ? (
                        <button
                            className={`${styles.countDownButton} ${styles.countDownButtonActive}`}
                            type="button"
                            onClick={resetCountDown}
                        >
                            Abandornar Ciclo
                        </button>
                    ) : (
                        <button
                            className={styles.countDownButton}
                            type="button"
                            onClick={starCountDown}
                        >
                            Iniciar um ciclo
                        </button>
                    )}
                </>
            )}
        </div>
    );
}

export default CountDown;
