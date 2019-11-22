const getExample = (req, res, next) => {
  try {
    res.json({
      success: true,
    });
  } catch (err) {
    next(err);
  }
};

const getExampleByID = (req, res, next) => {
  try {
    const { id } = req.params;
    res.json({
      number: id,
    });
  } catch (err) {
    next(err);
  }
};

module.exports = {
  getExample,
  getExampleByID,
};
