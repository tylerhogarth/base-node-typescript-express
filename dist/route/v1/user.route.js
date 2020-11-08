"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("../../service/user.service");
var router = require('express').Router();
router.get('/', (req, res) => {
    res.json(new user_service_1.UserService().getUser());
});
module.exports = router;
//# sourceMappingURL=user.route.js.map