import { Mongoose  } from "mongoose";


const lullabySchema = new Mongoose.Schema({
    
});

let Lullaby = Mongoose.model('Lullaby',lullabySchema);

export default Lullaby;