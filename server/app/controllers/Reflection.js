import db from '../models';

const Reflection = {
  // create a reflection
  create(req, res) {
    db.Reflection.create(req.body).then((reflect) => {
        return res.status(201).send({ message: 'Reflection created successfully', reflect });
    })
    .catch((err) => {
        return res.status(400).send('Error');
    });
  },
  // get all reflection
  get(req, res) {
    db.Reflection.findAll().then((reflects) => {
        return res.status(200).send({ message: 'Reflections retrieved successfully', reflects });
    })
    .catch((error) => {
        return res.status(500).send('error');
    })
  }
}

export default Reflection;
