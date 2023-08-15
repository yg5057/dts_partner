document.addEventListener('DOMContentLoaded', function() {
    calendarInit(); // 페이지 로딩이 완료되면 달력 초기화 함수 호출
});

function calendarInit() {
    // 현재 날짜 가져오기
    var today = new Date();
    var utc = today.getTime() + (today.getTimezoneOffset() * 60 * 1000);
    var kstGap = 9 * 60 * 60 * 1000;
    today = new Date(utc + kstGap);

    // 달력에서 표시하는 날짜 객체 생성
    var thisMonth = new Date(today.getFullYear(), today.getMonth(), today.getDate());

    // 초기 변수 설정
    var currentYear = thisMonth.getFullYear();
    var currentMonth = thisMonth.getMonth();
    var currentDate = thisMonth.getDate();

    // 달력 렌더링 함수 호출
    renderCalendar(thisMonth);

    function renderCalendar(thisMonth) {
        currentYear = thisMonth.getFullYear();
        currentMonth = thisMonth.getMonth();
        currentDate = thisMonth.getDate();

        // 이전 달의 마지막 날과 요일 구하기
        var startDay = new Date(currentYear, currentMonth, 1);
        var prevDate = new Date(startDay);
        prevDate.setDate(0);
        var prevDay = prevDate.getDay();

        // 다음 달의 마지막 날과 요일 구하기
        var endDay = new Date(currentYear, currentMonth + 1, 0);
        var nextDate = endDay.getDate();
        var nextDay = endDay.getDay();

        // 연도와 월 표시
        var yearMonthElement = document.querySelector('.year-month');
        yearMonthElement.textContent = currentYear + '.' + (currentMonth + 1);

        var calendar = document.querySelector('.dates');
        calendar.innerHTML = '';

        // 지난 달 날짜 추가
        for (var i = prevDate.getDate() - prevDay + 1; i <= prevDate.getDate(); i++) {
            calendar.innerHTML += '<div class="day prev disable">' + i + '</div>';
        }

        // 이번 달 날짜 추가
        for (var i = 1; i <= nextDate; i++) {
            var dayClass = i === currentDate && currentMonth === today.getMonth() ? 'today' : 'current';
            calendar.innerHTML += '<div class="day ' + dayClass + '">' + i + '</div>';
        }

        // 다음 달 날짜 추가
        for (var i = 1; i <= (7 - nextDay == 7 ? 0 : 7 - nextDay); i++) {
            calendar.innerHTML += '<div class="day next disable">' + i + '</div>';
        }
    }

    // 이전 달로 이동 버튼 클릭 이벤트
    document.querySelector('.go-prev').addEventListener('click', function() {
        thisMonth = new Date(currentYear, currentMonth - 1, 1);
        renderCalendar(thisMonth);
    });

    // 다음 달로 이동 버튼 클릭 이벤트
    document.querySelector('.go-next').addEventListener('click', function() {
        thisMonth = new Date(currentYear, currentMonth + 1, 1);
        renderCalendar(thisMonth);
    });
}
