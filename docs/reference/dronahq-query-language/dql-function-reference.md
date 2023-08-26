---
sidebar_position: 5
---

# DQL function reference

DQL function reference

All DronaHQ Query Language (DQL) functions are documented below.

## Contents
- [General functions](../dql-function-reference/#general-functions)
- [Array functions](../dql-function-reference/#array-functions)
- [Numeric functions](../dql-function-reference/#numeric-functions)
- [Date and time functions](../dql-function-reference/#date-and-time-functions)

## General functions
### assert
Throws an error with the message if a condition is false.

##### DQL
```bash
$assert($cond: bool, $msg: string) => error
```
##### Result
```bash
$assert(user.age < 18,"error: user cannot vote!")
```

### average
Returns the average value of a numeric array.

##### DQL
```bash
$average($array: array(num)) => number
```
##### Result
```bash
$average([1,2,3,4,5]) -> 3
```

### boolean
Casts an argument to its effective boolean value.

##### DQL
```bash
$boolean($arg: any) => bool
```
##### Result
```bash
$boolean(0) ->  false
$boolean(10) ->  true
$boolean("") ->  false
$boolean("abc") ->  true
```
### contains
Returns true if a string contains a pattern.

##### DQL
```bash
$contains($str: string, $pattern: string | regex) => bool
```
##### Result
```bash
$contains("hello, world", "lo") -> true
$contains("hello world", "ab") -> false
```

### decodeUrl
Decodes a string from a URL.

##### DQL
```bash
$decodeUrl($val: string) => string
```
##### Result
```bash
$decodeUrl("https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B") -> "https://mozilla.org/?x=шеллы"
```

### decodeUrlComponent
Decodes a string from a component previously created with encodeUrlComponent.

##### DQL
```bash
$decodeUrlComponent($val: string) => string
```
##### Result
```bash
$decodeUrlComponent("%3Fx%3Dtest") -> "?x=test"
```

### each
Applies a function to each key/value pair of an object.

##### DQL
```bash
$each($obj: object, func: ($val, $key) : any)
```
##### Result
```string
"Address": {
    "Street": "Hursley Park",
    "City": "Winchester",
    "Postcode": "SO21 2JN"
}
$each(Address, fn($v, $k) {$k & ": " & $v}) ->
[
        "Street: Hursley Park",
        "City: Winchester",
        "Postcode: SO21 2JN"
]
```

### encodeUrl
Encodes a value into a URL.

##### DQL
```bash
$encodeUrl($val: string) => string
```
##### Result
```bash
$encodeUrl("https://mozilla.org/?x=шеллы") -> "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"
```

### encodeUrlComponent
Encodes a value into a component for a URL.

##### DQL
```bash
$encodeUrlComponent($val: string) => string
```
##### Result
```bash
$encodeUrlComponent("?x=test") -> "%3Fx%3Dtest"
```

### eval
Evaluates an expression.

##### DQL
```bash
$eval($val:string) => any
```
##### Result
```bash
$eval("[1,$string(2),3]") -> [1,"2",3]
```
### exists
Returns true if a value is not null or undefined.

##### DQL
```bash
$exists($val: any) => bool
```
##### Result
```bash
$exists("hello") -> true
$exists([1,2,3]) -> true
$exists("a" : 1, "b": 2) -> true
$exists(null) -> false
$exists(blah) -> false
```

### filter
Returns an array of elements which satisfy the predicate defined in a function.

##### DQL
```bash
$filter($arr: array, $func: ($e, $index?: number?, $ar: array )=> boolean) => array
```
##### Result
```bash
$filter([1,2,3,4,5], fn($e){ '$e>3'}) -> [4, 5]
```

### join
Joins the elements of an array into a string using the optional separator string.

##### DQL
```bash
$join($arr: array, $separator?: string) => string
```
##### Result
```bash
$join(["hello", "world"]) -> "helloworld"
$join(["hello", "world"], "-") → "hello-world"
$join([1,2,3], "..") -> "1..2..3"
```

### json
Converts an object to a JSON string.

##### DQL
```bash
$json($val:any) => string
```
##### Result
```bash
>$json({"a": 1, "b" : "hello"}) -> {"a":1,"b":"hello"}
```

### jsonParse
Parses a JSON string into an object.

##### DQL
```bash
$jsonParse($val:string) => object
```
##### Result
```
$jsonParse('{"one": 1, "two": [3, "four"]}') -> {"one": 1,"two": [ 3,"four"]}
```

### keys
Returns an array of the keys in an object.

##### DQL
```bash
$keys($obj: object) => array
```
##### Result
```
"Product": [
    {
        "Product Name": "Bowler Hat",
        "ProductID": 858383,
        "SKU": "0406654608",
        "Description": {
            "Colour": "Purple",
            "Width": 300,
            "Height": 200,
            "Depth": 210,
            "Weight": 0.75
        },
        "Price": 34.45,
        "Quantity": 2
    }
]
$keys(Product) -> ["Product Name", "ProductID", "SKU", "Description", "Price", "Quantity"]

```

### length
Returns the length of a string.

##### DQL
```bash
$length($str: string) => number
```
##### Result
```bash
$length("abc") -> 3
$length("") -> 0
```

### lookup
Returns the value of a key in an object.

##### DQL
```bash
$lookup($obj: object, $key: string) => any
```
##### Result
```
($o := { "name" : "John", "email": "john@gmail.com"}; $lookup($o, "name")) -> "John"
```

### lowercase
Returns the lowercase version of a string.

##### DQL
```bash
$lowercase($str: string) => string
```
##### Result
```bash
$lowercase("Hello World") -> "hello world"
```

### map
Maps each element of an array using a function and returns a new array with all the mapped elements.

##### DQL
```bash
$map($arr: array, $func: ($e, $index?: number?, $ar: array )) : array
```
##### Result
```
$map([1,2,3,4,5], fn($e){ $e *2}) -> [2,4,6,8,10]
```
### max
Returns the maximum value from a numeric array.

##### DQL
```bash
$max($array) => number
```
##### Result
```bash
$max([9,2,17,3]) -> 17
```

### match
Returns an array of strings that match a pattern.

##### DQL
```bash
$match($str: string, $pattern: string | regex) => array
```
##### Result
```bash
$match("ababbabbbcc",/a(b+)/) -> ["ab", "abb", "abbb"]
```

### merge
Returns a new object with the properties of each object in an array of objects merged into it.

##### DQL
```bash
$merge($arr: array) => object
```
##### Result
```
$merge([{"a":1},{"b":2}]) -> {"a": 1,"b": 2}
```

### not
Returns true if a value is false, or false otherwise

##### DQL
```bash
$not($x: any) => bool
```
##### Result
```bash
$not(true) -> false
$not(false) -> true
$not(null) -> true
$not(0) -> true
$not(100) -> false
$not("") -> true
$not("hello") -> false
```

### pad
Returns a copy of a string padded to a length with $pad (if provided).

##### DQL
```bash
$pad($str: string, $length: number, $pad?: string) => string
```
##### Result
```bash
$pad("example", 5) -> "example  "
$pad("example", 5, "-") -> "example--"
```

### partition
Partitions an array into an array of arrays of size $n.

##### DQL
```bash
$partition($array:any, $n: numbers) => array
```
##### Result
```bash
$partition([1,2,3,4,5,6,7,8,9,10], 2) -> [[1,2], [3,4], [5,6], [7,8], [9,10]]
$partition([1,2,3,4,5,6,7,8,9,10], 3) -> [[1,2,3], [4,5,6], [7,8,9], [10]]
```

### replace
Returns a string with all occurrences of a pattern replaced by a replacement string.

##### DQL
```bash
$replace($str: string, $pattern: string | regex, $replacement: string) => string
```
##### Result
```bash
$replace("Hello World", "World", "Everyone") -> "Hello Everyone"
$replace("the cat sat on the mat", "at", "it") -> "the cit sit on the mit"
```

### reduce
Reduces an array to some value using a function.

##### DQL
```
$reduce(array, function [, init])
```
##### Result
```bash
$reduce([1,2,3,4], fn($prev, $cur) { $prev*$cur})  -> 24
```

### split
Splits a string into an array of strings using a pattern.

##### DQL
```bash
$split($str: string, $pattern: string | regex, $flags?: string) => array
```
##### Result
```
$split("so many words", " ") -> [ "so", "many", "words" ]
$split("so many words", " ", 2) -> [ "so", "many" ]
$split("too much, punctuation. hard; to read", /[ ,.;]+/) -> ["too", "much", "punctuation", "hard", "to", "read"]
```

### spread
Returns an array of objects with a single key/value pair, where the key is the name of the property and the value is the value of the property.

##### DQL
```bash
$spread($val: any) => array(object)
```
##### Result
```bash
$spread({ "a": 1, "b": 2}) -> [ { "a" : 1}, {"b": 2}]
```

### string
Returns the string representation of the input value; if $prettify is true, the output string is formatted for readability.

##### DQL
```bash
$string($value: any, $prettify? true | false) => string
```
##### Result
```bash
$string({"a": 1, "b": 2}) -> {"a":1, "b" : 2}
$string(5) -> "5"
$string([1,2,3]) -> ["1", "2", "3"]
```

### substring
Returns a substring of a string starting at $start and with length $length (if provided).

##### DQL
```bash
$substring($str: string, $start: number, $length?: number) => string
```
##### Result
```bash
$substring("hello world", 0, 5) -> "hello"
$substring("hello world", -5, 5) -> "world"
```

### substringAfter
Returns the substring of a string after the first occurrence of a separator.

##### DQL
```bash
$substringAfter($str: string, $separator: string) => string
```
##### Result
```bash
$substringAfter("abc@gmail.com", "@") -> "gmail.com"
```
### substringBefore
Returns the substring of a string before the first occurrence of a separator.

##### DQL
```bash
$substringBefore($str: string, $separator: string) => string
```
##### Result
```bash
$substringBefore( "john@gmail.com", "@") -> "john"
```

### sum
Returns the sum of the values of a numeric array.

##### DQL
```bash
$sum($array) => number
```
##### Result
```bash
$sum([1,2,3,4]) -> 10
```

### trim
Returns a copy of a string with leading and trailing whitespace removed.

##### DQL
```bash
$trim($str: string) => string
```
##### Result
```bash
$trim(" Hello \n World ") -> "Hello World"
```

### type
Returns the type of a value.

##### DQL
```bash
$type($val: any) => string
```
##### Result
```bash
$type("hello") -> "string"
$type(1) -> "number"
$type({}) -> "object"
$type([]) -> "array"
$type(null) -> "null"
```

### uppercase
Returns the uppercase version of a string

##### DQL
```bash
$uppercase($str: string) => string
```
##### Result
```bash
$uppercase("hello") -> "HELLO"
```

### uuid
Returns a unique ID (UUID version 4) as a string.

##### DQL
```bash
$uuid => string
```
##### Result
```bash
$uuid -> "503c5a9f-b8fb-402a-b0d7-fae17490bdf6"
```

## Array functions
### append
Returns a new array with a value appended (added) to an array.

##### DQL
```bash
$append($arr: array, $val: any) => array
```
##### Result
```bash
$append([1,2,3], [5,6]) -> [1,2,3,4,5,6]
$append([1,2,3], 5) -> [1,2,3,5]
```

### count
Returns the number of elements in an array.

##### DQL
```bash
$count($array) => number
```
##### Result
```bash
$count([1,2,3,4,5]) -> 5
$count([]) -> 0
```

### distinct
Returns a new array with the distinct elements of $arr with duplicates eliminated.

##### DQL
```bash
$distinct($arr: array) => array
```
##### Result
```bash
$distinct(["a", "b", "b", "c"]) -> ["a", "b", "c"]
```

### reverse
Returns a new array with the elements of an array in reverse order.

##### DQL
```bash
$reverse($arr: array) => array
```
##### Result
```bash
$reverse([1,2,3,4,5]) -> [5,4,3,2,1]
```

### shuffle
Returns a new array with the elements of an array in random order.

##### DQL
```bash
$shuffle($arr: array) => array
```
##### Result
```bash
$shuffle([1,2,3,4]) -> [3,1,4,2]
```

### sort
A higher-order function that sorts the elements of an array using the $swapFn function. The comparator function takes two arguments. If it returns true, the elements will be swapped.

##### DQL
```bash
$sort($arr: array, $swapFn: ($l, $r)) => boolean
```
##### Result
```
$sort([13,2,8,6,15], fn($l, $r) { '$l > $r' }) -> [2,6,8,13,15]
$sort([13,2,8,6,15], fn($l, $r) { '$l < $r' }) -> [15,13,8,6,2]
```

### zip
Takes two or more arrays and convolves (zips) each value from a set of arrays.

##### DQL
```bash
$zip($ar1:Array, $ar2:Array, $ar3;Array, ...) => Array
```
##### Result
```bash
$zip([1,2,3],[4,5,6]) -> [[1,4],[2,5],[3,6]]
```

## Numeric functions
### abs
Returns the absolute value of a number.

##### DQL
```bash
$abs(n:number) : number
```
##### Result
```bash
$abs(-1) -> 1
```
### acos
Returns the arc cosine of a number of radians. The result is between 0 and pi. The number must be between -1 and 1.

##### DQL
```bash
$acos($num: number) => number
```
##### Result
```bash
$acos(1) -> 0
```

### acosh
Returns the inverse hyperbolic cosine of a number, in radians. The number must be number between 1 and inf. The result is between 0 and inf.

##### DQL
```bash
$acosh($num: number) => number
```
##### Result
```bash
$acosh(1) -> 0
```

### asin
Returns the arc sine of a number of radians. The result is between -pi/2 and pi/2. The number must be between -1 and 1.

##### DQL
```bash
$asin($num: number) => number
```
##### Result
```bash
$asin(1) -> 1.5707963267948966
```

### asinh
Returns the inverse hyperbolic sine of a number, in radians. The result is between -inf and inf.

##### DQL
```bash
$asinh($num: number) => number
```
##### Result
```bash
$asinh(1) -> 1.5707963267948966
```

### atan
Returns the arc tangent of a number of radians. The result is between -pi/2 and pi/2.

##### DQL
```bash
$atan($num: number) => number
```
##### Result
```bash
$atan(1) -> 0.7853981633974483
```

### atanh
Returns the inverse hyperbolic tangent of a number, in radians. The number must be between -1 and 1. The result is between -inf and inf.

##### DQL
```bash
$atanh($num: number) => number
```
##### Result
```bash
$atanh(1) -> inf
```

### atan2
Returns atan(y / x), in radians. The result is between -pi and pi. The vector in the plane from the origin to point (x, y) makes this angle with the positive X axis. The signs of both inputs are known to it, so it can compute the correct quadrant for the angle. For example, atan(1) and atan2(1, 1) are both pi/4, but atan2(-1, -1) is -3*pi/4.

##### DQL
```bash
$atan2($x: number, $y: number) => number
```
##### Result
```bash
$atan2(-1, -1) -> -2.356194490192345
```

### cbrt
Returns the cube root of a number.

##### DQL
```bash
$cbrt($num: number) => number
```
##### Result
```bash
$cbrt(27) -> 3
```

### ceil
Returns the smallest integer greater than or equal to a number.

##### DQL
```bash
$ceil($num: number) => number
```
##### Result
```bash
$ceil(3.4) -> 4
```

### constant
Returns the constant value with the given name. For example: e, ln 2, log2 e, log10 e, pi or π.

##### DQL
```bash
$constant($name: string ) => number
```
##### Result
```bash
$constant('e') -> 2.718281828459045
```
### cos
Returns the cosine of a number of radians.

##### DQL
```bash
$cos($num: number) => number
```
##### Result
```bash
$cos(1) -> 0.5403023058681398
```

### cosh
Returns the hyperbolic cosine of a number of radians.

##### DQL
```bash
$cosh($num: number) => number
```
##### Result
```bash
$cosh(1) -> 1.5430806348152437
```

### exp
Returns e raised to the power of a number, where e = 2.718281… is the base of natural logarithms.

##### DQL
```bash
$exp($num: number) => number
```
##### Result
```bash
$exp(16) -> 8886110.520507872
```

### floor
Returns the largest integer less than or equal to a number.

##### DQL
```bash
$floor($num: number) => number
```
##### Result
```bash
$floor(3.4) -> 3
```

### formatBase
Converts a number to a string in the optional base number system, if a base is not supplied, base 10 is used to create the string.

##### DQL
```bash
$formatBase($num: number, $base?: number) => string
```
##### Result
```bash
$formatBase(100, 2) -> "1100100"
```

### isFinite
Returns true if the value input is not infinity, and false otherwise.

##### DQL
```bash
$isFinite( $num: number ) => number
```
##### Result
```bash
$isFinite(1) -> true
$isFinite(inf) -> false
```

### log
Returns the natural logarithm of a number (base e).

##### DQL
```bash
$log($num: number) => number
```
##### Result
```bash
$log(16) -> 2.772588722239781
```

### log10
Returns the base 10 logarithm of a number.

##### DQL
```bash
$log10($num: number) => number
```
##### Result
```bash
$log10(16) -> 1.2041199826559248
```

### log2
Returns the base 2 logarithm of a number.

##### DQL
```bash
$log2($num: number) => number
```
##### Result
```bash
$log2(16) -> 4
```

### number
Converts a value to a number.

##### DQL
```bash
$number($x: string | number | bool) => number
```
##### Result
```bash
$number("-0.05") -> -0.05
$number(false) -> 0
$number(true) -> 1
```

### power
Returns $num raised to the $exp power.

##### DQL
```bash
$power($num: number, $exp: number) => number
```
##### Result
```bash
$power(2, 3) -> 8
$power(3,4) -> 81
```

### round
Rounds a number to the optional precision number of decimal places. If precision is negative, then its value specifies which column to round to on the left side of the decimal place.

##### DQL
```bash
$round($num: number, $precision?: number) => number
```
##### Result
```bash
$round(123.456) -> 123
$round(123.456, 2) -> 123.46
$round(123.456, -1) -> 120
$round(123.456, -2) -> 100
$round(125, -1) -> 120
$round(125.456,-1) -> 130
```

### sin
Returns the sine of a number of radians.

##### DQL
```bash
$sin($num: number) => number
```
##### Result
```bash
$sin(1) -> 0.8414709848078965
```

### sinh
Returns the hyperbolic sine of a number of radians.

##### DQL
```bash
$sinh($num: number) => number
```
##### Result
```bash
$sinh(1) -> 1.1752011936438014
```

### sqrt
Returns the square root of a number.

##### DQL
```bash
$sqrt($num: number) => number
```
##### Result
```bash
$sqrt(16) -> 4
```

### tan
Returns the tangent of a number of radians.

##### DQL
```bash
$tan($num: number) => number
```
##### Result
```bash
$tan(1) -> 1.5574077246549023
```

### tanh
Returns the hyperbolic tangent of a number of radians.

##### DQL
```bash
$tanh($num: number) => number
```
##### Result
```bash
$tanh(1) -> 0.7615941559557649
```

## Date and time functions 

### afterDate
Returns true if $timestamp1 is after $timestamp2, false otherwise.

##### DQL
```bash
$afterDate($timestamp1: string |number, $timestamp2: string |number) => boolean
```
##### Result
```bash
$afterDate("2023-02-09", "2023-02-08") -> true $afterDate("2023-02-08", "2023-02-08") -> false
```

### beforeDate
Returns true if $timestamp1 is before $timestamp2, false otherwise.

##### DQL
```bash
$beforeDate($timestamp1: string |number, $timestamp2: string |number) => boolean
```
##### Result
```bash
$beforeDate("2023-02-07", "2023-02-08") -> true
$beforeDate("2023-02-08", "2023-02-08") -> false
```

### dateEquals
Returns true if the two timestamps are the same, false otherwise.

##### DQL
```bash
$dateEquals($timestamp1: string |number, $timestamp2: string |number) => boolean
```
##### Result
```bash
$dateEquals("2023-02-08", "2023-02-08") -> true
$dateEquals("2023-02-08", "2023-02-07") -> false
```

### datePlus
Adds a duration of type $units which can be one of ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"], to a $timestamp and returns the new timestamp. If $duration is less than zero, then it will be subtracted from the $timestamp.

##### DQL
```bash
$datePlus($timestamp1: string |number, $duration: number, $units, ) => number
```
##### Result
```bash
$datePlus("2023-02-07", 2, "days") -> 1675900800000
$datePlus("2023-02-07", 2, "months") -> 1680825600000
```

### day
Extracts the day from a timestamp and returns it as a number.

##### DQL
```bash
$day($timestamp: string |number) => number
```
##### Result
```bash
$day("2023-02-08") -> 8
```

### dayOfTheWeek
Returns the day of the week as a number [1=Monday, ... 6=Saturday, 7= Sunday].

##### DQL
```bash
$dayOfTheWeek($timestamp: string |number) => number
```
##### Result
```bash
$dayOftheWeek("2023-02-08") -> 3
$dayOftheWeek("2023-02-07") -> 2
```

### diffDate
Returns the difference between two timestamps in the units specified which can be one of ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].

##### DQL
```bash
$diffDate($timestamp1: string |number, $timestamp2: string |number, $units : string, ) => number
```
##### Result
```bash
$diffDate("2023-02-08", "2023-01-22", "days") -> 17
$diffDate("2023-02-08", "2023-01-22","hours") -> 408
```

### fromMillis
Converts a number of milliseconds since the epoch to a string. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards.

##### DQL
```bash
$fromMillis($val:number, $picture?: string) => string
```
##### Result
```bash
$fromMillis(1521801216617, "dd/M/yyyy") -> "23/3/2018"
$fromMillis(1522616700000, "E EEEE") -> "7 Sunday"
```

### hasSameDate
Returns true if the components specified in $units of the two timestamps are the same, false otherwise. $units is an array with one or more strings from ["years", "months", "days", "hours", "minutes", "seconds", "milliseconds"].

##### DQL
```bash
$hasSameDate($timestamp1: string |number, $timestamp2: string |number, units?: Array) => boolean
```
##### Result
```
$hasSameDate("23-02-08", "2019-02-08", ["month", "day"]) -> true
$hasSameDate("2023-02-01", "2023-02-08", ["month", "year"]) -> true
$hasSameDate("23-02-01", "2023-02-08", ["month", "year"]) -> true
$hasSameDate("2023-02-01T07:15:54.730Z", "2023-02-01T14:00:22.340Z", ["year","month", "day"]) -> true
```

### hours
Extracts the local hour component from a timestamp and returns it as a number.

##### DQL
```bash
$hours($timestamp: string |number) => number
```
##### Result
```bash
$hours("2023-02-08T07:56:14.747+00:00") -> 7
```

### milliSeconds
Extracts the milliseconds from a timestamp and returns it as a number.

##### DQL
```bash
>$milliSeconds($timestamp: string |number) => number
```
##### Result
```bash
$milliSeconds("2023-02-08T07:56:14.747+00:00") -> 747
```

### minutes
Extracts the minutes component from a timestamp and returns it as a number.

##### DQL
```bash
$minutes($timestamp: string |number) => number
```
##### Result
```bash
$minutes("2023-02-08T07:56:14.747+00:00") -> 56
```

### month
Extracts the month component from a timestamp.

##### DQL
```bash
$month($timestamp: string |number) => number
```
##### Result
```bash
$month("2023-02-08") -> 2
```

### seconds
Extracts the local seconds component from a timestamp and returns it as a number.

##### DQL
```bash
$seconds($timestamp: string |number) => number
```
##### Result
```bash
$seconds("2023-02-08T07:56:14.747+00:00") -> 14
```

### toMillis
Converts a string to a number of milliseconds since the epoch. $picture is optional, if not provided it will default to ISO format. Picture specs are as per Unicode date format standards.

##### DQL
```bash
$toMillis($val:string, $picture?: string) => number
```
##### Result
```bash
$toMillis("1970-01-01T00:00:00.001Z")  -> 1
$toMillis("2018-03-27", "yyyy-MM-dd") -> 1522108800000
$toMillis("21 August 2017", "dd MMMM yyyy") -> 1503273600000
```

### year
Extracts the year component from a timestamp and returns it as a number.

##### DQL
```bash
$year($timestamp: string |number) => number
```
##### Result
```bash
$year("2023-02-08T07:56:14.747+00:00") -> 2023
```
