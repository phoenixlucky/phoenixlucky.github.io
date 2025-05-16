document.addEventListener('DOMContentLoaded', function() {
  // 获取所有表格
  const tables = document.querySelectorAll('.content table');
  
  // 处理每个表格
  tables.forEach(function(table) {
    // 处理表头
    const headers = table.querySelectorAll('th');
    headers.forEach(function(th) {
      // 如果文本内容超过10个字符，添加长文本类
      if (th.textContent.trim().length > 10) {
        th.classList.add('long-text');
      } else {
        // 确保短文本不换行
        th.classList.remove('long-text');
      }
    });
    
    // 处理表格单元格
    const cells = table.querySelectorAll('td');
    cells.forEach(function(td) {
      // 跳过包含代码块的单元格
      if (td.querySelector('code') || td.querySelector('.language-python') || 
          td.querySelector('.language-r') || td.querySelector('.language-javascript')) {
        return;
      }
      
      // 如果文本内容超过10个字符，添加长文本类
      if (td.textContent.trim().length > 10) {
        td.classList.add('long-text');
      } else {
        // 确保短文本不换行
        td.classList.remove('long-text');
      }
    });
  });
  
  // 添加MutationObserver以处理动态加载的表格
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        // 检查是否有新的表格被添加
        mutation.addedNodes.forEach(function(node) {
          if (node.nodeType === 1) { // 元素节点
            const tables = node.querySelectorAll ? node.querySelectorAll('.content table') : [];
            if (node.matches && node.matches('.content table')) {
              tables.push(node);
            }
            
            // 处理新添加的表格
            tables.forEach(function(table) {
              // 处理表头
              const headers = table.querySelectorAll('th');
              headers.forEach(function(th) {
                if (th.textContent.trim().length > 10) {
                  th.classList.add('long-text');
                }
              });
              
              // 处理单元格
              const cells = table.querySelectorAll('td');
              cells.forEach(function(td) {
                if (!td.querySelector('code') && !td.querySelector('.language-python') && 
                    !td.querySelector('.language-r') && !td.querySelector('.language-javascript') && 
                    td.textContent.trim().length > 10) {
                  td.classList.add('long-text');
                }
              });
            });
          }
        });
      }
    });
  });
  
  // 观察文档变化
  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});