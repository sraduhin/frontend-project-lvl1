const getRandom = (min, max) => Math.ceil(Math.random() * (max - min + 1) + min - 1); // [min; max]

export default getRandom;
