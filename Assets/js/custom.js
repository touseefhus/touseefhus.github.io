const btnList = document.querySelectorAll('.btn-1');

btnList.forEach(btnEle => {
    btnEle.addEventListener('click', () => {
        
        if (!btnEle.classList.contains('btn-focus')) {
    
            const currentlyFocusedBtn = document.querySelector('.btn-focus');
            if (currentlyFocusedBtn) {
                currentlyFocusedBtn.classList.remove('btn-focus');
            }

            btnEle.classList.add('btn-focus');
        }
    });
});
