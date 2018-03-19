export default function (src) {
    let thisScript = document.createElement('script');
    thisScript.setAttribute('src', src);
    document.body.appendChild(thisScript);
}