export function limitText(text: String, maxChars: number): String {
    return text.length < maxChars
        ? `${text}`
        : `${text.substring(0, maxChars)}...`


}