/**
 * 提取文件名中的扩展名部分
 * @param fileName
 * @returns {string|string}
 */
export function getFileType(fileName) {
    if (typeof fileName === "string") {
        const fileExtensionRegex = /(?<=\.)\w+$/;
        const result = fileExtensionRegex.exec(fileName);
        return Array.isArray(result) ? result[0] : '';
    }
}