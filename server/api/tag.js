const db = require('../db');
const Tag = db.model('tags');
const Video = db.model('videos');
const router = require('express').Router();

// get all tags with their videos
router.get('/', (req, res, next) => {
  Tag.findAll({include: [Video]})
  .then(tags => res.json(tags))
  .catch(next);
});

// creates a new tag
// assumes correct payload in req.body
// payload can have {name: "string"}
router.post('/', (req, res, next) => {
  Tag.create(req.body)
  .then(tag => res.json(tag))
  .catch(next);
});

// gets one tag with its videos
router.get('/:id', (req, res, next) => {
  Tag.findOne({where: {id: req.params.id}, include: [Video]})
  .then(tag => res.json(tag))
  .catch(next);
});

module.exports = router;
