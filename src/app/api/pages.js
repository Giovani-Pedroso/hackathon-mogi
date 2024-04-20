export default function handler(req, res) {
    const { text } = req.query;
    const upperCaseText = text.toUpperCase();
    res.status(200).json({ result: upperCaseText });
  }
  