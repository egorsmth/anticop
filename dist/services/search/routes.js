"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    {
        path: "/",
        method: "get",
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            res.send("путешествие в тысячу миль начинается с единственного шага, а ты пидор (с) Жак Ив Сталоне");
        })
    },
    {
        path: '/alert',
        method: 'post',
        schema: {
            lon: { type: 'number' },
            lat: { type: 'number' }
        },
        handler: (req, res) => __awaiter(this, void 0, void 0, function* () {
            const lon = req.body.lon;
            const lat = req.body.lat;
            res.send(`alert saved (lon:${lon}; lat:${lat})`);
        })
    }
];
//# sourceMappingURL=routes.js.map