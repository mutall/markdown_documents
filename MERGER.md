#  MERGER

Used where the same names appear in multiple instances and the database records each as its own attribute.  
The syntax is as below:

`m.execute();` 

As in the above, the value *m* represents the *Object*, *execute* is the *method* and finally the '( )' store the parameters assigned and can also be null.

**NB:** A constructor method gives parameters for a new instance.

`m:merger = new merger(imerge, mother)`

To create a complete instance, one must provide two inputs/parameters:

> imerge:lib.Imerge = "values";  
> mother:outlook.view = "values";

To effectively know how a class works, one needs to follow certain approaches. They are as below;

1. Top - Down Approach.  
2. Bottom - Up Approach.  

___
                      Example

> `merge_data() {`  
> ​	`imerge:lib.imerge = " " //how to supply`  
> ​	`mother:outlook.view = " " //how to supply`  
> ​			`m:merger = new merger(imerge, app.current);`  
> ​			`m.execute();`  
> `}`  

##              ELEMENTS OF IMERGE  
___
Imerge has pre-defined elements that are used across all instances. They are as below;  
`imerge = {dbname, ename, member}` 