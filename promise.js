function waitFor3s(resolve) {
    setTimeout(resolve, 3000);
}

function setTimeoutPromisified() {
    return new Promise(waitFor3s);
}

setTimeoutPromisified().then(main);

function main() {
    console.log('Hello');
}
