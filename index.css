document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const searchToggle = document.getElementById('searchToggle');
    const searchBox = document.getElementById('searchBox');
    const dropdownItems = document.querySelectorAll('.nav-item.dropdown');
    
    // 汉堡菜单点击事件
    hamburger.addEventListener('click', function(e) {
        e.stopPropagation();
        this.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // 关闭搜索框当菜单打开时
        searchBox.classList.remove('active');
        
        // 关闭所有下拉菜单
        dropdownItems.forEach(item => {
            item.classList.remove('active');
            item.querySelector('.dropdown-content').style.display = 'none';
        });
    });
    
    // 搜索图标点击事件
    searchToggle.addEventListener('click', function(e) {
        e.stopPropagation();
        searchBox.classList.toggle('active');
        
        if (searchBox.classList.contains('active')) {
            setTimeout(() => {
                searchBox.querySelector('input').focus();
            }, 300);
            
            // 关闭菜单当搜索框打开时
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // 关闭所有下拉菜单
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.dropdown-content').style.display = 'none';
            });
        }
    });
    
    // 移动端下拉菜单点击事件
    dropdownItems.forEach(item => {
        const link = item.querySelector('.nav-link');
        
        link.addEventListener('click', function(e) {
            if (window.innerWidth <= 950) {
                e.preventDefault();
                e.stopPropagation();
                
                // 关闭其他下拉菜单
                dropdownItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        otherItem.querySelector('.dropdown-content').style.display = 'none';
                    }
                });
                
                // 切换当前下拉菜单
                item.classList.toggle('active');
                const dropdown = item.querySelector('.dropdown-content');
                dropdown.style.display = item.classList.contains('active') ? 'block' : 'none';
            }
        });
    });
    
    // 点击页面其他区域关闭所有弹出元素
    document.addEventListener('click', function(e) {
        // 关闭搜索框
        if (!searchToggle.contains(e.target) && !searchBox.contains(e.target)) {
            searchBox.classList.remove('active');
        }
        
        // 关闭菜单和下拉菜单
        if (window.innerWidth <= 950) {
            if (!navMenu.contains(e.target) && !hamburger.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            }
            
            // 关闭所有下拉菜单当点击非下拉区域
            if (!e.target.closest('.dropdown')) {
                dropdownItems.forEach(item => {
                    item.classList.remove('active');
                    item.querySelector('.dropdown-content').style.display = 'none';
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
            dropdownItems.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.dropdown-content').style.display = '';
            });
        }
    });
});
