import { fullDayOfWeekNames, abbreviatedDayOfWeekNames, fullMonthNames, abbreviatedMonthNames } from './names';


export const dateFormater = (date, options = {}) => {

    if (date?.getDay && typeof date.getDay === 'function') {

        const { noDayOfWeek, abvDayOfWeek, abvMonth, includeTime, showSeconds, ampm } = options;

        const dow = abvDayOfWeek
            ? abbreviatedDayOfWeekNames[`${date.getDay()}`]
            : fullDayOfWeekNames[`${date.getDay()}`];

        const month = abvMonth
            ? abbreviatedMonthNames[`${date.getMonth() + 1}`]
            : fullMonthNames[`${date.getMonth() + 1}`];

        const day = (`${date.getDate()}`).padStart(2, '0');
        const year = `${date.getFullYear()}`;

        const hours = date.getHours();
        const minutes = (`${date.getMinutes()}`).padStart(2, '0');
        const seconds = (`${date.getSeconds()}`).padStart(2, '0');

        const time = includeTime ?
            ampm ?
                ` ${(hours === 0 ? '00' : (hours > 12 ? (hours - 12) : hours))}:${minutes}${(hours >= 12 ? 'pm' : 'am')}`
                :
                ` ${(`${date.getHours()}`).padStart(2, '0')}:${minutes}` + (showSeconds ? `:${seconds}` : '')
            :
            '';

        return `${noDayOfWeek ? '' : `${dow} `}${day} ${month} ${year}${time}`;
    }

    return null;
};

export default dateFormater;
