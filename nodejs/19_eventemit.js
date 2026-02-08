const events=require('events');
const { listeners } = require('process');
const em=new events.EventEmitter();

let switchofffunc=(data)=>{
    console.log("events is triggered for "+data);
}

em.addListener('switchon',(data)=>{
    console.log("events is triggered for "+data);
});

em.on('switchoff',switchofffunc);

em.once('addcart',()=>{
    console.log("you are adding one item to the cart");
});

em.removeListener('switchoff',switchofffunc);

//em.removeAllListeners();

em.emit('switchon','fan');
em.emit('switchon','fan');
em.emit('switchoff','light');
em.emit('addcart');
em.emit('addcart');