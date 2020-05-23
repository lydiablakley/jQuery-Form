
    $(document).ready(function(){
    $("#submit").on("click", function() {
    $.getJSON('db.json')
    .done(function(data) {
   
    var number = $("#reference").val();
        $("#customerid").val(data[number][0].customerid);
        $("#title").val(data[number][0].title).change;
        $("#firstNameField").val(data[number][0].firstname);
        $("#lastname").val(data[number][0].lastname);
        $("#DOB").val(data[number][0].DOB);   
        $("#contactnumber").val(data[number][0].contactnumber);
        $("#emailaddress").val(data[number][0].emailaddress);
        $("#address").val(data[number][0].address);
        $("#city").val(data[number][0].city);
        $("#postcode").val(data[number][0].postcode);
        $("#departure").val(data[number][0].departure);
        $("#destination").val(data[number][0].destination);
        $("#departuredate").val(data[number][0].departuredate);
        $("#returndate").val(data[number][0].returndate);
        $("#airline").val(data[number][0].airline);
        $("#quotation").val(data[number][0].quotation);
  })
    
    .fail(function(){
        alert("error")
       
    });
    });
    })


$(document).ready(function(){
        if(localStorage.getItem("localStorage") == "true"){
            $("#cookies").hide();
        }
        $("#accept").on("click", function(){
            localStorage.setItem("localStorage", "true");
            $("#cookies").hide();
        });
    });
    
   




$(document).ready(function() {

 $('#customerform').hide(); //Initially form wil be hidden.

  $('#submit').click(function() {
   $('#customerform').show();//Form shows on button click

   });
 });
    

$(document).ready(function() {
// Tooltip only Text
$('.masterTooltip').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});




$(document).ready(function() {
// Tooltip only Text
$('.info').hover(function(){
        // Hover over code
        var title = $(this).attr('title');
        $(this).data('tipText', title).removeAttr('title');
        $('<p class="tooltip"></p>')
        .text(title)
        .appendTo('body')
        .fadeIn('slow');
}, function() {
        // Hover out code
        $(this).attr('title', $(this).data('tipText'));
        $('.tooltip').remove();
}).mousemove(function(e) {
        var mousex = e.pageX + 20; //Get X coordinates
        var mousey = e.pageY + 10; //Get Y coordinates
        $('.tooltip')
        .css({ top: mousey, left: mousex })
});
});





$(document).ready(function(){

      var list = $(".list li");
      var numToShow = 3;
      var button = $("#learnmore");
      var numInList = list.length;
      list.hide();
      if (numInList > numToShow) {
        button.show();
      }
      list.slice(0, numToShow).show();

      button.click(function(){
          var showing = list.filter(':visible').length;
          list.slice(showing - 1, showing + numToShow).fadeIn();
          var nowShowing = list.filter(':visible').length;
          if (nowShowing >= numInList) {
            button.hide();
          }
      });

});


$(document).ready(function(){
   $('.submit').click(function(){
        if ($('#reference').val() == ""){
            alert('Please enter your reference number to view your saved quotation');
        }
    });
});



$(document).ready(function(){
  $("input").focus(function(){
    $(this).css("background-color", "lightgrey");
  });
  $("input").blur(function(){
    $(this).css("background-color", "white");
  });
});

$(document).ready(function(){
$("#close").click(function() {
 $('#customerform').hide(); 
})
});


$(document).ready(function(){
$('#DOB').datepicker({ dateFormat: 'dd-mm-yy' }).val();
});


$(document).ready(function(){
$("#firstname_error").hide();
         var error_fname = false;
   $("#firstNameField").focusout(function(){
            check_fname();
         });
     function check_fname() {
            var pattern = /^[a-zA-Z]*$/;
            var fname = $("#firstNameField").val();
            if (pattern.test(fname) && fname !== '') {
               $("#firstname_error").hide();
               
            } else {
               $("#firstname_error").html("Firstname should only contain characters");
               $("#firstname_error").show();
             
               error_fname = true;
            }
         }
});

$(document).ready(function(){
    $("#lastname_error").hide();
   var error_sname = false;
      $("#lastname").focusout(function() {
            check_sname();
         });
      function check_sname() {
            var pattern = /^[a-zA-Z]*$/;
            var sname = $("#lastname").val()
            if (pattern.test(sname) && sname !== '') {
               $("#lastname_error").hide();
             
            } else {
               $("#lastname_error").html("Lastname should only contain characters");
               $("#lastname_error").show();
        
               error_fname = true;
            }
         }});





$(document).ready(function(){
    $("departure_error").hide();
   var error_sname = false;
      $("#departure").focusout(function() {
            check_sname();
         });
      function check_sname() {
            var pattern = /^[a-zA-Z]*$/;
            var sname = $("#departure").val()
            if (pattern.test(sname) && sname !== '') {
               $("#departure_error").hide();
             
            } else {
               $("#departure_error").html("Please enter a valid departure location");
               $("#departure_error").show();
        
               error_fname = true;
            }
         }});




$(document).ready(function(){
    $("#destination_error").hide();
   var error_sname = false;
      $("#destination").focusout(function() {
            check_sname();
         });
      function check_sname() {
            var pattern = /^[a-zA-Z]*$/;
            var sname = $("#destination").val()
            if (pattern.test(sname) && sname !== '') {
               $("#destination_error").hide();
             
            } else {
               $("#destination_error").html("Please enter a valid destination");
               $("#destination_error").show();
        
               error_fname = true;
            }
         }});









$(document).ready(function(){
    $("#number_error").hide();
   var error_sname = false;
      $("#contactnumber").focusout(function() {
            check_sname();
         });
      function check_sname() {
            var pattern = /^\d*$/;
            var sname = $("#contactnumber").val()
            if (pattern.test(sname) && sname !== '') {
               $("#number_error").hide();
             
            } else {
               $("#number_error").html("Please enter a valid contact number");
               $("#number_error").show();
        
               error_fname = true;
            }
         }});




$(document).ready(function (){
     $("#email_error").hide();
     var error_email = false;
     $("#emailaddress").focusout(function(){
check_email() ;
     });
function check_email() {
            var pattern = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            var email = $("#emailaddress").val();
            if (pattern.test(email) && email !== '') {
               $("#email_error").hide();
            } else {
               $("#email_error").html("Please enter a valid email address");
               $("#email_error").show();
               error_email = true;
            }
         }
});



  $( function() {
    $( "#DOB" ).datepicker();
  } );

 $( function() {
    $( "#departuredate" ).datepicker();
  } );

 $( function() {
    $( "#returndate" ).datepicker();
  } );

$(document).ready(function (){
    $('#customerid').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
})
});

$(document).ready(function (){
    $('#address').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
})
});

$(document).ready(function (){
    $('#city').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
})
});

$(document).ready(function (){
    $('#postcode').keypress(function (e) {
    var regex = new RegExp("^[a-zA-Z0-9]+$");
    var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
    if (regex.test(str)) {
        return true;
    }
    e.preventDefault();
    return false;
})
});


$(document).ready(function() {
  
  var btn = $('#button');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });

});






