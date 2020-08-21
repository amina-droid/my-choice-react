import React, { useState, useCallback, useContext, useEffect } from 'react';

const init = {
    isTestStart: false,
    isTestEnd: false,
    currentTime: null,
}

const TESTSTART = new Date('Sat Aug 22 2020 01:41:00 GMT+03');
const TESTEND = new Date('Sat Aug 22 2020 01:41:20 GMT+03');

export const TimerContext = React.createContext(init);
let timerID = null;
let testStart = false;
export const TimerContextProvider = ({ children }) => {
    const [isTestStart, setTestStart] = useState(false);
    const [isTestEnd, setTestEnd] = useState(false);
    const [currentTime, setCurrentTime] = useState(null);

    const tick = useCallback(() => {
        if (!isTestEnd) {
            if (isTestStart) {
                const newDate = new Date(TESTEND - Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
                setCurrentTime(newDate);
                return;
            }
            const newDate = new Date(TESTSTART - Date.now() + new Date().getTimezoneOffset() * 60 * 1000);
            setCurrentTime(newDate);
        }

    }, [setCurrentTime, isTestStart, isTestEnd])

    useEffect(() => {
        timerID = setInterval(
            () => tick(),
            1000
        );

        return () => clearInterval(timerID)
    }, [tick])

    useEffect(() => {
        if ((new Date() > TESTSTART) && !isTestStart) {
            setTestStart(true);
        }
    }, [setTestStart, currentTime, isTestStart])

    useEffect(() => {
        if ((new Date() > TESTEND) && !isTestEnd) {
            setTestEnd(true);
        }
    }, [setTestEnd, currentTime, isTestEnd])
    
    return (
        <TimerContext.Provider value={{
            isTestStart,
            isTestEnd,
            currentTime,
        }}>
            {children}
        </TimerContext.Provider>
    )
}