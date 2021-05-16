
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

//base solution
//complexity - o(n * h)
//h == logn --> o(nlogn)
//h == n --> o(n^2)
function getDiameter(root){
    if(root == null)
        return 0;
    let option1 = getHeight(root.left) + getHeight(root.right);
    let option2 = getDiameter(root.left);
    let option3 = getDiameter(root.right);
    return Math.max(option1, Math.max(option2, option3));
}

//better solution
//complexity - o(n * h)
//h == logn --> o(nlogn)
//h == n --> o(n)
function getHeightAndDiameter(root) {
  if(root == null){
    return{
      height:0,
      diameter:0
    }
  }
  let lo = getHeightAndDiameter(root.left);
  let ro = getHeightAndDiameter(root.right);

  let height = 1 + Math.max(lo.height, ro.height);

  let option1 = lo.height + ro.height;
  let option2 = lo.diameter;
  let option3 = ro.diameter;
  let diameter = Math.max(option1,Math.max(option2,option3));
  return {
    height,
    diameter
  }
}

(function main() {
    let root = new Node(1);
    root.left = new Node(2)    
    root.right = new Node(3)
    
    root.left.left = new Node(4);
    root.left.right = new Node(5);
    
    root.left.left.left = new Node(6);
    root.left.left.right = new Node(7);

    console.log(getHeightAndDiameter(root).diameter);
}());
