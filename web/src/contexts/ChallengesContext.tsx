import { createContext, ReactNode, useEffect, useState } from 'react';

// eslint-disable-next-line import/extensions
import challenges from '../../challenges.json';

interface ChallengesProviderProps {
    children: ReactNode;
}

interface ChallengeProps {
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData {
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    experienceToNextLevel: number;
    activeChallenge: ChallengeProps;
    levelUp: () => void;
    resetChallenge: () => void;
    statNewChallenge: () => void;
    completedChallenge: () => void;
}

export const ChallengesContext = createContext({} as ChallengesContextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
    const [level, setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);
    const [activeChallenge, setActiveChallenge] = useState(null);
    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);

    useEffect(() => {
        Notification.requestPermission();
    }, []);

    function levelUp() {
        setLevel(level + 1);
    }

    function resetChallenge() {
        setActiveChallenge(null);
    }

    function statNewChallenge() {
        const randomChallengeIndex = Math.floor(
            Math.random() * challenges.length
        );
        const challenge = challenges[randomChallengeIndex];
        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();

        if (Notification.permission === 'granted') {
            // eslint-disable-next-line no-new
            new Notification('Novo desafio 🎉', {
                body: `Valendo ${challenge.amount}xp!`,
            });
        }
    }

    function completedChallenge() {
        if (!activeChallenge) {
            return;
        }
        const { amount } = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel) {
            finalExperience -= experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return (
        <ChallengesContext.Provider
            value={{
                level,
                currentExperience,
                challengesCompleted,
                experienceToNextLevel,
                activeChallenge,
                levelUp,
                statNewChallenge,
                resetChallenge,
                completedChallenge,
            }}
        >
            {children}
        </ChallengesContext.Provider>
    );
}
