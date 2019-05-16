"use strict";
  document.addEventListener("DOMContentLoaded", function(e) {
    var section = document.getElementById("section_home"),
      notification = document.getElementById("np_message_notification");

    window.addEventListener('scroll', function() {
      var scrollAmount = window.pageYOffset,
        scrollPos = window.scrollY,
        windowScrollHeight = (section.clientHeight) - 912;
        if(scrollAmount > 0 && scrollPos > windowScrollHeight) {
          notification.style.position = "inherit";
          notification.style.transition = "position 300ms ease 500ms";
        }
        else if (scrollAmount < 0 || scrollPos < windowScrollHeight) {
          notification.style.position = "sticky";
          notification.style.transition = "position 300ms ease 500ms";
        }
    });
  });
