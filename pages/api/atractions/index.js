import dbConnect from "../../../db/connect";
import Atraction from '../../../db/models/Atraction';

export default async function handler (req, res) {
  const { method } = req

  await dbConnect()

  switch (method) {
    case 'POST':
      try {
        const atraction = await Atraction.create(req.body)

        res.status(201).json(atraction)
      } catch (error) {
        res.status(400).json({ success: false })
      }
      break
    default:
      res.status(400).json({ success: false })
      break
  }
}








