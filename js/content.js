"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Content {
    content(req, res) {
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<h1>Szelekció (elágazás)</h1>");
        res.write("<h3>Az egyágú elágazás</h3>");
        let x = -3.14;
        res.write("Szám abszolút értéke<br>"
            + `x = ${x}<br>`);
        if (x < 0)
            x = -x;
        res.write(`|x| = ${x}`);
        res.write("<h3>A kétágú elágazás</h3>");
        const a = 5;
        res.write("Páros-Páratlan meghatározó<br>"
            + `x = ${a}<br>`);
        if (x % 2 === 0) {
            res.write("A szám páros");
        }
        else {
            res.write("A szám páratlan");
        }
        res.write("<h3>A többágú elágazás</h3>");
        const b = 3;
        res.write("Osztályzat<br>"
            + `x = ${b}<br>`);
        switch (b) {
            case 1:
                res.write("Elégtelen<br>");
                break;
            case 2:
                res.write("Elégséges<br>");
                break;
            case 3:
                res.write("Közepes<br>");
                break;
            case 4:
                res.write("Jó<br>");
                break;
            case 5:
                res.write("Jeles<br>");
                break;
            default:
                res.write("Nem osztályzat!<br>");
                break;
        }
        res.end();
    }
}
exports.default = Content;
//# sourceMappingURL=content.js.map