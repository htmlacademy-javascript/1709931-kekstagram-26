import {makePosts} from './data.js';
import {renderThumbnails} from './thumbnail.js';
import './form.js';
import './form-validation.js';

renderThumbnails(makePosts());
