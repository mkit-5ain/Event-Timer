var timer = setInterval(function () {
    var endTime = new Date("Dec 31, 2021 23:59:59");
    endTime = (Date.parse(endTime) / 1000);

    var now = new Date();
    now = (Date.parse(now) / 1000);

    var timeline = endTime - now;
    // Math.floor(null) NaN 대신 0 반환
    // 무조건 정수 반환
    var days = Math.floor(timeline / 86400);
    var hours = Math.floor((timeline - (days * 86400)) / 3600);
    var minutes = Math.floor((timeline - (days * 86400) - (hours * 3600 )) / 60);
    var seconds = Math.floor((timeline - (days * 86400) - (hours * 3600) - (minutes * 60)));

    if ( days < "10" ) { days = "0" + days; }
    if ( hours < "10" ) { hours = "0" + hours; }
    if ( minutes < "10" ) { minutes = "0" + minutes; }
    if ( seconds < "10" ) { seconds = "0" + seconds; }

    $(".days").html(days);
    $(".hours").html(hours);
    $(".minutes").html(minutes);
    $(".seconds").html(seconds);

    if (timeline < 0) {
      clearInterval(timer);
      $(".title").text("RAFFLE CLOSED ON");
      $(".timer-wrap").addClass('closed');
      $(".timer-wrap").html("<div class=\"title\">2021/04/09 23:59:59 KST</div>");
      $(".cta-btn a").click(function(e) {
        e.preventDefault();
        alert('본 라플은 마감되었습니다.');
      })
    }
}, 1000);
