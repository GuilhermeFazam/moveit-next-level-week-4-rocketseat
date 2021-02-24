import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

function Profile() {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            <img
                src="https://avatars.githubusercontent.com/u/5084382?v=4"
                alt="Guilherme Fazam"
            />
            <div>
                <strong>Guilherme Fazam</strong>

                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}
export default Profile;
