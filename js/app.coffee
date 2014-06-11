$ ->

  # ---------- PRODUCTION CODE ---------- #

  $(document).foundation();


  # ----- Add CSS to Orbit Bullet Container ----- #

  $('.orbit-bullets-container').addClass 'row'





  # ---------- DEVELEPMENT CODE ---------- #

  # ----- Toggle Classes on Sub-Header Links ----- #

  $link = $('.header-sub__nav-link')

  $link.click ->
    $(this).parent().toggleClass('header-sub__nav-item--active')
    $(this).toggleClass('header-sub__nav-link--active')
