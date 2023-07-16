var bookmarkerName=document.getElementById("bookmarkerName")
var websiteUrl=document.getElementById("websiteUrl")
var searchInput=document.getElementById("searchInput")
var subButton=document.getElementById("subButton")
var addEdit=document.getElementById("AddEdit")
var deleteItem=document.getElementById("deleteItem")
var searchInput=document.getElementById("searchInput")
var validNAme=document.getElementById("validNAme")
var validUrl=document.getElementById("validUrl")

var currentInd=0

var informationContainer=[]
if(localStorage.getItem("information")!=null){
    informationContainer=JSON.parse( localStorage.getItem("information"))
    displayInfo()
}

subButton.addEventListener("click",function(){
    if(validNAmeBook()==true &&validUrlBook()==true){
        var info={
            name:bookmarkerName.value,
            url:websiteUrl.value,
        }
       
            informationContainer.push(info)
            localStorage.setItem("information",JSON.stringify(informationContainer))
        displayInfo()
        clrarData()
       
          
    }
  
})
function displayInfo(){
    cartona=``;
    for (var i = 0; i < informationContainer.length; i++) {
      
        cartona+=`
        <div class="real-information   show p-5" >
        <div class="show-width-item d-flex  show-book justify-content-between align-items-center ">
        <div class="items">  <h2 id="bookMarkName">${informationContainer[i].name}</h2></div>
        <div class=" show-width">
      
        <a  href="${informationContainer[i].url}" target="_blank"> <button class="btn btn-primary ali">Vist</button></a>
        <a href="#"><button class="btn btn-danger ms-2"  onclick="deleteBook(${i})">Delete</button></a>
        <a href="#"><button class="btn btn-warning ms-2"  onclick="updatMark(${i})">Update</button></a>
        </div>
        </div>
      </div>
        `
    }
    document.getElementById("showDataToUser").innerHTML=cartona;
    document.getElementById("dataBg").classList.replace("d-none","d-block")
}
// deleteItem.addEventListener("click",function (e) {
//     deleteBook(e.index)
// })
function deleteBook(index){
    informationContainer.splice(index,1)
    localStorage.setItem("information",JSON.stringify(informationContainer))
    
    displayInfo()
}
function clrarData() {
    bookmarkerName.value="";
    websiteUrl.value="";
}

function updatMark(ind) {
    currentInd=ind
    bookmarkerName.value=informationContainer[ind].name;
    websiteUrl.value=informationContainer[ind].url;
    subButton.classList.replace("d-block","d-none")
    addEdit.classList.replace("d-none","d-block")

    
}

function addEdit1(currentInd) {
   informationContainer[currentInd].name= bookmarkerName.value;
    informationContainer[currentInd].url=websiteUrl.value;
    subButton.classList.replace("d-none","d-block")
    addEdit.classList.replace("d-block","d-none")
    localStorage.setItem("information",JSON.stringify(informationContainer))
    displayInfo()
    clrarData()
    
}

function searchName(term) {
    
    cartona=``
for (let i = 0; i < informationContainer.length; i++) {
    
    if(informationContainer[i].name.toLowerCase().includes(term.toLowerCase())==true){
    cartona+=`
    <div class="real-information   show p-5" >
    <div class=" d-flex w-50 show-book justify-content-between align-items-center ">
    <div>  <h2 id="bookMarkName">${informationContainer[i].name.replace(term,`<span class="text-danger">${term}</span>`)}</h2></div>
    <div class="">
  
    <a class="btn btn-primary " href="${informationContainer[i].url}" target="_blank">Vist</a>
    <a href="#"><button class="btn btn-danger ms-2"  onclick="deleteBook(${i})">Delete</button></a>
    <a href="#"><button class="btn btn-warning ms-2"  onclick="updatMark(${i})">Update</button></a>
    </div>
    </div>
  </div>
    `}
}
document.getElementById("showDataToUser").innerHTML=cartona;
document.getElementById("dataBg").classList.replace("d-none","d-block")
    
}


// regex
bookmarkerName.addEventListener("blur",validNAmeBook)
function validNAmeBook() {

    var reg=/^[A-Z][a-z ]{2,15}$/
    if(reg.test(bookmarkerName.value)==true){
        validNAme.classList.replace("d-block","d-none")
        return true;
    }
    else{
        validNAme.classList.replace("d-none","d-block")
        return false;
    }
}
websiteUrl.addEventListener("blur",validUrlBook)
function validUrlBook() {
    let reg=/^https:\/\/www\.[a-z]{2,12}\.[a-z]{2,9}$/
    if(reg.test(websiteUrl.value)==true){
        validUrl.classList.replace("d-block","d-none")
        return true;
    }
    else{
        validUrl.classList.replace("d-none","d-block")
        return false;
    }
}


var result=informationContainer.find((el)=>{
    return el.name=bookmarkerName.value 
   
})
