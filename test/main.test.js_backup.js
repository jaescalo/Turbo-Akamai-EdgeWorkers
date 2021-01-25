// Require the built in 'assertion' library
import { strict as assert } from 'assert';
import httpMocks from 'node-mocks-http';
import logger from 'log';

const { pkg } = httpMocks;

function sum(a, b) {
/  return a + b;
}

describe('Akamai EdgeWorkers Sum', function() {
  it('Should sum 1 + 2 and expect 3', function() {  
    assert.strictEqual(3, sum(1,2));
  });
});

function getCacheTagsForPath(path) {
  const cacheTagPrefix = 'path--';
  const cacheTagFolderSeparator = '|';
  const folderNames = path.split('/');
  const cacheTags = [];
  for (let i = 1; i < folderNames.length; i++) {
      cacheTags.push(cacheTagPrefix + cacheTagFolderSeparator + folderNames.slice(1, i + 1).join(cacheTagFolderSeparator));
  }
  return '' + cacheTags.join(',');
}

describe('Akamai Edgeworkers Cache-Tags', function() {
  it('Should extract the path and separate into multiple cache-tags', function() {
    assert.strictEqual('path--|helloworld,path--|helloworld|test.js', getCacheTagsForPath('/helloworld/test.js'));
  });
});

function exampleRouteHandler(req, res) {
  res.send("Goodbye Earthling!");
}

describe("Example Test 1", () => {
  it("should return 'Goodbye Earthling!' for GET /example", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling!";
    assert.strictEqual(actualResponseBody, expectedResponseBody);
  });
});