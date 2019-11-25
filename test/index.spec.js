const utils = require('../src/index');

describe("getSum函数", function () {
  it("A为0的执行函数", function () {
    expect(utils.getSum(0, 1)).toBe(0);
  });
  it("B为0的执行函数", function () {
    expect(utils.getSum(1, 0)).toBe(1);
  });
  it("常规输入的执行函数", function () {
    expect(utils.getSum(1, 5)).toBe(6);
  });
});

describe("getArr函数", function () {
  it("常规输入的执行函数", function () {
    utils.getArr().then(function (ret) {
      expect(utils.getArr()).toBe('OK');
    })
  });
});