function blogs(){
    console.log("click")
    const blogs = document.getElementById("BreakingNewsContainer");
    blogs.innerHTML = ``;
    blogs.innerText = ``;

    blogs.innerHTML = `
    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title fs-4 text">Difference between var, let and const keywords in JavaScript</h5>
            <p class="card-text">The var keyword is the oldest way of declaring variables in JavaScript and is supported by all browsers. The let and const keywords are newer additions to the language and are not supported by older browsers.</p>

            <p>
            If you need to support older browsers, you can use var instead of let or const. If you don’t need to support older browsers, you can use let or const. If you want your variable to be immutable, use const.
            </p>

            <p>
            Here are some examples:
            </p>

            <p class="fw-bold">
                var x = 1; <br>
                let y = 2; <br>
                const z = 3; <br>
 
                x = 4; //OK <br>
                y = 5; //OK <br>
                z = 6; //Error</p>
            


            <p>
            As you can see, var and let variables can be reassigned, but const variables can not.
            </p>
            <p>
            Another difference between var and let/const is that var variables are function-scoped, while let and const variables are block-scoped.
            </p>

            <p class="fw-bold">
            function foo() { <br>
                var x = 1; <br>
              } <br>
               
              foo(); <br>
              console.log(x); // ReferenceError: x is not defined
            </p>

            <p>
            On the other hand, let and const variables are only available within the block they were declared in. For example:
            </p>
            <p class="fw-bold">
            function foo() { <br>
                let y = 2; <br>
                const z = 3; <br>
              } <br>
                
              foo(); <br>
              console.log(y); // ReferenceError: y is not defined  <br>
              console.log(z); // ReferenceError: z is not defined <br>
            </p>

            <p class="fw-bold">So, to sum up, the main differences between var, let and const are:</p>

              <ul>
                <li> var is function-scoped while let and const are block-scoped. </li>
                <li> var variables can be reassigned while let and const variables can not. </li>
                <li> var variables are declared using the var keyword while let and const variables are declared using the let and const keywords respectively. </li>
                <li> const variables are immutable while let and var variables are not. </li>
              </ul>
            

            
              <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
    </div>




    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title fs-4 text">The Difference Between Regular Functions and Arrow Functions</h5>
            <p class="card-text">An arrow function is also known as the fat arrow function. It is a new feature introduced in ES6 that is a more concise syntax for writing function expressions. Both regular JavaScript functions and arrow functions work in a similar manner but there are some differences between them. Let's see the differences below: -</p>

            <ul>
                <li> Syntax</li>
                <li> Arguments binding </li>
                <li> Use of this keyword</li>
                <li>Using a new keyword</li>
            </ul>

            <p  class="fw-bold">
            1. Syntax
            </p>

            <p>A programmer can get the same result as regular functions by writing a few lines of code using arrow functions. <br>
            Curly brackets are not required if only one expression is present.
            </p>

            <p class="fw-bold">
            // Regular function ES5: <br>
            var add = function(a, b) {  return a + b;}; <br>
            // Arrow function ES6 <br>
            let add = (a, b) => { return a + b}; <br>
            //or <br>
            let add = (a, b) => a + b; <br>
            </p>

            <p  class="fw-bold">
            2. Arguments binding

            </p>
            


            <p>arguments object inside the regular functions contains the list of arguments.</p>


            <p class="fw-bold">
            // Object with Regular function <br>
            let showData = { <br>
            showArg: function(){ <br>
            console.log(arguments); <br>
            }   <br>
            } <br>
            showData.showArg(1,2,3); // output {0:1,1:2,2:3} <br>
            </p>
            


            <p>
            The arrow function, on the opposite, doesn’t define arguments i.e. they do not have arguments binding.
            </p>
           

            <p class="fw-bold">
            // Object with Arrow function  <br>
            let showData = {  <br>
            showArg: ()=>console.log(arguments);  <br>
                }  <br>
            showData.showArg(1,2,3);   <br>
            // Uncaught ReferenceError: arguments is not defined  <br>
            </p>

            


            <p>
            But you can easily access the arrow function arguments using a rest parameter ...args.
            </p>


            <p class="fw-bold">
           // using rest parameters <br>
            let showData = { <br>
            showArg: (...args)=>console.log(args); <br>
            } <br>
                myFunc.showArgs(1, 2, 3, 4); // [1, 2, 3, 4] <br>
            </p>


            





            <p  class="fw-bold">
            3.Use of this keyword

            </p>

           


            <p>
            Inside of a regular JavaScript function, this value is dynamic. The dynamic context means that the value of this depends on how the function is invoked.
            </p>



            <p class="fw-bold">
            let name ={  <br>
            fullName:'abc', <br>
            printInRegular: function(){ <br>
                console.log("My Name is $.{this.fullName}"); <br>
            },        <br>
            printInArrow:()=>console.log("My Name is $.{this.fullName}") <br>
            }  <br>
            name.printInRegular();   // My Name is abc <br>
                name.printInArrow();     // My Name is undefined <br>
            </p>






            <p>
            The behavior of this inside of an arrow, function differs considerably from the regular function’s this behavior as an arrow function does not have its own “this” keyword.
            </p>

            <p>
            The value of this inside an arrow function remains the same throughout the lifecycle of the function and is always bound to the value of this in the closest non-arrow parent function which means No matter how or where being executed, this value inside of an arrow function always equals this value from the outer function.
            </p>


            <p class="fw-bold"> 
            const myObject = { <br>
                myMethod(items) { <br>
                 console.log(this); // logs myObject  <br>
                 const callback = () => { <br>
                  console.log(this); // this takes value from myMethod(outer func)     <br>
                 }; <br>
                 items.forEach(callback); <br>
                } <br>
              }; <br>
              
              myObject.myMethod([1, 2, 3]); <br>
            </p>




            <p  class="fw-bold">
            Summary
            </p>

            <p >
            this value inside a regular function is dynamic and depends on how the function is invoked. But this inside the arrow function is bound lexically and equals to this of the outer function. Fat arrow methods always bind this a value to the class instance.
            </p>





            <p class="card-text"><small class="text-muted">Last updated 25 mins ago</small></p>


            
        
        </div>
    </div>




    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title fs-4 text">The difference between find filter and map in javascript</h5>
            <p class="card-text">map returns an array with the same length, filter as the name implies, it returns an array with less items than the original array. reduce returns a single value (or object) find returns the first items in an array that satisfies a condition.</p>

           

            <p class="card-text"><small class="text-muted">Last updated 45 mins ago</small></p>


            
        
        </div>
    </div>



    <div class="card mb-3">
        <div class="card-body">
            <h5 class="card-title fs-4 text">Template literals (Template strings)</h5>
            <p>Template literals are enclosed by backtick () characters instead of double or single quotes.

            Along with having normal strings, template literals can also contain other parts called placeholders, which are embedded expressions delimited by a dollar sign and curly braces: $.{expression}. The strings and placeholders get passed to a function — either a default function, or a function you supply. The default function (when you don't supply your own) just performs string interpolation to do substitution of the placeholders and then concatenate the parts into a single string.
            
            To supply a function of your own, precede the template literal with a function name; the result is called a tagged template. In that case, the template literal is passed to your tag function, where you can then perform whatever operations you want on the different parts of the template literal.
            
            To escape a backtick in a template literal, put a backslash () before the backtick.</p>

           

            <p class="card-text"><small class="text-muted">Last updated 50 mins ago</small></p>


            
        
        </div>
    </div>
    `;


    const countFild = document.getElementById('count');
    countFild.innerText = ''; 
    countFild.innerHTML = ``;

    countFild.innerText = "This is Blog Page"
}

