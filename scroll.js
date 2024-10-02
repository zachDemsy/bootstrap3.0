< script >
    document.querySelectorAll('section').forEach(section => {
        section.addEventListener('wheel', (event) => {
            event.preventDefault();
            const delta = event.deltaY > 0 ? 1 : -1;
            const scrollOptions = {
                top: window.innerHeight * delta,
                left: 0,
                behavior: 'smooth'
            };
            setTimeout(() => {
                window.scrollBy(scrollOptions);
            }, 200); // This ensures the scroll takes 0.2s
        });
    }); <
/script>