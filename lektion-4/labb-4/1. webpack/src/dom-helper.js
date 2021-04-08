export const addParagraphToBody = (content) => {
    const element = document.createElement("p");
    element.innerHTML = content;
    document.body.appendChild(element);
}