/**
 * By using clousre and setTimeout solve the following problem
 * We need to print the value of "i" the loop iterator, in each loop iteration after specific time which is incremented to double after each iteration
 * The porblem is currently we are getting the name iteration number in a repetive manner but we need the number of each iteration after a time 
 * which is every time become double then the previous one
 */

function print()
{
    for(var i =0; i<10; i++)
    {
        setTimeout(function(){
            console.log(i);    
        },1000);
    }


    console.log("Print Stop");
}

print();