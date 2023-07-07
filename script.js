$(".container").hide();
        $(".ellip").hide();
        window.onload = function (){
          $(".container").hide();
          $(".ellip").hide();
        
          setTimeout(function () {
            $(".container").show();
            $(".load_screen").fadeOut(500);
            $(".ellip").show();
        
            $(".fa-phone").click(function () {
              setTimeout(function () {
                navigator.vibrate && navigator.vibrate(60);
              }, 50);
            });
        
            var span = document.querySelector(".time_msgt");
            var date = new Date();
            var HH = date.getHours();
            var MM = date.getMinutes();
            MM = (MM < 10) ? "0" + MM : MM;
            var am_pm = "PM";
            if (HH == 0) {
              am_pm = "PM";
            } else if (HH >= 12) {
              am_pm = "PM";
            } else {
              am_pm = "AM";
            }
            if (HH > 12) {
              HH = HH - 12;
            } else {
              HH = HH;
            }
            var TT = HH + ":" + MM + " " + am_pm;
            span.innerHTML = TT;
          }, 3000);
        };
        

        $(".real_chat_send").click(sendMessage);

$("#message").keypress(function(event) {
  if (event.which === 13){
    sendMessage();
  }
});

function sendMessage() {
  var d = new Date();
  var h = d.getHours();
  var t = d.getMinutes();
  h = (h < 10) ? "0" + h : h;
  t = (t < 10) ? "0" + t : t;
  if (h > 12) {
    h = h - 12;
  } else {
    h = h;
  }
  var time = h + ":" + t;

  document.querySelector("#message").focus();
  var mmssgg = document.querySelector("#message");
  mmssgg.addEventListener("focus", () => {
    $(".conversation").css("height", "45%");
  });
  mmssgg.addEventListener("focusout", () => {
    $(".conversation").css("height", "65%");
  });

  var val = $("#message").val();
  if (val !== "") {
    var elem = $("<div class='re' id='schat'><span class='sechat'>" + val + "</span> <span class='stime'>" + time + "<i class='material-icons tick' style='color:#aaa;'>done_all</i></span></div>");
    $(".conversation").append(elem);
    $("#message").val("");
    var mmssgg = document.querySelector("#message").focus();
    $(".conversation").scrollTop($(".conversation")[0].scrollHeight);

    setTimeout(function() {
      $(".tick").css("color", "#4fc3f7");
      $(".real_chat_online").text("typing...").css("color", "#3d7");
      setTimeout(function() {
        if (val == "Hi" || val == "hi") {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hello</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          navigator.vibrate(100);
          $(".real_chat_online").text("online").css("color", "#fff");
        } else if (val == "Hello" || val == "hello") {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Hi</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          navigator.vibrate(100);
          $(".real_chat_online").text("online").css("color", "#fff");
        } else if (val == "How are you?" || val == "how are you?") {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>I'm fine, and you..?</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          navigator.vibrate(100);
          $(".real_chat_online").text("online").css("color", "#fff");
        } else if (val == "yes" || val == "Yes") {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Ok i got your point</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          val = val.trim();
          navigator.vibrate(100);
          $(".real_chat_online").text("online").css("color", "#fff");
        } else if (val == "no" || val == "No") {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>Thats so sad</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          navigator.vibrate(900);
          $(".real_chat_online").text("online").css("color", "#fff");
        } else {
          $(".conversation").append("<div class='re' id='rchat'><span class='rechat'>It is a sunny day</span> <span class='rtime'>" + time + "</span></div>");
          $(".conversation").scrollTop($(".conversation")[0].scrollHeight);
          navigator.vibrate(100);
          $(".real_chat_online").text("online").css("color", "#fff");
        }
      }, 2000);
    }, 1000);
  }
}
  


        var msg = document.querySelector("#message");
        var mic = document.querySelector(".real_chat_mic");
        var send = document.querySelector(".real_chat_send");
        send.style.display = "none";


        msg.addEventListener("input", myFun);
        function myFun() {
          if (msg.value.length > 0) {
            mic.style.display = "none";
            send.style.display = "block";
            $(".real_cam").hide();
          } else if (msg.value.length >= 12) {
            return false;
          }
          else {
            send.style.display = "none";
            mic.style.display = "block";
            $(".real_cam").show();
            $(".real_link").show();
          }
        }

        //TEMPORARY HIDES 

        $("#menu").toggle();
        $(".ellip").click(function () {
          $("#menu").toggle(300);
          $(".container").click(function () {
            $("#menu").hide(200);
          });
        });
        $(".status").click(function () {
          $(".chats_container").hide(300);
          $(".status_container").show(300);
          $(".calls_container").hide(300);
          $("#menu").css({"height": "80px"});
          $(".status").css({"border-bottom": "2px solid #fff"});
          $(".calls").css({"border-bottom": "0px"});
          $(".chats").css({"border-bottom": "0px"});
          $(".l2").hide();
          $(".l4").hide();
          $(".l3").hide();
          $(".l1").html("Status privacy");
        });
        $(".chats").click(function () {
          $(".calls_container").hide(300);
          $(".status_container").hide(300);
          $(".chats_container").show(300);
          $("#menu").css({"height": "210px"});
          $(".chats").css({"border-bottom": "2px solid #fff"});
          $(".calls").css({"border-bottom": "0px"});
          $(".status").css({"border-bottom": "0px"});
          $(".l2").show();
          $(".l4").show();
          $(".l3").show();
          $(".l1").html("New Group");
        });
        $(".calls").click(function () {
          $(".calls_container").show(300);
          $(".status_container").hide(300);
          $(".chats_container").hide(300);
          $("#menu").css({"height": "50px"});
          $(".l2").hide();
          $(".l4").hide();
          $(".l3").hide();
          $(".l1").html("<a>Contact me</a>");
          $(".l5").show();
          $(".calls").css({"border-bottom": "2px solid #fff"});
          $(".status").css({"border-bottom": "0px"});
          $(".chats").css({"border-bottom": "0px"});
        });


        //SETTINGS
        $(".settings_container").hide();
        $(".l5").click(function () {
          $(".real_chat").hide();
          $(".container").hide(400);
          $(".settings_container").slideToggle(300);
          $("#menu").fadeToggle(300);
          $(".ellip").hide();
        });
        $(".settings_back").click(function () {
          $(".settings_container").slideToggle(400);
          $(".container").show(600);
          $(".ellip").show();
        });


        //CAMERA
        $(".camera_container").hide();
        $(".camera").click(function () {
          $(".container").fadeToggle(400);
          $(".camera_container").show();
          $("#menu").hide();
          $(".ellip").hide();
        });
        $(".camera_back").click(function () {
          $(".camera_container").fadeToggle(400);
          $(".container").fadeToggle(500);
          $(".ellip").show();
        });



        $(".iconsp").hide();
        $(".invi").hide();
        $(".icon1").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/shubhansh.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });



        $(".icon2").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/ishita.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });


        $(".icon3").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/anurag.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });


        $(".icon4").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/kirti.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });




        $(".icon5").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/devesh.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });



        $(".icon6").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/himanshu.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });



        $(".icon7").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/prerak.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });




        $(".icon8").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/avni.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });


        $(".icon9").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/swarnika.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });


        $(".icon10").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/harshita.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });


        $(".icon11").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/ayushi.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });

        $(".icon12").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/anni.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });

        $(".icon13").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/kavya.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });

        $(".icon14").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/isha.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });

        $(".icon15").click(function () {
          $(".iconsp").css({"border-radius": "0px", "background": "url(/Images/jheel.jpg)", "background-size": "cover"});
          $(".iconsp").show();
          $(".invi").show();
          $(".invi").click(function () {
            $(".iconsp").hide();
            $(".invi").hide();
          });
        });




        $(".status_down2").hide();
        $(".view_status_container").hide();
        $(".li_status1").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/ayush.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/ayush.jpg)", "background-size": "cover"});
          $(".status_down2").show();
          $(".status_down").hide();
          $(".view_name").text("My status");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });



        $(".li_status2").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/devesh.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/devesh.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_name").text("Devesh Sharma");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });


        $(".li_status3").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/shubhansh.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/shubhansh.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_name").text("Subhansh Garg");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });

        $(".li_status4").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/harshita.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/harshita.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_name").text("Harshita");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });


        $(".li_status5").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/ayushi.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_icon").css({"background": "url(/Images/ayushi.jpg)", "background-size": "cover"});
          $(".view_name").text("Ayushi");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });

        $(".li_status6").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/avni.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_icon").css({"background": "url(/Images/avni.jpg)", "background-size": "cover"});
          $(".view_name").text("Avni");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });


        $(".li_status7").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/kirti.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_icon").css({"background": "url(/Images/kirti.jpg)", "background-size": "cover"});
          $(".view_name").text("Kirti");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });


        $(".li_status8").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/anurag.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/anurag.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_name").text("Anurag");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });


        $(".li_status9").click(function () {
          $(".view_status_container").show();
          $(".view_status_container").css({"background": "url(/Images/himanshu.jpg)", "background-size": "cover"});
          $(".view_icon").css({"background": "url(/Images/himanshu.jpg)", "background-size": "cover"});
          $(".status_down2").hide();
          $(".status_down").show();
          $(".view_name").text("Himanshu");
          setTimeout(function () {
            $(".view_status_container").hide();
            $(".status_down").show();
          }, 8000);
        });
        $(".view_back").click(function () {
          $(".view_status_container").hide();
        });




        var d = new Date();
        var h = d.getHours();
        var t = d.getMinutes();
        h = (h < 10) ? "0" + h : h;
        t = (t < 10) ? "0" + t : t;
        if (h > 12) {
          h = h - 12;
        } else {
          h = h;
        }
        time = h + ":" + t;





        $(".real_chat").hide();
        $(".person1").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/shubhansh.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Shubhansh Garg");
          $(".container").hide();
          $(".rechats").text("Buddy, send me assignment");
          $(".time_msgt").css({"color": "dimgrey"});
          $(".msgcol1").hide();
          $(".rtime").text(time);
        });

        $(".msg1").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/shubhansh.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Shubhansh Garg");
          $(".container").hide();
          $(".rechats").text("Buddy, send me assignment");
          $(".time_msgt").css({"color": "dimgrey"});
          $(".msgcol1").hide();
          $(".rtime").text(time);
        });





        $(".person2").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/ishita.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Ishita");
          $(".container").hide();
          $(".rechats").text("Hey,do you have the assignment");
          $(".time_msg1").css({"color": "dimgrey"});
          $(".msgcol2").hide();
          $(".rtime").text(time);
        });

        $(".msg2").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/ishita.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Ishita");
          $(".container").hide();
          $(".rechats").text("Hey,do you have the assignment");
          $(".time_msg1").css({"color": "dimgrey"});
          $(".msgcol2").hide();
          $(".rtime").text(time);
        });





        $(".person3").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/anurag.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Anurag");
          $(".container").hide();
          $(".rechats").text("Bhai assignment bhej de na");
          $(".time_msg2").css({"color": "dimgrey"});
          $(".msgcol3").hide();
          $(".rtime").text(time);
        });

        $(".msg3").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/anurag.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Anurag");
          $(".container").hide();
          $(".rechats").text("Bhai assignment bhej de na");
          $(".time_msg2").css({"color": "dimgrey"});
          $(".msgcol3").hide();
          $(".rtime").text(time);
        });






        $(".person4").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/kirti.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Kirti");
          $(".container").hide();
          $(".rechats").text("mene suna teko paper mil gya cc ka");
          $(".time_msg3").css({"color": "dimgrey"});
          $(".msgcol4").hide();
          $(".rtime").text(time);
        });

        $(".msg4").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/kirti.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Kirti");
          $(".container").hide();
          $(".rechats").text("mene suna teko paper mil gya cc ka");
          $(".time_msg3").css({"color": "dimgrey"});
          $(".msgcol4").hide();
          $(".rtime").text(time);
        });







        $(".person5").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/devesh.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Devesh");
          $(".container").hide();
          $(".rechats").text("Lets party buddy!!!!");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });

        $(".msg5").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/devesh.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Devesh");
          $(".container").hide();
          $(".rechats").text("Lets party buddy!!!!");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });









        $(".person6").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/himanshu.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Himanshu");
          $(".container").hide();
          $(".rechats").text("bhai aaja aaj party flat pe");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });

        $(".msg6").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/himanshu.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Himanshu");
          $(".container").hide();
          $(".rechats").text("bhai aaja aaj party flat pe");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });








        $(".person7").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/prerak.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Prerak");
          $(".container").hide();
          $(".rechats").text("hola, whatsup");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });

        $(".msg7").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/prerak.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Prerak");
          $(".container").hide();
          $(".rechats").text("hola, whatsup");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });







        $(".person8").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/anni.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Anni");
          $(".container").hide();
          $(".rechats").text("assignment bhej");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });

        $(".msg8").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/anni.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Anni");
          $(".container").hide();
          $(".rechats").text("assignment bhej");
          $(".real_today").text("Yesterday");
          $(".rtime").text(time);
        });





        $(".person9").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/swarnika.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Swarnika");
          $(".container").hide();
          $(".rechats").text("Dont message me");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg9").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/swarnika.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Swarnika");
          $(".container").hide();
          $(".rechats").text("Dont message me");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });






        $(".person10").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/harshita.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Harshita");
          $(".container").hide();
          $(".rechats").text("I have a serious issue with you, please..");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg10").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/harshita.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Harshita");
          $(".container").hide();
          $(".rechats").text("I have a serious issue with you, please..");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });




        $(".person11").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/ayushi.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Ayushi");
          $(".container").hide();
          $(".rechats").text("thank you for the assignment");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg11").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/ayushi.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Ayushi");
          $(".container").hide();
          $(".rechats").text("thank you for the assignment");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });






        $(".person12").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/avni.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Avni");
          $(".container").hide();
          $(".rechats").text("Thank you");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg12").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/avni.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Avni");
          $(".container").hide();
          $(".rechats").text("Thank you");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });




        $(".person13").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/kavya.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Kavya");
          $(".container").hide();
          $(".rechats").text("ha ha aaja aaja");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg13").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/kavya.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Kavya");
          $(".container").hide();
          $(".rechats").text("ha ha aaja aaja");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });




        $(".person14").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/isha.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Isha");
          $(".container").hide();
          $(".rechats").text("are you done ith the assignment please?");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg14").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/isha.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Isha");
          $(".container").hide();
          $(".rechats").text("are you done ith the assignment please?");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });



        $(".person15").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/jheel.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Jheel");
          $(".container").hide();
          $(".rechats").text("noida is so much fun");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });

        $(".msg15").click(function () {
          $(".real_chat").show();
          $(".real_chat_icon").css({"background": "url(/Images/jheel.jpg)", "background-size": "cover"});
          $(".real_chat_name").text("Jheel");
          $(".container").hide();
          $(".rechats").text("noida is so much fun");
          $(".real_today").text("December");
          $(".rtime").text(time);
        });



        $(".real_chat").click(function () {
          $("#menu").hide();
        });
        $(".real_chat_back").click(function () {
          $("#menu").hide();
          $("#schat").remove();
          $("#rchat").remove();
          $(".real_chat").hide();
          $(".container").show();
        });
