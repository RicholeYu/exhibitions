import serviceWorker from './serviceWorker/index';

export default function (type, vm) {
    if (type === 'SERVICE_WORKER') {
        serviceWorker(vm);
    }
}