import mongoose from "mongoose";
const { Schema, models, model } = mongoose;

const AtractionSchema = new Schema({
  name: String,
  image: String,
  location: String,
  description: String,
  mapURL: String,
  ObjectId: {
    type: String,
     required: true,
     unique: true
   },
});

// connecting through mongoose to cards collection in the database.
// it's not case sensitive

const Atraction = mongoose.models.Atractions || mongoose.model("Atractions", AtractionSchema);
export default Atraction;
