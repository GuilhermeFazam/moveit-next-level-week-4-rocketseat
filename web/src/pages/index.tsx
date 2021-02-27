import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import { CountDownProvider } from '../contexts/CountDownContext';

import styles from '../styles/pages/Home.module.css';

export default function Home() {
    return (
        <>
            <SEO
                title="move.it: Tenha controle em seus movimentos"
                description="Seu tempo em movimento"
                image="logo-full.svg"
                shouldIndexPage
            />
            <div className={styles.container}>
                <ExperienceBar />
                <CountDownProvider>
                    <section>
                        <div>
                            <Profile />
                            <CompletedChallenges />
                            <CountDown />
                        </div>
                        <div>
                            <ChallengeBox />
                        </div>
                    </section>
                </CountDownProvider>
            </div>
        </>
    );
}
