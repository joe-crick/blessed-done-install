module.exports = function clearScreen(currentNode, parent) {
    let len = currentNode.children.length;
    if (len > 0) {
        while (len--) {
            clearScreen(currentNode.children[len], currentNode);
        }
    }
    parent.remove(currentNode);
}
