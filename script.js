document.addEventListener('DOMContentLoaded', () => {
    function makeDraggable(imgId) {
        const img = document.getElementById(imgId);
        let offsetX, offsetY, isDown = false, originalAnimation;

        img.addEventListener('mousedown', (e) => {
            isDown = true;
            offsetX = e.clientX - img.offsetLeft;
            offsetY = e.clientY - img.offsetTop;

            originalAnimation = img.style.animation;
            img.style.animation = 'none';
            img.style.position = 'absolute'; 
        });

        document.addEventListener('mouseup', () => {
            if (!isDown) return;
            isDown = false;
            img.style.animation = originalAnimation;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();

            let newX = e.clientX - offsetX;
            let newY = e.clientY - offsetY;

            img.style.left = newX + 'px';
            img.style.top = newY + 'px';
        });
    }

    makeDraggable('draggable-image1');
    makeDraggable('draggable-image2');
    makeDraggable('draggable-image3');
    makeDraggable('draggable-image4');
    makeDraggable('draggable-image5');
    makeDraggable('draggable-image6');
});

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-container input');

    searchForm.addEventListener('submit', (event) => {
        if (searchInput.value.trim() === '') {
            event.preventDefault(); 
            alert('Please enter something to search.');
            searchInput.focus(); 
        }
    });
});
