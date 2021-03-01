import { GetServerSideProps } from 'next';
import ChallengeBox from '../components/ChallengeBox';
import CompletedChallenges from '../components/CompletedChallenges';
import CountDown from '../components/CountDown';
import ExperienceBar from '../components/ExperienceBar';
import Profile from '../components/Profile';
import SEO from '../components/SEO';
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountDownProvider } from '../contexts/CountDownContext';

import styles from '../styles/pages/Home.module.css';

interface HomeProps {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {
    return (
        <>
            <SEO
                title="move.it: Tenha controle em seus movimentos"
                description="Seu tempo em movimento"
                image="logo-full.svg"
                shouldIndexPage
            />
            <ChallengesProvider
                level={props.level}
                currentExperience={props.currentExperience}
                challengesCompleted={props.challengesCompleted}
            >
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
            </ChallengesProvider>
        </>
    );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const {
        level,
        currentExperience,
        challengesCompleted,
    } = context.req.cookies;

    return {
        props: {
            level: Number(level),
            currentExperience: Number(currentExperience),
            challengesCompleted: Number(challengesCompleted),
        },
    };
};
