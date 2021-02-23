import styles from '../styles/components/Profile.module.css';

function Profile() {
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
                    Level 1
                </p>
            </div>
        </div>
    );
}
export default Profile;
