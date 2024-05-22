import {getFileType} from "../index.js";

describe("测试获取文件名的类型名即扩展名", function() {
    it("参数为空或未定义返回未定义", function (){
        expect(getFileType()).toBeUndefined();
        expect(getFileType(null)).toBeUndefined();
    });

    it("无扩展名时返回空字符串“”",function (){
        expect(getFileType("")).toBe("");
        expect(getFileType("foo")).toBe("");
    });

    it("foo.jpg返回文件类型为“jpg”",function (){
        expect(getFileType("foo.jpg")).toBe("jpg");
    });

    it("foo.jpg.png返回文件类型为“png”",function (){
        expect(getFileType("foo.jpg.png")).toBe("png");
    });
});