// Operators 
// Arithmetic Operators
    //  +, -, *, /, %(modulus), ++, --
    //  %(modulus) will give you the remainder of two values.
// Assignment Operators 
   // = , +=, -=, *=, /=, %=, **=
// Comparison Operators
   // ==,  ===, !=(Not Equal), !==, >, <, >=, <=
// Logical Operators
    // AND => && , OR => || , NOT => !
// Ternary Operators
   // ?




// Arithmetic Operators
    //  +, -, *, /, %(modulus), ++, --
    //  %(modulus) will give you the remainder of two values.

    let a = 20; 
    let b= 30;
    let sum = a+b; // 20+30
    console.log(sum);
    let sub = b-a; // 30-20
    console.log(sub);

    let mul = a*b;  // 20*30
    console.log(mul);
    let div = a/b;  // 20/30
    console.log(div);

    // %(modulus)

    let c= 2;
    let d= 20;
    let e= 25;
    let f =31;
            //  20 % 2    
    console.log(d % c); // 0 
    console.log(e % c); // 1
    console.log(f % c); // 1

    // 2 | 31 | 15
    //     30
    //   ------
    //     1

    // can you can 34567 is divsibale by 6? 
    let g = 34567;
    console.log(g % 6);

    // ++, --

    let h = 10;
    h++;// h = h+1;
    console.log(h);   // 11
    h--;// h = h-1;
    console.log(h); // 10
    h--;
    h--;
    console.log(h); // 8;

    let i= 20;
    i++; //21
    i++; //22
    h++; //9
    console.log(i+h); //  22+9 = 31
    console.log(i, h);
    //       22  + 9   + 10  = 41 
    let j =  i++ + h++ + 10;  // 41 , 22+1, 9+1
    console.log(j);
    console.log(i, h);

        // 23+1 + 10+1 + 10
    let k = ++i + ++h + 10;  

    console.log(k); // 45

    // -----------------------------------------------------------------------

// Assignment Operators 
   // = , +=, -=, *=, /=, %=, **=

   let l = 10;
    l+= 20;  // l = l+20;

    console.log(l); // 30 

    l -= 5; //      l=l-5; => 30 - 5 = 25 
    console.log(l); // 25

    l *=5;  //       l = l * 5 => 25 * 5 = 125;
    console.log(l); // 125

    l /= 25;        // l = l /25 

    console.log(l) // 5

    l %= 2;        // l = l % 2 = 1

    console.log(l); //  1

     l +=2; 
     
     console.log(l); // 3
     let m = 5;
     
     l += m;     // l = l+m;

     console.log(l); //  8 


     // -------------------------------------------------------------------------------

// Comparison Operators
   // ==,  ===, !=(Not Equal), !==, >, <, >=, <=
   // any comparison output will always be a boolean output(true or false)
   let o = 10; // number  

   let n = 11;

   console.log(n == o);   // false.
   console.log( o == 10); // true. 
   console.log( n == 15); // false.
   console.log("---------------------")
   console.log(10 == "10");  //true   // value same, it will considers equals. Even if type if different
   console.log(   10         ===      "10");    //false   // both value and type of value.
 //           (10, number)       (10, string)

   console.log(o != n); // true  
   console.log(o != 15);// true
   console.log(o != 10);// false 

   console.log(        10       !==     10    );  //true
    //           (10, number)       (10, string)     

//  0 1 2 3 4 5 6 7 8 9  10 11 12....
 console.log( 10 < 10) ; //  false 
 console.log( 10 <= 10); //   true     < + ==
 console.log( 10 >= 10); //   true     > + ==
 console.log( 10 > 10 ); //   false


 // Logical Operators
    // AND => && , OR => || , NOT => !
      //  false     true     false      fasle
// AND    door1 -> door2 -> door3 =>  output

// AND &&   only if all conditions are true => output true => otherwise false.
            //     ------------------- AND && ----------------------
            //    condition 1         condition 2      => output
            //       true                 false        =>   false 
            //       true                 true         =>   true
            //       false                false        =>   false
            //       false                true         =>   false


// Or  ||             door 1 false         false
//          =>        door 2 false         output
//                    door 3 false

 // if  Any of your condition is true => output true => only if all are false then output is false 
                 //      ------------------- OR || ----------------------
            //    condition 1         condition 2      => output
            //       true                 false        =>   true 
            //       true                 true         =>   true
            //       false                false        =>   false
            //       false                true         =>   true


            //             true    and  true        
            console.log( (10 < 15) && ( 20 > 15));  // true
        //                true and false 
            console.log( true && (15 < 10)); //  false
          //                true      and   true    
            console.log( (25 % 5 == 0) && 10 < 20); // true

           //                false  and     false 
            console.log((5 % 2 == 0) && (10 % 3 == 0) );  // false


        //                
            console.log(true || false);  // true
        //                 false  or    true  
            console.log( (10 > 15) || (20 < 50));   // true
        //                true      or   true
            console.log(10 == "10" || 10 !== "10"); // true
        //                    false      or   false
            console.log( (35 % 10 == 0 ) || (25 % 10 == 0));  // false


// NOT => !

console.log(!true); // false
console.log( !false);// true

console.log(!(10 < 20)); // false


     //      !( false  )
console.log( !(10 != 10)); // true

//                 -----------------------true-----------------------------
//                 ----------true--------   or  ----------true-------------
//                 ( true       and   true)  or ( true     and     true    )
console.log( (("blue" == "blue") && (5 > 2)) || ((65 % 5 == 0) && ( 16 >= 16))); // 10T

//          true and false    or     true        => true
console.log(true && (6 *2 >=15) || ( 5+10 === 15)); // 10T

//            -------------------------- false -------------------------------
//                       true             and  ---------------false----------
//           -----------true------------  and  not  ------------true---------
//           (    true     or    true   )  and not (      true      or    true)
console.log((("a" === "a") || ("b" == "b")) && !(( "c" !== "d") || ("d" != "e") )); // 8F  2T

// Ternary Operators
   // ?


console.log( 10 == 10 ? "equal" : "not equal");

//           condition ?   true case : false case 
console.log( 10 % 2 == 0 ? "even number" : "odd number");

let color = "red";

console.log( color === "red" ? "its true" : " its fasle");


