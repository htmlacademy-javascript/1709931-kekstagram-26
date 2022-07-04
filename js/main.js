import {makePosts} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';
import './form-validation.js';
import {changePhotoScale} from './photo-scale.js';
import {changeEffect} from './photo-effect.js';

renderThumbnails(makePosts());
changePhotoScale();
changeEffect();
