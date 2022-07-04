import {makePosts} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';
import './form-validation.js';
import {changePhotoScale} from './photo-scale.js';
import './photo-filter.js';

renderThumbnails(makePosts());
changePhotoScale();
