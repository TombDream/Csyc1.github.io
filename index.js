document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 关闭搜索框当菜单打开时
        if (navMenu.classList.contains('active')) {
            searchBox.classList.remove('active');
        }
    });
    
    // 搜索图标点击事件
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation(); // 防止事件冒泡
        searchBox.classList.toggle('active');
        
        if (searchBox.classList.contains('active')) {
            setTimeout(() => {
                searchBox.querySelector('input').focus();
            }, 300);
            
            // 关闭菜单当搜索框打开时
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
    
    // 下拉菜单点击事件（移动端）
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 950) {
                e.preventDefault();
                const dropdown = this.nextElementSibling;
                const isActive = dropdown.style.display === 'block';
                
                // 关闭所有其他下拉菜单
                document.querySelectorAll('.dropdown-content').forEach(d => {
                    if (d !== dropdown) {
                        d.style.display = 'none';
                    }
                });
                
                // 切换当前下拉菜单
                dropdown.style.display = isActive ? 'none' : 'block';
            }
        });
    });
    
    // 点击页面其他区域关闭搜索框和下拉菜单
    document.addEventListener('click', function(e) {
        if (!searchToggle.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
        
        if (window.innerWidth <= 950) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // 关闭所有下拉菜单当点击非下拉区域
            if (!e.target.closest('.dropdown')) {
                document.querySelectorAll('.dropdown-content').forEach(d => {
                    d.style.display = 'none';
                });
            }
        }
    });
    
    // 窗口大小改变事件
    window.addEventListener('resize', function() {
        if (window.innerWidth > 950) {
            // 重置移动端菜单状态
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // 重置下拉菜单显示状态
            document.querySelectorAll('.dropdown-content').forEach(d => {
                d.style.display = '';
            });
        }
    });
});
