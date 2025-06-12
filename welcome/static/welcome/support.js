document.addEventListener('DOMContentLoaded', function() {
    const supportBtn = document.querySelector('.support-btn');
    if (!supportBtn) return;
    supportBtn.addEventListener('click', function() {
        setTimeout(function() {
            // Try to find the "Start a call" button by aria-label or text
            // This may need to be updated if the widget's structure changes
            const btn = document.querySelector('button[aria-label="Start a call"], button[aria-label="Begin conversation"]');
            if (btn) {
                btn.click();
            }
        }, 500); // Wait for widget to render if needed
    });
});
