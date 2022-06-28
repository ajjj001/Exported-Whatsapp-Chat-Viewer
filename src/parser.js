export const parser = (text) => {

    let data = [];
    const lines = text.split(/\r\n|\n/);
    const timePattern =
        /\[(\d{1,2}\/\d{1,2}\/\d{4}.*?)\]|(\d{2}\/\d{2}\/\d{4}.*?)\s\-/;

    const senderPattern = /-\s(.*?):|]\s(.*?):/;

    lines.forEach((line) => {
        const time = line.match(timePattern);
        const sender = line.match(senderPattern);

        if (time && !sender) {
            data.push({
                time: null,
                sender: null,
                message: line,
            });
            return;
        }

        if (time && sender) {
            const message = line
                .substring(line.indexOf(sender[0]) + sender[0].length)
                .trim();

            data.push({
                time: time[1] || time[2],
                sender: sender[1] || sender[2],
                message,
            });
            return;
        }
        data[data.length - 1].message += "\n" + line;
    });

    return data;
}
