var names = new Array();

names[0] = "Yaakov";
names[1] = "John";
names[2] = "Jay";
names[3] = "paul";
names[4] = "larry"
names[5] = "frank";
names[6] = "laura";
names[7] = "jin";

for(var i=0 ; i< names.length; i++){
    if(names[i].charAt(0)==="J" || names[i].charAt(0)==="j"){
        console.log("Goodbye "+ names[i]);
    }
    else{
        console.log("Hello " + names[i]);
    }
}