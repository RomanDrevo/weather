const getFormattedDate = (daysToSubtract = 0) => {
    const date = new Date();
    date.setDate(date.getDate() - daysToSubtract);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
}

export const getTodayDate = () => {
    return getFormattedDate();
}

export const getYesterdayDate = () => {
    return getFormattedDate(1);
}