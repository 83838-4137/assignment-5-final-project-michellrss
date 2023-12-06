$(document).ready(function() {
    $('.drawer').drawer();
  });

  $('.drawer').drawer({
    class: {
      nav: 'drawer-nav',
      toggle: 'drawer-toggle',
      overlay: 'drawer-overlay',
      open: 'drawer-open',
      close: 'drawer-close',
      dropdown: 'drawer-dropdown'
    },
    iscroll: {
      // Configuring the iScroll
      // https://github.com/cubiq/iscroll#configuring-the-iscroll
      mouseWheel: true,
      preventDefault: false
    },
    showOverlay: true
  });

  IScroll = require('iscroll');
var $ = jQuery = require('jquery');
var drawer = require('jquery-drawer');
var dropdown = require('bootstrap/js/dropdown.js'); // bootstrap v3.3.7
// var dropdown = require('bootstrap/dist/js/umd/dropdown.js'); // bootstrap v4.0.0-alpha