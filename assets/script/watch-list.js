$(document).ready(function () {

  // handle add movie
  $("#add").click(function () {
    var movieName = $('#movie-name-input')
    var movieRating = $('#movie-rating-input')
    if (movieName.val() != "") {
      if (movieRating.val() != "") {
        $(".movie-table").append("<tr><td>" + movieName.val() + "</td><td>" + movieRating.val() + "</td><td><input type='button' value='Delete' class='button btn-delete'></td></tr>")
        movieName.val("")
        movieRating.val("")
      } else {
        window.alert("Movie rating harus diisi")
      }
    } else {
      window.alert("Movie title harus diisi")
    }


  })

  // Filter berdasarkan rating
  // $(".rating-filter").click(function () {
  //   var tuker = 'true'
  //   var rows = $(".movie-table tr")
  //   window.prompt("bb" + rows[1])
  //   rows.each(function(){
  //     $(this).each(function(){
  //       console.log($(this).)
  //     })
  //   })
  //   while (tuker) {

  //     tuker = 'false'
  //     for (var i = 1; i < rows.length; i++) {
  //       x = rows[i][1]
  //     }
  //   }
  // })
  $('th').click(function(){
    
    var column = $(this).data('column')
    var order = $($(this)).data('order')
    window.prompt("th clicked " + column + " "+  order)

    if(order == 'desc'){
      $(this).data('order', 'asc')
    }else{
      $(this).data('order', 'desc')
    }
  })


  // handle searching data

  $("#search-movie").keyup(function () {
    search_table($(this).val())
  })

  function search_table(text) {
    var index = 0;
    $(".movie-table tr").each(function () {
      var found = 'false'

      $(this).each(function () {

        if ($(this).text().toLowerCase().indexOf(text.toLowerCase()) >= 0) {
          found = 'true'
        }


      })
      if (found == 'true' || index == 0) {
        $(this).show()
        console.log("show" + $(this).val())
      } else {
        $(this).hide()
        console.log("hide")
      }
      index++;

    })
  }

  // handle delete row
  $("body").on('click', '.btn-delete', function () {
    var cell = $(this).closest("tr")
    cell.remove()
  })

})



