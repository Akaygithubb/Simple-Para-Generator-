const input=document.getElementById("noofwords");
const conatiner=document.querySelector(".container");

const generatewords=(n)=>{
    let text= "";
    const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(let i=0;i<n;i++){
    const random=(Math.random()*25).toFixed(0);
    text+=letters[random];
    }
    return text;
};

//* in this fx we baiscally generate text or word using loops over letters and
//* then storing them into text 



let numofwords;
const getdata= ()=>{
    numofwords=Number(input.value);

    const para=document.createElement("p");

    //* here we create a paragh element and store it in para variable
    //! then we set its attribute and set inner text of element and 
    //todo and finally append it to the container variable which
    //? stores container class element
    
    let data="";
    for(i=0;i<numofwords;i++){
       const random=(Math.random()*15).toFixed(0);
       data+=generatewords(random);
       data+=" ";

    }
    


    para.innerText=data;
    para.setAttribute("class","paraghs");
    conatiner.append(para);
};

//! in this fx we take no of words enter by user as input into noofwords
//! then create a paragh element and then use loop to add all words generated
//! by preivious fx into data sttring
//! then finally appending string to p inner text
//! and finally setting class to p tag and adding it to conatiner obtainer using
//! querry selector