//first example of nodejs
function printDate()
{
    let date = new Date();
    let today = date.getDate() + "/" + (date.getMonth()+1) + "/" + date.getFullYear();
    console.log(today);
}
//call function
printDate();

