// 当DOM内容加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取汉堡菜单按钮和导航菜单元素
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function() {
        // 切换汉堡菜单的active类
        hamburger.classList.toggle('active');
        // 切换导航菜单的active类
        navMenu.classList.toggle('active');
    });
    
    // 获取搜索图标和搜索框元素
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    
    // 搜索图标点击事件
    searchToggle.addEventListener('click', function() {
        // 切换搜索框的active类
        searchBox.classList.toggle('active');
        
        // 如果搜索框已激活，聚焦输入框
        if (searchBox.classList.contains('active')) {
            // 延迟300毫秒确保动画完成后再聚焦
            setTimeout(function() {
                searchBox.querySelector('input').focus();
            }, 300);
        }
    });
    
    // 文档点击事件，用于点击其他地方时关闭搜索框
    document.addEventListener('click', function(event) {
        // 如果点击的不是搜索图标和搜索框
        if (!searchToggle.contains(event.target) && !searchBox.contains(event.target)) {
            // 移除搜索框的active类
            searchBox.classList.remove('active');
        }
    });
    
    // 窗口大小改变事件
    window.addEventListener('resize', function() {
        // 如果窗口宽度大于950px
        if (window.innerWidth > 950) {
            // 移除汉堡菜单的active类
            hamburger.classList.remove('active');
            // 移除导航菜单的active类
            navMenu.classList.remove('active');
        }
    });
});