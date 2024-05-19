import express, { Request, Response } from 'express';
import { getIpConfig, createIpConfig, updateIpConfig } from '../controllers/ip-config.controller';

const ipConfigRoute = require("express-promise-router")();

ipConfigRoute.get('/ip-config', getIpConfig);
ipConfigRoute.post('/ip-config', createIpConfig);
ipConfigRoute.put('/ip-config/:id', updateIpConfig);

export default ipConfigRoute;