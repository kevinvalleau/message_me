export function submit_message() {
  $("#message_body").on("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault(); // important

      $("button").click();
      $(this).val(""); // <-- jQuery propre
    }
  });
}
