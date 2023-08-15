const calendarEl = document.getElementById("calendar")

let calendar;

calendar_rendering();

function calendar_rendering() {
  calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: "dayGridMonth",
  });
  calendar.render();
}