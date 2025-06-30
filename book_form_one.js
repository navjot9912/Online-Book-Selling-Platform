
function bookname(){   
  let book_name=["The Art of Computer Programming","The Man Who Invented the Computer","How to Design Programs","Born Digital: Understanding the First Generation of Digital Natives","Concrete Mathematics","Introduction to Algorithms","A New Kind of Science","Inside Apple","Structure and Interpretation of Computer Programs","The Master Algorithm","In the Plex","The Jargon File","Computers and Intractability","AI Superpower","The Society of Mind","Superintelligence","How to Survive a Robot Uprising","The Emotion Machine","Modern Operating Systems","Things a Computer Scientist Rarely Talks About"];
  let author_name=["Donald Knuth","Jane Smiley","Matthias Felleisen"," John Palfrey","Ronald Graham","Thomas H. Cormen"," Stephen Wolfram","Adam Lashinsky","Hal Abelson","Pedro M. Domingos","Steven Levy","Eric S. Raymond","Michael Garey","Kai-Fu Lee","Marvin Minsky","Nick Bostrom","Daniel H. Wilson","Marvin Minsky","Andrew S. Tanenbaum","Donald Knuth"];
    let category=["computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science","computer science"];
    let price=["999","999","999","999","999","999","999","999","999","999","999","999","999","999","999","1000","1000","1000","1000","1000"];
    let book_number=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20"];
    let a=JSON.stringify(book_name);
    localStorage.setItem("book_name",a);
    let b=JSON.stringify(author_name);
    localStorage.setItem("author_name",b);
    let c=JSON.stringify(category);
    localStorage.setItem("category",c);
    let d=JSON.stringify(price);
    localStorage.setItem("price",d);
    let e=JSON.stringify(book_number);
    localStorage.setItem("book_number",e);
    // let a=document.getElementById("name").value;
    // let b=document.getElementById("author").value;
    // let c =document.getElementById("number").value;
    // let d =document.getElementById("category").value;
    
    if(a=='' && b=='' && c=='' && d==''){
        alert("Enter Book Name")
    }else{

    let str1=localStorage.getItem("book_name");
    let str2=localStorage.getItem("author_name");
    let str3=localStorage.getItem("category");
    let str4=localStorage.getItem("price");
    let str5=localStorage.getItem("book_number");
    let one=JSON.parse(str1);
    let two=JSON.parse(str2);
    let three=JSON.parse(str3);
    let four=JSON.parse(str4);
    let five=JSON.parse(str5);
    let bookname=document.getElementById("name").value;
    let cc=0;
    
    for(i=0;i<20;i++)
    {
        if(one[i]==bookname){
            cc++;
            document.write("book name: "+one[i]+"<br>");
            document.write("author name: "+two[i]+"<br>");
            document.write("category:"+three[i]+"<br>");
            document.write("price:"+four[i]+"<br>");
            document.write("book number:"+five[i]+"<br>"+"<br>");
        }
        // document.write(one[i]+" "+two[i]+" "+three[i]+" "+four[i]+" "+five[i]+"<br>");
    }
    if(cc==0)
    document.write("BOOK IS NOT AVAILABLE");
    }
}
function bookauthor(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("author").value;
    let c =document.getElementById("number").value;
    let d =document.getElementById("category").value;

    if(a=='' && b=='' && c=='' && d==''){
        alert("Enter Author Name ")
    }else{
    
    let str1=localStorage.getItem("book_name");
    let str2=localStorage.getItem("author_name");
    let str3=localStorage.getItem("category");
    let str4=localStorage.getItem("price");
    let str5=localStorage.getItem("book_number");
    let one=JSON.parse(str1);
    let two=JSON.parse(str2);
    let three=JSON.parse(str3);
    let four=JSON.parse(str4);
    let five=JSON.parse(str5);
    let cc=0;
    let authorname=document.getElementById("author").value;
    for(i=0;i<20;i++)
    {
        if(two[i]==authorname){
            cc++;
            //document.write(one[i]+" "+two[i]+" "+three[i]+" "+four[i]+" "+five[i]+"<br>");
            document.write("book name: "+one[i]+"<br>");
            document.write("author name: "+two[i]+"<br>");
            document.write("category:"+three[i]+"<br>");
            document.write("price:"+four[i]+"<br>");
            document.write("book number:"+five[i]+"<br>"+"<br>");
        }
        // document.write(one[i]+" "+two[i]+" "+three[i]+" "+four[i]+" "+five[i]+"<br>");
    }
    if(cc==0)
    document.write("BOOK IS NOT AVAILABLE");
    }
}




function booknumber(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("author").value;
    let c =document.getElementById("number").value;
    let d =document.getElementById("category").value;
 
    if(a=='' && b=='' && c=='' && d==''){
        alert("Enter Book Number")
    }else{

    let str1=localStorage.getItem("book_name");
    let str2=localStorage.getItem("author_name");
    let str3=localStorage.getItem("category");
    let str4=localStorage.getItem("price");
    let str5=localStorage.getItem("book_number");
    let one=JSON.parse(str1);
    let two=JSON.parse(str2);
    let three=JSON.parse(str3);
    let four=JSON.parse(str4);
    let five=JSON.parse(str5);
    let cc=0;
    let booknumber =document.getElementById("number").value;
    for(i=0;i<20;i++)
    {
        if(five[i]==booknumber){
            cc++;
            document.write("book name: "+one[i]+"<br>");
            document.write("author name: "+two[i]+"<br>");
            document.write("category:"+three[i]+"<br>");
            document.write("price:"+four[i]+"<br>");
            document.write("book number:"+five[i]+"<br>"+"<br>");        }
        // document.write(one[i]+" "+two[i]+" "+three[i]+" "+four[i]+" "+five[i]+"<br>");
    }
    if(cc==0)
    document.write("BOOK IS NOT AVAILABLE");
    }
}



function category(){
    let a=document.getElementById("name").value;
    let b=document.getElementById("author").value;
    let c =document.getElementById("number").value;
    let d =document.getElementById("category").value;

    if(a=='' && b=='' && c=='' && d==''){
        alert("Enter Book category")
    }else{

    let str1=localStorage.getItem("book_name");
    let str2=localStorage.getItem("author_name");
    let str3=localStorage.getItem("category");
    let str4=localStorage.getItem("price");
    let str5=localStorage.getItem("book_number");
    let one=JSON.parse(str1);
    let two=JSON.parse(str2);
    let three=JSON.parse(str3);
    let four=JSON.parse(str4);
    let five=JSON.parse(str5);
    let cc=0;
    let bookcategory =document.getElementById("category").value;
    for(i=0;i<20;i++)
    {
        if(three[i]==bookcategory){
            cc++;
            document.write("book name: "+one[i]+"<br>");
            document.write("author name: "+two[i]+"<br>");
            document.write("category:"+three[i]+"<br>");
            document.write("price:"+four[i]+"<br>");
            document.write("book number:"+five[i]+"<br>"+"<br>");        }
        // document.write(one[i]+" "+two[i]+" "+three[i]+" "+four[i]+" "+five[i]+"<br>");
    }
    if(cc==0)
    document.write("BOOK IS NOT AVAILABLE");
    }
}
