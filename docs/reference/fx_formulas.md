---
sidebar_position: 48
---

import Thumbnail from '@site/src/components/Thumbnail';


# Fx formulas

:::info This is Info

This article lists down all Custom Supported Functions implemented for DronaHQ.

:::

## DATESTR

This is a custom function that converts date (Unix format) to readable date format, say, 29/Apr/2019. 

### Definition

 DATESTR(date,format,isLocalTime)
`isLocalTime` is an optional parameter.

### Example 1

```js
 DATESTR(TODAY(),"MM/DD/YYYY")
 ```

`Output`

> 12/12/2019

### Example 2

```js
 DATESTR(datepicker,"DD YYYY")
```

### Concept

This is a custom function that converts date (Unix format) to readable date format, say, 29/Apr/2019.

**Syntax** - **DATESTR(date,format,isLocalTime)**

where 
* `date` is a UNIX date
* `format` can be any of the following keywords - 

    `dddd` will return Monday <br/>
    `ddd` will return Mon <br/>
    `dd` will return Mo <br/>
    `d` will return 1 <br/>
    `DD` will return 29 <br/>
    `MM` will return 04 <br/>
    `M` will return 4 <br/>
    `MMM` will return Apr <br/>
    `MMMM` will return April <br/>
    `YY` will return 19 <br/>
    `YYYY` will return 2019 <br/>
    `MM/DD/YYYY` will return 04/29/2019 <br/>
    `HH` will return hour in 24hr format - 17 <br/>
    `hh` will return hour in 12hr format - 5 <br/>
    `hh:mm:ss` will return Hour:Minutes:Seconds in 12hr format <br/>
    `hh:mm:ss a` will return Hour:Minutes:Seconds am/pm in 12hr format. You can also put ` A ` instead of ` a ` to show AM/PM instead of am/pm respectively. <br/>

* `isLocalTime`: is enabled or disabled to specify the output to be formatted to local time. Default output time is UTC.

#### Example -

Let's say, we input date from a Date Picker control (unique name - datepicker) and use the DATESTR() in another control, say Text, then the formula will be -

```js
DATESTR(datepicker,"MM/DD/YYYY")
```js

The output will be `04/29/2019` , when date selected in Date Picker is 29th April 2019.

Let's say, we input time from a DateTime Picker control (unique name - datetimepicker) and use the DATESTR() in another control, say Text, then the formula will be  written to get time for the local time zone as:

```js
DATESTR(datetimepicker,"DD-MM-YYYY HH:mm" , 1)
```

<figure>
  <Thumbnail src="/img/reference/fx-formulas/date-str-local.jpeg" alt="Date in Local Timezone" />
  <figcaption><i>Date in Local Timezone</i></figcaption>
</figure>

The same without the local time zone would be written as

```js
DATESTR(datetimepicker,"DD-MM-YYYY HH:mm" , 0)
```

<figure>
  <Thumbnail src="/img/reference/fx-formulas/date-str-utc.jpeg" alt="Date in UTC Timezone" />
  <figcaption><i>Date in UTC Timezone</i></figcaption>
</figure>

Here as the time zone is disabled the output is in the UTC.



## STRTODATE

This function converts String date to Date object similar to TODAY() function. 

### Definition

 STRTODATE(strDate,format)

Where,
`strDate` - Date in string format
`format` - Given String date's format

### Example 1

```js
STRTODATE("03-12-2019 17:30","DD-MM-YYYY HH:mm")
```

`Output`

> 2019-12-02T18:30:00.000Z

For More Info on Format - Refer [here](/reference_fx_formulas/#concept)

## STRTOUNIX

This function converts string date to Unix timestamp.

### Definition

 STRTOUNIX(strDate,format)

Where,
strDate - Date in string format
format - Given String date's format

### Example 1

```js
STRTOUNIX("03-12-2019 17:30","DD-MM-YYYY HH:mm")
```

`Output`

> 1575394200000

### Example 2

```js
STRTOUNIX("03-12-2019","DD-MM-YYYY")
```

`Output`

> 1575331200000


For More Info on Format - Refer [here](/reference_fx_formulas/#concept)

## TIMEOFFSET

This function provides Time zone offset in milliseconds. This can either positive or negative based on the device's timezone

### Definition

TIMEOFFSET()

### Example 1

```js
TIMEOFFSET()
```

`Output for GMT -5:30`

> 19800000

`Output for GMT +5:30`

> -19800000

## DATEDIF

Calculates the number of days, months, or years between two dates.

### Definition

 DATEDIF(start_date,end_date,unit)

Where, **unit** is "D" which returns the number of days in the period.

### Example 1

Let's assume, you have two date controls (datepicker and datepicker1) on the screen. If you try the below formula in another control for e.g numeric or text control, the output function is defined as follows.

```js
DATEDIF( datepicker , datepicker1 , "D")
```

which would then return the difference in days between the dates.

### Example 2

```js
    DATEDIF(TODAY(), "09/09/2020", "D")
```

Assuming TODAY() is 23- July-2020) the output will be 47 days.

## TIMESTR

This is a custom function that converts date (Unix format) to readable time format, say, 09:58 PM.

### Definition

 TIMESTR(date,format,isLocalTime)
`isLocalTime` is an optional parameter. If isLocalTime is enabled you would get the time as the Local time. By default it is UTC.

### Example

With `isTimeLocal` disabled
```js
TIMESTR(NOW()," HH:mm", 0) 
```

`Output`

>  07:58

With `isTimeLocal` enabled
```js
TIMESTR(NOW()," HH:mm", 1) 
```

`Output`

>  13:29 for IST


## STRING

It is used to convert NUMBER TO TEXT. This function takes a Number OR Array of Numbers as Input and gives a String OR Array of Strings as Output. Basically this is useful when you have a NUMBER and you want to apply some function on it which is applicable to TEXT type but not applicable to NUMBER type. For example. - CONCATENATE() function is available for TEXT type but not available for NUMBER.

### Definition

```js
 STRING(number)

 STRING([number1, number2, number 3, ....])
```

### Example 1

```js
STRING(1)
```

`Output`

> "1"

### Example 2

```js
STRING([1,2])
```

`Output`

> ["1","2"]


## NUMBER
It is used to convert TEXT TO NUMBER. This function takes a Text OR Array of Texts as Input and gives a Number OR Array of Numbers as Output. Basically this is useful when you have a TEXT and you want to apply some function on it which is applicable to NUMBER type but not applicable to TEXT type. For example. - SUM() function is available for NUMBER type but not available for TEXT.

### Definition

```js
    NUMBER(text)

    NUMBER([text1, text2, text 3, ....])
```

### Example 1

```js
NUMBER("1")
```

`Output`

> 1

### Example 2

```js
NUMBER(["1","2"])
```

`Output`

> [1,2]

## SELECT

Based on the Given Index, return a value from provided list of values as an array as the second parameter or from a list of parameters. Index values start from 1

### Definition

```js
    SELECT(val1,val2,....,valn, index)
    
    SELECT([val1,val2,....,valn], index)
```

### Example 1

```js
    SELECT("A","B","C", 2)
```

`Output`

```js
B

### Example 2

```js
SELECT(["A","B","C"], 2)
```

`Output`

> B

## SELECTANY

This function gives one random value between the input entered. This function accepts an integer, string, array, and values separated by a comma.

### Definition

```js
    SELECTANY(val1,val2,....,valn)
    
    SELECTANY([val1,val2,....,valn])
```

### Example 1

```js
SELECTANY("A","B","C")
```

`Output`

> B

### Example 2

```js
SELECTANY(["A","B","C"])
```

`Output`

> A




## INDEX

It is used to get Index of an Item in an Array. Useful to search an item in an Array and get its index. Index starts from 1.

### Definition

```js
INDEX([text1, text2, text 3, ....], textToFind)
```

### Example 1

```js
INDEX(["A","B","C","D"],"B")
```

`Output`

> 2



## INDEXVALUE

It is used to get Item in an Array for a given Index. Index starts from 1.

### Definition

```js
 INDEXVALUE([text1, text2, text 3, ....], indexNumber)
```

### Example 1

```js
INDEXVALUE(["A","B","C","D","E"],2)
```

`Output`

> B



## UNIQUEOBJECTS

It is used to get Unique values based on the given Column Index. In the case of Duplicate Column values for the given index, the first value will be returned, and rest all duplicates will be filtered out. ColumnIndexNumber starts at 1.

### Definition

```js
 UNIQUEOBJECTS([column1, column2, column3, ....], ColumnIndexNumber)
 ```

### Example 1

```js
UNIQUEOBJECTS(LOOKUP([ProfileViews.unique_id,ProfileViews.Name]),2)
```

`Output`

```json
[{"unique_id":1,"Name":"Fenil"},{"unique_id":2,"Name":"Ramanuj"},{"unique_id":3,"Name":"Divyesh D"},{"unique_id":4,"Name":"Rishabh"},{"unique_id":5,"Name":"Rahul G"},{"unique_id":6,"Name":"Brijesh"},{"unique_id":7,"Name":"Ronak"},{"unique_id":8,"Name":"Luv"}]
```


## CONCATENATE

Is used to join two or more strings or values from controls.
### Definition

```js
CONCATENATE( text1, [text2], ...)
```

### Example

```js
CONCATENATE("DRONA", "HQ", " Welcomes", " You!!")
```

`Output:`

> DRONAHQ Welcomes You!!

## MERGE

It is used to Merge Multiple Arrays into a single array. It can also be used to merge individuals items into a single array.

### Definition

```js
    MERGE([item1, item2, item3, ....], [item4, item5, item6, ....])
    
    MERGE(item1, item2, item3, ...)

    MERGE([item1, item2, item3, ....], item4, item5, ...)
```

### Example 1

```js
MERGE( [2,3, 5],[2,4,5])
```

`Output`

> [2,3,5,2,4,5]

### Example 2

```js
MERGE(2,3,5)
```

`Output`

> [2,3,5]

### Example 3

```js
MERGE([2,3,5],7,8,9)
```

`Output`

> [2,3,5,7,8,9]



## FLATTEN

It is used to Flatten Array of Multiple Arrays into a single array.  It works with LOOKUP of Multiselect Column of the sheet.

### Definition

```js
    FLATTEN( [ array1, array2, .... ] )

    FLATTEN(LOOKUP([AllColumnTypes.Multiselect]))
```

### Example 1

```js
FLATTEN([[2,3,5],[2,4,5]])
```

`Output`

> [2,3,5,2,4,5]

### Example 2

```js
FLATTEN( LOOKUP([Candidate_details_doc.Grade])) assuming that the Grade column in the sheet has values [A,B,C]
```

`Output`

> [A,B,C]



## UNIQUEIDGENERATOR

It is used to generate a UNIQUE ID. You can also optionally pass USERID as a parameter to this function, in both cases, a unique id will be generated.
You can also give an Array as an Input and the output will be an Array of Unique IDs.
UserID can be Number or Alphabets.

### Definition

```js
    UNIQUEIDGENERATOR()
  
    UNIQUEIDGENERATOR(userID)

    UNIQUEIDGENERATOR( [userID1, userID2, .... ] )
```

### Example 1

```js
UNIQUEIDGENERATOR()
```

`Output`

> 507-829-228-1ds9u81ea

### Example 2

```js
UNIQUEIDGENERATOR("ABC")
```

`Output`

> ABC-903-506-1ds9ua9o0

### Example 3

```js
UNIQUEIDGENERATOR(["AB", "CD"])
```

`Output`

> ["AB-549-438-1ds9uc0e7","CD-948-641-1ds9uc0e7"]



## RANGE

Given two numbers this function will return the integers between these two values entered

### Definition

```js
 RANGE(number1,number2)
```

### Example

```js
RANGE(5,10)
```

`Output`

> [5,6,7,8,9,10]



## UNIXTIME

EXCEL TIME TO UNIX TIME CONVERTER. This function will convert Given Excel time and give Unix time as a result.
It also accepts optional Default value in case of incorrect ExcelTime is given as Input. This Function can also Accept Array of Excel time and give an array of Unix time as output. You can also choose the Input and Output Format in an optional parameter.

` Unix time is calculated from 1 Jan 1970. Excel time is calculated from 1, Jan 1900.  

### Definition

```js
    1. UNIXTIME(ExcelTime)
    2. UNIXTIME(ExcelTime,defaultInputTime)
    3. UNIXTIME(ExcelTime,defaultInputTime,InputFormat, OutputFormat)
    4. UNIXTIME( [ ExcelTime1, ExcelTime2, ...] )
    5. UNIXTIME( [ ExcelTime1, ExcelTime2, ...] , defaultInputTime)
    6. UNIXTIME( [ ExcelTime1, ExcelTime2,...],defaultInputTime, InputFormat, OutputFormat)
```

Where,

`defaultInputTime` must be greater than or equal to 25569 and will be used in case of invalid Exceltime. `defaultInputTime format will be same as InputFormat`

`Input Format & OutputFormat` can be any one of the below -
"m"  => milliseconds
"s" => seconds
"d" => days
If no Input/Output format is given it will consider being default Input/Output format.
Default Input => "d" (days)
Default Output => "m" (milliseconds)*

### Example 1

```js
UNIXTIME(25571)
```

`Output`

> 172800000

### Example 2

```js
UNIXTIME(255, 25569)
```

`Output`

> 0

### Example 3

```js
UNIXTIME(25571, 25569, "d","d")
```

`Output`

> 2

### Example 4

```js
UNIXTIME([25571,25575, 255], 25569, "d","d")
```

`Output`

> [2,6,0]



## EXCELTIME

UNIX TIME TO EXCEL TIME CONVERTER. This will convert Given Unix time in milliseconds and give Excel time in days as a result.
It also accepts optional Default value in case of incorrect UnixTime is given as Input. This Function can also Accept Array of Unix time and give an array of Excel time as output. You can also choose the Input and Output Format in an optional parameter.

` Unix time is calculated from 1 Jan 1970. Excel time is calculated from 1, Jan 1900.  

### Definition

```js
    1. EXCELTIME(UnixTime)
    2. EXCELTIME(UnixTime,defaultInputTime)
    3. EXCELTIME(UnixTime,defaultInputTime,InputFormat, OutputFormat)
    4. EXCELTIME( [ UnixTime1, UnixTime2, ...] )
    5. EXCELTIME( [ UnixTime1, UnixTime2, ...] , defaultInputTime)
    6. EXCELTIME( [ UnixTime1, UnixTime2,...],defaultInputTime, InputFormat, OutputFormat)
```

Where,

`defaultInputTime` will be used in case of invalid Unixtime. `defaultInputTime format will be same as InputFormat`

`Input Format & OutputFormat` can be any one of the below -
"m"  => milliseconds
"s" => seconds
"d" => days
If no Input/Output format is given it will consider being default Input/Output format.
Default Input => "m" (milliseconds)*
Default Output => "d" (days) 

### Example 1

```js
EXCELTIME(172800000)
```

`Output`

> 25571

### Example 2

```js
EXCELTIME(-1,1)
```

`Output`

> 25569.000000011572

### Example 3

```js
EXCELTIME(2, 0, "d","d")
```

`Output`

> 25571

### Example 4

```js
EXCELTIME([2,6,0], 0, "d","d")
```

`Output`

> [25571,25575,25569]



## DISTANCE

This function is useful to find the distance(in Metre) between two given points i.e, destination location and source location with their ( Latitude, Longitude Values) in a CSV format i,e, (lat, long). It also accepts optional default distance parameter, which is returned in case there is an error is occurred for given source & destination Location.

### Definition

```js
    1. DISTANCE(destinationLocation,sourceLocation)
    2. DISTANCE(destinationLocation, sourceLocation, defaultDistance)
    3. DISTANCE([destinationLocation1,destinationLocation2,...],sourceLocation)
    4. DISTANCE([destinationLocation1,...],sourceLocation, defaultDistance)
```

### Example 1

```js
DISTANCE( "45.7458,74.9864" , "40.7486,-73.9864")
```

`Output`

> 9915192.888361111

### Example 2

```js
DISTANCE( ["45.7458,74.9864","45.64,74.88"], "40.7486,-73.9864")
```

`Output`

> [9915192.888361111,9922787.743762657]

### Example 3

```js
DISTANCE( ["45.7458","45.64,74.88"], "40.7486,-73.9864",100)
```

`Output`

> [100,9922787.743762657]



## ISPLACENEARBY

It is used to check whether the distance between the source and destination location is within the given distance. It also accepts multiple destinations to check whether the given source in within a given distance or not. This function has an optional input unit which basically denotes the distance format. If no input unit is specified, it will by default consider the given distance is in meters.

### Definition

```js
1. ISPLACENEARBY(destinationLocation,sourceLocation, distance)
2. ISPLACENEARBY(destinationLocation,sourceLocation, distance, inputUnit)
3. ISPLACENEARBY([destinationLocation1, ...],sourceLocation, distance)
4. ISPLACENEARBY([destinationLocation1, ...],sourceLocation, distance, inputUnit)
```

Where inputUnit can be any one of the below -
"m"  => meters
"km" => Kilometers
"miles" => miles

### Example 1

```js
ISPLACENEARBY("70.5,80.5","10.5,20.5",10000000)
```

`Output`

> true

### Example 2

```js
ISPLACENEARBY("70.5,80.5","10.5,20.5",10000,"km")
```

`Output`

> true

### Example 3

```js
ISPLACENEARBY(["70.5,80.5","10.5,25.5","11.5,21.5"],"10.5,20.5",1000, "km")
```

`Output`

> [false,true,true]



## PLACESNEARBY

This function returns those destinations location pairs that are within the distance from the source location. This function has an optional input unit which basically denotes the distance format. If no input unit is specified, it will by default consider the given distance is in meters.

### Definition

```js
    1. PLACESNEARBY(destinationLocation,sourceLocation, distance)
    2. PLACESNEARBY(destinationLocation,sourceLocation, distance, inputUnit)
    3. PLACESNEARBY([destinationLocation1, ...],sourceLocation, distance)
    4. PLACESNEARBY([destinationLocation1, ...],sourceLocation, distance, inputUnit)
```

Where inputUnit can be any one of the below -
"m"  => meters
"km" => Kilometers
"miles" => miles

### Example 1

```js
PLACESNEARBY("70.5,80.5","10.5,20.5",10000000)
```

`Output`

> ["70.5,80.5"]

### Example 2

```js
PLACESNEARBY("70.5,80.5","10.5,20.5",10000,"km")
```

`Output`

> ["70.5,80.5"]

### Example 3

```js
PLACESNEARBY(["70.5,80.5","10.5,25.5","11.5,21.5"],"10.5,20.5",1000, "km")
```

`Output`

> ["10.5,25.5","11.5,21.5"]



## LEFTJOIN

Perform Left Join on given two tables (Sheets) with LOOKUP/DLOOKUP formula. This works similar to the left join in SQL. This function has the first 4 required parameters, which are - 

1. LOOKUP/DLOOKUP for sheet 1, 

2. LOOKUP/DLOOKUP for sheet 2
3. Key Name for comparison from sheet 1
4. Key Name for comparison from sheet 2.

It also has 3 optional parameters after above first 4, which are: 

1. MODE: This is a number type and it applies only to the key1 & key2 used for comparison

2. ORDERBY: This is a string type that accepts the column name according to which ordering/sorting should be done
3. ORDERBYTYPE: This is a string that accepts "ASC"/"DESC", means ORDERBY can be done in ascending/descending order.

### Definition

```js
1. LEFTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2")
2. LEFTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE)
3. LEFTJOIN( LOOKUP(sheet1),LOOKUP(sheet2),"key1","key2", MODE,ORDERBY)
4. LEFTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE, ORDERBY, ORDERBYTYPE)
```

Where Mode can be 1 of the below 4 values,
1 => Include key1 of sheet1 from the comparison and do not include key2
2 => Include key2 of sheet2 from the comparison and do not include key1
3 => Include both key1 & key2 of sheet1 and sheet2 from the comparison
4 => Do not include oth key1 & key2. This is useful if you do not want the internal keys which you used in comparison in your response/output

Note: If no MODE is present, by default 3 is selected

### Example 1

```js
LEFTJOIN(LOOKUP( [employee.emp_name,employee.dep_id AS "DEP1"]) ,LOOKUP( [department.dep_id AS "DEP2",department.dep_name]) , "DEP1" , "DEP2")
```

`Output`

```json
[{"emp_name":"Alice","DEP1":12,"DEP2":12,"dep_name":"Sales"},{"emp_name":"Dan","DEP1":14,"DEP2":14,"dep_name":"Engineering"}]
```

### Example 2

```js
LEFTJOIN(LOOKUP( [employee.emp_name,employee.dep_id AS "DEP1"]) ,LOOKUP( [department.dep_id AS "DEP2",department.dep_name]) , "DEP1" , "DEP2"),1,"DEP1","DESC")
```

`Output`

```json
[{"emp_name":"Dan","DEP1":14,"dep_name":"Engineering"},{"emp_name":"Alice","DEP1":12,"dep_name":"Sales"}]
```



## RIGHTJOIN

Perform Right Join on given two tables (Sheets) with LOOKUP/DLOOKUP formula. This works similar to the right join in SQL.  

### Definition

```js
1. RIGHTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2")
2. RIGHTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE)
3. RIGHTJOIN( LOOKUP(sheet1),LOOKUP(sheet2),"key1","key2", MODE,ORDERBY)
4. RIGHTJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE, ORDERBY, ORDERBYTYPE)
```

Note: All parameters of this function is the same as LEFTJOIN function described above. Please refer to LEFTJOIN Definition & Examples section for more details.



## FULLJOIN

Perform Full Join on given two tables (Sheets) with LOOKUP/DLOOKUP formula. This works similar to the full join in SQL.  

### Definition

```js
1. FULLJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2")
2. FULLJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE)
3. FULLJOIN( LOOKUP(sheet1),LOOKUP(sheet2),"key1","key2", MODE,ORDERBY)
4. FULLJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE, ORDERBY, ORDERBYTYPE)
```

Note:  All parameters of this function is the same as LEFTJOIN function described above. Please refer LEFTJOIN Defintion & Examples section for more details.



## INNERJOIN

Perform Inner Join on given two tables (Sheets) with LOOKUP/DLOOKUP formula. This works similar to the inner join in SQL.  

### Definition

```js
1. INNERJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2")
2. INNERJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE)
3. INNERJOIN( LOOKUP(sheet1),LOOKUP(sheet2),"key1","key2", MODE,ORDERBY)
4. FULLJOIN( LOOKUP(sheet1), LOOKUP(sheet2), "key1", "key2", MODE, ORDERBY, ORDERBYTYPE)
```

`Note` - All parameters of this function is the same as LEFTJOIN function described above. Please refer LEFTJOIN Defintion & Examples section for more details.



## SETTOKV

Using this function data can be set to KV storage (key Value storage) which is a persistent data store. 

### Definition

```js
 SETTOKV(key,value)
SETTOKV(key,value, isGlobal, isWritable) 
```

Where -
key - Specific string with which you can store or access data
value - represents your data
global - Either `0` OR `1` , Set to `1` if you want this key to be accessible by other MicroApps
isWritable - Either `0` OR `1` , Set to `1` if you want this key to be editable by other MicroApps

`Note` - This function doesn't work as expected in Preview but will work on Client Apps after it is published

### Example 1

```js
SETTOKV("UserOpen","Value to Save")
```

`Output`

> ""

### Example 2

```js
SETTOKV("SharedKey","Value to Save", 1, 1)
```

`Output`

> ""



## GETFROMKV

Using this function data can be get from KV storage (key Value storage) which is a persistent data store. This will get data from KV storage using the key which was used during SETTOKV function. This function doesn't work in Preview but will work on Client Apps after it is published

### Definition

 GETFROMKV(key)
GETFROMKV(key, isGlobal) 

Where -
key - Specific string with which you have stored the data using SETTOKV
isGlobal - Either `0` OR `1` , Set to `1` if you want the key's value which was SETTOKV using isGlobal as 1

`Note` - This function doesn't work as expected in Preview but will work on Client Apps after it is published

### Example 1

```js
GETFROMKV("UserOpen")
```

`Output`

> "Value to Save"

### Example 2

```js
GETFROMKV("SharedKey",1)
```

`Output`

> "Value to Save"



## DELETEFROMKV

Using this function you can delete data stored in KV storage  (key Value storage) with a specific key which was used to store data using SETTOKV function. 

### Definition

```js
DELETEFROMKV(key)
    
DELETEFROMKV(key, isGlobal) 
```

Where -
key - Specific string with which you have stored the data using SETTOKV
isGlobal - Either `0` OR `1` , Set to `1` if you want the key's value which was SETTOKV using isGlobal as 1

`Note` - This function doesn't work as expected in Preview but will work on Client Apps after it is published

### Example 1

```js
DELETEFROMKV("UserOpen")
```

`Output`

> ""

### Example 2

```js
DELETEFROMKV("SharedKey",1)
```

`Output`

> ""


## CLEARKV

Using this function you can clear all data from KV storage  (key Value storage). 

### Definition

```js
 CLEARKV()
```

`Note` - This function doesn't work as expected in Preview but will work on Client Apps after it is published

### Example

```js
CLEARKV()
```

`Output`

""

## MAPKEYS

Is used for mapping the keys to the new key names and displaying them likewise. It is further useful to change the order of the fetched columns.

### Definition

```js
MAPKEYS([ArrayOfJsonobjects.Key1,ArrayOfJsonobjects.Key2,…],"newkeyname1,newkeyname2,…")

OR

MAPKEYS([ArrayOfJsonobjects.Key1,ArrayOfJsonobjects.Key2,…],"newkeyname1:Key1,newkeyname2:Key2,…")

OR

MAPKEYS([ArrayOfJsonobjects.Key1,ArrayOfJsonobjects.Key2,…],"Key1 AS newkeyname1, Key2 AS newkeyname2, …")
```

Where,

* `Newkeyname<1>:`  is the new label assigned to the respective key
* `Key<1>:`  is the default key name or label of the respective header of the populated columns from any source

The columns would be displayed in the order specified when defining the keynames.

### Example 1

```js
MAPKEYS( LOOKUP([Prod_depend_Doc.Prod_ID,Prod_depend_Doc.Prod_name,Prod_depend_Doc.Quantity,Prod_depend_Doc.Price]) , "Prod_name AS ProductName , Quantity AS Qty, Price AS CostPrice, Prod_ID AS ProductID")
```

where -
`AS` is used to define the new keyname and the order of columns has been changed as well. 


## FILTER

This is used to fetch data from a data store and provide  filtered data from that data store. The FILTER function is ideally used with the list controls like TableGrid and Detail view.

### Definition

```js
FILTER([datastore.columnname1, datastore.columnname2,…], Filter or Condition, Sort column,Order)
```

Where,
* [datastore](/reference/controls/data-store-control) : is the name of the datastore created earlier to fetch data from a sheet or API.
* `Columnname` : is the column whose data is to be fetched.
  * In case you need to fetch data from more than one column, then add the list of columns within the square [ ] brackets separated by comma as [datastore.columnname1,datastore.columnname2]
* Filter:  is the filter format to fetch data from the column.

### Filter Truth Table
<figure>
  <Thumbnail src="/img/reference/fx-formulas/filter-truth-table.png" alt="Filter Truth Table" />
  <figcaption><i>Filter Truth Table</i></figcaption>
</figure>


### Example

```js
FILTER ([prod_datastore.result.rows.name, prod_datastore.result.rows.author_id] , prod_datastore.result.rows.author_id > 6,prod_datastore.result.rows.name, “DESC”)
```

For More Info on using the funtion  - Refer the [article here](https://community.dronahq.com/t/using-the-filter-function).


## BINDAPI

The `BINDAPI()` function is used to fetch data from a connector data source and bind it to a control. Also you can optionally filter data and sort fetched data in ascending or descending order.

### Definition

```js
BINDAPI([connectorname.result.rows.columnname1, connectorname.result.rows.columnname2,…], Filter Condition, Sort column,Order)

Where,
* `Connectorname.result.rows.columnname`: is the column whose data is to be fetched.
  * In case you need to fetch data from more than one column, then add the list of columns within the square [ ] brackets separated by comma as [Connectorname.result.rows.columnname1,Connectorname.result.rows.columnname2]
* `[Filter](/reference_fx_formulas/#filter-truth-table)`: is the filter format to fetch data from the column. There are three components as Columns to be filtered, filter[ operator](https://intercom.help/dronahq-studio/formula/supported-operators-and-keywords/how-to-use-operators) & filter criteria. In case you need to state multiple filters you can use AND (for all filter criteria match) or OR (for any one of the filter criteria match).
  * The condition will be taken as datastore.columnname1=""

The parameters mentioned below are optional:

* `Sorting`: is used to sort the result set on the basis of the column specified.
* `Order`: is the order in which you want to sort the data fetched from the sheet. It can have value either ASC or DESC which needs to be put within double quotes “”.

`Important Note:` Filter and Sorting happen at the client-side once we get the result from API.

### Example

```js
BINDAPI( [userlist.members.id,userlist.members.name,userlist.members.profile.email])


BINDAPI( [AuthorMongoDB.result.rows.author_id,AuthorMongoDB.result.rows.name,AuthorMongoDB.result.rows.last_name], AuthorMongoDB.result.rows.name $cn “A”, AuthorMongoDB.result.rows.last_name, “DESC”)
```

For More Info on using the funtion  - Refer the `[article here](https://community.dronahq.com/t/using-the-bindapi-function)`.


## STRINGTOJSON

When you have a string JSON, for example in scenarios where the server returns JSON as strings, you can make use of this function to convert the string to a JSON.

### Definition

```js
STRINGTOJSON(string JSON)
```

Where,

* `String JSON` : is a valid JSON of type String

The function will parse the JSON column data of a single row only.

### Example

```js
STRINGTOJSON(LOOKUP([sheet.jsonColumn],sheet.unique_id=12))
```

This will result into the LOOKUP fetching the String column from the Sheet where the Unique Id is 12 and returning it as a JSON.

## MERGEJSON

The MERGEJSON function allows you to parse the data from multiple rows of a JSON column. The JSON column would contain an array of objects.

### Definition

```js
 MERGEJSON(LOOKUP([sheet.jsonColumn]))
```

Where,
* `sheet`: is the sheet that contains a JSON column
* `jsonColumn`: is the column that contains an array of objects.

### Example

```js
 MERGEJSON( LOOKUP([Prod_depend_Doc.json_array]))
```

returns an array of JSON objects.

For More Info on using the funtion  - Refer the `[article here](https://community.dronahq.com/t/using-mergejson-function)`.

## GETKEYVALUE

When you need to get only the value from a specific key typically where key-value pairs are returned, you can use the `GETKEYVALUE` function.

### Definition

```js
 GETKEYVALUE(object, “keyname”)
```

Where,

* `object`: is the JSON object from where the value is to be fetched.
* `Keyname`: is the default key name or label of the JSON object.

### Example

```js
 GETKEYVALUE( STRINGTOJSON( LOOKUP([Prod_depend_Doc.json_object] , Prod_depend_Doc.unique_id = 1)) , “name”)
```

returns the value in the “name” key i.e. John in this case.

For More Info on using the funtion - Refer the `[article here](https://community.dronahq.com/t/using-getkeyvalue-function)`.

## ARRAYTOCSV

The ARRAYTOCSV function converts your array data into comma-separated values .

### Definition

```js
 `ARRAYTOCSV`(ArrayValue)
```

Where,

* ArrayValue is an array input.

### Example

```js
 ARRAYTOCSV(array[“a”,“b”,“c”] )
```

Will result into: a,b,c

### Concept

This is typically useful for cases like where you want to send Slack Message as a sprint and not as a list of items, then in that case you can make use of the function. At times you may want to add or update the record as a string and not an array for the respective column in databases like those in MySQL, MongoDB and so on. Then in that scenario converting your array to a CSV is always beneficial.

Let us take a simple example here to select cities from a checkbox control and view the data in a text control. We have enabled Show Raw data in this case. Now note the output on selection of multiple cities. It is an array that is returned here.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/array-to-csv-ui.png" alt="Multiselect UI for Array output" />
  <figcaption><i>Multiselect UI for Array output</i></figcaption>
</figure>

Let us add an **Action flow** to show the string as a Popup. Add a compute block to the action flow. To the variable assign the value returned by ARRAYTOCSV. Use keywords and display the value in the Popup. 

Formula: In this example, we are using the **citiesvisited ** which returns the selected options of checkbox control.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/array-to-csv-fx.png" alt="ARRAYTOCSV Fx configured" />
  <figcaption><i>ARRAYTOCSV Fx configured</i></figcaption>
</figure>

Now if you take a preview of the form note the output in the popup block where we used the variable in the Message field.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/array-to-csv-output.png" alt="ARRAYTOCSV Fx result" />
  <figcaption><i>ARRAYTOCSV Fx result</i></figcaption>
</figure>

## SHOWDETAILS

This is used to show the details from the selected row of the TableGrid control. It displays the selected data from TableGrid in Detail View control. The value returned by the function is a JSON array with the dynamic keys provided in the function.

### Definition

```js
 SHOWDETAILS(“newkey1”, tablegrid.columnname1,”newkey2”, tablegrid.columnname2)
```

Where,

* `Newkey<1>:` is the new label assigned to the respective key
* `tablegrid.columnname<1>`: is the specific column from the tablegrid control.

Here you can also change the order in which the keys appear. So the records will be displayed in the order in which you added the new keys.

### Example

```js
 SHOWDETAILS(“name”, tableGrid.name, “id”, tableGrid.id)
```

### Concept

Usually, the order of the keys or columns would be the same as the order in which you have fetched them. However, if you want to reorder it when displaying data in the Detail view control, you can change the order in the SHOWDETAILS function and the data would be presented accordingly.

Now let us fetch the data from a Database connector in a table grid control.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/showdetails-tablegrid.jpeg" alt="Tablegrid Control" />
  <figcaption align = "center"><i>Tablegrid Control</i></figcaption>
</figure>

Then add a Detail view control. In the **Custom formula** of the detail view control, add the SHOWDETAILS function using the above syntax.


<figure>
  <Thumbnail src="/img/reference/fx-formulas/showdetails-detailview.jpeg" alt="SHOWDETAILS Fx configured" />
  <figcaption align = "center"><i>SHOWDETAILS Fx configured</i></figcaption>
</figure>

Now if we take a preview and select a row from the tablegrid, the same would be displayed in the **Detail view** control.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/showdetails-result.jpeg" alt="SHOWDETAILS Fx result" />
  <figcaption align = "center"><i>SHOWDETAILS Fx result</i></figcaption>
</figure>

## ESCAPEDOUBLEQUOTE

The `ESCAPEDOUBLEQUOTE` function helps you to ignore the double quotes that are typically present in JSON type data returned by the server or by advanced controls like Form Repeat control, Summary control, and so on.

### Definition

```js
 ESCAPEDOUBLEQUOTE(string/text/json value)
```

Where,

* `<string/text/json value>`: is the JSON value returned by APIs or control selections

### Example

```js
 ESCAPEDOUBLEQUOTE( [{“productname2”:“Laptop”,“quantity1”:101}])
```

returns

```json
 [{"productname2":"Laptop","quantity1":101}]
```

### Concept

Now let us take an example to insert data into a MySQL database from the form. There would be multiple rows of data to be inserted using the Form repeat control. The form repeat control will return JSON type of output. So the data sent to the insert statement would be as JSON data containing the double-quotes.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/escape-single-quote-sql-query.png" alt="SQL Query" />
  <figcaption align = "center"><i>SQL  Query</i></figcaption>
</figure>

In this case that may lead to an error in the Insert query.

Thus we will use the Compute task to escape or ignore the double-quotes.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/escape-double-quote-compute.png" alt="ESCAPEDOUBLEQUOTE Fx Configured" />
  <figcaption align = "center"><i>ESCAPEDOUBLEQUOTE Fx Configured</i></figcaption>
</figure>



Now for the Insert query for MySQL database, the Product name thus derived would be sent as a dynamic value. In this example, the Price is also a dynamic value for the repeated rows.

The connector would be configured as seen below with the Insert query fields passed accordingly.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/escape-double-quote-config.png" alt="ESCAPEDOUBLEQUOTE Output Used in Connector Call" />
  <figcaption align = "center"><i>ESCAPEDOUBLEQUOTE Output Used in Connector Call</i></figcaption>
</figure>

Now if you add a Popup Task to check what values are inserted using the ESCAPEDOUBLEQUOTE() function, you can see the variable values as follows:

<figure>
  <Thumbnail src="/img/reference/fx-formulas/escape-double-quote-output.png" alt="ESCAPEDOUBLEQUOTE Output" />
  <figcaption align = "center"><i>ESCAPEDOUBLEQUOTE Output</i></figcaption>
</figure>

You can see that the data has been entered properly with no error by ignoring the double-quotes.

## ESCAPESINGLEQUOTE

The `ESCAPESINGLEQUOTE` function helps you to ignore the single quotes that are typically present in data that you want to insert in SQL or any relational database.

### Definition

```js
 ESCAPESINGLEQUOTE(string / json field)
 ```

Where,

*  `<string/json>`: is the column or field value that contains the single quote symbol


### Example

```js
 ESCAPESINGLEQUOTE ([{“productname2”:“Welch’s Fruit Snacks”,“price”:20}] )
 ```

returns
```json
[{"productname2":"Welch\'s Fruit Snacks","price":20}] 
```

### Concept

The `ESCAPESINGLEQUOTE` function helps you to ignore the single quotes that are typically present in strings where a single quote or an apostrophe is an integral part of the data. For example in an Author table in a MySQL there can be Names like O'Reilly that would have a single quote as an integral part. When you are inserting the name using an insert query then it may lead to some errors. In such cases, the ESCAPESINGLEQUOTE would allow the single quote symbol to be ignored and used as a part of the string and not a special character.

Now let us take an example to insert data into a MySQL database from a Product details form. Say you are adding the Product name, which may contain single quote data or which may contain the apostrophe symbol.


<figure>
  <Thumbnail src="/img/reference/fx-formulas/escape-single-quote-sql-query.png" alt="SQL Query" />
  <figcaption align = "center"><i>SQL  Query</i></figcaption>
</figure>

In such cases, we can use the compute block and add the respective columns to ignore the single quote from the data and use it as a part of the string using the ESCAPESINGLEQUOTE function.

Considering that we are adding a product name ‘ Hershey's chocolate syrup ‘ which contains an “ apostrophe s ”, when inserting into the database it will be taken as [{"productname2":"Hershey's chocolate syrup","price":20}] which may cause a problem in the insert statement due to the single quote which interferes with the query statement. So here in a Compute block if you add the function to ignore the single quote as

```js
ESCAPESINGLEQUOTE( formrepeat)
```

the output would be

```json
[{"productname2":"Hershey\'s chocolate syrup","price":20}]
```

which would be a valid format to insert to the MySQL database or any SQL in use.

Thus you can make use of the ESCAPESINGLEQUOTE() function that would enable you to ignore the single quote as a part of the code.

## STRINGENCODE

The `STRINGENCODE` enables you to accept a String as input and returns an Encoded string value for the same.

### Definition

```js
 STRINGENCODE(StringInput)
```

Where,

 * `StringInput:` Is the String that is to be encoded

### Example

```js
 STRINGENCODE("Welcome to DronaHQ!%")
```

returns
> Welcome%20to%20DronaHQ!%25

### Concept

Now if you take an example here to send a WhatsApp message using your custom App and want to pass a string with special characters then in that case you encode the WhatsApp Message string using STRINGENCODE function.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/string-encode-configure.jpg" alt="STRINGENCODE Configure" />
  <figcaption align = "center"><i>STRINGENCODE Configure</i></figcaption>
</figure>


The output of the same would be something like this in the image below.

<figure>
  <Thumbnail src="/img/reference/fx-formulas/string-encode-result.jpg" alt="STRINGENCODE Result" />
  <figcaption align = "center"><i>STRINGENCODE Result</i></figcaption>
</figure> 



You can thus make use of the StringEncode function to encode and securely send data across networks.