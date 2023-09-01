import express from "express";
import historias from "../controllers/historias/create.js";
import oneh from '../controllers/historias/get_one.js'
import destroyh from "../controllers/historias/destroy.js";
import updateh from '../controllers/historias/update.js'
import todos from '../controllers/historias/get_public.js'
import exist_publicacion from '../middlewares/publicaciones/exist_pubicacion.js'
import passport from '../middlewares/passport.js'
import destinoSchemas from '../schemas/publicacion.js'
import validator from '../middlewares/validator.js'

let router = express.Router()
const { create } = historias
const { getOne } = oneh
const { destroy } = destroyh
const { update } = updateh
const { read } = todos

router.post('/', passport.authenticate("jwt", { session: false }), validator(destinoSchemas), create)

router.get('/', read)
router.get('/:id', getOne)

router.put('/:id', passport.authenticate('jwt', { session: false }), update)

router.delete('/:id', passport.authenticate('jwt', { session: false }), destroy)

export default router
