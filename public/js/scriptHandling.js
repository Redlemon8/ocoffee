window.addEventListener('load', () => {
  const container = document.querySelector('div.script-container[data-script]');

  if (container) {
    const scriptName = container.dataset.script;

    if (scriptName) {
      const script = document.createElement('script');
      script.src = `/js/${scriptName}.js`;
      document.head.appendChild(script);
    }
  }
});