

function App() {

function longestSubsequence(arr, n) {
    let dp = new Array(n);
    let len = 0;
    for (let i = 0; i < n; i++) {
        let l = 0, r = len;
        while (l < r) {
            let mid = Math.floor((l + r) / 2);
            if (dp[mid] < arr[i]) {
                l = mid + 1;
            } else {
                r = mid;
            }
        }
        dp[l] = arr[i];
        if (l === len) {
            len++;
        }
    }
    return len;
}

// Driver code
let arr = [0,8,4,12,2,10,6,14,1,9,5,13,3,11,7,15];
let n = arr.length;
console.log(longestSubsequence(arr, n)); // Output: 6
}

export default App
