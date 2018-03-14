import "./index.less";

const screenWidth = screen.width;
const screenHeight = screen.height;
const snowCanvas = document.getElementById('snow');
const ctx = snowCanvas.getContext("2d");

snowCanvas.width = window.innerWidth;
snowCanvas.height = window.innerHeight;


(function () {

    // 解决requestAnimationFrame 的浏览器兼容，不支持的浏览器已每秒60帧设置

    let _RequestAnimationFrame = function (callback) {
            window.setTimeout(callback, 1000 / 60);
        },
        requestAnimationFrame = window.requestAnimationFrame ||
                                window.mozRequestAnimationFrame ||
                                window.webkitRequestAnimationFrame ||
                                window.msRequestAnimationFrame ||
                                _RequestAnimationFrame;

    window.requestAnimationFrame = requestAnimationFrame;
})();


(function () {

    // 鼠标初始化坐标，雪花个数，雪花容器数组
    let mX = -200,
        mY = -200,
        snowNums = 200,
        arr = [];

    // 刷新Canvas
    function resetCanvas () {
        ctx.clearRect(0, 0, snowCanvas.width, snowCanvas.height);
    }

    // 显示一帧
    function oneFrameCanvas () {
        resetCanvas();
        arr.forEach((item) => {
            item.move();
        });

        // 递归反复显示一帧画面
        window.requestAnimationFrame(oneFrameCanvas);
    }

    // 雪花类
    class snow {
        constructor () {
            this.initSnow();
            this.move();
        }

        initSnow () {
            this.props = {
                x: Math.random() * snowCanvas.width,
                y: Math.random() * snowCanvas.height,
                size: (Math.random() * 3) + 2,
                speed: (Math.random() * 1) + 0.5,
                velX: 0, // 横向速度一开始为0
                opacity: (Math.random() * 0.5) + 0.3,
                stepSize: (Math.random()) / 30 * 1,
                step: 0
            };
            
            this.props.velY = this.props.speed;
        }

        isOutOfCanvas () {
            let flake = this.props;
            
            // 雪花是否超过canvas边界
            return (flake.y >= snowCanvas.height || flake.y <= 0) || (flake.x >= snowCanvas.width || flake.x <= 0);
        }

        move () {
            let flake = this.props,
                x = mX,
                y = mY,

                // 与鼠标的最小距离
                minDist = 150,

                x2 = flake.x,
                y2 = flake.y,
                
                dist = Math.sqrt((x2 - x) * (x2 - x) + (y2 - y) * (y2 - y)), // 雪花与鼠标的距离
                dx = x2 - x, // 雪花与鼠标的横向距离
                dy = y2 - y; // 雪花与鼠标的纵向距离

            
            // 以鼠标中心，表现出互斥效果
            if (dist < minDist) {

                // 当在鼠标距离，根据距离，计算雪花速度
                let force = minDist / (dist * dist),
                    xcomp = (x - x2) / dist,
                    ycomp = (y - y2) / dist,
                    deltaV = force / 2;
                flake.velX -= deltaV * xcomp;
                flake.velY -= deltaV * ycomp;
            } else {
                // 当不在鼠标范围时
                // 横向速度慢慢减少
                flake.velX *= 0.98;
                
                
                if (flake.velY < 0) {

                    // 若纵向速度为负的雪花，雪花速度越来越小，最后变为正值
                    flake.velY *= 0.99999999;
                    if (flake.velY < -0.000001) {
                        console.log(flake.velY)
                        flake.velY = 0.0001;
                    }
                } else if (flake.velY < flake.speed && flake.velY > 0.0) {

                    // 若纵向速度为正值且速度小于，正常下落速度，速度越来越大
                    flake.velY *= 1.02;
                } else if (flake.velY > flake.speed) {

                    // 若纵向速度大约正常下落速度，恢复正常速度
                    flake.velY = flake.speed
                }

                // 横向坐标一直以COS曲线走
                flake.velX += Math.cos(flake.step += .05) * flake.stepSize;
            }

            ctx.fillStyle = `rgba(255, 255, 255, ${flake.opacity})`;

            flake.y += flake.velY;
            flake.x += flake.velX;

            if (this.isOutOfCanvas()) {
                this.reset();
            }

            ctx.beginPath();
            ctx.arc(flake.x, flake.y, flake.size, 0, Math.PI * 2);
            ctx.fill();
        }

        reset () {
            this.initSnow();
            this.props.y = 0;
        }

    }

    // 记录鼠标坐标
    document.addEventListener("mousemove", function (e) {
        mX = e.clientX,
        mY = e.clientY
    });

    // 窗口改变，改变canvas大小
    window.addEventListener("resize", function () {
        snowCanvas.width = window.innerWidth;
        snowCanvas.height = window.innerHeight;
    });
    

    // 创建雪花对象
    for(let i = 0; i < snowNums; i++) {
        arr.push(new snow());
    }

    // 显示一帧画面
    oneFrameCanvas();

})();
