export interface CounterDate {
    days: number,
    hours: number,
    min: number,
    sec: number
};

export const countTheDifference = (date: string) => {
    const year = +date.slice(0, 4);
    const month = +date.slice(5,7) - 1;
    const day = +date.slice(8,10);

    const currentDate = new Date();
    const projectDeadline = new Date(year, month, day, 0, 0, 0);

    const timeDifference = projectDeadline.getTime() - currentDate.getTime();

    let sec = timeDifference / 1000;
    let min = sec / 60;
    let hours = min / 60;
    let days = hours / 24;

    const counterDate: CounterDate = {
        days: Math.floor(days),
        hours: Math.floor(hours % 24),
        min: Math.floor(min % 60),
        sec: Math.floor(sec % 60)
    };

    return counterDate;
}