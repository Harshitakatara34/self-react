const validator = (req, res, next) => {
  const { age, position, goals, assists } = req.body;

  if (!age || !position || !goals || !assists) {
    return res.send({
      " err": "Few fields are missing, cannot process the request",
    });
  }

  if (age < 18 || age > 40) {
    return res.send({ " err": "You are not eligible to Play" });
  }

  const validPositions = ["Forward", "Midfielder", "Defender", "Goalkeeper"];
  if (!validPositions.includes(position)) {
    return res.send({ " err": "Incorrect details" });
  }

  if (goals <= 50 || assists <= 20) {
    return res.send({ " err": "You are not eligible to play" });
  }

  next();
};

module.exports = {
  validator,
};
