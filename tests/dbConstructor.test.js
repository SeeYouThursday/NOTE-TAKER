const DataUpdate = require("../helpers/db_constructor");

describe("DataUpdate Suite", () => {
  describe("generate new obj with title, text, and note id", () => {
    test("return objwith title, text, and note id", () => {
      const data = new DataUpdate();
      data.title = "test";
      data.text = "text here";
      data.noteId = 544;
      const result = {
        title: "test",
        text: "text here",
        noteId: 544,
      };
      expect(data).toEqual(result);
    });
  });
});
