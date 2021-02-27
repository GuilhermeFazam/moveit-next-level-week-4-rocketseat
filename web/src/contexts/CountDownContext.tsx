import {
    createContext,
    ReactNode,
    useContext,
    useEffect,
    useState,
} from 'react';
import { ChallengesContext } from './ChallengesContext';

interface CountDownProviderProps {
    children: ReactNode;
}
interface CountDownContextData {
    hasFinished: boolean;
    isActive: boolean;
    minutes: number;
    seconds: number;
    starCountDown: () => void;
    resetCountDown: () => void;
}

export const CountDownContext = createContext({} as CountDownContextData);

let countdownTimeout: NodeJS.Timeout;

export function CountDownProvider({ children }: CountDownProviderProps) {
    const { statNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(0.05 * 60);
    const [isActive, setIsActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function starCountDown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeout);
        setIsActive(false);
        setTime(0.05 * 60);
        setHasFinished(false);
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
        <CountDownContext.Provider
            value={{
                hasFinished,
                minutes,
                seconds,
                isActive,
                starCountDown,
                resetCountDown,
            }}
        >
            {children}
        </CountDownContext.Provider>
    );
}
