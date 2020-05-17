const assert = require("assert");
const httpMocks = require("node-mocks-http");
const exampleRouteHandler = require("./example-router");
describe("Example Test 1", () => {
  it("Hello Earthling! Hello World! Hello M.I.T.! GoodBye Earthling! P.S. Major Tom! GlaDOS...", () => {
    const mockRequest = httpMocks.createRequest({
      method: "GET",
      url: "/example"
    });
    const mockResponse = httpMocks.createResponse();
    exampleRouteHandler(mockRequest, mockResponse);
    const actualResponseBody = mockResponse._getData();
    const expectedResponseBody = "Goodbye Earthling Goodbye! P.S. Major Tom!";
    assert(actualResponseBody, expectedResponseBody);
  });
});