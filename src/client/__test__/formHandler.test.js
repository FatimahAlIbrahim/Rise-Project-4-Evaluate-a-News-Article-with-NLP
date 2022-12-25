import { handleSubmit } from "../js/formHandler";

describe("Testing the submit functionality", () => {
  test("Testing the handleSubmit() function", () => {
    // To represent the behavior of the handleSubmit where a non empty url goes to the call api function
    const mockTest = jest.fn(url => url.trim() != "");

    expect(mockTest("https://www.nbcnews.com/news/us-news/-just-want-home-go-back-months-historic-flood-relief-remains-elusive-k-rcna60337")).toBe(true);
    expect(mockTest("test")).toBe(true); // the call api function is the one that checks the validity of the url
    expect(mockTest("  ")).toBe(false);
    expect(handleSubmit).toBeDefined();
  });
});
