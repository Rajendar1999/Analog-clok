setInterval(()=>{
    d=new Date();
    htime=d.getHours();
    mtime=d.getMinutes();
    stime=d.getSeconds();
    hrotation=30*htime+mtime/2;
    mrotation=mtime*6;
    srotation=stime*6;

    cl6.style.transform=`rotate(${hrotation+90}deg)`
    cl7.style.transform=`rotate(${mrotation+90}deg)`
    cl8.style.transform=`rotate(${srotation+90}deg)`
},1000)
