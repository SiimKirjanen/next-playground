export const TimeOut = (timeout: number) => {
    return new Promise((res) => {
        setTimeout(() => {
            res(true);
        }, timeout);
    });
};