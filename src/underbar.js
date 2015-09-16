// This is the proper way to start a javascript library
(function() {
  
  // This makes the arguments variable behave the way we want it to and a few
  // other things. For more info: 
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
  'use strict';

  // This allows us to use our "_" anywhere. In a web browser, properties of window
  // are available everywhere without having to type "window."
  window._ = {};

  /**
   * START OF OUR LIBRARY!
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


  /** last (similar to FIRST)
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


  // Return all elements of an array that don't pass a truth test.
  _.reject = function(collection, test) {
    // TIP: see if you can re-use _.filter() here, without simply
    // copying code in and modifying it

  };

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {

  };


  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.

  };

  /*
   * TIP: map is really handy when you want to transform an array of
   * values into a new array of values. _.pluck() is solved for you
   * as an example of this.
   */

  // Takes an array of objects and returns and array of the values of
  // a certain property in it. E.g. take an array of people and return
  // an array of just their ages
  _.pluck = function(collection, key) {
    // TIP: map is really handy when you want to transform an array of
    // values into a new array of values. _.pluck() is solved for you
    // as an example of this.
    return _.map(collection, function(item){
      return item[key];
    });
  };

  // Reduces an array or object to a single value by repetitively calling
  // iterator(accumulator, item) for each item. accumulator should be
  // the return value of the previous iterator call.
  //
  // You can pass in a starting value for the accumulator as the third argument
  // to reduce. If no starting value is passed, the first element is used as
  // the accumulator, and is never passed to the iterator. In other words, in
  // the case where a starting value is not passed, the iterator is not invoked
  // until the second element, with the first element as it's second argument.
  //
  // Example:
  //   var numbers = [1,2,3];
  //   var sum = _.reduce(numbers, function(total, number){
  //     return total + number;
  //   }, 0); // should be 6
  //
  //   var identity = _.reduce([5], function(total, number){
  //     return total + number * number;
  //   }); // should be 5, regardless of the iterator function passed in
  //          No accumulator is given so the first element is used.
  _.reduce = function(collection, iterator, accumulator) {

  };

  // Determine if the array or object contains a given value (using `===`).
  _.contains = function(collection, target) {
    // TIP: Many iteration problems can be most easily expressed in
    // terms of reduce(). Here's a freebie to demonstrate!
    return _.reduce(collection, function(wasFound, item) {
      if (wasFound) {
        return true;
      }
      return item === target;
    }, false);
  };


  // Determine whether all of the elements match a truth test.
  _.every = function(collection, iterator) {
    // TIP: Try re-using reduce() here.

  };

  // Determine whether any of the elements pass a truth test. If no iterator is
  // provided, provide a default one
  _.some = function(collection, iterator) {
    // TIP: There's a very clever way to re-use every() here.

  };


  /**
   * OBJECTS
   * =======
   *
   * In this section, we'll look at a helper for merging objects.
   */

  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  //   var obj1 = {key1: "something"};
  //   _.extend(obj1, {
  //     key2: "something new",
  //     key3: "something else new"
  //   }, {
  //     bla: "even more stuff"
  //   }); // obj1 now contains key1, key2, key3 and bla
  _.extend = function(obj) {

  };

}());
