import { Handler } from "@netlify/functions";

const PATHS = {
    '/google': "https://www.google.com",
    '/yahoo': "https://www.yahoo.com"
}

const handler: Handler = async (event, _context) => {
  const notFoundResponse = {
    statusCode: 404,
    body: JSON.stringify(event),
  };

  const {
    path,
    httpMethod,
  } = event;

  const seeOtherResponse = {
    statusCode: 200,
    headers: {location: PATHS[path] }
  };

  return ['GET', 'HEAD'].includes(httpMethod) && PATHS[path] ? seeOtherResponse : notFoundResponse;
};

export { handler };
