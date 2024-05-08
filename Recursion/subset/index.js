//given an integer array nums of unique elements return all possible subsets the power set

//[1,2,3]=[[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
function subset(nums) {
  let result = [];
  let temp = [];

  function recursiveSubsets(nums, i) {
    if (i === nums.length) {
      return result.push([...temp]);
    }
    temp.push(nums[i]);
    recursiveSubsets(nums, i + 1);
    temp.pop();
    recursiveSubsets(nums, i + 1);
  }
  recursiveSubsets(nums, 0);
  return result;
}
