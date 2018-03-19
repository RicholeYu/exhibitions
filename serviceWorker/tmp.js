new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({
            success: true
        });
    }, 3000);
})
.then((result) => {
    console.log(result);
    result.haha = 1;
    return result;
})
.then((result) => {
    console.log(result);
    return result;
})
.catch((result) => {
    console.log(result);
});