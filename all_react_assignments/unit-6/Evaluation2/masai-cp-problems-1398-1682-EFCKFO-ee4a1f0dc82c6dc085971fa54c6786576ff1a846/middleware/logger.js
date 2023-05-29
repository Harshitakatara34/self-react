const fs = require("fs");

const logger = (req, res, next) => {
  const { method, url, headers } = req;
  const userAgent = headers["user-agent"];
  
  
    const logData = `Method:${method}, Route:${url}, User-Agent:${userAgent}\n`;
    fs.appendFile("./logs.txt", logData, (err) => {
      if (err) {
        console.error(err);
      }
      next();
    });
   
    next();
  }
;

module.exports = { logger };
