import dbConnect from "../../../db/connect";
import Atraction from '../../../db/models/Atraction';

export default async function handler (req, res) {
  await dbConnect();
  
  const { id } = req.query;
 
  if (req.method === "DELETE") {

    console.log(`im inside the delete`)
    const atraction = await Atraction.findByIdAndDelete(id);

    if (!atraction) {
      return res.status(404).json({ status: "Not Found" });
    }

    res.status(200).json({status: 'Successfully Deleted'});
  }

  if (req.method === "PUT") {

    console.log(`im inside the put`)

    const atraction = await Atraction.findByIdAndUpdate(id, req.body);

    if (!atraction) {
      
      return res.status(404).json({ status: "Not Updated" });
    }

    res.status(200).json({status: 'Successfully Updated'});
  }
 
}
