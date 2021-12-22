reqUrl = '/api/1451001600000';

  const slashIndex = reqUrl.lastIndexOf('/');
  const microTime = reqUrl.substring(slashIndex + 1)
  console.log(slashIndex);
  console.log(microTime);

  const stampDate = new Date(+microTime)
  console.log(stampDate)