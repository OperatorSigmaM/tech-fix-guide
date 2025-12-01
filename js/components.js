// Функция для загрузки компонентов
async function loadComponent(elementId, componentPath) {
    try {
        const response = await fetch(componentPath);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Ошибка загрузки компонента ${componentPath}:`, error);
    }
}

// Загрузка компонентов при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    loadComponent('header-placeholder', '/components/header.html');
    loadComponent('footer-placeholder', '/components/footer.html');
});