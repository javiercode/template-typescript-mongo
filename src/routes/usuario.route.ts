import {Router} from 'express';
import {test, list, registrar, editar, eliminar} from '../controllers/usuario.controller';

const router = Router ();
router.get('/usuario/test',test);
router.get('/usuario/list',list);
router.post('/usuario/create',registrar);
router.put('/usuario/edit/:id',editar);
router.delete('/usuario/delete/:id',eliminar);
export default router;