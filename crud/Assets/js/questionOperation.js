const questionOperation = {
    question:[],
    add(question){
        this.question.push(question);
    },
    delete(id){
        this.question.search(id);
    },
    search(id){
        return this.question.find((e)=>e["id"]==id);

    },
    sort(){
        this.question.sort((a,b)=>{
            return a["id"]-b["id"];
        })
    },
    mark(id){
        var obj = this.question.filter((e)=>{e["id"]==id})
        obj.toggleIsMarked();
    },
    countMark(){
        return  this.question.map((e)=>e.ismarked).length;
    },
    countUnMark(){
        return  this.question.length - this.countMark();
    },
    print(){
        console.log(this.question);
        for(var i; i<this.question.length;i++){
            this.question[i]["id"];
        }
    }
}