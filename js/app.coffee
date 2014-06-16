$ ->

  # ---------- PRODUCTION CODE ---------- #

  $(document).foundation accordion:
    toggleable: false  # only close accordion panels when another is opened



  # ----- Add CSS to Orbit Bullet Container ----- #

  $('.orbit-bullets-container').addClass 'row'


  # ----- ACCORDION ----- #

  $accordionLink    = $('.accordion__link')

  $accordionLink.click ->
    $accordionLink.addClass('accordion__link--inactive')
    $(this).removeClass('accordion__link--inactive')


    # ... if .this-class than do THIS ... #



  # ---------- DEVELEPMENT CODE ---------- #

  # ----- Toggle Classes on Sub-Header Links ----- #

  $link = $('.header-sub__nav-link')

  $link.click ->
    $(this).parent().toggleClass('header-sub__nav-item--active')
    $(this).toggleClass('header-sub__nav-link--active')
