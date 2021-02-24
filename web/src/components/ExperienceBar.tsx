import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import style from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    const { currentExperience, experienceToNextLevel } = useContext(
        ChallengesContext
    );

    const percenteToNextLevel =
        Math.round(currentExperience * 100) / experienceToNextLevel;

    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div className={style.progress}>
                <div
                    className={style.current}
                    style={{ width: `${percenteToNextLevel}%` }}
                >
                    {percenteToNextLevel === 0 ? null : (
                        <span className={style.currentNumber}>
                            {currentExperience} xp
                        </span>
                    )}
                </div>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}

export default ExperienceBar;
