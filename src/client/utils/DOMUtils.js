export function getBounds(element) {
    const rect = element.getBoundingClientRect();
    const top = rect.top;
    const left = rect.left;
    const width = rect.width || element.offsetWidth;
    const height = rect.height || element.offsetHeight;
    const bottom = rect.bottom || (rect.top + height);
    const right = rect.right || (rect.left + width);
    return {
        "top": top,
        "left": left,
        "width": width,
        "height": height,
        "bottom": bottom,
        "right": right
    };
}
