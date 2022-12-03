export function onSee(
  elementId: string,
  callback: () => void,
  once: boolean = true
) {
  const element = document.getElementById(elementId);
  if (!element) {
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          if (once) {
            observer.disconnect();
          }
        }
      });
    },
    { threshold: 0.5 }
  );
  observer.observe(element);
}
