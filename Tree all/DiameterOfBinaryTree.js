
class Node {
    constructor(value){
        this.value = value
        this.left = null
        this.right = null
    }
}

function getHeight (root) {
    if(root == null)
        return 0;
    return 1 + Math.max(getHeight(root.left),getHeight(root.right));
}

function getDiameter(root){
    if(root == null)
        return 0;
    let option1 = getHeight(root.left) + getHeight(root.right);
    let option2 = getDiameter(root.left);
    let option3 = getDiameter(root.right);
    return Math.max(option1, Math.max(option2, option3));
}
(function main() {
    let root = new Node(1);
    root.left = new Node(2)    
    // root.right = new Node(3)
    
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    
    root.left.left.left = new Node(6);
    root.left.left.right = new Node(7);

    console.log(getDiameter(root));
}());