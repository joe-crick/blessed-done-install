
/**
 * clearScreen - Removes a component and all of it's children from a parent container
 *
 * @param  {blessed.Node} currentNode The root node to remove
 * @param  {blessed.Node} parent      The root node's parent container (node, or screen)
 */
module.exports = function clearScreen(currentNode, parent) {
    let len = currentNode.children.length;
    if (len > 0) {
        while (len--) {
            clearScreen(currentNode.children[len], currentNode);
        }
    }
    parent.remove(currentNode);
}
