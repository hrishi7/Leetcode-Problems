
class TreeNode {
  constructor(value) {
    this.value = value;
    this.descendants = [];
  }
     largestNode(root){ 
         if(root == null){
             return null;
         }
        let max = Number.MIN_VALUE;
        for(let i = 0; i<= root.descendants.length -1; i++){
            max = Math.max(max,this.largestNode(root.descendants[i])) ;
        }
         
        return Math.max(max,root.value);
    }
}

(function main() {
      // create nodes with values
const root = new TreeNode(1);
const l = new TreeNode(2);
const r = new TreeNode(30);
const ll = new TreeNode(4);
const lr = new TreeNode(5);
const rl = new TreeNode(6);

// associate root with is descendants
root.descendants.push(l);
root.descendants.push(r);
l.descendants.push(ll);
l.descendants.push(lr);
r.descendants.push(rl);

    console.log(root.largestNode(root));
}());
