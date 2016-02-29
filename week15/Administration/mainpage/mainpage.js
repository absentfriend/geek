//+++++++++++++++++++++时间+++++++++++++++++++++

function getNewDate() {
    var d = new Date();
    return d.getFullYear() + "-" + d.getMonth() + 1 + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();

}


// ++++++++++++++++++++++++切换页面+++++++++++++++++++++++++

var tuijian = $(".tuijian");
var baijia = $(".baijia");
var bendi = $(".bendi");
var tuijianclick = $("#tuijian");
var baijiaclick = $("#baijia");
var bendiclick = $("#bendi");
tuijianclick.click(
    function() {
        tuijianclick.css({
            "background": "#7ECE94",
        });
        bendiclick.css({
            "background": "#F5F5F5",
        });
        baijiaclick.css({
            "background": "#F5F5F5",
        });
        bendi.css({
            "display": "none"
        });
        baijia.css({
            "display": "none"
        });
        tuijian.fadeIn("fast");
    })
baijiaclick.click(
    function() {
        baijiaclick.css({
            "background": "#7ECE94"
        });
        tuijianclick.css({
            "background": "#F5F5F5"
        });
        bendiclick.css({
            "background": "#F5F5F5"
        });
        bendi.css({
            "display": "none"
        });
        tuijian.css({
            "display": "none"
        });
        tuijian.slideUp("fast");
        bendi.slideUp("fast");
        baijia.fadeIn("fast");
    })
bendiclick.click(
        function() {
            bendiclick.css({
                "background": "#7ECE94"
            });
            tuijianclick.css({
                "background": "#F5F5F5"
            });
            baijiaclick.css({
                "background": "#F5F5F5"
            });
            tuijian.css({
                "display": "none"
            });
            baijia.css({
                "display": "none"
            });
            baijia.slideUp("fast");
            tuijian.slideUp("fast");
            bendi.fadeIn("fast");
        })
    //++++++++++++++++++++++ 获取后端信息 ++++++++++++++
var Atext1;
var jsontext1;
var Atext2;
var jsontext2;
var Atext3;
var jsontext3;
var from1 = $(".from1");
var from2 = $(".from2");
var from3 = $(".from3");

function newsinfo1() {
    Atext1 = $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3900/1",
        dataType: "json",
        success: function() {
            jsontext1 = JSON.parse(Atext1.responseText);
            for (var i = 0; i < jsontext1.length; i++) {
                var inputtitle = jsontext1[i].newstitle;
                var inputimg = jsontext1[i].newsimg;
                var inputfrom = jsontext1[i].newsfrom;
                var inputtime = jsontext1[i].addtime;
                var inputid = jsontext1[i].newsid;
                var tr = $("<tr>");
                var form = $("<div>").attr({
                    "method": "post",
                    "target": "hideIframe"
                }).addClass("nform nform1");
                var li = $("<li>").addClass("del-li1");
                li.appendTo(from1);
                form.appendTo(li);
                // 动态添加表格
                $("<input>").attr({
                    value: i,
                    type: "text",
                    name: inputid
                }).addClass("nid nid1").appendTo(form);

                $("<input>").attr({
                    value: inputtitle,
                    type: "textarea",
                    name: "newstitle"
                }).addClass("ntitle ntitle1").appendTo(form);
                $("<input>").attr({
                    value: inputimg,
                    type: "textarea",
                    name: "newsimg"
                }).addClass("nimg nimg1").appendTo(form);
                $("<input>").attr({
                    value: inputfrom,
                    type: "text",
                    name: "newsfrom"
                }).addClass("nfrom nfrom1").appendTo(form);
                $("<p>").html(inputtime).addClass("ntime ntime1").appendTo(form);
                $("<input>").attr({
                    value: "修改",
                    type: "submit"
                }).addClass("nbtn nbtn1").appendTo(form);

            };
        }

    });
}

function newsinfo2() {
    Atext2 = $.ajax({
        type: "GET",
        // contentType : 'application/json',
        url: "http://127.0.0.1:3900/2",
        dataType: "json",
        success: function() {
            jsontext2 = JSON.parse(Atext2.responseText);
            for (var i = 0; i < jsontext2.length; i++) {
                var inputtitle = jsontext2[i].newstitle;
                var inputimg = jsontext2[i].newsimg;
                var inputfrom = jsontext2[i].newsfrom;
                var inputtime = jsontext2[i].addtime;
                var inputid = jsontext2[i].newsid;
                var form = $("<div>").attr({
                    "method": "post",
                    "target": "hideIframe"
                }).addClass("nform nform2");
                var li = $("<li>").addClass("del-li2");
                li.appendTo(from2);
                form.appendTo(li);
                $("<input>").attr({
                    value: i,
                    type: "text",
                    name: inputid
                }).addClass("nid nid2").appendTo(form);
                $("<input>").attr({
                    value: inputtitle,
                    type: "text",
                    name: "newstitle"
                }).addClass("ntitle ntitle2").appendTo(form);
                $("<input>").attr({
                    value: inputimg,
                    type: "text",
                    name: "newsimg"
                }).addClass("nimg nimg2").appendTo(form);
                 $("<p>").html(inputtime).addClass("ntime ntime2").appendTo(form);
                $("<input>").attr({
                    value: "修改",
                    type: "submit"
                }).addClass("nbtn nbtn2").appendTo(form);

            };
        }

    });
}

function newsinfo3() {
    Atext3 = $.ajax({
        type: "GET",
        url: "http://127.0.0.1:3900/3",
        dataType: "json",
        success: function() {
            jsontext3 = JSON.parse(Atext3.responseText);
            for (var i = 0; i < jsontext3.length; i++) {
                var inputtitle = jsontext3[i].newstitle;
                var inputimg = jsontext3[i].newsimg;
                var inputcontent = jsontext3[i].newscontent;
                var inputtime = jsontext3[i].addtime;
                var inputid = jsontext3[i].newsid;
                var form = $("<div>").attr({
                    "method": "post",
                    "target": "hideIframe"
                }).addClass("nform nform3");
                var li = $("<li>").addClass("del-li3");
                li.appendTo(from3);
                form.appendTo(li);
                $("<input>").attr({
                    value: i,
                    type: "text",
                    name: inputid
                }).addClass("nid nid3").appendTo(form);
                $("<input>").attr({
                    value: inputtitle,
                    type: "text",
                    name: "newstitle"
                }).addClass("ntitle ntitle3").appendTo(form);
                $("<input>").attr({
                    value: inputcontent,
                    type: "text",
                    name: "newscontent"
                }).addClass("ncontent ncontent3").appendTo(form);
                $("<p>").html(inputtime).addClass("ntime ntime3").appendTo(form);
                $("<input>").attr({
                    value: "修改",
                    type: "submit"
                }).addClass("nbtn nbtn3").appendTo(form);


                // 
            };
        }

    });
}

// ++++++++++++++++++=上传表格信息+++++++++++++++==
// 服务端路由格式POST：(/:open/:data) ,,data格式[tag,title,from,img,content,time]


var title;
var img;
var content;
var time;
var newsfrom;
var ul;
var id;
$(".addtag1").click(function() {
    title = $(".tag1-newstitle").val();
    img = $(".tag1-newsimg").val();
    newsfrom = $(".tag1-newsfrom").val();
    time = getNewDate();
    ul = (1 + ",:," + "" + ",:," + title + ",:," + newsfrom + ",:," + img + ",:," + "" + ",:," + time);
    $.ajax({
        url: "http://127.0.0.1:3900/0/" + ul,
        type: "post",
        success: function() {
            alert("上传文件成功！");
            location.reload()
        }
    })
    console.log(ul);
});

$(".addtag2").click(function() {
    title = $(".tag2-newstitle").val();
    img = $(".tag2-newsimg").val();
    time = getNewDate();
    ul = (2 + ",:," + "" + ",:," + title + ",:," + "" + ",:," + img + ",:," + "" + ",:," + time);
    $.ajax({
        url: "http://127.0.0.1:3900/0/" + ul,
        type: "post",
        success: function() {
            alert("上传文件成功！");
            location.reload()
        }
    })
    console.log(ul);
});
// ('/:open/:id/:tag/:title/:img/:from/:content/:time', respond);
$(".addtag3").click(function() {
    title = $(".tag3-newstitle").val();
    content = $(".tag3-newscontent").val();
    time = getNewDate();
    ul = (3 + ",:," + "" + ",:," + title + ",:," + "" + ",:," + "" + ",:," + content + ",:," + time);
    $.ajax({
        url: "http://127.0.0.1:3900/0/" + ul,
        type: "post",
        success: function() {
            alert("上传文件成功！");
            location.reload()
        }
    })
    console.log(ul);
});

// 修改表格——————————————————————————————————————————————-
// server.post('/:open/:id/:tag/:title/:img/:from/:content/:time', respond);
// $(".nbtn1").eq(0).click(function() {
//     title = $(".ntitle").eq(0).val();
//     img = $(".tag1-newsimg").eq(0).val();
//     newsfrom = $(".tag1-newsfrom").eq(0).val();
//     time = $(".tag1-addtime").eq(0).val();
//     ul = 1 + "/" + title + "/" + img + "/" + newsfrom + "/" + "/" + time;
//     $("form").eq(0).attr("action", 'http://127.0.0.1:3900/0//' + ul)
//     console.log($("form").eq(0).attr("action"))
//     console.log(ul);
// })

// function del(i) {
//     $(".nbtn1").eq(i).click(function() {
//         id = $(".nid1").eq(i).attr("name");
//         title = $(".ntitle1").eq(i).val();
//         img = $(".nimg1").eq(i).val();
//         newsfrom = $(".nfrom1").eq(i).val();
//         time = $(".ntime1").eq(i).val();
//         ul = "/" + id + "/" + 1 + "/" + title + "/" + img + "/" + newsfrom + "/" + "/" + time;
//         $("form").eq(i).attr("action", 'http://127.0.0.1:3900/1' + ul)
//         console.log($("form").eq(i).attr("action"))
//         console.log(ul);
//     })
// }
// for (var i = 0; i < $(".btn1").length; i++) {
//     del(i)
// };

//+++++++++++++++++++++++++++修改表格+++++++++++++++++++++++++++++++++++
function change1(i) {
    $(".nbtn1").eq(i).click(function() {
        id = $(".nid1").eq(i).attr("name");
        title = $(".ntitle1").eq(i).val();
        img = $(".nimg1").eq(i).val();
        newsfrom = $(".nfrom1").eq(i).val();
        time = getNewDate();
        ul = (1 + ",:," + id + ",:," + title + ",:," + newsfrom + ",:," + img + ",:," + "" + ",:," + time);
        $.ajax({
            url: "http://127.0.0.1:3900/1/" + ul,
            type: "post",
            success: function() {
                alert("上传文件成功！");
                location.reload()
            }
        })
        console.log(ul);
    });
}




function change2(i) {
    $(".nbtn2").eq(i).click(function() {
        id = $(".nid2").eq(i).attr("name");
        title = $(".ntitle2").eq(i).val();
        img = $(".nimg2").eq(i).val();
        time = getNewDate();
        ul = (2 + ",:," + id + ",:," + title + ",:," + "" + ",:," + img + ",:," + "" + ",:," + time);
        $.ajax({
            url: "http://127.0.0.1:3900/1/" + ul,
            type: "post",
            success: function() {
                alert("上传文件成功！");
                location.reload()
            }
        })
        console.log(ul);
    });
}

function change3(i) {
    $(".nbtn3").eq(i).click(function() {
        id = $(".nid3").eq(i).attr("name");
        title = $(".ntitle3").eq(i).val();
        content = $(".ncontent3").val();
        time = getNewDate();
        ul = (3 + ",:," + id + ",:," + title + ",:," + "" + ",:," + img + ",:," + content + ",:," + time);
        $.ajax({
            url: "http://127.0.0.1:3900/1/" + ul,
            type: "post",
            success: function() {
                alert("上传文件成功！");
                location.reload()
            }
        })
        console.log(ul);
    });
}



function change() {
    for (var x = 0; x < $(".nbtn1").length; x++) {
        change1(x)
    };
    for (var y = 0; y < $(".nbtn2").length; y++) {
        change2(y)
    };

    for (var z = 0; z < $(".nbtn3").length; z++) {
        change3(z)
    };
    console.log('change')
}

function newsinfo() {
    newsinfo1();
    newsinfo2();
    newsinfo3();
    console.log('newsinfo')
};


(function() {
    newsinfo();
    setTimeout('change()', 200);
})()
