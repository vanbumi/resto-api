import mongoose from 'mongoose';
import { Router } from 'express';
import Resto from '../model/resto';

export default ({ config, db }) => {
  let api = Router();

  // '/v1/resto/add'
  api.post('/add', (req, res) => {
    let newRest = new Resto();
    newRest.name = req.body.name;

    newRest.save(err => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'Resto baru berhasil di simpan' });
    });
  });

  return api;
}