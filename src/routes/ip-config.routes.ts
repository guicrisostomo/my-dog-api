import express, { Request, Response } from 'express';
import { getIpConfig, createIpConfig, updateIpConfig } from '../controllers/ip-config.controller';

const router = require("express-promise-router")();

router.get('/ip-config', getIpConfig);
router.post('/ip-config', createIpConfig);
router.put('/ip-config/:id', updateIpConfig);

export default router;