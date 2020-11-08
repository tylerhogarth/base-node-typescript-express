import { Request, Response } from "express";
import { UserService } from "../../service/user.service";

var router = require('express').Router();

router.get('/', (req: Request, res: Response) => {
  res.json(new UserService().getUser());
});

module.exports = router;