$ ->

  # TEST SUB-HEADER TRIANGLES DURING DEV PROCESS

  $link = $('.header-sub__nav-link')

  $link.click ->
    $(this).parent().toggleClass('header-sub__nav-item--active')
    $(this).toggleClass('header-sub__nav-link--active')

  $(document).foundation();
