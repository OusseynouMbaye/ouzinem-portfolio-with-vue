const theme = localStorage.getItem('theme');
if (!theme) {
  //  if no theme is set, default to dark mode
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
} else if (theme === 'dark') {
  document.documentElement.classList.add('dark');
} else if (theme === 'light') {
  document.documentElement.classList.remove('dark');
}
