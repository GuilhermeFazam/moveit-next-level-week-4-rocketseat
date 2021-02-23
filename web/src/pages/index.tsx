import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import SEO from '../components/SEO';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <>
            <SEO
                title="move.it"
                description="Seu tempo em movimento"
                image="logo-full.svg"
                shouldIndexPage
                shouldExcludeTitleSuffix
            />
            <div className={styles.container}>
                <ExperienceBar />
                <section>
                    <div>
                        <Profile />
                        <CompletedChallenges />
                        <CountDown />
                    </div>
                    <div />
                </section>
            </div>
        </>
    );
}