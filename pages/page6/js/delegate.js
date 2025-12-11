document.addEventListener('DOMContentLoaded', function() {
    // Елементи модального вікна
    let modal = document.getElementById('modal');
    let modalContent = document.getElementById('modal-content');

    // Створення модального вікна, якщо воно не існує (для демонстрації)
    if (!modal) {
        modal = document.createElement('div');
        modal.id = 'modal';
        modal.style.cssText = 'display: none; position: fixed; z-index: 1000; left: 0; top: 0; width: 100%; height: 100%; overflow: auto; background-color: rgba(0,0,0,0.5); justify-content: center; align-items: center;';
        
        modalContent = document.createElement('div');
        modalContent.id = 'modal-content';
        modalContent.style.cssText = 'background-color: #fff; padding: 25px; border-radius: 10px; width: 90%; max-width: 500px; position: relative; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: Arial, sans-serif;';
        
        modal.appendChild(modalContent);
        document.body.appendChild(modal);
    }
    
    // Делегування подій на document
    document.addEventListener('click', function(event) {
        // Шукаємо клік по картці або її нащадках
        const itemCard = event.target.closest('.item-card');
        
        if (itemCard) {
            // Збір даних
            const title = itemCard.dataset.title || itemCard.querySelector('.item-title').innerText;
            const description = itemCard.dataset.description || itemCard.querySelector('.item-description').innerText;
            const price = itemCard.dataset.price || '';

            // Формування контенту
            const priceHtml = price ? `<p style="font-weight: bold; color: #15ad7b; margin-top: 10px;">Ціна: ${price}</p>` : '';
            
            modalContent.innerHTML = `
                <h2 style="margin-top: 0; color: #333;">${title}</h2>
                <p style="color: #666; line-height: 1.5;">${description}</p>
                ${priceHtml}
                <button class="modal-close" style="margin-top: 20px; padding: 10px 20px; background-color: #15ad7b; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">Закрити</button>
            `;
            
            modal.style.display = 'flex';
        } 
        // Закриття вікна
        else if (event.target === modal || event.target.classList.contains('modal-close')) {
            modal.style.display = 'none';
        }
    });
});