import styles from "./Timer.module.css";
import "../../styles/Main.module.css";
import sound from "../../sounds/sound.mp3";
import React, { useState, useEffect } from "react";

const Timer = () => {
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const audioFile = new Audio(sound);
    
    const start = () => {
        setIsActive(true);
    };
    
    const stop = () => {
        setIsActive(false);
        audioFile.pause();
        audioFile.currentTime = 0;
    };
    
    const reset = () => {
        setIsActive(false);
        setMinutes(0);
        setSeconds(0);
        document.body.style.backgroundColor = "#eac482dd";
        audioFile.pause();
        audioFile.currentTime = 0;
    };

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(interval);
                        document.body.style.backgroundColor = "#f15959db";
                        audioFile.play();
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(seconds - 1);
                }
            }, 1000);
        }
        return () => clearInterval(interval);
    }, [isActive, minutes, seconds]);

    useEffect(() => {
        const handleBeforeUnload = () => {
            localStorage.setItem('timerState', JSON.stringify({ minutes, seconds }));
        };
        window.addEventListener('beforeunload', handleBeforeUnload);
        return () => {
            window.removeEventListener('beforeunload', handleBeforeUnload);
        };
    }, [minutes, seconds]);

    useEffect(() => {
        const savedTimerState = localStorage.getItem('timerState');
        if (savedTimerState) {
            const { minutes: savedMinutes, seconds: savedSeconds } = JSON.parse(savedTimerState);
            setMinutes(savedMinutes);
            setSeconds(savedSeconds);
        }
    }, []);

    const handleMinutesChange = (event) => {
        if (!isActive) {
            setMinutes(parseInt(event.target.value));
        }
    };

    const handleSecondsChange = (event) => {
        if (!isActive) {
            setSeconds(parseInt(event.target.value));
        }
    };

    return (
        <section className={styles.timer}>
            <div className={styles.timer__block}>
                <div className={styles.timer__container}>
                    <div className={styles.timer__title}>
                        <span>
                            Timer
                        </span>
                    </div>
                    <div className={styles.timer__content}>
                        <div className={styles.timer__inner_container}>
                            <div className={styles.timer__input}>
                                <input
                                    type="number"
                                    value={minutes}
                                    onChange={handleMinutesChange}
                                    disabled={isActive}
                                    min="0"
                                />
                                <span>minutes</span>
                            </div>
                            <div className={styles.timer__input}>
                                <input
                                    type="number"
                                    value={seconds}
                                    onChange={handleSecondsChange}
                                    disabled={isActive}
                                    min="0"
                                    max="59"
                                />
                                <span>seconds</span>
                            </div>
                            <div className={styles.timer__btns}>
                                <button onClick={start} disabled={isActive}>
                                    Start
                                </button>
                                <button onClick={stop} disabled={!isActive}>
                                    Stop
                                </button>
                                <button onClick={reset}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Timer;