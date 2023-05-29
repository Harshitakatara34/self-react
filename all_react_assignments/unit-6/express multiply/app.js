// your code goes here
const express = require('express');
const app = express();

app.get('/multiply', (req, res) => {
  const a = req.query.a;
  const b = req.query.b;

  if (!a || !b) {
    res.status(400).json({ error: 'Both "a" and "b" are required parameters' });
    return;
  }

  const aNumber = parseFloat(a);
  const bNumber = parseFloat(b);

   if(isNaN(aNumber)&&isNaN(bNumber)){
    res.status(400).json({
        error: 'Both "a" and "b" must be numbers',
      })
   }
   
  if (isNaN(aNumber)) {
    res.status(400).json({ error: '"a" is not a valid number' });
    return;
  }

  if (isNaN(bNumber)) {
    res.status(400).json({ error: '"b" is not a valid number' });
    return;
  }

  res.json({ product: aNumber * bNumber });
});

// app.listen(3000, () => console.log('Server started on port 3000'));
module.exports=app