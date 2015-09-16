// This is the proper way to start a javascript file
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

  /** IDENTITY
   * Arguments:
   *   1) Anything : x
   * Objectives:
   *   1) Returns x unchanged
   * Examples:
   *   _.identity(5) === 5
   *   _.identity({a: "b"}) === {a: "b"}
   */
  _.identity = function() {
  };


  /** FIRST
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
  _.first = function() {
  };

  /** LAST (similar to FIRST)
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
  _.last = function(array, n) {
  };

  // Call iterator(value, key, collection) for each element of collection.
  // Accepts both arrays and objects.
  //
  // Note: _.each does not have a return value, but rather simply runs the
  // iterator function over each item in the input collection.
  _.each = function(collection, iterator) {
    if(Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i]);
    };
  }
  };

  // Returns the index at which value can be found in the array, or -1 if value
  // is not present in the array.
  _.indexOf = function(array, target){
    // TIP: Here's an example of a function that needs to iterate, which we've
    // implemented for you. Instead of using a standard `for` loop, though,
    // it uses the iteration helper `each`, which you will need to write.
    var result = -1;

    _.each(array, function(item, index) {
      if (item === target && result === -1) {
        result = index;
      }
    });

    return result;
  };

  // Return all elements of an array that pass a truth test.
  _.filter = function(collection, test) {

  };

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
