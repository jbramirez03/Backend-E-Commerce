const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags
  // be sure to include its associated Product data
  try {
    const tagsData = await Tag.findAll({
      include: [{ model: Product, through: ProductTag, as: 'taggedProducts'}]
    });

    res.status(200).json(tagsData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id`
  // be sure to include its associated Product data
  try {
    const singleTagData = await Tag.findByPk(req.params.id, {
      include: [{model: Product, through: ProductTag, as: 'taggedProducts'}]
    })

    if(!singleTagData){
      res.status(404).json({message: 'No tag found with this id.'});
      return;
    }

    res.status(200).json(singleTagData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create(req.body);

    res.status(201).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updatedTag = await Tag.update(
      {
        tag_name: req.body.tag_name
      },
      {
        where: {
          id: req.params.id
        }
      }
    );

    res.status(201).json(updatedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try {
    const deletedTag = await Tag.destroy({
        where: {
          id: req.params.id
        }
      });

      if(!deletedTag){
        res.status(404).json({message: 'There is no tag with that id'});
        return;
      }

      res.status(200).json(deletedTag);
  } catch (error) {
    res.status(500).json(err);
  }
});

module.exports = router;
