$(document).ready(function () {

  var init = [{'title': 'Jarwo', 'rating': '5.5'}]
  localStorage.setItem('movies', JSON.stringify(init))

  var tableArray = JSON.parse(localStorage.getItem('movies'))

  function saveDataToLocal(data){
    localStorage.setItem('movies', JSON.stringify(data))
  }



  function buildTable(data) {
    var table = document.getElementById("movie-table")
    table.innerHTML = ''
    for (var i = 0; i < data.length; i++) {
      var row = "<tr><td data-column='title' data - order='desc' class='cell-title'>" + data[i].title + "</td ><td data-column='rating' data-order='desc'>" + data[i].rating + "<td><input type='button' value='Delete' class='button btn-delete'></td>"                
      table.innerHTML += row
    }
    

  }
  buildTable(tableArray)


  // handle add movie
  $("#add").click(function () {
    var movieTitle = $('#movie-name-input')
    var movieRating = $('#movie-rating-input')
    if (movieTitle.val() != "") {
      if (movieRating.val() != "") {
        var arrayData = {}
        arrayData.title = movieTitle.val()
        arrayData.rating = movieRating.val()
        tableArray.push(arrayData)

        movieTitle.val("")
        movieRating.val("")
        buildTable(tableArray)
        saveDataToLocal(tableArray)
      } else {
        window.alert("Movie rating harus diisi")
      }
    } else {
      window.alert("Movie title harus diisi")
    }


  })


  $('th').click(function () {

    var column = $(this).data('column')
    var order = $($(this)).data('order')

    if(column != "action"){
      if (order == 'desc') {
        $(this).data('order', 'asc')
        tableArray.sort((a,b) => a[column] > b[column] ? 1 : -1)
      } else {
        $(this).data('order', 'desc')
        tableArray.sort((a,b) => a[column] < b[column] ? 1 : -1)
      }
      buildTable(tableArray)
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
    cell.css({'background-color':'red'})
    var title = cell.find('td.cell-title').html()

    console.log(title)
    for(var i = 0; i < tableArray.length; i++){
      if(title == tableArray[i].title){
        tableArray.splice(i,1)
        break
      }
    }
    buildTable(tableArray)
    saveDataToLocal(tableArray)

    
    //cell.remove()
  })

  

})



