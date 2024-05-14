function getElementSize(elementId : string) {
    const element = document.getElementById(elementId);
    if (element) {
      const rect = element.getBoundingClientRect();
      return {
        width: rect.width,
        height: rect.height
      };
    } else {
      return {
        width: 0,
        height: 0
      };
    }
  }
  

export{
    getElementSize
}
  