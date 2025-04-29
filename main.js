function navigateToPage() {
    const button = document.querySelector('button'); // استبدل 'button' بالزر الخاص بك
    button.style.transition = 'transform 0.3s';
    button.style.transform = 'scale(1.1)';

    setTimeout(() => {
        button.style.transform = 'scale(1)';
        // هنا يمكنك إضافة الكود الخاص بالتنقل إلى الصفحة
        window.location.href = 'https://github.com/Abser10'; // استبدل 'your-page.html' بالرابط الخاص بك
    }, 300);
}