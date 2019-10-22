function* autoIncNumber(){
    console.log("its run");
    var num = 0;
    while(true){
        num++;
        yield num;
    }
}