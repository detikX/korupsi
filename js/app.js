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
  type: 'GET',
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
            <div class="ex">${ex}</div>
            <small class="font-bold">${hukuman} Penjara</small>
            <hr>
            <p>${short}</p>
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
      var img = response[dataID].img;
      var ex = response[dataID].ex;
      var namanya = response[dataID].nama;
      // var sumber = response[dataID].sumber;
      // <div class="modal-image"><img src="${img}" alt="${namanya}" title="${namanya}" loading="lazy" /></div>
      //           <p class="font-stdbig">${modal}</p>
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
              <h2>${ex}</h2>
              <p class="subtitle">
                ${namanya}
              </p>
            </header>
            <div class="l-contained">
                <ul class="timeline-list">
                  <li>
                      <div class="content">
                    <h3>2018</h3>
                
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
                    </p>
                    </div>
                  </li>
                  <li>
                      <div class="content">
                    <h3>2019</h3>
                  
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
                    </p>
                    </div>
                  </li>
                  <li>
                      <div class="content">
                    <h3>2020</h3>
                  
                
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
                    </p>
                    </div>
                  </li>
                  
    
                  
                  <li>
                      <div class="content">
                    <h3>Saat Ini</h3>
                    
                
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut quam felis, rutrum nec enim non, sodales facilisis purus. Vestibulum viverra egestas ipsum eget commodo. Nullam aliquet lorem vitae nulla dictum vestibulum sed quis tellus. Sed diam diam, facilisis tincidunt volutpat nec, auctor quis magna. Proin sed nunc iaculis ipsum scelerisque tincidunt. Cras eleifend leo tellus, fermentum finibus tortor fringilla eu.
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