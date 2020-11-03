
import 'selectize';
import 'magnific-popup/dist/jquery.magnific-popup';

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

  if($('#profile').length){
    $('#profile').magnificPopup({
      type:'inline',
      midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
  }

});

