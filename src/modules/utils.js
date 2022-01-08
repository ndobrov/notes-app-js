export const getTime = () => {
    let date = new Date();
    return date.toString().slice(4, 15);
};

export const creatId = () => {
    return Math.random(1, 1000);
}