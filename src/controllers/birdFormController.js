exports.form_post = function (req, res) {
  let birdData = {
    species: req.body.species,
    nickname: req.body.nickname,
    birdStatus: req.body.status,
  };

  console.log(birdData);
  // renders the bird data in a new page
  res.render('birdCreated', { birdData: birdData });
};
