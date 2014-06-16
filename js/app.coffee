$ ->

  # ---------- PRODUCTION CODE ---------- #

  $(document).foundation accordion:
    toggleable: false  # only close accordion panels when another is opened



  # ----- Add CSS to Orbit Bullet Container ----- #

  $('.orbit-bullets-container').addClass 'row'


  # ----- ACCORDION ----- #

  $accordionLink  = $('.accordion__link')
  $accordionParts = $('.accordion__icon, .accordion__heading, [class*="js-accordion"].main-content__img')

  $accordionLink.click ->
    $accordionParts.addClass('hide')
    $accordionLink.addClass('accordion__link--inactive')
    $(this).removeClass('accordion__link--inactive')

    if $(this).hasClass('js-accordion-1') then $('.js-accordion-1').removeClass('hide')
    if $(this).hasClass('js-accordion-2') then $('.js-accordion-2').removeClass('hide')
    if $(this).hasClass('js-accordion-3') then $('.js-accordion-3').removeClass('hide')










  # ---------- DEVELEPMENT CODE ---------- #

  # ----- Toggle Classes on Sub-Header Links ----- #

  $headerSubLink = $('.header-sub__nav-link')

  $headerSubLink.click ->
    $(this).parent().toggleClass('header-sub__nav-item--active')
    $(this).toggleClass('header-sub__nav-link--active')
