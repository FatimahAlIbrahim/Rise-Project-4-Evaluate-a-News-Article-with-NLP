// Import the js file to test
import { callApi } from "../js/apiCaller";
describe("Testing the call api functionality", () => {
  test("Testing the callApi() function", async () => {
    

    const resultObject = {
        "test" : {
            status: {
                code : 100
            }
        },
        "https://www.nbcnews.com/news/us-news/-just-want-home-go-back-months-historic-flood-relief-remains-elusive-k-rcna60337": {
            status: {
                code: 0
            }
        }
    };

    // To represent the behavior of the callUrl where a valid url returns result that get used by the ui
    // the valid url returns a status code of 0
    const mockTest = jest.fn(url => resultObject[url].status.code);

    expect(mockTest("https://www.nbcnews.com/news/us-news/-just-want-home-go-back-months-historic-flood-relief-remains-elusive-k-rcna60337")).toBe(0);
    expect(mockTest("test")).toBe(100);
    expect(callApi).toBeDefined();
  });
});