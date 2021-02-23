import style from '../styles/components/ExperienceBar.module.css';

function ExperienceBar() {
    return (
        <header className={style.experienceBar}>
            <span>0 xp</span>
            <div className={style.progress}>
                <div className={style.current} style={{ width: '60%' }}>
                    <span className={style.currentNumber}>300 xp</span>
                </div>
            </div>
            <span>600 xp</span>
        </header>
    );
}

export default ExperienceBar;
