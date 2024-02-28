import './style.css';
import './styles.scss';

console.log('Vite и WordPress работают вместе!');

// Пример динамического импорта, который можно использовать для тестирования HMR
if (import.meta.hot) {
    import.meta.hot.accept((newModule) => {
        console.log('Модуль обновлен:', newModule);
    });
}