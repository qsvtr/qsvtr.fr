window.onload = () => {
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.matches ? body.classList.add('inverted') : body.classList.remove('inverted');
    darkModeToggle.addEventListener('click', function (event) {
        body.classList.toggle('inverted');
    });
    darkModeMediaQuery.addListener((e) => {
        const darkModeOn = e.matches;
        body.classList.toggle('inverted', darkModeOn);
    });
};
