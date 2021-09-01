$(document).ready(function() {
	var g = "/";
	var b = "m=api&c=user&a=status";
	window.getUserInfo = function() {
		$.ajax({
			url: g,
			data: b,
			type: "GET",
			dataType: "json",
			success: function(r) {
				if (!r.status) {
					return
				}
				var z = $("#userinfoContainer");
				var t = $("#usernameText");
				var q = $("#usernameShow");
				var A = $("#userId");
				var username_iMessage = $(".username-container .username-iMessage");
				var loginElement = $(".topbar-right a").eq(2);//2018-10-13新增关于解决隐藏登录元素
				q.html(r.name);
				A.html("(ID:" + r.id + ")");
				$("#serverCount").html(r.servercount);
				$("#orderCount").html(r.ordercount);
				$("#msgCount").html(r.msgcount);
				// username_iMessage.html(r.msgcount);
				if(r.msgcount > 0){
					username_iMessage.html(r.msgcount);
				}else{
					username_iMessage.remove();
				}
				var p = r.money || "0";
				if (String(p).indexOf(".") == -1) {
					p += ".00"
				}
				$("#userMoney").html(p);
				var x = $(".auth-status");
				var u = $(".new-auth");
				if (r.identityStatus == "1") {
					x.show();
					u.hide()
				} else {
					x.hide();
					u.show()
				}

				if(r.id){
					loginElement.hide();
					$(".apy-search-help").css('right','220px');
					$(".apy-china").css('right','125px');
					$(".login-coupon-reminder").remove();
				}

				z.addClass("welcome-user");
				var B = "userinfo-container--extend";
				var v = 300;
				var w = $("#usernameContainer");
				var s = $("#userPanel");
				var y = s.css("height");
				z.on("mouseenter", ".userinfo-container", function() {
					z.addClass(B);
					s.stop(true, false);
					s.css("height", 0);
					s.animate({
						height: y
					}, v)
				});
				z.on("mouseleave", ".userinfo-container", function() {
					s.stop(true, false);
					s.animate({
						height: 0
					}, v, function() {
						z.removeClass(B)
					})
				})
			}
		})
	};
	getUserInfo();
	var h = $("#toTop");
	h.hide();
	$(window).scroll(function() {
		if ($(window).scrollTop() > 100) {
			if (h.is(":hidden")) {
				h.stop().fadeIn(500)
			}
		} else {
			if (h.is(":visible")) {
				h.stop().fadeOut(500)
			}
		}
	});
	h.click(function() {
		$("body,html").stop().animate({
			scrollTop: 0
		}, 300);
		return false
	});
	var a = $(".header-nav>ul");
	$(".header-nav-li").mouseenter(function() {
		a.attr({
			"class": ""
		});
		// $(this).addClass("header-nav-li--active").siblings().removeClass("header-nav-li--active")
		$(this).addClass("header-nav-li--active").siblings().removeClass("header-nav-li--active")
		// $(this).addClass("apy-pop-list-show").siblings().removeClass("apy-pop-list-show")
        $(this).find(".apy-pop-list").css('opacity',1);
        $(this).find(".apy-pop-list").show();

	});
	$(".header-nav").mouseleave(function() {
		$(".header-nav-li").removeClass("header-nav-li--active");
		a.removeClass()

        $(".apy-pop-list").hide();

	});
	$(".pop-arrow").click(function() {
		$(this).parents(".header-nav-li").removeClass("header-nav-li--active")
	});
	var n = $(".header-container");
	var i = function() {
			if ($(window).outerWidth() < 1343) {
				n.addClass("narrow-screen")
			} else {
				n.removeClass("narrow-screen")
			}
		};
	i();
	$(window).resize(function() {
		i()
	});
	var m = null;
	$(".suspension-tel").mouseenter(function() {
		clearTimeout(m);
		$(this).addClass("active");
		$(this).children(".pop-detail").fadeIn(100)
	}).mouseleave(function() {
		var p = $(".pop-detail", $(this));
		var q = $(this);
		m = setTimeout(function() {
			if (!p.hasClass("active")) {
				q.removeClass("active");
				q.children(".pop-detail").fadeOut(100)
			}
		}, 200)
	});
	var l = null;
	$(".suspension-qrcode").mouseenter(function() {
		clearTimeout(l);
		$(this).addClass("active");
		$(this).children(".pop-detail").fadeIn(100)
	}).mouseleave(function() {
		var p = $(".pop-detail", $(this));
		var q = $(this);
		l = setTimeout(function() {
			if (!p.hasClass("active")) {
				q.removeClass("active");
				q.children(".pop-detail").fadeOut(100)
			}
		}, 200)
	});
	var k = null;
	$(".pop-detail", $(".suspension-tel")).mouseenter(function() {
		clearTimeout(k);
		$(this).addClass("active")
	}).mouseleave(function() {
		var p = $(this);
		k = setTimeout(function() {
			if (!p.parents("li").hasClass("active")) {
				p.hide()
			}
			p.removeClass("active")
		}, 200)
	});
	var j = null;
	$(".pop-detail", $(".suspension-qrcode")).mouseenter(function() {
		clearTimeout(j);
		$(this).addClass("active")
	}).mouseleave(function() {
		var p = $(this);
		j = setTimeout(function() {
			if (!p.parents("li").hasClass("active")) {
				p.hide()
			}
			p.removeClass("active")
		}, 200)
	});
	$(".weibo-logo").mouseenter(function() {
		$(".weibo").show()
	}).mouseleave(function() {
		$(".weibo").hide()
	});
	$(".weixin-logo").mouseenter(function() {
		$(".weixin").show()
	}).mouseleave(function() {
		$(".weixin").hide()
	});
	$("a[href='#a_null']").click(function() {
		return false
	});
	$(".link-banner").each(function() {
		var q = $(this);
		var p = q.data("url");
		if (p) {
			q.click(function() {
				var r = q.data("target") || "self";
				window.open(p, r)
			})
		}
	});
	if (window.PIE) {
		$(".pie-for-element").each(function() {
			PIE.attach(this)
		});
		$(".pie-for-children").children().each(function() {
			PIE.attach(this)
		});
		$(".pie-for-tree").find("*").each(function() {
			PIE.attach(this)
		})
	}
	var f = $(".show-captcha");
	var d = $(".refresh-captcha");
	var e = "/?m=api&c=captcha";
	var o = function() {
			return e + "&rnd=" + Math.random()
		};
	var c = function(p) {
			$(p).attr("src", o())
		};
	c(f);
	f.click(function() {
		c(this)
	});
	d.click(function() {
		c($(this).parent().find(".show-captcha"))
	});
	$(".help-content").click(function() {
		var p = $(this).data("content_id");
		$.cookie("helpIndex", p, {
			path: "/"
		});
		location.href = "/help/"
	})
});
$(function() {
	window.NY = window.NY || {};
	// if ($.dialog && $.dialog.tips) { //2018 10 20注释 关于解决NY.warn
	if ($.dialog ) {
		var DEFAULT_TIPS_SHOW_DURATION = 3;
		var tipsTypeList = ["success", "error", "loading"];
		var tipsTypeMap = {
			warn: "alert"
		};
		$.each(tipsTypeList, function(i, tipsType) {
			var basicMethodType = tipsTypeMap[tipsType] || tipsType;
			window.NY[tipsType] = function(text, duration, callback) {
				duration = duration || DEFAULT_TIPS_SHOW_DURATION;
				return $.dialog.tips(text, duration, basicMethodType, callback)
			}
		});
		NY.warn = function(text, callback) {
			$.dialog({
				title: "提示",
				content: '<div style="max-width: 510px;">' + text + "<div>",
				icon: "alert",
				close: callback
			})
		}
	}
	if (NY.warn) {
		NY.showBusy = function(callback) {
			return NY.warn("服务器繁忙，请稍后重试！", callback)
		}
	}
	if ($.dialog) {
		var loginHost = "/";
		var loginFrameURL = loginHost + "login/?type=frame";
		var loginActionURL = loginHost + "login/login.html";
		NY.showLoginDialog = function(loginSuccessCallback, dialogConfig) {
			var loginDialog = null;
			var defaultDialogConfig = {
				title: "会员登录",
				okVal: "登录",
				width: 500,
				height: 235,
				ok: function() {
					var iframe = this.iframe.contentWindow;
					var iframe_form = $(iframe.document).find("form");
					var param = {};
					iframe_form.find("[name]").each(function() {
						var $_input = $(this);
						param[$_input.prop("name")] = $_input.val()
					});
					$(".aui_state_highlight").prop({
						disabled: true
					});
					$.ajax({
						type: "post",
						url: loginActionURL,
						data: param,
						success: function(dataString) {
							$(".aui_state_highlight").prop({
								disabled: false
							});
							var responseData = (typeof dataString == "string") ? eval("(" + dataString + ")") : dataString;
							if (!responseData.result) {
								NY.warn(responseData.text);
								$(".show-captcha", iframe.document).click();
								return
							}
							loginDialog.close();
							loginSuccessCallback.call(loginDialog, responseData)
						},
						error: function() {
							$(".aui_state_highlight").prop({
								disabled: false
							});
							NY.showBusy()
						}
					});
					return false
				},
				cancel: true
			};
			delete dialogConfig.ok;
			var config = $.extend(defaultDialogConfig, dialogConfig);
			loginDialog = $.dialog.open(loginFrameURL, config);
			return loginDialog
		};
		NY.loginCheckThenDo = function(afterLoginCall, dialogConfig) {
			$.ajax({
				url: "/login/check.html",
				cache: false,
				dataType: "json",
				success: function(responseData) {
					if (!responseData.result) {
						if (responseData.isMobile) {
							location.href = "/login/";
							return false
						}
						var config = $.extend({
							okVal: "登录并确定"
						}, dialogConfig);
						NY.showLoginDialog(function(data) {
							if (!data.result) {
								NY.warn(data.text)
							} else {
								NY.success(data.text, 2, function() {
									afterLoginCall(false)
								})
							}
						}, config)
					} else {
						afterLoginCall(true)
					}
				},
				error: function() {
					NY.showBusy()
				}
			})
		}
	}
	NY.enterKey = function(element, handler, options) {
		options = options || {};
		var eventType = options.eventType || "keypress";
		var eventData = options.eventData;
		var isCtrlKey = options.isCtrlKey;
		var isShiftKey = options.isShiftKey;
		var isAltKey = options.isAltKey;
		var isBoolean = function(param) {
				return (typeof param === "boolean")
			};
		var myHandler = function(e) {
				var keyCode = e.which;
				var that = this;
				if ((keyCode == 10) || (keyCode == 13)) {
					if (isBoolean(isCtrlKey) && (isCtrlKey !== e.ctrlKey)) {
						return
					} else {
						if (isBoolean(isShiftKey) && (isShiftKey !== e.shiftKey)) {
							return
						} else {
							if (isBoolean(isAltKey) && (isAltKey !== e.altKey)) {
								return
							}
						}
					}
					handler.call(that, e)
				}
			};
		return $(element)[eventType](eventData, myHandler)
	};
	NY.ajax = function(url, options) {
		if (typeof url === "object") {
			options = url;
			url = undefined
		}
		var isShowWaitTip = (options.isShowWaitTip !== false);
		var settings = $.extend({
			url: url,
			type: "post",
			dataType: "json",
			error: function() {
				NY.showBusy()
			},
			complete: function(jqXHR, textStatus) {
				if (isShowWaitTip) {
					NY.hideWaiting()
				}
			}
		}, options);
		delete settings.isCoverSuccess;
		delete settings.successResultFalse;
		delete settings.isSuccessShowTip;
		delete settings.isSuccessJump;
		delete settings.isResultFalseWarn;
		delete settings.waitText;
		delete settings.isShowWaitTip;
		delete settings.isShowWaitMask;
		delete settings.waitMaskStyle;
		if (options.isCoverSuccess !== true) {
			settings.success = function(responseData, textStatus, jqXHR) {
				var context = this;
				var responseDataText;
				var responseDataTime = responseData.time;
				if (responseData.result) {
					responseDataText = responseData.text || "操作成功"
				} else {
					responseDataText = responseData.text || "操作失败"
				}
				if (!responseData.result) {
					var resultFalseHandler = function() {
							var successResultFalse = options.successResultFalse;
							if ($.isFunction(successResultFalse)) {
								successResultFalse.call(context, responseData, textStatus, jqXHR)
							}
						};
					if (options.isResultFalseWarn !== false) {
						NY.warn(responseDataText, function() {
							resultFalseHandler()
						})
					} else {
						resultFalseHandler()
					}
					return
				}
				var successHandler = function() {
						var optionSuccess = options.success;
						var isJumpAfterCall = true;
						if ($.isFunction(optionSuccess)) {
							isJumpAfterCall = optionSuccess.call(context, responseData, textStatus, jqXHR)
						}
						if ((options.isSuccessJump !== false) && (isJumpAfterCall !== false)) {
							if (responseData.url) {
								window.location.href = responseData.url
							} else {
								if (responseData.reload) {
									window.location.reload()
								}
							}
						}
					};
				if ((options.isSuccessShowTip !== false) && responseDataText) {
					NY.success(responseDataText, responseDataTime, function() {
						successHandler()
					})
				} else {
					successHandler()
				}
			}
		}
		if (isShowWaitTip) {
			NY.waiting(options.waitText, options.isShowWaitMask)
		}
		return $.ajax(settings)
	};
	// 获取hash的通用方法
	NY.getUrlSearch = function (searchName) {
		var reg = new RegExp("(^|&)" + searchName + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) return unescape(r[2]);
		return '';
	}
	NY.getHash = function(hashName) {
		var reg = new RegExp("(^|&)" + hashName + "=([^&]*)(&|$)", "i");
		var r = window.location.search.substr(1).match(reg);
		if (r != null) {
			return unescape(r[2])
		}
		return ""
	}


});
$(function() {
	var e = function(f) {
			document.cookie = f + "=;path=/;expires=" + (new Date().toUTCString())
		};
	var d = location.hash.slice(1);
	var a = d.match(/(\-\d+)/g);
	if (!a || (a.length > 2)) {
		return
	}
	var b = (a[0] || "").slice(1);
	var c = (a[1] || "").slice(1);
	if (!c) {
		c = b;
		e("channelType")
	} else {
		document.cookie = "channelType=" + b + ";path=/"
	}
	document.cookie = "channelID=" + c + "; path=/"
});

function randomNum(b) {
	var a = "";
	for (var c = 0; c < b; c++) {
		var d = "" + Math.floor(Math.random() * 10);
		a += d
	}
	return a
}


$(function () {
	/**
	*2017-9-24 01:10 新增底部二维码切换_Begin
	*/
	$('#ecodeone').hover(function(){
		
		$('#img_one').show();
		$('#img_tow').hide();
		
	});
	$('#ecodetow').hover(function(){
		$('#img_tow').show();
		$('#img_one').hide();
	});
	
	/**
	*2017-9-24 01:10 新增底部二维码切换_End
	*/
});	

jQuery.easing.jswing=jQuery.easing.swing;jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,f,a,h,g){return jQuery.easing[jQuery.easing.def](e,f,a,h,g)},easeInQuad:function(e,f,a,h,g){return h*(f/=g)*f+a},easeOutQuad:function(e,f,a,h,g){return -h*(f/=g)*(f-2)+a},easeInOutQuad:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f+a}return -h/2*((--f)*(f-2)-1)+a},easeInCubic:function(e,f,a,h,g){return h*(f/=g)*f*f+a},easeOutCubic:function(e,f,a,h,g){return h*((f=f/g-1)*f*f+1)+a},easeInOutCubic:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f+a}return h/2*((f-=2)*f*f+2)+a},easeInQuart:function(e,f,a,h,g){return h*(f/=g)*f*f*f+a},easeOutQuart:function(e,f,a,h,g){return -h*((f=f/g-1)*f*f*f-1)+a},easeInOutQuart:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f+a}return -h/2*((f-=2)*f*f*f-2)+a},easeInQuint:function(e,f,a,h,g){return h*(f/=g)*f*f*f*f+a},easeOutQuint:function(e,f,a,h,g){return h*((f=f/g-1)*f*f*f*f+1)+a},easeInOutQuint:function(e,f,a,h,g){if((f/=g/2)<1){return h/2*f*f*f*f*f+a}return h/2*((f-=2)*f*f*f*f+2)+a},easeInSine:function(e,f,a,h,g){return -h*Math.cos(f/g*(Math.PI/2))+h+a},easeOutSine:function(e,f,a,h,g){return h*Math.sin(f/g*(Math.PI/2))+a},easeInOutSine:function(e,f,a,h,g){return -h/2*(Math.cos(Math.PI*f/g)-1)+a},easeInExpo:function(e,f,a,h,g){return(f==0)?a:h*Math.pow(2,10*(f/g-1))+a},easeOutExpo:function(e,f,a,h,g){return(f==g)?a+h:h*(-Math.pow(2,-10*f/g)+1)+a},easeInOutExpo:function(e,f,a,h,g){if(f==0){return a}if(f==g){return a+h}if((f/=g/2)<1){return h/2*Math.pow(2,10*(f-1))+a}return h/2*(-Math.pow(2,-10*--f)+2)+a},easeInCirc:function(e,f,a,h,g){return -h*(Math.sqrt(1-(f/=g)*f)-1)+a},easeOutCirc:function(e,f,a,h,g){return h*Math.sqrt(1-(f=f/g-1)*f)+a},easeInOutCirc:function(e,f,a,h,g){if((f/=g/2)<1){return -h/2*(Math.sqrt(1-f*f)-1)+a}return h/2*(Math.sqrt(1-(f-=2)*f)+1)+a},easeInElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return -(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e},easeOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k)==1){return e+l}if(!j){j=k*0.3}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}return g*Math.pow(2,-10*h)*Math.sin((h*k-i)*(2*Math.PI)/j)+l+e},easeInOutElastic:function(f,h,e,l,k){var i=1.70158;var j=0;var g=l;if(h==0){return e}if((h/=k/2)==2){return e+l}if(!j){j=k*(0.3*1.5)}if(g<Math.abs(l)){g=l;var i=j/4}else{var i=j/(2*Math.PI)*Math.asin(l/g)}if(h<1){return -0.5*(g*Math.pow(2,10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j))+e}return g*Math.pow(2,-10*(h-=1))*Math.sin((h*k-i)*(2*Math.PI)/j)*0.5+l+e},easeInBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*(f/=h)*f*((g+1)*f-g)+a},easeOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}return i*((f=f/h-1)*f*((g+1)*f+g)+1)+a},easeInOutBack:function(e,f,a,i,h,g){if(g==undefined){g=1.70158}if((f/=h/2)<1){return i/2*(f*f*(((g*=(1.525))+1)*f-g))+a}return i/2*((f-=2)*f*(((g*=(1.525))+1)*f+g)+2)+a},easeInBounce:function(e,f,a,h,g){return h-jQuery.easing.easeOutBounce(e,g-f,0,h,g)+a},easeOutBounce:function(e,f,a,h,g){if((f/=g)<(1/2.75)){return h*(7.5625*f*f)+a}else{if(f<(2/2.75)){return h*(7.5625*(f-=(1.5/2.75))*f+0.75)+a}else{if(f<(2.5/2.75)){return h*(7.5625*(f-=(2.25/2.75))*f+0.9375)+a}else{return h*(7.5625*(f-=(2.625/2.75))*f+0.984375)+a}}}},easeInOutBounce:function(e,f,a,h,g){if(f<g/2){return jQuery.easing.easeInBounce(e,f*2,0,h,g)*0.5+a}return jQuery.easing.easeOutBounce(e,f*2-g,0,h,g)*0.5+h*0.5+a}});

/**
*三级导航 JS
*/

$(function () {

	var header_nav = false;
	var nav_level = false;
	var nav_level_2 = false;

	var nav_level_3_istrue,nav_level_2_istrue,nav_level_1_istrue = false;

	var nav_is_leave = false;

	$('.apy-all-nav').height($(window).height());
	$('.nav-item-info ul').height($(window).height());
	$('.nav-item-info-level-3 ul').height($(window).height());

	$('.apy-header-all-nav').on('mouseenter',function(){
		header_nav = true;
		
		// $(".apy-header-all-nav").css('background-color',"#0af");
		$(".apy-header-all-nav").addClass('hover');

		if(header_nav || nav_level || nav_level_2){
			$('.all-nav-level1').addClass('active');

			// if(!nav_level_2_istrue){
				$('.all-nav-level1').css({'left':"-200px","z-index":"300"});
				$('.all-nav-level1').animate({
					"left":"0"
				},{
                	easing:"easeOutQuad"//缓动
            	},800);	
			// }else{nav_level_2_istrue = true; }

			$('.apy-all-nav').css('z-index',998);

		}

	});

	
	$('.all-nav-level1').on('mouseenter',function(){
		nav_level = true;
		if(header_nav || nav_level || nav_level_2){
			$('.all-nav-level1').addClass('active');

			$('.apy-all-nav').css('z-index',998);
		}
	});

	$('.apy-header-all-nav').on('mouseleave',function(){
		header_nav = false;

		if(!header_nav && !nav_level ){
			$('.all-nav-level1').removeClass('active');

			$('.apy-all-nav').css('z-index',-998);
		}

	});

	$('.all-nav-level1').on('mouseleave',function(){
		nav_level = false;

		$('.all-nav-level1').removeClass('active');
		$('.apy-all-nav').css('z-index',-998);

		$('.nav-item-info').on('mouseenter',function(){
				$('.all-nav-level1').addClass('active');
				$('.apy-all-nav').css('z-index',998);
				$(this).show();

		});

		$('.nav-item-info').on('mouseleave',function(){
				$(this).hide();
		});

	});

	$(".nav-item-info li").on('mouseenter',function(){
		
		var nav_level_2_key  = $(this).data('key');
		var currentClass = $(this).parent().attr('class');

		if($(".nav-item-info-level-3 ul."+nav_level_2_key+"").length == 1){
			$('.nav-item-info-level-3').show();
		}else{
			$(this).css('background-color','transparent');
			$('[data-key="'+currentClass+'"]').find('a').parent().addClass('apy-current-li');
			$('[data-key="'+currentClass+'"]').find('a').addClass('apy-current-a');
			return false;
		}

		$(".nav-item-info-level-3 ul").hide();

		if(!nav_level_3_istrue){

			$(".nav-item-info-level-3 ul."+nav_level_2_key+"").css({"z-index":"100","display":"block"});
			$(".nav-item-info-level-3").css({'left':"200px","z-index":"100","display":"block"});
			// $(".nav-item-info-level-3 ul."+nav_level_2_key+"").animate({
			$(".nav-item-info-level-3").animate({
				"left":"400px",
				// "z-index":"2000"
			},{
                easing:"easeOutQuad"//缓动
            },800);
			nav_level_3_istrue = true;	
		}else{$(".nav-item-info-level-3 ul."+nav_level_2_key+"").show();}

		// var currentClass = $(this).parent().attr('class');
		// $('.nav-level1 li[data-key="xxx"]').css('color',"red");
		$('[data-key="'+currentClass+'"]').find('a').addClass('apy-current-a');
		$('[data-key="'+currentClass+'"]').find('a').addClass('apy-current-a');
		$('[data-key="'+currentClass+'"]').find('a').parent().addClass('apy-current-li');

	});

	$(".nav-item-info li").on('mouseleave',function(){

			$(".nav-item-info-level-3").hide();

	});

	$('.nav-item-info').on('mouseleave',function(){
			nav_level_3_istrue = false;	

		$('.all-nav-level1').on('mouseleave',function(){
				$(this).removeClass('active');
		});

		$('.nav-item-info-level-3').on('mouseenter',function(){
			$(this).show();
		});

		$('.all-nav-level1').on('mouseenter',function(){
			$('.nav-level1 ul li a').removeClass('apy-current-a');
			$('.nav-level1 ul li').removeClass('apy-current-li');
		});

	});

	$(".nav-level1 li").on('mouseenter',function(){

		var nav_level_li_key = $(this).data('key');
		$('.nav-item-info').show();
		// $(".nav-item-info ul").hide();

		if($(".nav-item-info ul."+nav_level_li_key+"").length == 1){
			
				$(".nav-item-info ul").hide();

			if(!nav_level_2_istrue){

				$(".nav-item-info").css({'left':"0px","display":"block","z-index":"200"});
				$(".nav-item-info ul."+nav_level_li_key+"").css({'left':"0px","display":"block","z-index":"300"});
				$(".nav-item-info").stop().animate({
					"left":"200px",
					"display":"block",
					// "z-index":"400"
				},{
	                easing:"easeOutQuad"//缓动
	            },800);
				nav_level_2_istrue=true;
				console.log($('.nav-item-info').css('left'));
			}else{$(".nav-item-info ul."+nav_level_li_key+"").show();}
		}else{

				// if($(".nav-item-info-level-3").css('display') == 'none' ){

					$(".nav-item-info").css({'left':"200px","display":"block","z-index":"200"});
					// $(".nav-item-info-level-3").css({'left':"400px","display":"block","z-index":"200"});
					$('.nav-item-info').stop().animate({
						"left":"0px"
					},{
						easing:"easeOutQuad",
					},800);

					// $(".nav-item-info-level-3").stop().animate({
					// 	"left":"200px"
					// },{
					// easing:"easeOutQuad"},1600);

					nav_level_2_istrue=false;
				// }
		}


        if($(".nav-item-info-level-3").css('display') !== 'none' &&  $(".nav-item-info").css('display') !== 'none' && $(".nav-item-info ul."+nav_level_li_key+"").length ==0 ) {
					$(".nav-item-info").css({'left':"200px","display":"block","z-index":"200"});
					$(".nav-item-info-level-3").css({'left':"400px","display":"none","z-index":"200"});
					$('.nav-item-info').stop().animate({
						"left":"0px"
					},{
						easing:"easeOutQuad",
					},800);

					$(".nav-item-info-level-3").stop().animate({
						"left":"200px"
					},{
					easing:"easeOutQuad"},1600);

					nav_level_2_istrue=false;
        }

		// $(".nav-item-info div."+nav_level_li_key+"").show();

	})

	$(".nav-level1 li").on('mouseleave',function(){
		$('.nav-item-info').hide();
	})

	$('.nav-item-info').on('mouseleave',function(){
		// $(this).hide();

		$('.all-nav-level1 li').on('mouseenter',function(){

			if($(".nav-item-info-level-3").css('display') !== 'none' ){
				$(".nav-item-info-level-3").css({'left':"400px","display":"block","z-index":"200"});
				$('.nav-item-info-level-3').stop().animate({
					"left":"200px"
				},{
					easing:"easeOutQuad",
				},800);
			}
		});

	});

	$('.nav-item-info-level-3').on('mouseenter',function(){
			$(".nav-item-info").show();

	});

	$('.nav-item-info-level-3 li').on('mouseenter',function(){
			$(".nav-item-info").show();

		var currentLevel2Class = $(this).parent().attr('class');
		// $('.nav-level1 li[data-key="xxx"]').css('color',"red");
		$('[data-key="'+currentLevel2Class+'"]').find('a').addClass('apy-current-a');		
		$('[data-key="'+currentLevel2Class+'"]').find('a').parent().addClass('apy-current-li');		

	});

	$('.nav-item-info-level-3').on('mouseleave',function(){
		var that= this;
		$('.nav-item-info').on('mouseenter',function(){
			// $(that).hide();
			$(this).show();

			$('.nav-item-info ul li a').removeClass('apy-current-a');
			$('.nav-item-info ul li').removeClass('apy-current-li');
		});

	});

	var el = window.document.body;
	window.document.body.onmouseover = function(event){
	    el = event.target;

		if($(".nav-item-info").css('display') == 'none' && $(".all-nav-level1").css('display') == 'none' && $(".nav-item-info-level-3").css('display') == 'none' ){
			$(".apy-header-all-nav").removeClass('hover');
		}

	}

	$(document).mousemove(function(e){
	      e=e||window.event;
		    var scrollX=document.documentElement.scrollLeft||document.body.scrollLeft;//分别兼容ie和chrome
		    var scrollY=document.documentElement.scrollTop||document.body.scrollTop;
		    var x=e.pageX||(e.clientX+scrollX);//兼容火狐和其他浏览器
		    var y=e.pageY||(e.clientY+scrollY);

		   if(x >600){
		   			$('.all-nav-level1').removeClass('active');
		   			$('.nav-item-info-level-3').hide();
		   			$('.nav-item-info').hide();
		   			$('.apy-all-nav').css('z-index',-988);

		   			$('.nav-item-info ul li a').removeClass('apy-current-a');
		   			$('.nav-level1 ul li a').removeClass('apy-current-a');
		   			$('.nav-level1 ul li').removeClass('apy-current-li');
		   			$('.nav-level1 ul li').removeClass('apy-current-li');

		   }

		   if(x > 50 && y < 50){

		   			$('.all-nav-level1').removeClass('active');
		   			$('.nav-item-info-level-3').hide();
		   			$('.nav-item-info').hide();
		   			$('.apy-all-nav').css('z-index',-988);


		   			$('.nav-item-info ul li a').removeClass('apy-current-a');
		   			$('.nav-level1 ul li a').removeClass('apy-current-a');
		   			$('.nav-level1 ul li').removeClass('apy-current-li');
		   			$('.nav-level1 ul li').removeClass('apy-current-li');
		   }

		   if(x > 400  &&  $(".nav-item-info").css('display') == 'none'){

		   			$('.all-nav-level1').removeClass('active');
		   			$('.nav-item-info-level-3').hide();
		   			$('.nav-item-info').hide();
		   			$('.apy-all-nav').css('z-index',-988);

		   }

		   if(x < 200 && $(".nav-item-info").css('display') == 'none'){
		   			// $('.all-nav-level1').removeClass('active');
		   			$('.nav-item-info-level-3').hide();
		   			$('.nav-item-info').hide();

		   				nav_level_3_istrue = false;
		   				nav_level_2_istrue = false;
		   }

		   if(x >200 && x <400 && $(el).hasClass('activity')){
		   		$('.nav-item-info-level-3').hide();
		   }

	});

	window.onmousewheel=function(e){

		if($(el).parents().hasClass('apy-all-nav')){
			return false;
		}
	};  
});	

/**
*头部默认导航选中
*/
$(function(){

	var currentControllerName = window.location.pathname.split('/');
	var currentControllerNameFirst = window.location.pathname.split('/')[1];
	var currentControllerNameSeconed = window.location.pathname.split('/')[2];

	console.log(currentControllerName);
	// switch
	if(currentControllerNameFirst == 'act' && currentControllerNameSeconed ==''){
		$(".header-nav li.header-nav-li:eq(0)").addClass('apy-header-nav-li-active');
	}else if(currentControllerNameFirst == 'server' 
		|| currentControllerNameFirst == 'loadbalance' 
		|| currentControllerNameFirst == 'lease'
		|| currentControllerNameFirst == 'idc'
		|| currentControllerNameFirst == 'host'
		|| currentControllerNameFirst == 'domain'
		|| currentControllerNameFirst == 'ssl'
		|| currentControllerNameFirst == 'icp'
		|| currentControllerNameFirst == 'monitor'
		|| currentControllerNameFirst == 'cloudApp'){
		console.log(currentControllerNameSeconed);
		if(currentControllerNameSeconed == 'price'){
			$(".header-nav li.header-nav-li:eq(4)").addClass('apy-header-nav-li-active');
		}else{
			$(".header-nav li.header-nav-li:eq(1)").addClass('apy-header-nav-li-active');
		}
	}else if(currentControllerNameFirst == 'trustcenter' 
		|| currentControllerNameFirst == 'datacenter' 
		|| currentControllerNameFirst == 'support'
	){
		$(".header-nav li.header-nav-li:eq(5)").addClass('apy-header-nav-li-active');
	}else if(currentControllerNameFirst == 'solutions'){
		$(".header-nav li.header-nav-li:eq(2)").addClass('apy-header-nav-li-active');
	}else if(currentControllerNameFirst == 'help'){
		$(".header-nav li.header-nav-li:eq(6)").addClass('apy-header-nav-li-active');
	}else if(currentControllerNameFirst == 'act' && currentControllerNameSeconed == 'cps')
		{$(".header-nav li.header-nav-li:eq(7)").addClass('apy-header-nav-li-active');}
	else if(currentControllerNameFirst == 'about' || currentControllerNameFirst == 'news')
		{$(".header-nav li.header-nav-li:eq(8)").addClass('apy-header-nav-li-active');}
})

/**
*解决导航高度问题
*/
$(function(){

	$(window).on('resize',function(){

		console.log($(window).height());

		$('.apy-all-nav').height($(window).height());
		$('.nav-item-info ul').height($(window).height());
		$('.nav-item-info-level-3 ul').height($(window).height());
	});
})

/**
*搜索
*/
$(function(){

	$(".top-nav.header-main").on('mouseenter',function(){

		$(".apy-search-help").css('background-color','rgba(99,99,99,.5)');
		// $(".apy-search-help").css('background-color','#2f3544');
	})

	$(".top-nav.header-main").on('mouseleave',function(){

		$(".apy-search-help").css('background-color','rgba(238,238,224, 0.15)');
		// $(".apy-search-help").css('background-color','rgba(128,128,128,.3)');
	})

	$(".apy-search-help").on('mouseenter',function(){
		$(this).find('i').css('color',"#0af");

		$(this).find('input').stop().animate({
			"width":"300px",
		},{
			easing:"easeOutQuad",
		},250);

	})

	$(".apy-search-help").on('mouseleave',function(){
		$(this).css('border-color','rgba(43,48,56,.6)');
		$(this).css('outline','none');
		$(this).find('i').css('color',"#fff");
		$(this).find('input').stop().animate({
			"width":"200px"
		},{
			easing:"easeOutQuad",
		},250);

	});

	$(".apy-search-help i").on('click',function(){

		window.location.href = '/help/search?k=' + $(".apy-search-help input").val();
	})

	$(".apy-search-help input").keyup(function(event){
		 if(event.keyCode ==13){
		 	window.location.href = '/help/search?k=' + $(".apy-search-help input").val();
		 }
	});

	$(".apy-china").on('mouseenter',function(){
		$(this).find('i').css('color',"#0af");
		$(this).find('a').css('color',"#0af");
	});

	$(".apy-china").on('mouseleave',function(){
		$(this).find('i').css('color',"#fff");
		$(this).find('a').css('color',"#fff");
	})

	$('.apy-language-switch li:eq(1)').on('mouseenter',function(){
		$(this).css('color',"#0af");
	});

	$('.apy-language-switch li:eq(1)').on('mouseleave',function(){
		$(this).css('color',"#333");
	});

	$(".apy-develop-warn").on('click',function(){
		NY.warn('正在开发中...');
	});



    // $(".header-nav-li").mouseenter(function() {
    //
    //     var apy_pop_item_max_height=0;
    // 	var that = $(this).find('.apy-pop-item');
    //
    //     $(".apy-pop-list").hide();
    //     $(that).parents(".apy-pop-list").css('opacity',0);
    //
    //     $(that).each(function (index,elment) {
    //         console.log($(elment).height());
    //         apy_pop_item_max_height = $(elment).height() > apy_pop_item_max_height  ? $(elment).height() : apy_pop_item_max_height;
    //     })
    //
    //     if($(that).length >= 5){
    //         $(that).parents('.apy-pop-list').width(1200);
    //     }else{
    //         $(that).parents('.apy-pop-list').width(240 * $(that).length);
    //     }
    //
    //     $(that).height(apy_pop_item_max_height);
    //
    //     $(that).parents(".apy-pop-list").css('opacity',1);
    //     $(that).show();
    // });




	var apy_pop_item_max_height=0;

    $(".apy-pop-item").each(function (index,elment) {
    	console.log($(elment).height());
    	apy_pop_item_max_height = $(elment).height() > apy_pop_item_max_height  ? $(elment).height() : apy_pop_item_max_height;
    })

    if($(".apy-pop-item").length >= 5){
    	$(".apy-pop-list").width(1200);
	}else{
        $(".apy-pop-list").width(240 * $(".apy-pop-item").length);
	}

	$(".apy-pop-item").height(apy_pop_item_max_height);



    $(".apy-pop-list").hide();










    $(".header-nav-li").mouseenter(function() {

        var apy_pop_item_max_height=0;
    	var that = $(this).find('.apy-pop-item');

        $(".apy-pop-list").hide();
        $(that).parents(".apy-pop-list").css('opacity',0);

        $(that).each(function (index,elment) {
            console.log($(elment).height());
            apy_pop_item_max_height = $(elment).height() > apy_pop_item_max_height  ? $(elment).height() : apy_pop_item_max_height;
        })

        if($(that).length >= 5){
            $(that).parents('.apy-pop-list').width(1180);
        }else{
            $(that).parents('.apy-pop-list').width(240 * $(that).length);
        }

        $(that).height(apy_pop_item_max_height);

        $(that).parents(".apy-pop-list").css('opacity',1);
        $(that).parents(".apy-pop-list").show();
    });

window.addServiceListener = function(callback){
  //增值服务通用js
  $('.addService>ul').on('click','li',function(){
    $('.addService>ul>li').removeClass('active');
    $(this).addClass('active');
    var val = $(this).data("value");
    $('.addService').find('input').val(val);

    callback && callback()
  }) 
}


/* 封装工具类方法
$(function () {
	window.NY = window.NY || {};

	// add feedback tips: warn/success/error
	if ($.dialog && $.dialog.tips) {
		var DEFAULT_TIPS_SHOW_DURATION = 3;
		var tipsTypeList = ["warn", "success", "error", "loading"];
		var tipsTypeMap = {
			warn: "alert"
		};

		$.each(tipsTypeList, function (i, tipsType) {
			var basicMethodType = tipsTypeMap[tipsType] || tipsType;

			window.NY[tipsType] = function (text, duration, callback) {
				duration = duration || DEFAULT_TIPS_SHOW_DURATION;

				return $.dialog.tips(text, duration, basicMethodType, callback);
			};
		});
	}

});
*/
});
