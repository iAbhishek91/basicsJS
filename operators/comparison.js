/* comparison operator */
/*

OPERATOR
===
==
>=
<=
!==
!=
Object.is() [es2015]

When type conversion is involved in the comparison 
(i.e., non–strict comparison), JavaScript converts the types 
String, Number, Boolean, or Object operands as follows:

1. When comparing a number and a string, the string is converted 
to a number value. JavaScript attempts to convert the string 
numeric literal to a Number type value. First, a mathematical 
value is derived from the string numeric literal. Next, this 
value is rounded to nearest Number type value.

2. If one of the operands is Boolean, the Boolean operand is
converted to 1 if it is true and +0 if it is false.

3. If an object is compared with a number or string, JavaScript
attempts to return the default value for the object.
Operators attempt to convert the object to a primitive value,
a String or Number value, using the valueOf and toString methods of
the objects. If this attempt to convert the object fails, a 
runtime error is generated.

4.Note that an object is converted into a primitive if, 
and only if, its comparand is a primitive. If both operands 
are objects, they're compared as objects, and the equality 
test is true only if both refer the same object. */