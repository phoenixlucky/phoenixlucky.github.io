document.addEventListener('DOMContentLoaded', function() {
  if (window.location.pathname === '/about/') {
    createPetals();
  }
});

function createPetals() {
  const petalCount = 50; // 增加花瓣数量
  const petalTypes = 5; // 增加花瓣类型
  
  for (let i = 0; i < petalCount; i++) {
    const petal = document.createElement('div');
    petal.className = 'petal';
    
    // 随机选择花瓣类型和颜色
    const type = Math.floor(Math.random() * petalTypes) + 1;
    const hue = Math.random() * 30 + 330; // 粉色到紫色的色相范围
    const saturation = Math.random() * 20 + 80; // 80-100%的饱和度
    const lightness = Math.random() * 20 + 70; // 70-90%的亮度
    petal.style.backgroundImage = `url('/img/petal.svg')`;
    petal.style.filter = `hue-rotate(${hue}deg) saturate(${saturation}%) brightness(${lightness}%)`;
    
    // 随机大小
    const size = Math.random() * 25 + 8;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    
    // 随机位置和初始旋转角度
    petal.style.left = `${Math.random() * 120 - 10}vw`; // 允许超出屏幕边缘
    const initialRotation = Math.random() * 360;
    petal.style.transform = `rotate(${initialRotation}deg)`;
    
    // 随机动画参数
    const duration = Math.random() * 15 + 8; // 增加飘落时间
    const delay = Math.random() * 10; // 增加延迟时间范围
    petal.style.animationDuration = `${duration}s`;
    petal.style.animationDelay = `${delay}s`;
    
    // 添加自定义属性用于个性化动画
    petal.dataset.swayAmount = Math.random() * 2 + 1; // 摇摆幅度
    petal.dataset.rotationSpeed = Math.random() * 2 - 1; // 旋转速度
    
    document.body.appendChild(petal);
  }
}