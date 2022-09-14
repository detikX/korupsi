// alert(1);

// $(window).scroll(function () {
//   //zoom
//   var top = $(window).scrollTop(),
//     scale = top / 2000;
//   $(".inner").css({
//     transform: "scale(" + scale + "," + scale + ")",
//     "-webkit-transform": "scale(" + scale + "," + scale + ")",
//   });

//   var scroll = $(window).scrollTop();
//   // console.log(scroll);
//   var header = $("header");
//   return scroll > 20 ? header.addClass("stuck") : header.removeClass("stuck");
//   // }
// });

$(window).on("load", function () {
  $(".preloader").fadeOut(10000);
  $(".preloader").remove();
});
$(() => {
  new WOW().init();
  var mobile = $(".menu").addClass("mob");
  $(document).on("click", ".m-menu", () => {
    $(".menu").fadeIn("fast");
    // alert(1);
  });

  if ($(window).width() > 768) {
    // $(".m-menu").click(() => {
    // });
  }

  /*
  function count($this) {
    var current = parseInt($this.html(), 10);
    if (!$this.data("isCounting") && current < $this.data("count")) {
      $this.html(++current);
      $this.data("isCounting", true);
      setTimeout(function () {
        $this.data("isCounting", false);
        count($this);
      }, 1);
    }
  }

  $(".count").each(function () {
    $(this).data("count", parseInt($(this).html(), 10));
    $(this).html("28200");
    $(this).data("isCounting", false);
  });

  function startCount() {
    $(".count").each(function () {
      count($(this));
    });
  }
  startCount();
  */
});

$.ajax({
  url: 'js/data.json',
  // url:'https://detikx.github.io/korupsi/js/data.json',
  type: 'GET',
//   beforeSend: function(){
//     $(".tunggu").show();

// },
// complete: function(){
//     $(".tunggu").hide();

// },
  success: ((response) => {
    // console.log(response);
    var a;
    for (a = 0; a < response.length; a++) {
      var id_ = response[a].id;
      var name = response[a].nama;
      var ex = response[a].ex;
      var short = response[a].short;
      var img = response[a].img;
      var hukuman = response[a].hukuman;
      $(".grid").append(
        `
        <div class="grid__item">
          
          <div class="image"><img src="${img}"></div>
          <div class="details">
          
            <div class="name">${name}</div>
            <br>
            <div class="ex">Eks ${ex}</div>
            <br>
            <button class="btn btn-modal namaKoruptor" data-toggle="modal" data-target="#modalKoruptor" data-id="${id_}">Simak Kasusnya</button>
          </div>
        </div>
        `
      )
    }

    $(".namaKoruptor[data-target='#modalKoruptor']").on("click", function (i, x) {
      var dataID = $(this).attr("data-id") - 1;
      // console.log(dataID);
      // console.log(response[dataID].modal);
      var modal = response[dataID].modal;
      var img = response[dataID].imgmodal;
      var ex = response[dataID].ex;
      var namanya = response[dataID].nama;
      var usia = response[dataID].usia;
      var ttl = response[dataID].ttl;
      var short = response[dataID].short;
      var case_ = response[dataID].case;
      var lapas = response[dataID].lapas;
      var hukuman = response[dataID].hukuman;
      var checking = (short === case_) ? "" : short

      $("#modalKoruptor").modal("show");

      $("#modalKoruptor .modal-content").html(`
            <div class="modal-body">
            <div class="block-content t-block-teal l-block-spacing">
            <div class="close_" data-dismiss="modal">
              <i class="fa fa-times"></i>
            </div>
            <header class="heading-group">
              <div class="image-org">
                <img src="${img}">
              </div>
              <h2>Eks ${ex}</h2>
              <p class="subtitle">
                ${namanya}
              </p>
            </header>
            <div class="l-contained">
                <ul class="timeline-list">
                  <li>
                      <div class="content">
                        <h3>Usia</h3>
                        <div class="color-white font-bold">${usia}</div>
                        <div class="color-white">${ttl}</div>
                      </div>
                  </li>
                  <li>
                      <div class="content">
                        <h3>Kasus</h3>
                        <p>
                          ${checking} ${case_}
                        </p>
                      </div>
                  </li>
                  <li>
                      <div class="content">
                        <h3>Hukuman Penjara</h3>
                        <p>
                          ${hukuman}
                        </p>
                      </div>
                  </li>
                  <li>
                      <div class="content">
                        <h3>Lapas</h3>
                        <p>
                          ${lapas}
                        </p>
                      </div>
                  </li>
                </ul>
                
                    
                
              </div>
              <div class="text-center mx-auto">
              <button class="btn btn-modal" data-dismiss="modal">Tutup</button>
            </div>
            </div>

           
            </div>
        `);
    });

  })
})

$(".scroll-down").click(() => {
  $('html, body').animate({
    scrollTop: $("#first").offset().top
  }, 500);

})


$(".contents").hide()
$("#cekit").click(()=>{
  $(".contents").fadeIn()
  $('html, body').animate({
    scrollTop: $(".contents").offset().top
  }, 500);
})

$(".to-up").click(()=>{
  $("html, body").animate({ scrollTop: 0 });
})