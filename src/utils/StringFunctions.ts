export function limitText(text: String, maxChars: number): string {
    if (text == undefined)
        return ""
    else {


        return text.length < maxChars
            ? `${text}`
            : `${text.substring(0, maxChars)}...`

    }
}