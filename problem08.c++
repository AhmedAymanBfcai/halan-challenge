#include <iostream>
#include <vector>
#include <unordered_set>
using namespace std;

int index_of_first_duplicate(vector<int> nums)
{
    unordered_set<int> set;
    for (int i = 0; i < nums.size(); ++i)
    {
        if (set.find(nums[i]) != set.end())
        {
            return i;
        }
        set.insert(nums[i]);
    }
    return -1; // return -1 if there is no duplicate
}

int main()
{
    vector<int> nums = {5, 17, 3, 17, 3, -1};
    int index = index_of_first_duplicate(nums);
    cout << "Index of first duplicate: " << index << endl; // Output: 3
    return 0;
}

// Time Complexity:  O(n) where n is the number of elements in the input vector.
// Space Complexity: O(n) Due to the storage required for the unordered set.