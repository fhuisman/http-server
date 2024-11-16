import { createServer, IncomingMessage, ServerResponse } from 'http';

const handleOkRequest = (res: ServerResponse) => {
  res.statusCode = 200;
};

const handleDoubleRequest = (req: IncomingMessage, res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  const url = new URL(req.url!, `http://${req.headers.host}`);
  const numberParam = url.searchParams.get('number');

  if (numberParam && !isNaN(Number(numberParam))) {
    const number = Number(numberParam);
    const result = number * 2;

    res.statusCode = 200;
    res.write(JSON.stringify({ result }));
  } else {
    res.statusCode = 400;
    res.write(JSON.stringify({ error: 'Please provide a valid number.' }));
  }
};

const handleNotFound = (res: ServerResponse) => {
  res.setHeader('Content-Type', 'application/json');
  res.statusCode = 404;
  res.write(JSON.stringify({ error: 'Not found.' }));
};

const server = createServer((req: IncomingMessage, res: ServerResponse) => {

  if (req.method === 'GET' && req.url === '/ok') {
    handleOkRequest(res);
  } else if (req.method === 'GET' && req.url?.startsWith('/double')) {
    handleDoubleRequest(req, res);
  } else {
    handleNotFound(res);
  }
  res.end();
});

server.listen(3000, () => {
  console.log('Server running on port 3000');
});
