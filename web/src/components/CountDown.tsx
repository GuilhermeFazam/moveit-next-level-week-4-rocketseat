import { useContext, useEffect, useState } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/CountDown.module.css';

let countdownTimeout: NodeJS.Timeout;

function CountDown() {
    const { statNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [minuteLeft, minuteRight] = String(minutes)
        .padStart(2, '0')
        .split('');
    const [secondLeft, secondRight] = String(seconds)
        .padStart(2, '0')
        .split('');

    function handleStarCountDown() {
        setIsActive(true);
    }

    function handleResetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
    }
    useEffect(() => {
        if (isActive && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            statNewChallenge();
        }
    }, [isActive, time, statNewChallenge]);

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
                            onClick={handleResetCountDown}
                        >
                            Abandornar Ciclo
                        </button>
                    ) : (
                        <button
                            className={styles.countDownButton}
                            type="button"
                            onClick={handleStarCountDown}
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
