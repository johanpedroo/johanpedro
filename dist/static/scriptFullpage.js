window.jQuery(document).ready(function() {
  window.jQuery('#fullpage').fullpage(
    {
      menu: '#menu',
      sectionsColor: ['#999', '#37474F'],
      sectionSelector: '.section-fp',
      anchors: ['home', 'contato'],
      scrollBar: false,
      slidesNavigation: true,
      scrollingSpeed: 1000,
      fitToSection: false
    }
  );
});
