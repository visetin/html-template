import { deleteAsync } from 'del';
import { gulpGlobs } from '../configs/index.js';

function clearPublic() {
  return deleteAsync([gulpGlobs.dest]);
}

export default clearPublic;
