
import * as $ from 'jquery';
import './selectize';
import './jquery.magnific-popup-inline';

import '../stylesheets/day.scss';
//import '../stylesheets/night.scss';


$(function($) {
  "use strict";
  $('select').selectize({
    create: true,
    sortField: {
      field: 'text',
      direction: 'asc'
    },
    dropdownParent: 'body'
  });

});

