// This is the proper way to start a javascript library
(function() {
  
  // This makes the arguments variable behave the way we want it to and a few
  // other things. For more info: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  'use strict';

  // This allows us to use our "_" anywhere. In a web browser, properties of window
  // are available everywhere without having to type "window."
  /* global _ */
  window._ = {};

  /**
   * START OF OUR LIBRARY!
   * Implement each function below it's instructions
   */

  /** identity
   * Arguments:
   *   1) Anything : x
   * Objectives:
   *   1) Returns x unchanged
   * Examples:
   *   _.identity(5) === 5
   *   _.identity({a: "b"}) === {a: "b"}
   */


  /** first
   * Arguments:
   *   1) An array : arr
   *   2) a number : n
   * Objectives:
   *   1) If arr is not an array, return []
   *   2) If n is not given or not a number, return just the first element in arr.
   *   3) Otherwise, return the first n items of arr
   * Gotchas:
   *   1) What if n is negative?
   *   2) What if n is greater than arr.length?
   * Examples:
   *   _.first(["a","b","c"], 2) -> ["a", "b"]
   *   _.first(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */


  /** last
   * Arguments:
   *   1) An array : arr
   *   2) a number : n
   * Objectives:
   *   1) If arr is not an array, return []
   *   2) If n is not given or not a number, return just the last element in arr.
   *   3) Otherwise, return the last n items of arr
   * Gotchas:
   *   1) What if n is negative?
   *   2) What if n is greater than arr.length?
    * Examples:
   *   _.last(["a","b","c"], 2) -> ["b","c"]
   *   _.last(["a", "b", "c"], "ponies") -> ["a","b","c"]
   */


  /** each
   * Arguments:
   *   1) A collection : coll
   *   2) a function : func
   * Objectives:
   *   1) if coll is an array, call func once for each element
   *      with the arguments: 
   *         the element, it's index, coll
   *   2) if coll is an object, run func once for each property
   *      with the arguments:
   *         the property's value, it's key, coll
   * Gotchas:
   *   1) what if func is not a function?
   *   2) what if coll is not a collection?
    * Examples:
   *   _.each(["a","b","c"], function(e,i,a){ console.log(e}); 
   *      -> should log "a" "b" "c" to the console
   */


  /** indexOf
   * Arguments:
   *   1) An array : arr
   *   2) a value : val
   * Objectives:
   *   1) Return the index of arr that is the first occurrance of val
   * Gotchas:
   *   1) What if arr has multiple occurances of val?
   *   2) What if val isn't in arr?
    * Examples:
   *   _.indexOf(["a","b","c"], "b") -> 1
   */


  /** filter
   * Arguments:
   *   1) An array : arr
   *   2) a test function : test
   * Objectives:
   *   1) call test for each element in arr passing the arguments:
   *      the element, it's index, arr
   *   2) return an array of elements for which calling test returned true
   * Gotchas:
   *   1) What if test returned something other than true or false?
   *   2) What if arr is not an array?
   * Examples:
   *   _.filter([1,2,3,4,5], function(e){return e%2 === 0}) -> [2,4]
   */


  /** reject
   * Arguments:
   *   1) An array : arr
   *   2) a test function : test
   * Objectives:
   *   1) call test for each element in arr passing the arguments:
   *      the element, it's index, arr
   *   2) return an array of elements for which calling test returned false
   * Gotchas:
   *   1) What if test returned something other than true or false?
   *   2) What if arr is not an array?
   * Examples:
   *   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
   * Bonus:
   *   Use _.filter in your implementation
   */


  /** uniq 
   * Arguments:
   *   1) An array : arr
   * Objectives:
   *   1) return arr with all duplicates removed
   * Examples:
   *   _.uniq([1,2,2,4,5,5,2]) -> [1,2,4,5]
   */


  /** map
   * Arguments:
   *   1) An array : arr
   *   2) a function : func
   * Objectives:
   *   1) call func for each element in arr passing the arguments:
   *      the element
   *   2) save the return value of each func call in a new array
   *   3) return the new array
   * Gotchas:
   *   1) What if func is not a function?
   *   2) What if arr is not an array?
   * Examples:
   *   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
   */


  /** pluck
   * Arguments:
   *   1) An array of objects : arr
   *   2) A property : prop
   * Objectives:
   *   1) Return an array containing the value of prop for every element in arr
   * Gotchas:
   *   1) What if prop is not given?
   *   2) What if arr is not an array?
   *   3) What if one of the elements doesn't have prop?
   * Examples:
   *   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
   * Bonus:
   *   Use _.map in your implementation
   */


  /** reduce
   * Arguments:
   *   1) An array : arr
   *   2) A function : func
   *   3) A starting point : start
   * Objectives:
   *   1) Call func for every element in arr passing the arguments:
   *       previous result, current element, current element's index
   *   2) Use the return value of this function as the "previous result"
   *      for the next iteration
   *   3) On the very first iteration, use start as the "previous result"
   *   4) After the last iteration, return the return value of the final func call
   * Gotchas:
   *   1) What if no start is given?
   *   2) What if arr is not an array?
   * Examples:
   *   _.reduce([1,2,3], function(prev, curr){ return prev + curr}) -> 6
   */


  /** contains
   * Arguments:
   *   1) An array : arr
   *   2) A value : val
   * Objectives:
   *   1) Return true if arr contains val
   *   2) Return fals otherwise
   * Gotchas:
   *   1) did you use === ?
   *   2) What if arr is not an array?
   *   3) What if no value is given?
   * Examples:
   *   _.contains([1,"two", 3.14], "two") -> true
   */


  /** every
   * Arguments:
   *   1) An array : arr
   *   2) A test function : test
   * Objectives:
   *   1) Call test for every element of arr with the paramaters:
   *      current element
   *   2) If the return value of calling test for each element is true, return true
   *   3) If even one of them returns false, return false
   * Gotchas:
   *   1) what if test doesn't return true or false
   * Examples:
   *   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
   *   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
   */
   
   
  /** some
   * Arguments:
   *   1) An array : arr
   *   2) A test function : test
   * Objectives:
   *   1) Call test for every element of arr with the paramaters:
   *      current element
   *   2) If the return value of calling test is true for at least one element, return true
   *   3) If it is false for all elements, return false
   * Gotchas:
   *   1) what if test doesn't return true or false
   * Examples:
   *   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
   *   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
   */


// This is the proper way to end a javascript library
}());
