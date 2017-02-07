export const logger = message => {
    console.log(message);
};

export const uppercase = message => String(message).toUpperCase();

export const sqr = x => x ** 2;

export default {
    logger,
    uppercase,
    sqr
};