const names = [
    'oscar',
    'ana',
    'diego',
    'jesica',
    'carolina',
    'paulina'
];

const randomMsg =() => {
    const message = names[Math.floor(Math.random()*names.length)];
    console.log(message);
}

// randomMsg();

module.exports = {randomMsg}