import urlBase64 from './urlBase64';
import { publicKey } from './getKeyByNode';

export default function (vm) {

    function message (content) {
        vm.$Message.success({
            content,
            duration: 10
        });
    }

    if (navigator.serviceWorker) {
        navigator.serviceWorker.register('/sw.js', {
            scope: '/'
        }).then((registration) => {

            if (registration.installing) {
                message('Service Worker 已安装，重新打开该页面，功能即可生效');
            } else if (registration.active) {
                message('Service Worker 离线缓存已启动，该网页已经可以离线访问');
            }
    
            // registration.pushManager.subscribe({
            //     userVisibleOnly: true,
            //     applicationServerKey: urlBase64(publicKey)
            // })
            // .then((pushSubscription) => {
            //     console.log('success');
            // }, (error) => {
            //     console.log(error);
            // })
        }).catch((error) => {
            message(`Service Worker注册失败, 失败原因：${error}`);
        });
    } else {
        message('浏览器不支持service worker');
    }
}
