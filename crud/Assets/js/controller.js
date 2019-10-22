window.addEventListener("load",bindEvent);
window.addEventListener("online",()=>alert('online'));
window.addEventListener("offline",()=>alert('offline'));

var counter;

function bindEvent(){ 
    counter = autoIncNumber();
    $("#add").on("click",add);
    $("#load").click(load);
    $("#save").on("click",save);
    $("#searchnow").on("click",search);
    $("#update").on("click",update);
    $("#sort").on("click",sort);
    $("#savetoserver").on("click",savetoserver);
    $("#clearall").on("click",clearall);
    
    loadAutoIncriment();
}

const loadAutoIncriment = ()=>document.querySelector("#id").innerHTML = counter.next().value;
// var counter;
// function counting(){
//     counter++;
// }

function updatecounter(){
document.querySelector("#total").innerHTML = questionOperation.question.length;
}
function add(){
        console.log("click");
        var ques = new Question();
        for (const key in ques) {
            if(key == "score" || key == "ismarked"){
                continue;
            }
            if(key == "id"){
                ques[key]= document.querySelector("#"+key).innerHTML;
                console.log(ques[key]);
                continue;
            }
            ques[key] = document.querySelector("#"+key).value;
            console.log(ques[key]);
        }
        console.log(ques);
        questionOperation.add(ques);
        loadAutoIncriment();
        clearall();
}

function printQuestion(){

}

function printQuestion(questionObject){
        console.log(questionObject);
        var tbody = document.querySelector("#questionlist");
        var tr = document.createElement("tr");
        for(var key in questionObject){
            var td = document.createElement("td");
            td.innerHTML = questionObject[key];
            tr.appendChild(td);
        }
        td = document.createElement("td");
        button = document.createElement("button");
        button.innerHTML = "Delete";
        button.className = "delete";
        td.appendChild(button);
        tr.appendChild(td);
        tbody.appendChild(tr);
}
function load(){
    console.log(questionOperation.question);
    console.log("load");
    console.log(questionOperation.question.length)
    for(var key in questionOperation.question){

        printQuestion(questionOperation.question[key]);
        console.log(questionOperation.question[key]);
    }
    $('.delete').on('click',function(){
        $(this).parent().parent().css({"background":"red"});
        // var tdarry = $(this);
        // console.log(tdarry[1].innerText);
        $(this).parent().parent().remove();
    })
    
}

function update(){

}
function search(){
    $("tbody").html("");
    var id = document.querySelector("#search").value;
    var question = questionOperation.search(id);
    printQuestion(question);
}
function sort(){
    questionOperation.sort();
}
function savetoserver(){

}
function clearall(){
    console.log("its work");
    document.querySelectorAll(".clear").forEach((e)=>{e.value = "";});
}