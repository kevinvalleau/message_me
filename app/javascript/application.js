// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails";
import "controllers";
import { scroll_bottom } from "utils/scroll";
import { submit_message } from "utils/submit";

$(document).on("turbo:load", function () {
  $(".ui.dropdown").dropdown();
  $(".message .close").on("click", function () {
    $(this).closest(".message").transition("fade");
  });
  submit_message();
  scroll_bottom();
});
import "channels";
