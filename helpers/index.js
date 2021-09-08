export function lazyLoadCss(cssArray) {
  const { head } = document;

  cssArray.forEach((css) => {
    const link = document.createElement('link');
    link.type = 'text/css';
    link.rel = 'stylesheet';
    link.href = css;
    head.appendChild(link);
  });
}
