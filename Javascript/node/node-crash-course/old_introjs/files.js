const file_sys = require('fs');

//reading files
file_sys.readFile('./docs/blog1.txt',(err,data)=>{
    if (err){
        console.log(err);
    }
    console.log(data.toString());
});

console.log('last line');

//writing files
file_sys.writeFile('./docs/blog2.txt','hello, world',()=>{
    console.log('file succesfully written');
})

//directories
if (!file_sys.existsSync('./assets')){
    file_sys.mkdir('./assets',(error)=>{
    if(error){
        console.log(error)
    }
    console.log('folder created')
});
}else{
    file_sys.rmdir('./assets',(err)=>{
        if(err){
            console.log(err)
        }
        console.log('folder deleted');
    })
}

//deleting files.

if (file_sys.existsSync('./docs/deleteme.txt')){
    file_sys.unlink('./docs/deleteme.txt',(err)=>{
        if(err){
            console.log(err);
        }
        console.log('file deleted')
    })
}
