RMapConstant = { JsServer: "http://mapdb.365ditu.cn/js/", MapRoot: new function () {
    var c = ["http://mapdb0.365ditu.cn/rt/mapdb/", "http://mapdb1.365ditu.cn/rt/mapdb/", "http://mapdb2.365ditu.cn/rt/mapdb/"], d = function (c) {
        function b(a, f) { for (var b = 0; f; ) b = 2 * b + a % 2, a /= 2, a -= a % 1, f--; return b } c = String(c); var d = 4294967295, a = [], f, l, n; for (f = 255; 0 <= f; f--) { n = b(f, 32); for (l = 0; 8 > l; l++) n = (2 * n ^ 79764919 * ((n >>> 31) % 2)) >>> 0; a[f] = b(n, 32) } for (f = 0; f < c.length; f++) {
            n = c.charCodeAt(f); if (255 < n) throw new RangeError; l = d % 256 ^ n; d = (d / 256 ^ a[l]) >>>
0
        } return (d ^ 4294967295) >>> 0
    } (window.navigator.userAgent || "null") % c.length, e = d; this.setenv = function () { e = d; for (var h = 0; h < arguments.length; h++) e += parseInt(arguments[h]) % c.length; e %= c.length }; this.toString = function () { return c[e] } 
}, MapMinLevel: 0, MapMaxLevel: 13, Directorys: "0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15".split(" "), ScaleFactors: [30, 15, 10, 4, 2, 1, 0.4, 0.2, 0.1, 0.04, 0.02, 0.01, 0.004, 0.002, 0.001, 4E-4], GridFactors: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 40, 40, 40, 40, 40, 40], MapPicWidth: 256, MapPicHeight: 256, PicType: ".png",
    MoveOffset: 20, AdjustFactor: 1E5, Copyright: "<div style='float:left; font-family:\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif; font-size:11px; text-align:center;'>Data \u00a9 <a href='http://www.365ditu.com/' target='_blank'>\u9053\u9053\u901a</a></div>"
}; RMapType = { Typical: "typical", Airscape: "airscape", Satellite: "satellite", None: "" };
RBase = { setIe6BackgroundPng: function (c) { var d = c.get().style; c.get().style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='crop'," + d.background.replace("url(", "src=").replace(")", "") + ")"; c.get().style.background = "none" }, setIe6ImgPng: function (c) {
    var d = navigator.appVersion.split("MSIE"), d = parseFloat(d[1]); 5.5 <= d && (7 > d && document.body.filters) && (c.outerHTML = "<span " + (c.id ? "id='" + c.id + "' " : "") + (c.className ? "class='" + c.className + "' " : "") + (c.title ? "title='" + c.title + "' " : "title='" +
c.alt + "' ") + ' style="width:' + c.width + "px; height:" + c.height + "px;" + ("display:inline-block;" + c.style.cssText) + ";filter:progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + c.src + "', sizingMethod='scale');\"></span>")
}, PreventDefaultManipulationAndMouseEvent: function (c) { c.preventDefault && c.preventDefault(); c.preventManipulation && c.preventManipulation(); c.preventMouseEvent && c.preventMouseEvent() }, getPointerId: function (c) {
    return c.changedTouches ? c.changedTouches[0].identifier : "undefined" != typeof c.pointerId ?
c.pointerId : 1
}, changeToRGBA: function (c, d) { var e = ""; c && (c = c.replace("#", ""), 6 == c.length && (e = "rgba(" + (parseInt(c.substr(0, 2), 16) + ","), e += parseInt(c.substr(2, 2), 16) + ",", e += parseInt(c.substr(4, 2), 16) + ",", e = e + d + ")")); return e }, stopPropagation: function (c) { c && c.stopPropagation ? c.stopPropagation() : window.event.cancelBubble = !0 }, getMouseEvent: function (c) { c && (c.target && c.target != c.srcElement) && (c.srcElement = c.srcElement || c.target); return c || window.event }, getOffset: function (c) {
    c = c || window.event; var d = c.target ||
c.srcElement; if (c.offsetX && !RBase._browser_ie8) return c; var e = {}, h; for (h in c) e[h] = c[h]; var b = d.currentStyle || window.getComputedStyle(d, null); h = parseInt(b.borderLeftWidth, 10) || 0; b = parseInt(b.borderTopWidth, 10) || 0; d = d.getBoundingClientRect(); e.offsetX = c.clientX - h - d.left; e.offsetY = c.clientY - b - d.top; return e
}, getOffsetOnMapDiv: function (c) {
    c = c || window.event; var d = c.srcElement || c.target; c = RBase.getOffset(c); for (var e = c.offsetX, h = c.offsetY; !d.MapName; ) e += d.offsetLeft, h += d.offsetTop, d = d.parentElement; c.offsetMapLeft =
e; c.offsetMapTop = h; return c
}, getMaxCoordinatesBounds: function (c) {
    var d = null; if (null != c && 0 < c.length) for (var e = 0; e < c.length; e++) 0 < c[e].Cx && 0 < c[e].Cy && (c[e].Cx = parseFloat(c[e].Cx), c[e].Cy = parseFloat(c[e].Cy), d ? (d.MinCoordinates.Cx > c[e].Cx && (d.MinCoordinates.Cx = c[e].Cx), d.MinCoordinates.Cy > c[e].Cy && (d.MinCoordinates.Cy = c[e].Cy), d.MaxCoordinates.Cx < c[e].Cx && (d.MaxCoordinates.Cx = c[e].Cx), d.MaxCoordinates.Cy < c[e].Cy && (d.MaxCoordinates.Cy = c[e].Cy)) : d = new RBounds(new RCoordinates(c[e].Cx, c[e].Cy), new RCoordinates(c[e].Cx,
c[e].Cy))); return d
}, getMaxCoordinates: function (c, d) { var e = null; if (null != c && 0 < c.length) for (var h = 0; h < c.length; h++) 0 < c[h].Cx && 0 < c[h].Cy && (c[h].Cx = parseFloat(c[h].Cx), c[h].Cy = parseFloat(c[h].Cy), e ? (Math.abs(c[h].Cx - d.Cx) > Math.abs(e.Cx - d.Cx) && (e.Cx = c[h].Cx), Math.abs(c[h].Cy - d.Cy) > Math.abs(e.Lng - d.Cy) && (e.Cy = c[h].Cy)) : e = new RCoordinates(c[h].Cx, c[h].Cy)); return e }, _browser_ie6: document.attachEvent && -1 < navigator.appVersion.indexOf("MSIE 6.0;"), _browser_ie8: document.attachEvent && -1 < navigator.appVersion.indexOf("MSIE 8.0;"),
    _browser_android: "android" == navigator.userAgent.toLowerCase().match(/android/i), _browser_firefox: "firefox" == navigator.userAgent.toLowerCase().match(/firefox/i)
};
RCursor = { MouseNormalCursor: "url(" + RMapConstant.JsServer + "image/openhand.cur),default", MouseDownCursor: "url(" + RMapConstant.JsServer + "image/closedhand.cur),default", MouseMoveCursor: "url(" + RMapConstant.JsServer + "image/closedhand.cur),default", MouseUpCursor: "url(" + RMapConstant.JsServer + "image/openhand.cur),default", setMouseDefault: function () {
    RCursor.MouseNormalCursor = "url(" + RMapConstant.JsServer + "image/openhand.cur),default"; RCursor.MouseDownCursor = "url(" + RMapConstant.JsServer + "image/closedhand.cur),default";
    RCursor.MouseMoveCursor = "url(" + RMapConstant.JsServer + "image/closedhand.cur),default"; RCursor.MouseUpCursor = "url(" + RMapConstant.JsServer + "image/openhand.cur),default"
}, setMousePointer: function () { RCursor.MouseNormalCursor = "pointer"; RCursor.MouseDownCursor = "pointer"; RCursor.MouseMoveCursor = "pointer"; RCursor.MouseUpCursor = "pointer" }, setMouseTool: function () { RCursor.MouseNormalCursor = "crosshair"; RCursor.MouseDownCursor = "crosshair"; RCursor.MouseMoveCursor = "crosshair"; RCursor.MouseUpCursor = "crosshair" } 
};
RCompute = { EarthRadius: 6378137, getLineDistance: function (c) { for (var d = 0, e = 0; e < c.length - 1; e++) d += RCompute.distanceBetween(c[e], c[e + 1]); return d }, distanceBetween: function (c, d) { return RCompute.EarthRadius * Math.acos(Math.cos(c.Cx * Math.PI / 180 - d.Cx * Math.PI / 180) * Math.cos(c.Cy * Math.PI / 180) * Math.cos(d.Cy * Math.PI / 180) + Math.sin(c.Cy * Math.PI / 180) * Math.sin(d.Cy * Math.PI / 180)) }, getPolygonArea: function (c) {
    for (var d = 0, e = 0; e < c.length; e++) var h = (e + 1) % c.length, b = c[e].Cx * Math.PI / 180 * RCompute.EarthRadius, k = Math.sin(c[e].Cy *
Math.PI / 180) * RCompute.EarthRadius, a = c[h].Cx * Math.PI / 180 * RCompute.EarthRadius, h = Math.sin(c[h].Cy * Math.PI / 180) * RCompute.EarthRadius, d = d + (b * h - k * a); return d = 0.5 * Math.abs(d)
}, degreeFromDistance: function (c) { return Math.round(1E5 * (c / METERS_PER_DEGREE)) / 1E5 } 
}; RLevelCenter = function (c, d, e) { this.Cx = c; this.Cy = d; this.Level = e }; RPoint = function (c, d) { this.X = c; this.Y = d }; RCoordinates = function (c, d) { this.Cx = c; this.Cy = d; this.toString = function () { return "{" + this.Cx + "," + this.Cy + "}" } };
RBounds = function (c, d) { this.MinCoordinates = c; this.MaxCoordinates = d };
// Div对象
RDiv = function (left, top, width, height, zIndex) {
    this.div = document.createElement("Div");
    this.div.unselectable = "on";
    this.div.style.webkitUserSelect = 'none';
    this.div.style.MozUserSelect = 'none';
    this.div.style.position = "absolute";
    this.div.style.visibility = "inherit";
    // this.div.style.fontSize = 12+"px";

    if (left || left == 0) {
        this.div.style.left = left + "px";
    }
    if (top || top == 0) {
        this.div.style.top = top + "px";
    }
    if (zIndex || zIndex == 0) {
        this.div.style.zIndex = zIndex;
    }
    if (width || width == 0) {
        this.div.style.width = width + "px";
    }
    if (height || height == 0) {
        this.div.style.height = height + "px";
    }

    this.hide = function () {
        // this.div.style.visibility = "hidden";
        this.div.style.display = "none";
    };
    this.show = function () {
        // this.div.style.visibility = "visible";
        this.div.style.display = "block";
    };
    this.get = function () {
        return this.div;
    };
    this.set = function (left, top, width, height, zIndex) {
        if (left || left == 0) {
            this.div.style.left = left + "px";
        }
        if (top || top == 0) {
            this.div.style.top = top + "px";
        }
        if (width || width == 0) {
            this.div.style.width = width + "px";
        }
        if (height || height == 0) {
            this.div.style.height = height + "px";
        }
        if (zIndex || zIndex == 0) {
            this.div.style.zIndex = zIndex;
        }
    };
};
xxxxx_RImage = function (c, d, e, h, b, k) {
    this.img = new Image; this.img.style.position = "absolute"; this.img.style.visibility = "inherit"; this.img.unselectable = "on"; this.img.style.webkitUserSelect = "none"; this.img.style.MozUserSelect = "none"; if (c || 0 == c) this.img.style.left = c + "px"; if (d || 0 == d) this.img.style.top = d + "px"; if (b || 0 == b) this.img.style.zIndex = b; if (e || 0 == e) this.img.style.width = e + "px"; if (h || 0 == h) this.img.style.height = h + "px"; k && (this.img.src = k); this.hide = function () { this.img.style.display = "none" }; this.show = function () {
        this.img.style.display =
"block"
    }; this.get = function () { return this.img }; this.set = function (a, f, b, n, c, g) { if (a || 0 == a) this.img.style.left = a + "px"; if (f || 0 == f) this.img.style.top = f + "px"; if (c || 0 == c) this.img.style.zIndex = c; if (b || 0 == b) this.img.style.width = b + "px"; if (n || 0 == n) this.img.style.height = n + "px"; g && (this.img.src = g) }; this.setErrHandler = function (a) { this.img.onerror = a }; this.setImgSrc = function (a) { this.img.src = a } 
};
createRImage = function (c, d, e, h, b, k) { var a = new Image; a.style.position = "absolute"; a.style.visibility = "inherit"; a.unselectable = "on"; a.style.webkitUserSelect = "none"; a.style.MozUserSelect = "none"; if (c || 0 == c) a.style.left = c + "px"; if (d || 0 == d) a.style.top = d + "px"; if (b || 0 == b) a.style.zIndex = b; if (e || 0 == e) a.style.width = e + "px"; if (h || 0 == h) a.style.height = h + "px"; k && (a.src = k); return a }; RMapEvent = function (c) { this.Name = c; this.MouseX; this.MouseY; this.MouseCx; this.MouseCy }; RMapEvent.MouseClickEvent = "MapMouseClickEvent"; RMapEvent.MouseDoubleClickEvent = "MapMouseDoubleClickEvent"; RMapEvent.MouseOverEvent = "MapMouseOverEvent"; RMapEvent.MouseOutEvent = "MapMouseOutEvent"; RMapEvent.MouseDownEvent = "MapMouseDownEvent"; RMapEvent.MouseUpEvent = "MapMouseUpEvent"; RMapEvent.MouseMoveEvent = "MapMouseMoveEvent"; RMapEvent.MouseRightButtonEvent = "MapMouseRightButtonEvent"; RMapEvent.MapTypeChanged = "MapTypeChanged";
RMapEvent.SizeChanged = "MapSizeChanged"; RMapEvent.LevelChange = "MapLevelChange"; RMapEvent.LevelChanging = "MapLevelChanging"; RMapEvent.LevelChanged = "MapLevelChanged"; RMapEvent.CenterChanged = "MapCenterChanged"; RMapEvent.Move = "MapMove"; RMapEvent.Moving = "MapMoving"; RMapEvent.Moved = "MapMoved"; RMarkerEvent = function (c) { this.Name = c; this.Cx; this.Cy; this.Hook }; RMarkerEvent.MouseClickEvent = "MarkerMouseClickEvent"; RMarkerEvent.MouseDoubleClickEvent = "MarkerMouseDoubleClickEvent"; RMarkerEvent.MouseOverEvent = "MarkerMouseOverEvent";
RMarkerEvent.MouseOutEvent = "MarkerMouseOutEvent"; RGraphicsEvent = function (c) { this.Name = c; this.Cx; this.Cy; this.Hook }; RGraphicsEvent.MouseClickEvent = "GraphicsMouseClickEvent"; RGraphicsEvent.MouseDoubleClickEvent = "GraphicsMouseDoubleClickEvent"; RGraphicsEvent.MouseOverEvent = "GraphicsMouseOverEvent"; RGraphicsEvent.MouseOutEvent = "GraphicsMouseOutEvent"; RToolEvent = function (c) { this.Name = c }; RToolEvent.OpenTool = "OpenTool"; RToolEvent.CloseTool = "CloseTool"; RToolEvent.ClearGraphics = "ClearGraphics";
RToolEvent.DisposeTool = "DisposeTool"; RGeometry = { DetaValue: 2E-7, FC: function (c, d) { return c - d < RGeometry.DetaValue && c - d > -RGeometry.DetaValue ? !0 : !1 }, isPointOnLine: function (c, d, e) { return !c || (!d || !e) || !1 == RGeometry.FC((e.Cy - c.Cy) * (d.Cx - c.Cx) - (d.Cy - c.Cy) * (e.Cx - c.Cx), 0) ? !1 : Math.min(c.Cx, d.Cx) <= e.Cx && e.Cx <= Math.max(c.Cx, d.Cx) && Math.min(c.Cy, d.Cy) <= e.Cy && e.Cy <= Math.max(c.Cy, d.Cy) ? !0 : !1 }, isPointOnPath: function (c, d) {
    if (!c || 3 > c.length || !d) return !1; for (var e = null, h = null, e = c[0], b = 1; b < c.length; b++) {
        h = c[b]; if (RGeometry.isPointOnLine(e, h, d)) return !0; e =
h
    } return !1
}, isPointInPolygon: function (c, d) { if (!c || 3 > c.length || !d) return -1; for (var e = 0, h = 0, b = null, k = null, b = c[c.length - 1], a = 0; a < c.length; a++) { k = c[a]; if (RGeometry.isPointOnLine(b, k, d)) return 2; d.Cx > Math.min(b.Cx, k.Cx) && (d.Cx <= Math.max(b.Cx, k.Cx) && d.Cy <= Math.max(b.Cy, k.Cy) && b.Cx != k.Cx) && (h = (d.Cx - b.Cx) * (k.Cy - b.Cy) / (k.Cx - b.Cx) + b.Cy, (b.Cy == k.Cy || d.Cy <= h) && e++); b = k } return 0 == e % 2 ? 0 : 1 }, circleDetaValue: 1E-5, isPointInCircle: function (c, d, e) {
    d = Math.sqrt(Math.pow(Math.abs(d.Cx - c.Cx), 2) + Math.pow(Math.abs(d.Cy - c.Cy),
2)); c = Math.sqrt(Math.pow(Math.abs(e.Cx - c.Cx), 2) + Math.pow(Math.abs(e.Cy - c.Cy), 2)); return c - d <= RGeometry.circleDetaValue && c - d >= -RGeometry.circleDetaValue ? 1 : c - d < -RGeometry.circleDetaValue ? 2 : 0
} 
}; 
var RBaseGraphics = function (coordinatesArr, lineWidth, lineColor, lineOpacity, fillColor, fillOpacity,borderWidth,borderColor,borderOpacity) {
    var baseObject = this;
    this.CoordinatesArr = coordinatesArr;
    this.LineWidth = lineWidth;
    this.LineColor = lineColor;
    this.LineOpacity = lineOpacity;
    this.FillColor = fillColor;
    this.FillOpacity = fillOpacity;
    if(borderWidth){
    	this.borderWidth=borderWidth;
    }
    if(borderColor){
    	this.borderColor=borderColor;
    }
    if(borderOpacity){
    	this.borderOpacity=borderOpacity;
    }
    
    

    this.getMBR = function(){
        if(!coordinatesArr||!coordinatesArr.length)
            return {minx:0,miny:0,maxx:0,maxy:0};
        var minx=this.CoordinatesArr[0].Cx,miny=this.CoordinatesArr.Cy,maxx=minx,maxy=miny;
        for(var i=1;i<this.CoordinatesArr.length;i++)
            minx=Math.min(minx,this.CoordinatesArr[i].Cx),miny=Math.min(miny,this.CoordinatesArr.Cy),maxx=Math.max(maxx,this.CoordinatesArr.Cx),maxy=Math.max(maxy,this.CoordinatesArr.Cy);
        return {minx:minx,miny:miny,maxx:maxx,maxy:maxy};
    };

    this.Left = 0;
    this.Top = 0;
    this.MBR = this.getMBR();

    // 用于保存对象
    this.Hook = null;
    this.Maplet = null;
    this.Graphics = null;

    this.Div = new RDiv(0, 0, null, null, 0);

    // 屏蔽鼠标菜单
    this.Div.get().oncontextmenu = function (evt) {
        return false;
    };

    this.setMaplet = function (maplet) {
        this.Maplet = maplet;
    };

    // 获取div对象
    this.get = function () {
        this.Div.get();
    };

    // 显示
    this.show = function () {
        this.Div.get().style.visibility = "visible";
    };
    // 隐藏
    this.hide = function () {
        this.Div.get().style.visibility = "hidden";
    };
    // 更新
    this.update = function () {
        this.MBR = this.getMBR();
        this.refresh();
    };

    // 重绘
    this.draw = function(){};

    // 自我刷新
    this.refresh = function () {};
    // 销毁
    this.dispose = function () {
        this.CoordinatesArr = new Array();
        this.LineWidth = 0;
        this.LineColor = "";
        this.LineOpacity = 1;
        this.FillColor = "";
        this.FillOpacity = 1;

        this.Left = 0;
        this.Top = 0;

        // 用于保存对象
        this.Hook = null;
        this.Maplet = null;
        this.Graphics = null;
    };

    this.runClickEvent = function (evt) {
        // 广播事件
        baseObject.dispatchEvent(RGraphicsEvent.MouseClickEvent);
    };
    this.runMouseOverEvent = function (evt) {
        // 广播事件
        baseObject.dispatchEvent(RGraphicsEvent.MouseOverEvent);
    };
    this.runMouseOutEvent = function (evt) {
        // 广播事件
        baseObject.dispatchEvent(RGraphicsEvent.MouseOutEvent);
    };
    this.runMouseDoubleClickEvent = function (evt) {
        // 广播事件
        baseObject.dispatchEvent(RGraphicsEvent.MouseDoubleClickEvent);
    };

    /*-- 事件 ------------------------------------------*/
    this.EventArray = new Array();
    this.EventArray[RGraphicsEvent.MouseClickEvent] = new Array();
    this.EventArray[RGraphicsEvent.MouseDoubleClickEvent] = new Array();
    this.EventArray[RGraphicsEvent.MouseOverEvent] = new Array();
    this.EventArray[RGraphicsEvent.MouseOutEvent] = new Array();

    this.addEventListener = function (eventName, func) {
        if (this.EventArray[eventName]) {
            this.EventArray[eventName].push(func);

            switch (eventName) {
                case RGraphicsEvent.MouseClickEvent:
                    if (!this.Graphics.onclick) {
                        this.Graphics.onclick = this.runClickEvent;
                    }
                    break;
                case RGraphicsEvent.MouseOverEvent:
                    if (!this.Graphics.onmouseover) {
                        this.Graphics.onmouseover = this.runMouseOverEvent;
                    }
                    break;
                case RGraphicsEvent.MouseOutEvent:
                    if (!this.Graphics.onmouseout) {
                        this.Graphics.onmouseout = this.runMouseOutEvent;
                    }
                    break;
                case RGraphicsEvent.MouseDoubleClickEvent:
                    if (!this.Graphics.ondblclick) {
                        this.Graphics.ondblclick = this.runMouseDoubleClickEvent;
                    }
                    break;
                default:
                    break;
            }
        }
    };
    this.removeEventListener = function (eventName, func) {
        if (this.EventArray[eventName]) {
            for (var i = 0; i < this.EventArray[eventName].length; i++) {
                if (this.EventArray[eventName][i] == func) {
                    this.EventArray[eventName].splice(i, 1);
                }
            }
            if (this.EventArray[eventName].length <= 0) {
                switch (eventName) {
                    case RGraphicsEvent.MouseClickEvent:
                        this.Graphics.onclick = null;
                        break;
                    case RGraphicsEvent.MouseOverEvent:
                        this.Graphics.onmouseover = null;
                        break;
                    case RGraphicsEvent.MouseOutEvent:
                        this.Graphics.onmouseout = null;
                        break;
                    case RGraphicsEvent.MouseDoubleClickEvent:
                        this.Graphics.ondblclick = null;
                        break;
                    default:
                        break;
                }
            }
        }
    };
    this.dispatchEvent = function (eventName) {
        if (this.EventArray[eventName] && this.EventArray[eventName].length > 0) {
            var event = new RGraphicsEvent(eventName);
            event.Cx = this.Cx;
            event.Cy = this.Cy;
            event.Hook = this.Hook;
            for (var i = 0; i < this.EventArray[eventName].length; i++) {
                if (this.EventArray[eventName][i]) {
                    this.EventArray[eventName][i](event);
                }
            }
        }
    };
};
RLine = function (coordinatesArr, lineWidth, lineColor, lineOpacity) {
	//debugger;
    RBaseGraphics.call(this, coordinatesArr, lineWidth, lineColor, lineOpacity);
    var baseObject = this;

    this.Graphics = document.createElement("canvas");
    if(this.Graphics.getContext) // html5 canvas
        this.Context = this.Graphics.getContext("2d");
    else // ie vml
    {
        this.Graphics = document.createElement("v:polyline");
        this.Graphics.unselectable = "on";
        this.Graphics.fill = false;
        this.Graphics.filled = false;
    }

    this.Div.get().appendChild(this.Graphics);

    // 更新
    this.update = function (coordinatesArr, lineWidth, lineColor, lineOpacity) {
        if (coordinatesArr && coordinatesArr.length > 0) {
            this.CoordinatesArr = coordinatesArr;
        }
        if (lineWidth > 0) {
            this.LineWidth = lineWidth;
        }
        if (lineColor) {
            this.lineColor = LineColor;
        }
        if (lineOpacity || lineOpacity == 0) {
            this.LineOpacity = lineOpacity;
        }
        this.MBR = this.getMBR();
        this.refresh();
    };

    // 重绘
    this.draw = function(){
        if(!baseObject.CoordinatesArr||!baseObject.CoordinatesArr.length)
            return;
        if(baseObject.Context)
            baseObject.Context.clearRect(0, 0, baseObject.Graphics.width, baseObject.Graphics.height);
        else
            baseObject.Graphics.points.value='';
// var lefttop = baseObject.Maplet.toClientPoint(baseObject.MBR.minx,
// baseObject.MBR.maxy);
// var rightbottom = baseObject.Maplet.toClientPoint(baseObject.MBR.maxx,
// baseObject.MBR.miny);
// if(lefttop.X>baseObject.Maplet.MapWidth || rightbottom.X<0 ||
// lefttop.Y>baseObject.Maplet.MapHeight || rightbottom.Y<0) // totally outside
// return;
        if(baseObject.Context) // html5 canvas
        {
            baseObject.Graphics.style.lineHeight = "10px"; // 长宽改变，参数还原默认值
            baseObject.Context.lineWidth = baseObject.LineWidth;
            baseObject.Context.strokeStyle = baseObject.LineColor;
            baseObject.Context.globalAlpha = baseObject.LineOpacity;
baseObject.Context.shadowColor = baseObject.LineColor;
baseObject.Context.shadowOffsetX = 0;
baseObject.Context.shadowOffsetY = 0;
baseObject.Context.shadowBlur = 5; 
            baseObject.Context.lineCap = 'round';
            baseObject.Context.lineJoin = "round";
            baseObject.Context.beginPath();
            for(var i=0; i<baseObject.CoordinatesArr.length; i++)
            {
                if(!baseObject.CoordinatesArr[i])
                    continue;
                var offset = baseObject.Maplet.toClientPoint(baseObject.CoordinatesArr[i].Cx,baseObject.CoordinatesArr[i].Cy);
                if (!i)
                    baseObject.Context.moveTo(offset.X,offset.Y);
                else
                    baseObject.Context.lineTo(offset.X,offset.Y);
            }
            baseObject.Context.stroke();
            baseObject.Context.closePath();
        }
        else // ie vml
        {
            var sb = [];
            for(var i=0; i<baseObject.CoordinatesArr.length; i++)
            {
                if(!baseObject.CoordinatesArr[i])
                    continue;
                var offset = baseObject.Maplet.toClientPoint(baseObject.CoordinatesArr[i].Cx,baseObject.CoordinatesArr[i].Cy);
                sb.push(offset.X+"px,"+offset.Y+"px");
            }
            baseObject.Graphics.StrokeColor = baseObject.LineColor;
            baseObject.Graphics.StrokeWeight = baseObject.LineWidth + "px";
            baseObject.Graphics.style.filter = "alpha(opacity=" + baseObject.LineOpacity * 100 + ")";
            baseObject.Graphics.points.value = sb.join(' ');
        }
    };


    // 自我刷新
    this.refresh = function () {
        if(baseObject.Context)
        {
            baseObject.Graphics.width = baseObject.Maplet.MapWidth;
            baseObject.Graphics.height = baseObject.Maplet.MapHeight;
        }
        baseObject.draw();
    };
};
RPolygon = function (c, d, e, h, b, k) {
    RBaseGraphics.call(this, c, d, e, h, b, k); var a = this; this.Graphics = document.createElement("canvas"); this.Graphics.getContext ? (this.Context = this.Graphics.getContext("2d"), this.Div.get().appendChild(this.Graphics)) : (this.Graphics = document.createElement("v:polyline"), this.Graphics.Filled = !1, this.Div.get().appendChild(this.Graphics), b && k && (this.Fill = document.createElement("v:polyline"), this.Fill.Filled = !0, this.Div.get().appendChild(this.Fill))); this.update = function (a, b, c, d, g,
e) { a && 0 < a.length && (this.CoordinatesArr = a); 0 < b && (this.LineWidth = b); c && (this.lineColor = LineColor); if (d || 0 == d) this.LineOpacity = d; g && e ? this.Fill || (this.Fill = document.createElement("v:polyline"), this.Fill.Filled = !0, this.Div.get().appendChild(this.Fill)) : this.Fill && (this.Div.get().removeChild(this.Fill), this.Fill = void 0); this.MBR = this.getMBR(); this.refresh() }; this.draw = function () {
    if (a.CoordinatesArr && a.CoordinatesArr.length) if (a.Context ? a.Context.clearRect(0, 0, a.Graphics.width, a.Graphics.height) : a.Graphics.points.value =
"", a.Context) {
        a.Context.lineWidth = a.LineWidth; a.Context.lineCap = "round"; a.Context.lineJoin = "round"; a.Context.fillStyle = RBase.changeToRGBA(a.FillColor, a.FillOpacity); a.Context.strokeStyle = RBase.changeToRGBA(a.LineColor, a.LineOpacity); a.Context.beginPath(); for (var b, l = 0; l < a.CoordinatesArr.length; l++) a.CoordinatesArr[l] && (b = a.Maplet.toClientPoint(a.CoordinatesArr[l].Cx, a.CoordinatesArr[l].Cy), l ? a.Context.lineTo(b.X, b.Y) : a.Context.moveTo(b.X, b.Y)); b = a.Maplet.toClientPoint(a.CoordinatesArr[0].Cx, a.CoordinatesArr[0].Cy);
        a.Context.lineTo(b.X, b.Y); a.Context.fill(); a.Context.stroke(); a.Context.closePath()
    } else {
        for (var c = [], l = 0; l < a.CoordinatesArr.length; l++) a.CoordinatesArr[l] && (b = a.Maplet.toClientPoint(a.CoordinatesArr[l].Cx, a.CoordinatesArr[l].Cy), c.push(b.X + "px," + b.Y + "px")); b = a.Maplet.toClientPoint(a.CoordinatesArr[0].Cx, a.CoordinatesArr[0].Cy); c.push(b.X + "px," + b.Y + "px"); a.Graphics.StrokeColor = a.LineColor; a.Graphics.StrokeWeight = a.LineWidth + "px"; a.Graphics.style.filter = "alpha(opacity=" + 100 * a.LineOpacity + ")"; b = c.join(" ");
        a.Graphics.points.value = b; a.Fill && (a.Fill.points.value = b, a.Fill.FillColor = a.FillColor, a.Fill.style.filter = "alpha(opacity=" + 100 * a.FillOpacity + ")")
    } 
}; this.refresh = function () { a.Context && (a.Graphics.width = a.Maplet.MapWidth, a.Graphics.height = a.Maplet.MapHeight); a.draw() } 
};
RCircle = function (c, d, e, h, b, k, a) {
    RBaseGraphics.call(this, null, e, h, b, k, a); var f = this; this.CenterCoordinates = c; this.SideCoordinates = d; this.Graphics = document.createElement("canvas"); this.Graphics.getContext ? (this.Context = this.Graphics.getContext("2d"), this.Div.get().appendChild(this.Graphics)) : (this.Graphics = document.createElement("v:oval"), this.Graphics.unselectable = "on", this.Graphics.style.position = "absolute", this.Div.get().appendChild(this.Graphics), k && a && (this.Fill = document.createElement("v:oval"),
this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill))); this.update = function (a, b, f, g, c, d, e) {
    a && (this.CenterCoordinates = coordinatesArr); b && (this.SideCoordinates = b); 0 < f && (this.LineWidth = f); g && (this.lineColor = LineColor); if (c || 0 == c) this.LineOpacity = c; d && e ? this.Fill || (this.Fill = document.createElement("v:oval"), this.Fill.style.position = "absolute", this.Filled = !0, this.Div.get().appendChild(this.Fill)) : this.Fill && (this.Div.get().removeChild(this.Fill), this.Fill = void 0); this.MBR =
this.getMBR(); this.refresh()
}; this.draw = function () {
    if (f.CenterCoordinates && f.SideCoordinates) {
        var a = f.Maplet.toClientPoint(f.CenterCoordinates.Cx, f.CenterCoordinates.Cy), b = f.Maplet.toClientPoint(f.SideCoordinates.Cx, f.SideCoordinates.Cy), c = a.X - b.X, b = a.Y - b.Y, c = parseInt(Math.pow(c * c + b * b, 0.5)); f.Context ? (f.Context.clearRect(0, 0, f.Graphics.width, f.Graphics.height), f.Context.lineWidth = f.LineWidth, f.Context.fillStyle = RBase.changeToRGBA(f.FillColor, f.FillOpacity), f.Context.strokeStyle = RBase.changeToRGBA(f.LineColor,
f.LineOpacity), f.Context.beginPath(), f.Context.arc(a.X - c - f.LineWidth, a.Y - f.LineWidth, c, 0, 2 * Math.PI, !0), f.Context.fill(), f.Context.stroke(), f.Context.closePath()) : (f.Graphics.style.left = parseInt(a.X - c - f.LineWidth) + "px", f.Graphics.style.top = parseInt(a.Y - c - f.LineWidth) + "px", f.Fill && (f.Fill.style.left = parseInt(a.X - c) + "px", f.Fill.style.top = parseInt(a.Y - c) + "px"))
    } 
}; this.refresh = function () {
    if (this.CenterCoordinates && this.SideCoordinates) {
        if (this.Context) this.Graphics.width = this.Maplet.MapWidth, this.Graphics.height =
this.Maplet.MapHeight; else {
            var a = this.Maplet.toClientPoint(this.CenterCoordinates.Cx, this.CenterCoordinates.Cy), b = this.Maplet.toClientPoint(this.SideCoordinates.Cx, this.SideCoordinates.Cy), f = a.X - b.X, a = a.Y - b.Y, f = parseInt(Math.pow(f * f + a * a, 0.5)); this.Graphics.style.width = 2 * (f + this.LineWidth) + "px"; this.Graphics.style.height = 2 * (f + this.LineWidth) + "px"; this.Graphics.StrokeColor = this.LineColor; this.Graphics.Stroked = !0; this.Graphics.StrokeWeight = this.LineWidth; this.Graphics.style.filter = "alpha(opacity=" + 100 *
this.LineOpacity + ")"; this.Fill && (this.Fill.style.width = 2 * f + "px", this.Fill.style.height = 2 * f + "px", this.Fill.FillColor = this.FillColor, this.Fill.style.filter = "alpha(opacity=" + 100 * this.FillOpacity + ")")
        } this.draw()
    } 
} 
}; __RLayer = function (c, d, e, h) {
    var b = this; this.Maplet = c; this.MapRoot = d; this.MapType = e; this.zIndex = h ? h : 0; this.Level = this.Maplet.Level; this.Top = this.Left = 0; this.Cx = this.Maplet.Cx; this.Cy = this.Maplet.Cy; this.MapWidth = this.Maplet.MapWidth; this.MapHeight = this.Maplet.MapHeight; this.Tilelayers = Array(RMapConstant.Directorys.length); this.Div = new RDiv(0, 0, this.MapWidth, this.MapHeight, this.zIndex); this.Div.get().style.overflow = "hidden"; for (c = 0; c < RMapConstant.Directorys.length; c++) this.Tilelayers[c] = c >= RMapConstant.MapMinLevel ||
c <= RMapConstant.MapMaxLevel ? new RTileLayer(this.Cx, this.Cy, c, this.MapWidth, this.MapHeight, 0, this.MapRoot, this.MapType) : null; this.getCenter = function () { return new RCoordinates(this.Cx, this.Cy) }; this.setCenter = function (a, b) { if (a != this.Cx || b != this.Cy) this.Top = this.Left = 0, this.Cx = a, this.Cy = b, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].setLeftTop(0, 0), this.Tilelayers[this.Level].show() }; this.resize = function (a, b) {
    this.MapWidth = a; this.MapHeight = b;
    this.Div.set(null, null, this.MapWidth, this.MapHeight, null); for (var c = 0; c < RMapConstant.Directorys.length; c++) this.Tilelayers[c] && (this.Tilelayers[c].Div.set(null, null, this.MapWidth, this.MapHeight, null), this.Tilelayers[c].MapWidth = this.MapWidth, this.Tilelayers[c].MapHeight = this.MapHeight, this.Tilelayers[c].Cx = this.Cx, this.Tilelayers[c].Cy = this.Cy); this.Tilelayers[this.Level].show(); this.Left = this.Top = 0
}; this.addTileLayer = function (a) {
    this.Div.get().appendChild(this.Tilelayers[a].Div.get()); this.Tilelayers[a].show();
    this.Left = this.Top = 0
}; this.removeTileLayer = function (a) { this.Tilelayers[a].clear(); for (var b = 0; b < this.Div.get().childNodes.length; b++) if (this.Div.get().childNodes[b] == this.Tilelayers[a].Div.get()) { this.Div.get().removeChild(this.Tilelayers[a].Div.get()); break } }; this.setTileLayer = function (a, b, c, d, g) { b && (this.Tilelayers[a].Cx = b); c && (this.Tilelayers[a].Cy = c); if (d || 0 == d) this.Tilelayers[a].MapWidth = d; if (g || 0 == g) this.Tilelayers[a].MapHeight = g }; this.setLocation = function (a, c, n, d, g) {
    if (a || 0 == a || c || 0 == c) if (a !=
this.Left || c != this.Top) this.Left = a, this.Top = c, this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top), this.Tilelayers[this.Level].loadNewPic(), this.Cx = d, this.Cy = g, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight); null != n && (void 0 != n && n >= RMapConstant.MapMinLevel && n <= RMapConstant.MapMaxLevel) && this.Level != n && (this.removeTileLayer(this.Level), this.Top = this.Left = 0, this.Level = n, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].setLeftTop(0,
0), this.addTileLayer(this.Level)); if (RBase._browser_ie6) { a = b.Div.get().getElementsByTagName("img"); for (c = 0; c < a.length; c++) a[c].style.filter || (n = a[c].src, a[c].src = RMapConstant.JsServer + "image/none.gif", a[c].style.width = RMapConstant.MapPicWidth, a[c].style.width = RMapConstant.MapPicHeight, a[c].style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + n + "', sizingMethod='scale')") } 
}; this.dispose = function () {
    this.clearHotspot(); for (this.removeTileLayer(this.Level); 0 < this.Tilelayers.length; ) this.Tilelayers[0] &&
(this.Tilelayers[0].clear(), this.Tilelayers[0] = null), this.Tilelayers.pop(); this.Tilelayers = null; this.Maplet.removeEventListener(RMapEvent.MouseClickEvent, a); this.Maplet.removeEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent); this.Maplet.removeEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent); this.Maplet.removeEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent); this.Maplet.removeEventListener(RMapEvent.Moved, this.runMovedEvent); this.Maplet.removeEventListener(RMapEvent.Moving,
this.runMovingEvent)
}; this.runSizeChangedEvent = function (a) { b.resize(b.Maplet.MapWidth, b.Maplet.MapHeight) }; this.runLevelChangedEvent = function (a) { b.setLocation(null, null, b.Maplet.Level, null, null) }; this.runCenterChangedEvent = function (a) { b.setCenter(b.Maplet.Cx, b.Maplet.Cy) }; this.runMovedEvent = function (a) { b.setLocation(b.Maplet.Left, b.Maplet.Top, null, b.Maplet.Cx, b.Maplet.Cy) }; this.runMovingEvent = function (a) { b.setLocation(b.Maplet.Left, b.Maplet.Top, null, b.Maplet.Cx, b.Maplet.Cy) }; this.Maplet.addEventListener(RMapEvent.SizeChanged,
this.runSizeChangedEvent); this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent); this.Maplet.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent); this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent); this.Maplet.addEventListener(RMapEvent.Moving, this.runMovingEvent); this.addTileLayer(this.Level); var k, a = function (a) {
    if (k) {
        a = { Cx: a.MouseCx, Cy: a.MouseCy }; for (var c in k) {
            var n = k[c]; if (!n.marker && RCompute.distanceBetween({ Cx: n.lng, Cy: n.lat }, a) < (n.bound ||
3E3) * RMapConstant.ScaleFactors[b.Maplet.Level]) n.marker = new RLabelMarker(n.lng, n.lat, n.name, RMapConstant.JsServer + "image/hotspot.png", -8, -8, 16, 16), b.Maplet.addMarker(n.marker), n.marker.showLabel()
        } b.Maplet.refreshAllMarker()
    } 
}; this.Maplet.addEventListener(RMapEvent.MouseClickEvent, a); this.clearHotspot = function () {
    if (k) {
        for (var a in k) if (k[a].marker) { var c = k[a]; c.marker.hideLabel(); c.marker.hide(); b.Maplet.removeMarker(c.marker); delete c.marker } b.Maplet.refreshAllMarker(); b.Maplet.removeEventListener(RMapEvent.SizeChanged,
k.setup); b.Maplet.removeEventListener(RMapEvent.LevelChanged, k.setup); b.Maplet.removeEventListener(RMapEvent.CenterChanged, k.setup); b.Maplet.removeEventListener(RMapEvent.Moved, k.setup); k = null
    } 
}; this.setHotspot = function (a) {
    this.clearHotspot(); k = {}; var c; k.setup = function () {
        c && (window.clearTimeout(c), c = null); c = window.setTimeout(function () {
            c = null; var n = b.Maplet.getBounds(), d; do d = "RmapHotspot_" + (Math.random().toString() + Math.random().toString()).replace(/\./g, "D"); while (window[d]); window[d] = function (a) {
                if (k &&
a && a.length) for (var b = 0; b < a.length; b++) { var c = a[b]; k[c.id] = k[c.id] || c } window[d] = null
            }; var g = document.createElement("script"), e = a.indexOf("?") + 1 ? "&" : "?"; g.src = a + e + "range=" + n.MinCoordinates.Cx.toString() + "," + n.MinCoordinates.Cy.toString() + "," + n.MaxCoordinates.Cx.toString() + "," + n.MaxCoordinates.Cy.toString() + "&callback=" + d; document.body.insertBefore(g, document.body.firstChild)
        }, 500)
    }; b.Maplet.addEventListener(RMapEvent.SizeChanged, k.setup); b.Maplet.addEventListener(RMapEvent.LevelChanged, k.setup); b.Maplet.addEventListener(RMapEvent.CenterChanged,
k.setup); b.Maplet.addEventListener(RMapEvent.Moved, k.setup); k.setup()
} 
}; RBaseMap = function (c, d, e, h, b, k, a) {
    function f() { try { m.removeEventListener(navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", n, !0), q && m.msReleasePointerCapture && m.msReleasePointerCapture(q.id), r && m.msReleasePointerCapture && m.msReleasePointerCapture(r.id) } catch (a) { } } function l(a) {
        if (g.isCanMove) {
            RBase.PreventDefaultManipulationAndMouseEvent(a); var b = RBase.getPointerId(a), c = a.isPrimary || a.touches && a.touches.length == a.changedTouches.length; q || (f(), r = null, c && (g.isZooming = !1)); if (!g.isZooming && (c && (q =
{ id: b, x: a.pageX || a.touches[0].pageX, y: a.pageY || a.touches[0].pageY }, m.msSetPointerCapture && m.msSetPointerCapture(b)), (a.touches ? 2 == a.touches.length : !a.isPrimary) && !r && q)) c = a.touches ? 1 < a.touches.length ? a.touches[1] : a.changedTouches[0] : a, r = { id: c.identifier || c.pointerId, x: c.pageX, y: c.pageY }, v.pointer_id = r.id, p(a), g.isZooming = !0, u = Math.pow(Math.pow(q.x - r.x, 2) + Math.pow(q.y - r.y, 2), 0.5), m.addEventListener(navigator.msPointerEnabled ? "MSPointerMove" : "touchmove", n, !0), m.msSetPointerCapture && m.msSetPointerCapture(b),
g.dispatchEvent.call(g, RMapEvent.LevelChange)
        } 
    } function n(a) { if (r && q) { RBase.PreventDefaultManipulationAndMouseEvent(a); if (window.navigator.msPointerEnabled) { var b = RBase.getPointerId(a); if (b != q.id && b != r.id) return; b = b == q.id ? q : r; b.x = a.pageX; b.y = a.pageY } else for (var c, b = 0; b < a.touches.length; b++) a.touches[b].identifier == q.id ? (c = a.touches[b], q.x = c.pageX, q.y = c.pageY) : a.touches[b].identifier == r.id && (c = a.touches[b], r.x = c.pageX, r.y = c.pageY); a = Math.pow(Math.pow(q.x - r.x, 2) + Math.pow(q.y - r.y, 2), 0.5) / u; g.Tilelayers[g.Level].setZoom(a) } }
    function s(a) {
        RBase.PreventDefaultManipulationAndMouseEvent(a); var b = !1, c = !1; if (a.touches) for (var l = 0; l < a.changedTouches.length; l++) b = b || q && a.changedTouches[l].identifier == q.id, c = c || r && a.changedTouches[l].identifier == r.id; else a.pointerId && (b = q && a.pointerId == q.id, c = r && a.pointerId == r.id); if (b || c) if (f(), g.isZooming) {
            g.isZooming = !1; a = g.Tilelayers[g.Level].layerZoom; var n = g.Level, d = n; if (1 < a) for (l = n; l <= RMapConstant.MapMaxLevel; l++) a > RMapConstant.ScaleFactors[n] / RMapConstant.ScaleFactors[l] && (d = l); else if (1 >
a) for (l = n; l >= RMapConstant.MapMinLevel; l--) a < RMapConstant.ScaleFactors[n] / RMapConstant.ScaleFactors[l] && (d = l); g.Tilelayers[n].setZoom(1); d != n && g.setLocation.call(g, null, null, d); g.dispatchEvent.call(g, RMapEvent.LevelChanged); v.clean()
        } c && (r = null); b && (q = null)
    } if (navigator.userAgent.match(/\bMSIE\b/) && ("undefined" == typeof document.documentMode || 10 > document.documentMode)) document.namespaces.add("v", "urn:schemas-microsoft-com:vml"), document.createStyleSheet().addRule("v\\:polyline", "behavior: url(#default#VML);"),
document.createStyleSheet().addRule("v\\:shape", "behavior: url(#default#VML);"); window.console = window.console || function (a) { return { log: a, error: a, warn: a, info: a} } (function () { var a = []; for (a.i = 0; a.i < arguments.length; a.i++) a[a.i] = arguments[a.i]; window.status = a.join() }); var g = this; this.isDraging = this.isMoving = this.isZooming = !1; this.isCanMove = !0; this.isVisible = !1; this.zoomCount; this.oldZoomDes; this.oldZoomStep; this.zoomDes = 1; this.zoomStep; this.midZoomIndex; this.oldLevel; this.moveCount; this.oldCx; this.oldCy;
    this.xStep; this.yStep; this.oldLeft; this.oldTop; this.stepIndex; this.newCx; this.newCy; this.stepCx; this.stepCy; if (h < RMapConstant.MapMinLevel || h > RMapConstant.MapMaxLevel) h = RMapConstant.MapMinLevel; this.Level = h; this.Top = this.Left = 0; this.Cx = parseFloat(d); this.Cy = parseFloat(e); this.MapWidth = b; this.MapHeight = k; this.MapRoot = RMapConstant.MapRoot; this.MapType = a ? a : RMapType.Typical; this.Tilelayers = Array(RMapConstant.Directorys.length); this.Div = new RDiv(0, 0, this.MapWidth, this.MapHeight, 0); this.Div.get().style.cursor =
RCursor.MouseNormalCursor; this.Div.get().style.overflow = "hidden"; this.Div.get().style.display = "none"; "undefined" != typeof this.Div.get().style.msTouchAction && (this.Div.get().style.msTouchAction = "none"); this.Div.get().MapName = "map"; this.Div.get().setAttribute("_rmap", "map"); for (d = 0; d < RMapConstant.Directorys.length; d++) this.Tilelayers[d] = new RTileLayer(this.Cx, this.Cy, d, this.MapWidth, this.MapHeight, 10, this.MapRoot, this.MapType); this.maskDiv = new RDiv(0, 0, this.MapWidth, this.MapHeight, 100); this.maskDiv.get().style.backgroundImage =
"url(" + RMapConstant.JsServer + "image/none.gif)"; this.maskDiv.get().unselectable = "on"; "undefined" != typeof this.maskDiv.get().style.msTouchAction && (this.maskDiv.get().style.msTouchAction = "none"); this.maskDiv.get().setAttribute("_rmap", "mask"); this.Div.get().appendChild(this.maskDiv.get()); c && (this.parent = "string" == typeof c ? document.getElementById(c) : c, this.parent.appendChild(this.Div.get())); this.setLocation = function (a, b, c, f, g) {
    if (a || 0 == a || b || 0 == b) if (a != this.Left || b != this.Top) this.Left = parseFloat(a),
this.Top = parseFloat(b), this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top), this.Tilelayers[this.Level].loadNewPic(), this.Cx = this.oldCx + (this.oldLeft - this.Left) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth, this.Cy = this.oldCy - (this.oldTop - this.Top) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight); if (f || g) if (f != this.Cx || g != this.Cy) f = parseFloat(f), g = parseFloat(g), this.Left -= (f - this.Cx) * RMapConstant.MapPicWidth /
RMapConstant.ScaleFactors[this.Level], this.Top += (g - this.Cy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level], this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top), this.Tilelayers[this.Level].loadNewPic(), this.Cx = f, this.Cy = g, this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight); null != c && (void 0 != c && c >= RMapConstant.MapMinLevel && c <= RMapConstant.MapMaxLevel) && this.Level != c && (this.Top = this.Left = 0, this.oldLevel = this.Level, this.Level = parseInt(c), this.setTileLayer(this.Level,
this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].setLeftTop(0, 0), this.removeTileLayer(this.oldLevel), this.addTileLayer(this.Level))
}; this.toPoint = function (a, b) { var c = parseInt(g.MapWidth / 2 - g.Left - (g.Cx - a) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[g.Level]), f = parseInt(g.MapHeight / 2 - g.Top + (g.Cy - b) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[g.Level]); return new RPoint(c, f) }; this.toClientPoint = function (a, b) {
    var c = parseInt(g.MapWidth / 2 - (g.Cx - a) * RMapConstant.MapPicWidth /
RMapConstant.ScaleFactors[g.Level]), f = parseInt(g.MapHeight / 2 + (g.Cy - b) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[g.Level]); return new RPoint(c, f)
}; this.toCoordinates = function (a, b) { return new RCoordinates(this.Cx - (this.MapWidth / 2 - a) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth, this.Cy + (this.MapHeight / 2 - b) * RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight) }; this.setTileLayer = function (a, b, c, f, g) {
    b && (this.Tilelayers[a].Cx = b); c && (this.Tilelayers[a].Cy = c); if (f ||
0 == f) this.Tilelayers[a].MapWidth = f; if (g || 0 == g) this.Tilelayers[a].MapHeight = g
}; this.addTileLayer = function (a) { this.Div.get().appendChild(this.Tilelayers[a].Div.get()); this.Tilelayers[a].Div.get().setAttribute("_rmap", "tile_" + a.toString()); this.Tilelayers[a].show(); this.Left = this.Top = 0 }; this.removeTileLayer = function (a) {
    this.Tilelayers[a].clear(); for (var b = 0; b < this.Div.get().childNodes.length; b++) if (this.Div.get().childNodes[b] == this.Tilelayers[a].Div.get()) {
        this.Div.get().removeChild(this.Tilelayers[a].Div.get());
        break
    } 
}; this.changeMapType = function (a) { this.MapType = a; for (a = 0; a < RMapConstant.Directorys.length; a++) this.Tilelayers[a].MapType = this.MapType; this.removeTileLayer(this.Level); this.addTileLayer(this.Level); this.dispatchEvent(RMapEvent.MapTypeChanged) }; this.show = function () { this.isVisible || (this.isVisible = !0, this.Div.get().style.display = "block") }; this.hide = function () { this.isVisible && (this.isVisible = !1, this.Div.get().style.display = "none") }; this.reset = function () { }; this.resize = function (a, b) {
    if ((this.MapWidth !=
a || this.MapHeight != b) && 0 <= a && 0 <= b) {
        this.MapWidth = a; this.MapHeight = b; this.maskDiv.set(null, null, this.MapWidth, this.MapHeight, null); this.Div.set(null, null, this.MapWidth, this.MapHeight, null); for (var c = 0; c < RMapConstant.Directorys.length; c++) this.Tilelayers[c].Div.set(null, null, this.MapWidth, this.MapHeight, null), this.Tilelayers[c].MapWidth = this.MapWidth, this.Tilelayers[c].MapHeight = this.MapHeight, this.Tilelayers[c].Cx = this.Cx, this.Tilelayers[c].Cy = this.Cy; this.Tilelayers[this.Level].show(); this.Left = this.Top =
0; this.dispatchEvent(RMapEvent.SizeChanged)
    } 
}; this.getCenter = function () { return new RCoordinates(this.Cx, this.Cy) }; this.setCenter = function (a, b) { if (a != this.Cx || b != this.Cy) this.Cx = parseFloat(a), this.Cy = parseFloat(b), this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight), this.Tilelayers[this.Level].show(), this.Top = this.Left = 0, this.dispatchEvent(RMapEvent.CenterChanged) }; this.getLevel = function () { return this.Level }; this.setLevel = function (a) {
    this.isCanZoomAndMove() && (null != a && void 0 !=
a && a >= RMapConstant.MapMinLevel && a <= RMapConstant.MapMaxLevel) && (this.setLocation(null, null, a), this.dispatchEvent(RMapEvent.LevelChanged))
}; this.smoothLevel = function (a) { null != a && (void 0 != a && a >= RMapConstant.MapMinLevel && a <= RMapConstant.MapMaxLevel) && (this.Level != a && this.isCanZoomAndMove()) && (this.oldLevel = this.Level, this.Level = a, this.startZoom()) }; this.move = function (a, b) { this.isCanZoomAndMove() && (this.setLocation(null, null, null, a, b), this.dispatchEvent(RMapEvent.Moved)) }; this.smoothMove = function (a, b) {
    if (a &&
b && this.isCanZoomAndMove()) {
        this.isMoving = !0; this.oldCx = this.Cx; this.oldCy = this.Cy; this.newCx = a; this.newCy = b; var c = Math.floor((this.oldCx - this.newCx) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level]), f = Math.floor((this.oldCy - this.newCy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level]), g = Math.abs(c) > Math.abs(f) ? Math.abs(c) : Math.abs(f); this.moveCount = 10 + Math.round(g / 70); 20 < this.moveCount && (this.moveCount = 20); this.xStep = c / this.moveCount; this.yStep = f / this.moveCount; this.stepCx =
(this.oldCx - this.newCx) / this.moveCount; this.stepCy = (this.oldCy - this.newCy) / this.moveCount; this.startMove()
    } 
}; this.ismove = !1; this.endCy = this.endCx = this.endLevel = 0; this.smoothLevelMove = function (a, b, c) {
    a = parseFloat(a); b = parseFloat(b); c = parseInt(c); if (this.isCanZoomAndMove()) {
        var f = this.getAppropriateMaxLevel([new RCoordinates(a, b)]); this.endCx = a; this.endCy = b; this.endLevel = c; f < this.Level && (this.Cx != a || this.Cy != b) ? (this.addEventListener(RMapEvent.LevelChanged, this.zoomHandle), this.ismove = !0, this.smoothLevel(f)) :
this.Cx != a || this.Cy != b ? (this.addEventListener(RMapEvent.Moved, this.moveHandle), this.smoothMove(a, b)) : this.Level != c && (this.addEventListener(RMapEvent.LevelChanged, this.zoomHandle), this.smoothLevel(c))
    } 
}; this.zoomHandle = function (a) { if (g.ismove) { if (g.Cx != g.endCx || g.Cy != g.endCy) g.addEventListener(RMapEvent.Moved, g.moveHandle), g.smoothMove(g.endCx, g.endCy); g.removeEventListener(RMapEvent.LevelChanged, g.zoomHandle) } }; this.moveHandle = function (a) {
    g.ismove = !1; g.Level != g.endLevel && g.smoothLevel(g.endLevel);
    g.removeEventListener(RMapEvent.Moved, g.moveHandle)
}; this.getBounds = function () { var a = RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicWidth * (this.MapWidth / 2), b = RMapConstant.ScaleFactors[this.Level] / RMapConstant.MapPicHeight * (this.MapHeight / 2), c = new RCoordinates(this.Cx - a, this.Cy - b), a = new RCoordinates(this.Cx + a, this.Cy + b); return new RBounds(c, a) }; this.getAppropriateLevelCenter = function (a) {
    var b = null; if (a && 0 < a.length) {
        var c = RBase.getMaxCoordinatesBounds(a); if (c) {
            b = new RLevelCenter((c.MinCoordinates.Cx +
c.MaxCoordinates.Cx) / 2, (c.MinCoordinates.Cy + c.MaxCoordinates.Cy) / 2, RMapConstant.MapMaxLevel); a = c.MaxCoordinates.Cx - c.MinCoordinates.Cx; for (var c = c.MaxCoordinates.Cy - c.MinCoordinates.Cy, f = RMapConstant.Directorys.length - 1; 0 <= f; f--) if (f >= RMapConstant.MapMinLevel && f <= RMapConstant.MapMaxLevel && RMapConstant.ScaleFactors[f] / RMapConstant.MapPicWidth * this.MapWidth > a && RMapConstant.ScaleFactors[f] / RMapConstant.MapPicHeight * this.MapHeight > c) { b.Level = f; break } 
        } else b = new RLevelCenter(this.Cx, this.Cy, this.Level)
    } return b
};
    this.getAppropriateMaxLevel = function (a) { var b = RMapConstant.MapMaxLevel; if (0 < a.length) { var c = RBase.getMaxCoordinates(a, this.getCenter()); if (c) { a = 2 * Math.abs(c.Cx - this.Cx); for (var c = 2 * Math.abs(c.Cy - this.Cy), f = RMapConstant.Directorys.length - 1; 0 <= f; f--) if (f >= RMapConstant.MapMinLevel && f <= RMapConstant.MapMaxLevel && RMapConstant.ScaleFactors[f] / RMapConstant.MapPicWidth * this.MapWidth > a && RMapConstant.ScaleFactors[f] / RMapConstant.MapPicHeight * this.MapHeight > c) { b = f; break } } else b = this.Level } return b }; this.refresh =
function () { }; this.isCanZoomAndMove = function () { return !this.isMoving && !this.isDraging && !this.isZooming && this.isCanMove }; this.startZoom = function () {
    this.isZooming = !0; this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight); this.addTileLayer(this.Level); this.Tilelayers[this.oldLevel].Div.get().style.zIndex = 11; this.zoomCount = 2 * Math.abs(this.oldLevel - this.Level) + 5; this.midZoomIndex = Math.floor(this.zoomCount / 2); this.oldZoomDes = RMapConstant.ScaleFactors[this.oldLevel] / RMapConstant.ScaleFactors[this.Level];
    this.oldZoomStep = (this.oldZoomDes - 1) / this.zoomCount; this.zoomStep = (1 - RMapConstant.ScaleFactors[this.Level] / RMapConstant.ScaleFactors[this.oldLevel]) / this.zoomCount; this.dispatchEvent(RMapEvent.LevelChange); setTimeout(this.zooming, 7)
}; this.zooming = function () {
    g.zoomCount--; g.Tilelayers[g.Level].setZoom(g.zoomDes - g.zoomCount * g.zoomStep); g.zoomCount >= g.zoomStep && g.Tilelayers[g.oldLevel].setZoom(g.oldZoomDes - g.zoomCount * g.oldZoomStep); if (g.zoomCount == g.midZoomIndex) {
        var a = g.Tilelayers[g.oldLevel].Div.get();
        g.Div.get() == a.parentNode && (a.style.zIndex = 0)
    } g.dispatchEvent(RMapEvent.LevelChanging); 0 < g.zoomCount ? setTimeout(g.zooming, 10) : g.endZoom()
}; this.endZoom = function () { this.Top = this.Left = 0; this.Tilelayers[this.Level].setLeftTop(0, 0); this.Tilelayers[this.Level].setZoom(1); this.Tilelayers[this.oldLevel].setZoom(1); this.removeTileLayer(this.oldLevel); this.Tilelayers[this.oldLevel].Div.get().style.zIndex = 10; this.isZooming = !1; this.dispatchEvent(RMapEvent.LevelChanged) }; this.startMove = function () {
    this.oldLeft =
this.Left; this.oldTop = this.Top; this.stepIndex = 0; this.dispatchEvent(RMapEvent.Move); setTimeout(this.moving, 10)
}; this.moving = function () { g.stepIndex++; g.Left = g.oldLeft + g.xStep * g.stepIndex; g.Top = g.oldTop - g.yStep * g.stepIndex; g.Tilelayers[g.Level].setLeftTop(g.Left, g.Top); g.Cx = g.oldCx - g.stepIndex * g.stepCx; g.Cy = g.oldCy - g.stepIndex * g.stepCy; g.Tilelayers[g.Level].loadNewPic(); g.dispatchEvent(RMapEvent.Moving); g.stepIndex < g.moveCount ? setTimeout(g.moving, 10) : g.endMove() }; this.endMove = function () {
    this.Cx = this.newCx;
    this.Cy = this.newCy; this.proofreadCoordinate(); this.setTileLayer(this.Level, this.Cx, this.Cy, this.MapWidth, this.MapHeight); this.isMoving = !1; this.dispatchEvent(RMapEvent.Moved)
}; this.proofreadCoordinate = function () { this.Left = this.oldLeft - (this.newCx - this.oldCx) * RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level]; this.Top = this.oldTop + (this.newCy - this.oldCy) * RMapConstant.MapPicHeight / RMapConstant.ScaleFactors[this.Level]; this.Tilelayers[this.Level].setLeftTop(this.Left, this.Top) }; this.maskDiv.get().oncontextmenu =
function (a) { return !1 }; var m = this.Div.get(); this.ey = this.ex = 0; var v = { set: function (a) { this.pointer_id = RBase.getPointerId(a) }, detect: function (a) { return "undefined" == typeof this.pointer_id || this.pointer_id == RBase.getPointerId(a) }, clean: function () { delete this.pointer_id } }, y = function (a) {
    RBase.PreventDefaultManipulationAndMouseEvent(a); if (!g.isCanZoomAndMove() || !v.detect(a)) return !0; g.Div.get().style.cursor = RCursor.MouseNormalCursor; g.isDraging = !0; g.isMoving = !0; v.set(a); g.oldCx = g.Cx; g.oldCy = g.Cy; g.oldLeft =
g.Left; g.oldTop = g.Top; a.changedTouches ? (g.ex = a.changedTouches[0].clientX - g.Left, g.ey = a.changedTouches[0].clientY - g.Top) : (g.ex = a.clientX - g.Left, g.ey = a.clientY - g.Top); window.navigator.msPointerEnabled ? (m.msSetPointerCapture(RBase.getPointerId(a)), m.addEventListener("MSPointerMove", t, !0), m.addEventListener("MSPointerUp", p, !0), m.addEventListener("MSPointerCancel", p, !0)) : m.addEventListener ? a.changedTouches ? (m.addEventListener("touchmove", t, !0), m.addEventListener("touchend", p, !0), m.addEventListener("touchcancel",
p, !0)) : (m.addEventListener("mousemove", t, !0), m.addEventListener("mouseup", p, !0)) : m.attachEvent && (m.setCapture(), m.attachEvent("onmousemove", w), m.attachEvent("onmouseup", x)); g.dispatchEvent(RMapEvent.Move); return !0
}, w = function () { t(window.event); return window.event.returnValue = !1 }, x = function () { p(window.event); return window.event.returnValue = !1 }, t = function (a) {
    var b = a.changedTouches; if (b) { if (1 < a.touches.length) return; RBase.PreventDefaultManipulationAndMouseEvent(a) } g.isDraging && v.detect(a) && (g.Div.get().style.cursor =
RCursor.MouseMoveCursor, b ? g.setLocation(b[0].clientX - g.ex, b[0].clientY - g.ey, null) : g.setLocation(a.clientX - g.ex, a.clientY - g.ey, null), g.dispatchEvent(RMapEvent.Moving))
}, p = function (a) {
    a.touches && RBase.PreventDefaultManipulationAndMouseEvent(a); if (v.detect(a)) {
        if (g.isDraging) {
            g.Div.get().style.cursor = RCursor.MouseUpCursor; g.isDraging = !1; g.isMoving = !1; v.clean(); var b = Math.abs(g.oldLeft - g.Left), c = Math.abs(g.oldTop - g.Top); if (1 < b || 1 < c) g.Cx = g.oldCx + (g.oldLeft - g.Left) * RMapConstant.ScaleFactors[g.Level] / RMapConstant.MapPicWidth,
g.Cy = g.oldCy - (g.oldTop - g.Top) * RMapConstant.ScaleFactors[g.Level] / RMapConstant.MapPicHeight; g.dispatchEvent(RMapEvent.Moved)
        } window.navigator.msPointerEnabled ? (m.removeEventListener("MSPointerMove", t, !0), m.removeEventListener("MSPointerUp", p, !0), m.removeEventListener("MSPointerCancel", p, !0), m.msReleasePointerCapture(RBase.getPointerId(a))) : m.removeEventListener ? a.changedTouches ? (m.removeEventListener("touchmove", t, !0), m.removeEventListener("touchend", p, !0), m.removeEventListener("touchcancel", p, !0)) :
(m.removeEventListener("mousemove", t, !0), m.removeEventListener("mouseup", p, !0)) : m.detachEvent && (m.releaseCapture(), m.detachEvent("onmousemove", w), m.detachEvent("onmouseup", x))
    } 
}, q, r, u; window.navigator.msPointerEnabled ? (m.addEventListener("MSPointerDown", l, !0), m.addEventListener("MSPointerDown", y, !0), m.addEventListener("MSPointerUp", s, !0), m.addEventListener("MSPointerCancel", s, !0)) : m.addEventListener ? (m.addEventListener("touchstart", y, !0), m.addEventListener("mousedown", y, !1), m.addEventListener("touchstart",
l, !0), m.addEventListener("touchend", s, !0), m.addEventListener("touchcancel", s, !0)) : m.attachEvent && m.attachEvent("onmousedown", function () { y(window.event); return window.event.returnValue = !1 }); c = function (a) { g.dispatchEvent(RMapEvent.MouseDownEvent, RBase.getMouseEvent(a)) }; window.navigator.msPointerEnabled ? m.addEventListener("MSPointerDown", function (a) { ("mouse" == a.pointerType || 4 == a.pointerType) && g.dispatchEvent(RMapEvent.MouseDownEvent, RBase.getMouseEvent(a)) }, !1) : m.addEventListener ? m.addEventListener("mousedown",
c, !1) : m.attachEvent && m.attachEvent("onmousedown", c); c = function (a) { g.dispatchEvent(RMapEvent.MouseMoveEvent, RBase.getMouseEvent(a)) }; m.addEventListener ? m.addEventListener("mousemove", c, !1) : m.attachEvent && m.attachEvent("onmousemove", c); c = function (a) { 2 == a.button ? g.dispatchEvent(RMapEvent.MouseRightButtonEvent, RBase.getMouseEvent(a)) : g.dispatchEvent(RMapEvent.MouseUpEvent, RBase.getMouseEvent(a)) }; m.addEventListener ? m.addEventListener("mouseup", c, !1) : m.attachEvent && m.attachEvent("onmouseup", c); RBase._browser_firefox ?
m.addEventListener("DOMMouseScroll", function (a) { 0 > a.detail ? g.smoothLevel(g.Level + 1) : g.smoothLevel(g.Level - 1) }, !1) : m.onmousewheel = function (a) { a = a || window.event; if (!a || !a.wheelDelta) return !1; 0 < a.wheelDelta ? g.smoothLevel(g.Level + 1) : 0 > a.wheelDelta && g.smoothLevel(g.Level - 1); return !1 }; this.runClickEvent = function (a) { g.dispatchEvent(RMapEvent.MouseClickEvent, RBase.getMouseEvent(a)) }; this.runMouseOverEvent = function (a) { g.dispatchEvent(RMapEvent.MouseOverEvent, RBase.getMouseEvent(a)) }; this.runMouseOutEvent =
function (a) { g.dispatchEvent(RMapEvent.MouseOutEvent, RBase.getMouseEvent(a)) }; this.runMouseDoubleClickEvent = function (a) { g.dispatchEvent(RMapEvent.MouseDoubleClickEvent, RBase.getMouseEvent(a)) }; c = function (a) { if (!g.EventArray[RMapEvent.MouseDoubleClickEvent] || !g.EventArray[RMapEvent.MouseDoubleClickEvent].length) a = RBase.getOffsetOnMapDiv(a), a = g.toCoordinates(a.offsetMapLeft, a.offsetMapTop), g.smoothMove(a.Cx, a.Cy) }; this.EventArray = []; this.EventArray[RMapEvent.MouseClickEvent] = []; this.EventArray[RMapEvent.MouseDoubleClickEvent] =
[]; this.EventArray[RMapEvent.MouseOverEvent] = []; this.EventArray[RMapEvent.MouseOutEvent] = []; this.EventArray[RMapEvent.MouseDownEvent] = []; this.EventArray[RMapEvent.MouseUpEvent] = []; this.EventArray[RMapEvent.MouseMoveEvent] = []; this.EventArray[RMapEvent.MouseRightButtonEvent] = []; this.EventArray[RMapEvent.MapTypeChanged] = []; this.EventArray[RMapEvent.SizeChanged] = []; this.EventArray[RMapEvent.LevelChange] = []; this.EventArray[RMapEvent.LevelChanging] = []; this.EventArray[RMapEvent.LevelChanged] = []; this.EventArray[RMapEvent.CenterChanged] =
[]; this.EventArray[RMapEvent.Move] = []; this.EventArray[RMapEvent.Moving] = []; this.EventArray[RMapEvent.Moved] = []; m.addEventListener ? (m.addEventListener("click", this.runClickEvent, !1), m.addEventListener("mouseover", this.runMouseOverEvent, !1), m.addEventListener("mouseout", this.runMouseOutEvent, !1), m.addEventListener("dblclick", c, !1), m.addEventListener("dblclick", this.runMouseDoubleClickEvent, !1)) : m.attachEvent && (m.attachEvent("onclick", this.runClickEvent), m.attachEvent("onmouseover", this.runMouseOverEvent),
m.attachEvent("onmouseout", this.runMouseOutEvent), m.attachEvent("ondblclick", this.runMouseDoubleClickEvent), m.attachEvent("ondblclick", c)); this.addEventListener = function (a, b) { this.EventArray[a] && this.EventArray[a].push(b) }; this.removeEventListener = function (a, b) { if (this.EventArray[a]) for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1) }; this.dispatchEvent = function (a, b, c) {
    if (this.EventArray[a] && 0 < this.EventArray[a].length) {
        var f = new RMapEvent(a); b ? (b =
RBase.getOffsetOnMapDiv(b), f.MouseX = b.offsetMapLeft, f.MouseY = b.offsetMapTop, b = this.toCoordinates(f.MouseX, f.MouseY), f.MouseCx = b.Cx, f.MouseCy = b.Cy) : c && (f.MouseX = c.pageX, f.MouseY = c.pageY, b = this.toCoordinates(f.MouseX, f.MouseY), f.MouseCx = b.Cx, f.MouseCy = b.Cy); for (b = 0; b < this.EventArray[a].length; b++) if (this.EventArray[a][b]) this.EventArray[a][b](f)
    } 
}; this.addTileLayer(this.Level)
};
RMap = function (c, d, e, h, b, k) {
    RBaseMap.call(this, c, d, e, h, b, k); var a = this; this.GraphicsArr = []; this.MarkerArr = []; this.graphicsDiv = new RDiv(0, 0, null, null, 200); this.graphicsDiv.get().setAttribute("_rmap", "graphics"); this.markerDiv = new RDiv(0, 0, null, null, 300); this.markerDiv.get().setAttribute("_rmap", "marker"); this.layerDiv = new RDiv(0, 0, null, null, 50); this.layerDiv.get().setAttribute("_rmap", "layer"); this.layerDiv.layers = []; this.Div.get().appendChild(this.graphicsDiv.get()); this.Div.get().appendChild(this.markerDiv.get());
    this.Div.get().appendChild(this.layerDiv.get()); this.refresh = function () { this.refreshAllMarker(); this.refreshAllGraphics() }; this.addLayer = function (a, b, c) { var d = this.Cx, g = this.Cy; this.setLocation(0, 0); this.dispatchEvent(RMapEvent.CenterChanged); a = new __RLayer(this, a, b, c); this.layerDiv.get().appendChild(a.Div.get()); a._pindex = this.layerDiv.layers.length + 1; this.layerDiv.layers.push(a); this.setCenter(d, g); this.dispatchEvent(RMapEvent.CenterChanged); return a }; this.removeLayer = function (a) {
        a && a._pindex &&
(this.layerDiv.get().removeChild(a.Div.get()), this.layerDiv.layers.splice(a._pindex - 1), delete a._pindex, a.dispose())
    }; this.removeAllLayers = function () { this.layerDiv.get().innerHTML = ""; for (var a = 0; a < this.layerDiv.layers.length; a++) this.layerDiv.layers[a]._pindex = void 0, this.layerDiv.layers[a].dispose(); this.layerDiv.layers = [] }; this.addMarker = function (a) { a.setMaplet(this); this.MarkerArr.push(a); this.markerDiv.get().appendChild(a.Div.get()); a.refresh() }; this.refreshMarker = function (a) { a.refresh() }; this.refreshAllMarker =
function () { for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].refresh() }; this.showMarker = function (a) { for (var b = 0; b < this.MarkerArr.length; b++) if (this.MarkerArr[b] == a) { a.show(); break } }; this.hideMarker = function (a) { for (var b = 0; b < this.markerDiv.get().childNodes.length; b++) if (this.markerDiv.get().childNodes[b] == a.Div.get()) { a.hide(); break } }; this.showAllMarker = function () { for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].show() }; this.hideAllMarker = function () { for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].hide() };
    this.removeMarker = function (a) { for (var b = 0; b < this.MarkerArr.length; b++) if (this.MarkerArr[b] == a) { for (var c = 0; c < this.markerDiv.get().childNodes.length; c++) if (this.markerDiv.get().childNodes[c] == a.Div.get()) { this.markerDiv.get().removeChild(a.Div.get()); break } this.MarkerArr.splice(b, 1); a && a.dispose(); break } }; this.removeAllMarker = function () { this.markerDiv.get().innerHTML = ""; if (null != this.MarkerArr) { for (var a = 0; a < this.MarkerArr.length; a++) this.MarkerArr[a].dispose(); this.MarkerArr.length = 0 } }; this.addGraphics =
function (a) { a.setMaplet(this); this.GraphicsArr.push(a); this.graphicsDiv.get().appendChild(a.Div.get()); a.refresh() }; this.refreshGraphics = function (a) { a.refresh() }; this.refreshAllGraphics = function () { for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].refresh() }; this.drawAllGraphics = function () { for (var b = 0; b < a.GraphicsArr.length; b++) a.GraphicsArr[b].draw() }; this.showGraphics = function (a) { for (var b = 0; b < this.GraphicsArr.length; b++) if (this.GraphicsArr[b] == a) { a.show(); break } }; this.hideGraphics = function (a) {
    for (var b =
0; b < this.graphicsDiv.get().childNodes.length; b++) if (this.graphicsDiv.get().childNodes[b] == a.Div.get()) { a.hide(); break } 
}; this.showAllGraphics = function () { for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].show() }; this.hideAllGraphics = function () { for (var a = 0; a < this.GraphicsArr.length; a++) this.GraphicsArr[a].hide() }; this.removeGraphics = function (a) {
    for (var b = 0; b < this.GraphicsArr.length; b++) if (this.GraphicsArr[b] == a) {
        for (var c = 0; c < this.graphicsDiv.get().childNodes.length; c++) if (this.graphicsDiv.get().childNodes[c] ==
a.Div.get()) { this.graphicsDiv.get().removeChild(a.Div.get()); break } this.GraphicsArr.splice(b, 1); break
    } 
}; this.removeAllGraphics = function () { this.graphicsDiv.get().innerHTML = ""; if (null != this.GraphicsArr) for (; 0 < this.GraphicsArr.length; ) this.GraphicsArr.shift() }; this.runSizeChangedEvent = function (b) { a.markerDiv.set(0, 0, null, null, null); a.refreshAllMarker(); a.refreshAllGraphics(); a.SelectMarker && a.refreshWindowMarkerBox(a.SelectMarker); a.SelectTabMarker && a.refreshTabMarkerBox(a.SelectTabMarker) }; this.runLevelChangeEvent =
function (b) { a.markerDiv.get().style.visibility = "hidden"; a.graphicsDiv.get().style.visibility = "hidden"; a.layerDiv.get().style.visibility = "hidden" }; this.runLevelChangedEvent = function (b) { a.markerDiv.set(a.Left, a.Top, null, null, null); a.refreshAllMarker(); a.refreshAllGraphics(); a.markerDiv.get().style.visibility = "visible"; a.graphicsDiv.get().style.visibility = "visible"; a.layerDiv.get().style.visibility = "visible"; a.SelectMarker && a.refreshWindowMarkerBox(a.SelectMarker); a.SelectTabMarker && a.refreshTabMarkerBox(a.SelectTabMarker) };
    this.runCenterChangedEvent = function (b) { a.markerDiv.set(0, 0, null, null, null); a.refreshAllMarker(); a.refreshAllGraphics(); a.SelectMarker && a.refreshWindowMarkerBox(a.SelectMarker); a.SelectTabMarker && a.refreshTabMarkerBox(a.SelectTabMarker) }; this.runMoveEvent = function (b) { (!a.graphicsDiv.get().addEventListener || RBase._browser_android) && a.graphicsDiv.hide() }; this.runMovingEvent = function (b) { a.markerDiv.set(a.Left, a.Top, null, null, null); a.graphicsDiv.get().addEventListener && !RBase._browser_android && a.drawAllGraphics() };
    this.runMovedEvent = function (b) { a.markerDiv.set(a.Left, a.Top, null, null, null); a.drawAllGraphics(); (!a.graphicsDiv.get().addEventListener || RBase._browser_android) && a.graphicsDiv.show() }; this.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent); this.addEventListener(RMapEvent.LevelChange, this.runLevelChangeEvent); this.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent); this.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent); this.addEventListener(RMapEvent.Move,
this.runMoveEvent); this.addEventListener(RMapEvent.Moved, this.runMovedEvent); this.addEventListener(RMapEvent.Moving, this.runMovingEvent); this.SelectTabMarker = null; this.hideTabMarkerBox = function (a) { (this.SelectTabMarker == a || !a) && this.TabMarkerBox && this.TabMarkerBox.hide() }; this.showTabMarkerBox = function (a) { this.SelectTabMarker && (this.SelectTabMarker.hideLabel(), this.SelectTabMarker.Div.get().style.zIndex = 0); a.Div.get().style.zIndex = 100; this.SelectTabMarker = a; this.refreshTabMarkerBox(a); this.TabMarkerBox.show() };
    this.refreshTabMarkerBox = function (a) {
        this.TabMarkerBox || (this.TabMarkerBox = new RDiv(null, null, null, null, 1E4), this.TabMarkerBox.get().oncontextmenu = function (a) { return !1 }, this.TabMarkerBox.get().onmousedown = function (a) { RBase.stopPropagation(a) }, this.TabMarkerBox.get().onmouseup = function (a) { RBase.stopPropagation(a) }, this.TabMarkerBox.get().onmousemove = function (a) { RBase.stopPropagation(a) }, this.TabMarkerBox.get().onmousewheel = function (a) { RBase.stopPropagation(a) }, this.TabMarkerBox.get().onclick = function (a) { RBase.stopPropagation(a) },
this.TabMarkerBox.get().ondblclick = function (a) { RBase.stopPropagation(a) }, this.markerDiv.get().appendChild(this.TabMarkerBox.get())); this.TabMarkerBox.set(a.Left + a.TagObject.detaX - a.DetaX, a.Top + a.TagObject.detaY, a.TagObject.width, a.TagObject.height, null); this.TabMarkerBox.get().innerHTML = a.TagObject.html
    }; this.SelectMarker = null; this.hideWindowMarkerBox = function (a) { if (this.SelectMarker == a || !a) this.WindowMarkerBox.hide(), this.ShadowDiv.hide() }; this.showWindowMarkerBox = function (a) {
        this.SelectMarker &&
(this.SelectMarker.hideLabel(), this.SelectMarker.Div.get().style.zIndex = 0); a.Div.get().style.zIndex = 100; this.SelectMarker = a; this.refreshWindowMarkerBox(a); this.WindowMarkerBox.show(); this.ShadowDiv.show()
    }; this.refreshWindowMarkerBox = function (a) {
        this.WindowMarkerBox || (this.WindowMarkerBox = new RDiv(null, null, null, null, 1E4), this.WindowMarkerBox.get().oncontextmenu = function (a) { return !1 }, this.WindowMarkerBox.get().onmousedown = function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.get().onmouseup =
function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.get().onmousemove = function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.get().onmousewheel = function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.get().onclick = function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.get().ondblclick = function (a) { RBase.stopPropagation(a) }, this.WindowMarkerBox.ContentDiv = new RDiv(0, 0, null, null, 0), this.WindowMarkerBox.ContentDiv.get().style.border = "1px solid #999999", this.WindowMarkerBox.ContentDiv.get().style.background =
"#FFFFFF", this.WindowMarkerBox.BottomDiv = new RDiv(null, null, 51, 31, 0), this.WindowMarkerBox.BottomDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/marker_bottom.png)", window.XMLHttpRequest || RBase.setIe6BackgroundPng(this.WindowMarkerBox.BottomDiv), this.WindowMarkerBox.get().appendChild(this.WindowMarkerBox.ContentDiv.get()), this.WindowMarkerBox.get().appendChild(this.WindowMarkerBox.BottomDiv.get()), this.markerDiv.get().appendChild(this.WindowMarkerBox.get()), this.ShadowDiv || (this.ShadowDiv =
new RDiv(null, null, null, null, -1), this.ShadowDiv.get().oncontextmenu = function (a) { return !1 }, this.markerDiv.get().appendChild(this.ShadowDiv.get()))); this.WindowMarkerBox.set(a.Left - a.TagObject.width / 2 + 35, a.Top - a.TagObject.height + a.DetaY, null, null, null); this.WindowMarkerBox.ContentDiv.set(null, null, a.TagObject.width, a.TagObject.height, null); this.WindowMarkerBox.ContentDiv.get().innerHTML = a.TagObject.html; this.WindowMarkerBox.BottomDiv.set((a.TagObject.width - 51) / 2, a.TagObject.height + 1, null, null, null);
        this.refreshShadow(parseInt(this.WindowMarkerBox.get().style.left) - 30, parseInt(this.WindowMarkerBox.get().style.top) + a.TagObject.height / 2 + 10, a.TagObject.width, a.TagObject.height)
    }; this.refreshShadow = function (a, b, c, d) {
        if (this.ShadowDiv) {
            if (a || 0 == a) this.ShadowDiv.get().style.left = a + "px"; if (b || 0 == b) this.ShadowDiv.get().style.top = b + "px"; if (c && d) {
                200 > c ? c = 200 : 650 < c && (c = 650); 100 > d ? d = 100 : 600 < d && (d = 600); a = parseInt(d / 2) + 50; var g = c + a + 20; c = a - 30 - 60; a = 31 + c; b = a + 70; d = g - b - 70; var e = b + d, h = 70 + c, k = -323 + c, w = a - c, x = 70 + c,
t = w + x, g = g - t - h, p = -1033 + c, q = t + g, r = 30 + c, u = parseInt((d - 140 + 52) / 2), z = u + 10, u = u - 10, A = 50 + z, B = 140 + A; c = [{ left: a, top: 0, width: 70, height: 30, imgLeft: -323, imgTop: 0 }, { left: b, top: 0, width: d, height: 30, imgLeft: -393, imgTop: 0 }, { left: e, top: 0, width: 70, height: 30, imgLeft: -1033, imgTop: 0 }, { left: w, top: 30, width: x, height: c, imgLeft: k, imgTop: -30 }, { left: t, top: 30, width: g, height: c, imgLeft: -360, imgTop: -30 }, { left: q, top: 30, width: h, height: c, imgLeft: p, imgTop: -30 }, { left: 0, top: r, width: 50, height: 60, imgLeft: -14, imgTop: -310 }, { left: 50, top: r, width: z,
    height: 60, imgLeft: -255, imgTop: -310
}, { left: A, top: r, width: 140, height: 60, imgLeft: -465, imgTop: -310 }, { left: B, top: r, width: u, height: 60, imgLeft: -255, imgTop: -310 }, { left: u + B, top: r, width: 70, height: 60, imgLeft: -754, imgTop: -310}]; a = ""; if (window.XMLHttpRequest) for (b = 0; b < c.length; b++) a += "<div style='left: " + c[b].left + "px; top: " + c[b].top + "px; width: " + c[b].width + "px; height: " + c[b].height + "px; position: absolute; overflow: hidden; z-index: 1;'><img style='width:1144px;height:370px;position:absolute;left:" + c[b].imgLeft +
"px;top:" + c[b].imgTop + "px;' src='" + RMapConstant.JsServer + "image/marker_shadow.png'  onmousedown='return false;'></div>"; else for (b = 0; b < c.length; b++) a += "<div style='left: " + c[b].left + "px; top: " + c[b].top + "px; width: " + c[b].width + "px; height: " + c[b].height + "px; position: absolute; overflow: hidden; z-index: 1;'><span style='width:1144px;height:370px;left:" + c[b].imgLeft + "px;top:" + c[b].imgTop + "px;position:absolute;filter:progid:DXImageTransform.Microsoft.AlphaImageLoader (src=" + RMapConstant.JsServer +
"image/marker_shadow.png, sizingMethod=scale);' onmousedown='return false;'></span></div>"; this.ShadowDiv.get().innerHTML = a
            } 
        } 
    }; this.Copyright = new RDiv(null, null, null, null, 1E4); this.Copyright.get().setAttribute("_rmap", "copyright"); this.Copyright.get().style.left = "8px"; this.Copyright.get().style.bottom = "5px"; this.Copyright.get().innerHTML = RMapConstant.Copyright; this.Div.get().appendChild(this.Copyright.get())
}; var RBaseMarker = function (c, d, e, h, b, k, a) {
    var f = this; this.Cx = c; this.Cy = d; this.DetaX = h; this.DetaY = b; this.Top = this.Left = 0; this.Maplet = this.Hook = null; this.Div = new RDiv(0, 0, null, null, 0); this.Div.get().style.cursor = "default"; this.Div.get().onclick = function (a) { RBase.stopPropagation(a) }; this.Div.get().ondblclick = function (a) { RBase.stopPropagation(a) }; this.IconUrl = e; this.IconWidth = k; this.IconHeight = a; this.Icon = createRImage(0, 0, this.IconWidth, this.IconHeight, 0, this.IconUrl); this.Icon.style.cursor = "pointer"; this.Div.get().appendChild(this.Icon);
    this.setMaplet = function (a) { this.Maplet = a }; this.get = function () { this.Div.get() }; this.show = function () { this.Div.show() }; this.hide = function () { this.Div.hide() }; this.update = function (a, b, c, g, d) { }; this.refresh = function () { }; this.dispose = function () { }; this.Div.get().oncontextmenu = function (a) { return !1 }; this.Div.get().onmousedown = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmouseup = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmousemove = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmousewheel =
function (a) { RBase.stopPropagation(a) }; this.Icon.onclick = function (a) { f.runClickEvent(a); f.dispatchEvent(RMarkerEvent.MouseClickEvent, a) }; this.runClickEvent = function (a) { }; this.runMouseOverEvent = function (a) { a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseOverEvent, a) }; this.runMouseOutEvent = function (a) { a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseOutEvent, a) }; this.runMouseDoubleClickEvent = function (a) {
    a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseDoubleClickEvent,
a)
}; this.EventArray = []; this.EventArray[RMarkerEvent.MouseClickEvent] = []; this.EventArray[RMarkerEvent.MouseDoubleClickEvent] = []; this.EventArray[RMarkerEvent.MouseOverEvent] = []; this.EventArray[RMarkerEvent.MouseOutEvent] = []; this.addEventListener = function (a, b) {
    this.EventArray[a] && this.EventArray[a].push(b); switch (a) {
        case RMarkerEvent.MouseOverEvent: this.Icon.onmouseover || (this.Icon.onmouseover = this.runMouseOverEvent); break; case RMarkerEvent.MouseOutEvent: this.Icon.onmouseout || (this.Icon.onmouseout = this.runMouseOutEvent);
            break; case RMarkerEvent.MouseDoubleClickEvent: this.Icon.ondblclick || (this.Icon.ondblclick = this.runMouseDoubleClickEvent)
    } 
}; this.removeEventListener = function (a, b) {
    if (this.EventArray[a]) {
        for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1); if (0 >= this.EventArray[a].length) switch (a) {
            case RMarkerEvent.MouseOverEvent: this.Div.get().onmouseover = null; break; case RMarkerEvent.MouseOutEvent: this.Div.get().onmouseout = null; break; case RMarkerEvent.MouseDoubleClickEvent: this.Div.get().ondblclick =
null
        } 
    } 
}; this.dispatchEvent = function (a, b) { if (this.EventArray[a] && 0 < this.EventArray[a].length) { var c = new RMarkerEvent(a); c.Cx = this.Cx; c.Cy = this.Cy; c.Hook = this.Hook; for (var g = 0; g < this.EventArray[a].length; g++) if (this.EventArray[a][g]) this.EventArray[a][g](c) } } 
};
RPointMarker = function (c, d, e, h, b, k, a) {
    RBaseMarker.call(this, c, d, e, h, b, k, a); this.update = function (a, b, c, d, g, e, h) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); c && (this.IconUrl = c); if (d || 0 == d) this.DetaX = d; if (g || 0 == g) this.DetaY = g; e && (this.IconWidth = e); h && (this.IconHeight = h); this.refresh() }; this.refresh = function () {
        var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height =
this.IconHeight + "px"; this.Icon.src = this.IconUrl
    } 
};
RLabelMarker = function (c, d, e, h, b, k, a, f) {
    RBaseMarker.call(this, c, d, h, b, k, a, f); var l = this; this.initTag = function () {
        this.TitleWidth = this.setWidthByStrByte(this.Title); this.MiddleDiv = new RDiv(14, 0, this.TitleWidth, 39, null); this.MiddleDiv.get().innerHTML = this.Title; this.MiddleDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_middle.png)"; this.MiddleDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif"; this.MiddleDiv.get().style.fontSize = "12px"; this.MiddleDiv.get().style.lineHeight =
"39px"; this.MiddleDiv.get().style.textAlign = "center"; this.MiddleDiv.get().style.fontWeight = "bold"; this.LeftDiv = new RDiv(0, 0, 14, 39, null); this.LeftDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_left.png)"; this.RightDiv = new RDiv(this.TitleWidth + 14, 0, 14, 39, null); this.RightDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer + "image/tag_right.png)"; this.ArrowDiv = new RDiv((14 + this.TitleWidth + 14 - 12) / 2, 37, 12, 39, null); this.ArrowDiv.get().style.backgroundImage = "url(" + RMapConstant.JsServer +
"image/tag_arrow.png)"; this.TagDiv = new RDiv(-(parseInt(this.LeftDiv.get().style.width) + parseInt(this.MiddleDiv.get().style.width) + parseInt(this.RightDiv.get().style.width) - this.IconWidth) / 2, -(parseInt(this.LeftDiv.get().style.height) + parseInt(this.ArrowDiv.get().style.height)), null, null, null); this.TagDiv.get().appendChild(this.LeftDiv.get()); this.TagDiv.get().appendChild(this.MiddleDiv.get()); this.TagDiv.get().appendChild(this.RightDiv.get()); this.TagDiv.get().appendChild(this.ArrowDiv.get()); this.hideLabel();
        this.Div.get().appendChild(this.TagDiv.get())
    }; this.isShowTitle = !1; this.Title = e; this.TitleWidth = 0; this.Icon.onload = function () { l.IconWidth = this.width; l.refreshTitleLayout() }; this.runClickEvent = function (a) { l.isShowTitle ? l.hideLabel() : l.showLabel() }; this.update = function (a, b, c, d, f, e, h, l) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); d && (this.IconUrl = d); if (f || 0 == f) this.DetaX = f; if (e || 0 == e) this.DetaY = e; h && (this.IconWidth = h); l && (this.IconHeight = l); c && (this.Title = c); this.refresh() }; this.refresh = function () {
        var a = this.Maplet.toPoint(this.Cx,
this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight + "px"; this.Icon.src = this.IconUrl; this.MiddleDiv.get().innerHTML = this.Title
    }; this.refreshTitleLayout = function () {
        this.TitleWidth = this.setWidthByStrByte(this.Title); this.MiddleDiv.set(null, null, this.TitleWidth, null, null); this.RightDiv.set(this.TitleWidth + 14, null, null, null, null); this.ArrowDiv.set((14 + this.TitleWidth + 14 -
12) / 2, null, null, null, null); this.TagDiv.set(-(parseInt(this.LeftDiv.get().style.width) + parseInt(this.MiddleDiv.get().style.width) + parseInt(this.RightDiv.get().style.width) - this.IconWidth) / 2, -(parseInt(this.LeftDiv.get().style.height) + parseInt(this.ArrowDiv.get().style.height)), null, null, null)
    }; this.showLabel = function () { this.TagDiv.show(); this.isShowTitle = !0 }; this.hideLabel = function () { this.TagDiv.hide(); this.isShowTitle = !1 }; this.setWidthByStrByte = function (a) {
        var b = 0; if (a) for (var c = 0; c < a.length; c++) 19968 >
a.charCodeAt(c) || a.charCodeAt(c), b += 12; return b
    }; this.initTag()
};
RSelfMarker = function (c, d, e, h, b, k, a, f) {
    RBaseMarker.call(this, c, d, h, b, k, a, f); var l = this; this.updateTag = function () { this.TagDiv = new RDiv(this.TagObject.detaX, this.TagObject.detaY, this.TagObject.width, this.TagObject.height, null); this.hideLabel(); this.TagDiv.get().innerHTML = this.TagObject.html; this.Div.get().appendChild(this.TagDiv.get()) }; this.isShowTitle = !1; this.TagObject = e; this.Icon.onload = function () { l.IconWidth = this.width; l.IconHeight = this.height }; this.runClickEvent = function (a) {
        l.isShowTitle ? l.hideLabel.call(l) :
l.showLabel.call(l)
    }; this.update = function (a, b, c, d, f, e, h, l) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); d && (this.IconUrl = d); if (f || 0 == f) this.DetaX = f; if (e || 0 == e) this.DetaY = e; h && (this.IconWidth = h); l && (this.IconHeight = l); c && (this.TagObject = c, this.updateTag()); this.refresh() }; this.refresh = function () {
        var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight +
"px"; this.Icon.src = this.IconUrl
    }; this.showLabel = function () { this.TagDiv.show(); this.isShowTitle = !0 }; this.hideLabel = function () { this.TagDiv.hide(); this.isShowTitle = !1 }; this.updateTag()
};
RWindowMarker = function (c, d, e, h, b, k, a, f) {
    RBaseMarker.call(this, c, d, h, b, k, a, f); var l = this; this.isShowTitle = this.isChangeCxOrCy = !1; this.TagObject = e; this.Icon.onload = function () { l.IconWidth = this.width; l.IconHeight = this.height }; this.runClickEvent = function (a) { l.isShowTitle ? l.hideLabel() : l.showLabel() }; this.update = function (a, b, c, d, f, e, h, l) {
        0 < a && a != this.Cx && (this.isChangeCxOrCy = !0, this.Cx = a); 0 < b && b != this.Cy && (this.isChangeCxOrCy = !0, this.Cy = b); d && (this.IconUrl = d); if (f || 0 == f) this.DetaX = f; if (e || 0 == e) this.DetaY =
e; h && (this.IconWidth = h); l && (this.IconHeight = l); c && (this.TagObject = c); this.refresh()
    }; this.refresh = function () { var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight + "px"; this.Icon.src = this.IconUrl; this.isChangeCxOrCy && (this.isChangeCxOrCy = !1, this.isShowTitle && this.Maplet.refreshTabMarkerBox(this)) }; this.showLabel = function () {
        this.Maplet.showWindowMarkerBox(this);
        this.isShowTitle = !0
    }; this.hideLabel = function () { this.Maplet.hideWindowMarkerBox(this); this.isShowTitle = !1 }; this.dispose = function () { this.hideLabel() } 
}; RTabMarker = function (c, d, e, h, b, k, a, f) { RWindowMarker.call(this, c, d, e, h, b, k, a, f); this.showLabel = function () { this.Maplet.showTabMarkerBox(this); this.isShowTitle = !0 }; this.hideLabel = function () { this.Maplet.hideTabMarkerBox(this); this.isShowTitle = !1 }; this.dispose = function () { this.hideLabel() } };
RRotateMarker = function (c, d, e, h, b, k, a, f, l) {
    RBaseMarker.call(this, c, d, b, k, a, f, l); this.IconWidth = this.IconWidth ? this.IconWidth : this.Icon.width; this.IconHeight = this.IconHeight ? this.IconHeight : this.Icon.height; e && h ? (this.Cx2 = e, this.Cy2 = h) : this.Cy2 = this.Cx2 = 0; this.DegreeToRadian = Math.PI / 180; this.Radian = this.Degree = 0; this.rotate = function (a, b, c, d) {
        if (0 < a && 0 < b && 0 < c && 0 < d) {
            var f = navigator.userAgent; /msie/i.test(f) && !window.opera ? (this.Radian = Math.atan2(c - a, d - b), a = Math.sin(this.Radian), b = Math.cos(this.Radian),
this.Icon.style.filter = "progid:DXImageTransform.Microsoft.Matrix(M11='" + b + "',M12='" + -a + "',M21='" + a + "',M22='" + b + "',sizingMethod='auto expand')") : (this.Degree = Math.atan2(c - a, d - b) / this.DegreeToRadian, /webkit/i.test(f) ? this.Icon.style.webkitTransform = "rotate(" + this.Degree + "deg)" : /firefox/i.test(f) ? this.Icon.style.MozTransform = "rotate(" + this.Degree + "deg)" : this.Icon.style.transform = "rotate(" + this.Degree + "deg)"); this.DetaX = this.Icon.offsetWidth / -2; this.DetaY = this.Icon.offsetHeight / -2
        } 
    }; this.update = function (a,
b, c, d, f, e, h, l, k) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); 0 < c && (this.Cx2 = c); 0 < d && (this.Cy2 = d); f && (this.IconUrl = f); if (e || 0 == e) this.DetaX = e; if (h || 0 == h) this.DetaY = h; l && (this.IconWidth = l); k && (this.IconHeight = k); this.refresh() }; this.refresh = function () {
    this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2); var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight +
"px"; this.Icon.src = this.IconUrl
} 
};
RRotateSelfMarker = function (c, d, e, h, b, k, a, f, l, n) {
    RRotateMarker.call(this, c, d, e, h, k, a, f, l, n); var s = this; this.updateTag = function () { this.TagObject && (this.TagDiv = new RDiv(this.TagObject.detaX, this.TagObject.detaY, this.TagObject.width, this.TagObject.height, null), this.hideLabel(), this.TagDiv.get().innerHTML = this.TagObject.html, this.Div.get().appendChild(this.TagDiv.get())) }; this.isShowTitle = !1; this.TagObject = b; this.Icon.onload = function () { s.IconWidth = this.width; s.IconHeight = this.height }; this.runClickEvent =
function (a) { s.isShowTitle ? s.hideLabel() : s.showLabel() }; this.update = function (a, b, c, d, f, e, h, l, n, k) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); 0 < c && (this.Cx2 = c); 0 < d && (this.Cy2 = d); f && (this.TagObject = f, this.updateTag()); e && (this.IconUrl = e); if (h || 0 == h) this.DetaX = h; if (l || 0 == l) this.DetaY = l; n && (this.IconWidth = n); k && (this.IconHeight = k); this.refresh() }; this.refresh = function () {
    this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2); this.TagObject && this.TagDiv.set(this.TagObject.detaX - this.DetaX); var a = this.Maplet.toPoint(this.Cx,
this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight + "px"; this.Icon.src = this.IconUrl
}; this.showLabel = function () { this.TagObject && (this.TagDiv.show(), this.isShowTitle = !0) }; this.hideLabel = function () { this.TagObject && (this.TagDiv.hide(), this.isShowTitle = !1) }; this.updateTag()
};
RRotateTabMarker = function (c, d, e, h, b, k, a, f, l, n) {
    RRotateMarker.call(this, c, d, e, h, k, a, f, l, n); var s = this; this.isChangeCxOrCy = !0; this.isShowTitle = !1; this.TagObject = b; this.Icon.onload = function () { s.IconWidth = this.width; s.IconHeight = this.height }; this.runClickEvent = function (a) { s.isShowTitle ? s.hideLabel() : s.showLabel() }; this.update = function (a, b, c, d, f, e, h, l, n, k) {
        0 < a && a != this.Cx && (this.isChangeCxOrCy = !0, this.Cx = a); 0 < b && b != this.Cy && (this.isChangeCxOrCy = !0, this.Cy = b); 0 < c && (this.Cx2 = c); 0 < d && (this.Cy2 = d); e && (this.IconUrl =
e); if (h || 0 == h) this.DetaX = h; if (l || 0 == l) this.DetaY = l; n && (this.IconWidth = n); k && (this.IconHeight = k); f && (this.TagObject = f); this.refresh()
    }; this.refresh = function () {
        this.rotate(this.Cx, this.Cy, this.Cx2, this.Cy2); var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left, this.Top, null, null, null); this.Icon.style.width = this.IconWidth + "px"; this.Icon.style.height = this.IconHeight + "px"; this.Icon.src = this.IconUrl; this.isChangeCxOrCy && (this.isChangeCxOrCy = !1,
this.isShowTitle && this.Maplet.refreshTabMarkerBox(this))
    }; this.showLabel = function () { this.Maplet.showTabMarkerBox(this); this.isShowTitle = !0 }; this.hideLabel = function () { this.Maplet.hideTabMarkerBox(this); this.isShowTitle = !1 }; this.dispose = function () { this.hideLabel() } 
};
RCustomerMarker = function (c, d, e, h, b, k, a) {
    var f = this; this.Cx = c; this.Cy = d; this.Width = h ? h : 0; this.Height = b ? b : 0; this.DetaX = k ? k : 0; this.DetaY = a ? a : 0; this.Html = e; this.Top = this.Left = 0; this.Maplet = this.Hook = null; this.Div = new RDiv(0, 0, null, null, 0); this.Div.get().style.cursor = "default"; this.Div.get().onclick = function (a) { RBase.stopPropagation(a) }; this.Div.get().ondblclick = function (a) { RBase.stopPropagation(a) }; this.TagDiv = new RDiv(0, 0, null, null, 0); this.TagDiv.get().innerHTML = this.Html; this.Div.get().appendChild(this.TagDiv.get());
    this.setMaplet = function (a) { this.Maplet = a }; this.get = function () { this.Div.get() }; this.show = function () { this.Div.show() }; this.hide = function () { this.Div.hide() }; this.update = function (a, b, c, d, f, e, h) { 0 < a && (this.Cx = a); 0 < b && (this.Cy = b); c && (this.Html = c, this.TagDiv.get().innerHTML = this.Html); if (e || 0 == e) this.DetaX = e; if (h || 0 == h) this.DetaY = h; d && (this.Width = d); f && (this.Height = f); this.refresh() }; this.refresh = function () {
        var a = this.Maplet.toPoint(this.Cx, this.Cy); this.Left = a.X + this.DetaX; this.Top = a.Y + this.DetaY; this.Div.set(this.Left,
this.Top, this.Width, this.Height, null)
    }; this.dispose = function () { }; this.Div.get().onmousedown = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmouseup = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmousemove = function (a) { RBase.stopPropagation(a) }; this.Div.get().onmousewheel = function (a) { RBase.stopPropagation(a) }; this.runMouseOverEvent = function (a) { a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseOverEvent, a) }; this.runMouseOutEvent = function (a) {
        a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseOutEvent,
a)
    }; this.runMouseDoubleClickEvent = function (a) { a = RBase.getMouseEvent(a); f.dispatchEvent(RMarkerEvent.MouseDoubleClickEvent, a) }; this.EventArray = []; this.EventArray[RMarkerEvent.MouseClickEvent] = []; this.EventArray[RMarkerEvent.MouseDoubleClickEvent] = []; this.EventArray[RMarkerEvent.MouseOverEvent] = []; this.EventArray[RMarkerEvent.MouseOutEvent] = []; this.addEventListener = function (a, b) {
        this.EventArray[a] && this.EventArray[a].push(b); switch (a) {
            case RMarkerEvent.MouseOverEvent: this.Icon.onmouseover || (this.Icon.onmouseover =
this.runMouseOverEvent); break; case RMarkerEvent.MouseOutEvent: this.Icon.onmouseout || (this.Icon.onmouseout = this.runMouseOutEvent); break; case RMarkerEvent.MouseDoubleClickEvent: this.Icon.ondblclick || (this.Icon.ondblclick = this.runMouseDoubleClickEvent)
        } 
    }; this.removeEventListener = function (a, b) {
        if (this.EventArray[a]) {
            for (var c = 0; c < this.EventArray[a].length; c++) this.EventArray[a][c] == b && this.EventArray[a].splice(c, 1); if (0 >= this.EventArray[a].length) switch (a) {
                case RMarkerEvent.MouseOverEvent: this.Div.get().onmouseover =
null; break; case RMarkerEvent.MouseOutEvent: this.Div.get().onmouseout = null; break; case RMarkerEvent.MouseDoubleClickEvent: this.Div.get().ondblclick = null
            } 
        } 
    }; this.dispatchEvent = function (a, b) { if (this.EventArray[a] && 0 < this.EventArray[a].length) { var c = new RMarkerEvent(a); c.Cx = this.Cx; c.Cy = this.Cy; c.Hook = this.Hook; for (var d = 0; d < this.EventArray[a].length; d++) if (this.EventArray[a][d]) this.EventArray[a][d](c) } } 
}; RToolManager = function (c) {
    var d = this, e = 200, h = 220 + e, b = 210 + e, k = 210 + e, a = 250 + e, f = 260 + e, l = 230 + e, e = 1 + e; this.Maplet = c; this.Div = this.Maplet.Div; this.CrossImg; this.addCross = function (a, b, c) { this.CrossImg = createRImage(this.Maplet.MapWidth / 2 - b, this.Maplet.MapHeight / 2 - c, null, null, h, a); this.CrossImg.detaX = b; this.CrossImg.detaY = c; this.CrossImg.draggable = !1; this.Div.get().appendChild(this.CrossImg) }; this.Scale; this.addScale = function (a, c, d, f) {
        this.Scale = new RDiv(a, c, null, 18, b); if (d || 0 == d) this.Scale.get().style.left =
null, this.Scale.get().style.right = d + "px"; if (f || 0 == f) this.Scale.get().style.top = null, this.Scale.get().style.bottom = f + "px"; this.Scale.LeftDiv = new RDiv(0, 0, 1, 18, null); this.Scale.LeftDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/scale_hd.gif) no-repeat"; this.Scale.RightDiv = new RDiv(0, 0, 1, 18, null); this.Scale.RightDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/scale_hd.gif) no-repeat"; this.Scale.MiddleDiv = new RDiv(1, 0, 0, 18, null); this.Scale.MiddleDiv.get().style.background =
"url(" + RMapConstant.JsServer + "image/tool/scale_bg.gif) no-repeat"; this.Scale.MiddleDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif"; this.Scale.MiddleDiv.get().style.fontSize = "10px"; this.Scale.MiddleDiv.get().style.textAlign = "center"; this.Scale.get().appendChild(this.Scale.LeftDiv.get()); this.Scale.get().appendChild(this.Scale.RightDiv.get()); this.Scale.get().appendChild(this.Scale.MiddleDiv.get()); this.Div.get().appendChild(this.Scale.get()); this.refreshScale(this.Maplet.Level)
    };
    this.refreshScale = function (a) { var b = "", c = [1E3, 500, 200, 100, 50, 20, 10, 5, 2, 1], d = Math.round(10980171 * (RMapConstant.ScaleFactors[a] / RMapConstant.MapPicWidth)); a = 1E3; d < a ? a = 1 : d /= a; for (var f = b = 0; f < c.length; f++) if (d >= c[f]) { b = c[f]; break } c = 100 * (b / d); b += 1 == a ? "\u7c73" : "\u516c\u91cc"; this.Scale.MiddleDiv.set(null, null, c - 2, null, null); this.Scale.RightDiv.set(c - 1, null, null, null, null); this.Scale.MiddleDiv.get().innerHTML = b }; this.Copyright; this.addCopyright = function (a, b, c, d, f) {
        if (f) {
            this.Copyright = new RDiv(a, b, null,
null, k); if (c || 0 == c) this.Copyright.get().style.left = null, this.Copyright.get().style.right = c + "px"; if (d || 0 == d) this.Copyright.get().style.top = null, this.Copyright.get().style.bottom = d + "px"; this.Div.get().appendChild(this.Copyright.get()); this.Maplet.Div.get().removeChild(this.Maplet.Copyright.get()); this.Copyright.get().innerHTML = f
        } else this.Copyright = this.Maplet.Copyright
    }; this.ZoomDirectBar; this.addZoomDirectBar = function (a, b, c, d) {
        this.ZoomDirectBar = new RZoomDirectBar(this.Maplet, f); this.Div.get().appendChild(this.ZoomDirectBar.Div.get());
        this.ZoomDirectBar.Div.set(a, b, null, null, null); if (c || 0 == c) this.ZoomDirectBar.Div.get().style.left = null, this.ZoomDirectBar.Div.get().style.right = c + "px"; if (d || 0 == d) this.Copyright.get().style.top = null, this.Copyright.get().style.bottom = d + "px"; this.ZoomDirectBar.refreshZoom()
    }; this.EagleMap; this.addEagleMap = function (b, c, d, f) { this.EagleMap = new REagleMap(this.Maplet, b, c, a, f); this.Div.get().appendChild(this.EagleMap.OutDiv.get()); d ? this.EagleMap.open() : this.EagleMap.close(); this.EagleMap.runLevelChangedEvent() };
    this.toolDiv = null; this.toolArr = []; this.addTool = function (a) { this.toolDiv || (this.toolDiv = new RDiv(0, 0, null, null, e), this.Maplet.Div.get().appendChild(this.toolDiv.get()), this.toolDiv.get().setAttribute("_rmap", "tool")); this.toolArr.push(a); this.toolDiv.get().appendChild(a.Div.get()) }; this.removeTool = function (a) { for (var b = 0; b < this.toolArr.length; b++) if (a == this.toolArr[b]) { this.toolArr.splice(b, 1); break } this.toolDiv.get().removeChild(a.Div.get()) }; this.RightMenu; this.addRightMenu = function (a, b, c) {
        this.RightMenu ||
(this.RightMenu = new RRightMenu(a, b, c, l), this.RightMenu.close(), this.Div.get().appendChild(this.RightMenu.Div.get()), this.Maplet.addEventListener(RMapEvent.MouseRightButtonEvent, this.runRightButtonEvent), this.Maplet.addEventListener(RMapEvent.MouseDownEvent, this.closeRightMenu))
    }; this.removeRightMenu = function () {
        this.RightMenu && (this.Div.get().removeChild(this.RightMenu.Div.get()), this.RightMenu.dispose(), this.RightMenu = null, this.Maplet.removeEventListener(RMapEvent.MouseRightButtonEvent, this.runRightButtonEvent),
this.Maplet.removeEventListener(RMapEvent.MouseDownEvent, this.closeRightMenu))
    }; this.openRightMenu = function () { d.RightMenu && d.RightMenu.open() }; this.closeRightMenu = function () { d.RightMenu && d.RightMenu.close() }; this.runRightButtonEvent = function (a) { if (d.RightMenu) { var b = a.MouseX; a = a.MouseY; b > d.Maplet.MapWidth - d.RightMenu.Width && (b -= d.RightMenu.Width); a > d.Maplet.MapHeight - d.RightMenu.Height && (a -= d.RightMenu.Height); d.RightMenu.Div.set(b, a); d.RightMenu.open() } }; this.refreshAllTool = function () {
        if (d.toolDiv) for (var a =
0; a < d.toolArr.length; a++) d.toolArr[a].refresh()
    }; this.runSizeChangedEvent = function (a) { d.Div.set(null, null, d.Maplet.MapWidth, d.Maplet.MapHeight, null); d.CrossImg && (d.CrossImg.style.left = d.Maplet.MapWidth / 2 - d.CrossImg.detaX + "px", d.CrossImg.style.top = d.Maplet.MapHeight / 2 - d.CrossImg.detaY + "px"); d.refreshAllTool() }; this.runLevelChangeEvent = function (a) { d.toolDiv && d.toolDiv.hide() }; this.runLevelChangedEvent = function (a) { d.Scale && d.refreshScale(d.Maplet.Level); d.toolDiv && (d.toolDiv.show(), d.refreshAllTool()) };
    this.runCenterChangedEvent = function (a) { d.toolDiv && (d.toolDiv.show(), d.refreshAllTool()) }; this.runMoveEvent = function (a) { d.toolDiv && !d.toolDiv.get().addEventListener && d.toolDiv.hide() }; this.runMovingEvent = function (a) { d.refreshAllTool() }; this.runMovedEvent = function (a) { d.toolDiv && !d.toolDiv.get().addEventListener && d.toolDiv.show(); d.refreshAllTool() }; this.Maplet.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent); this.Maplet.addEventListener(RMapEvent.LevelChange, this.runLevelChangeEvent);
    this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent); this.Maplet.addEventListener(RMapEvent.CenterChanged, this.runCenterChangedEvent); this.Maplet.addEventListener(RMapEvent.Move, this.runMoveEvent); this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent); this.Maplet.addEventListener(RMapEvent.Moving, this.runMovingEvent)
};
var REagleMap = function (c, d, e, h, b) {
    var k = this; this.Maplet = c; this.DivWidth = d; this.DivHeight = e; this.OutDiv = new RDiv(null, null, d, e, h); this.OutDiv.get().style.cursor = "default"; this.OutDiv.get().style.border = "solid 1px #999999"; this.OutDiv.get().style.backgroundColor = "#FFFFFF"; this.OutDiv.get().onmousedown = function (a) { RBase.stopPropagation(a) }; this.OutDiv.get().onmouseup = function (a) { RBase.stopPropagation(a) }; this.OutDiv.get().onmousemove = function (a) { RBase.stopPropagation(a) }; this.OutDiv.get().onmousewheel =
function (a) { RBase.stopPropagation(a) }; this.OutDiv.get().onclick = function (a) { RBase.stopPropagation(a) }; this.OutDiv.get().ondblclick = function (a) { RBase.stopPropagation(a) }; c = this.Maplet.Level - 4; 0 > c && (c = 0); b || (b = RMapType.Typical); RBaseMap.call(this, null, this.Maplet.Cx, this.Maplet.Cy, c, d - 8, e - 8, b); this.Div.get().style.border = "solid 1px #999999"; this.Div.get().style.left = "3px"; this.Div.get().style.top = "3px"; this.Div.get().onmousewheel = null; this.OutDiv.get().appendChild(this.Div.get()); this.show(); this.floatDiv =
new RDiv(null, null, d, e, 1E3); this.floatDiv.get().style.cssText += "opacity:0.5; filter:alpha(opacity=50);"; this.floatDiv.get().style.border = "solid 1px #0000FF"; this.floatDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/eagle_float_bg.gif)"; this.Div.get().appendChild(this.floatDiv.get()); this.refreshFloatDiv = function () {
    var a = this.Maplet.getBounds(), b = RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level] * (a.MaxCoordinates.Cx - a.MinCoordinates.Cx), a = RMapConstant.MapPicWidth / RMapConstant.ScaleFactors[this.Level] *
(a.MaxCoordinates.Cy - a.MinCoordinates.Cy); this.floatDiv.set((this.MapWidth - b) / 2, (this.MapHeight - a) / 2, b, a, null)
}; this.refreshFloatDiv(); this.closeImg = createRImage(null, null, 16, 16, 2E3, RMapConstant.JsServer + "image/tool/eagle_close.gif"); this.closeImg.style.left = null; this.closeImg.style.top = null; this.closeImg.style.right = "5px"; this.closeImg.style.bottom = "5px"; this.closeImg.style.cursor = "pointer"; this.OutDiv.get().appendChild(this.closeImg); this.closeImg.onmousedown = function (a) { k.close(); RBase.stopPropagation(a) };
    this.closeImg.style.display = "none"; this.openImg = createRImage(-1, -1, 16, 16, 2E3, RMapConstant.JsServer + "image/tool/eagle_open.gif"); this.openImg.style.cursor = "pointer"; this.OutDiv.get().appendChild(this.openImg); this.openImg.onmousedown = function (a) { k.open(); RBase.stopPropagation(a) }; this.open = function () {
        this.openImg.style.display = "none"; this.closeImg.style.display = "block"; this.OutDiv.get().style.left = null; this.OutDiv.get().style.top = null; this.OutDiv.get().style.right = "-7px"; this.OutDiv.get().style.bottom =
"-7px"
    }; this.close = function () { this.closeImg.style.display = "none"; this.openImg.style.display = "block"; this.OutDiv.get().style.left = null; this.OutDiv.get().style.top = null; this.OutDiv.get().style.right = 13 - this.DivWidth + "px"; this.OutDiv.get().style.bottom = 13 - this.DivHeight + "px" }; this.show = function () { this.OutDiv.get().style.display = "block" }; this.hide = function () { this.OutDiv.get().style.display = "none" }; this.runSizeChangedEvent = function (a) { k.refreshFloatDiv() }; this.runLevelChangedEvent = function (a) {
        k.Maplet.Level -
4 >= RMapConstant.MapMinLevel ? (k.show(), k.setLevel(k.Maplet.Level - 4)) : k.hide(); k.refreshFloatDiv()
    }; this.runCenterChangedEvent = function (a) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.setCenter(k.Maplet.Cx, k.Maplet.Cy) }; this.runMovedEvent = function (a) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.move(k.Maplet.Cx, k.Maplet.Cy) }; this.Maplet.addEventListener(RMapEvent.SizeChanged, this.runSizeChangedEvent); this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent); this.Maplet.addEventListener(RMapEvent.CenterChanged,
this.runCenterChangedEvent); this.Maplet.addEventListener(RMapEvent.Moved, this.runMovedEvent); this.mMovedEvent = function (a) { (k.Cx != k.Maplet.Cx || k.Cy != k.Maplet.Cy) && k.Maplet.move(k.Cx, k.Cy) }; this.addEventListener(RMapEvent.Moved, this.mMovedEvent)
}, RZoomDirectBar = function (c, d) {
    var e = this; this.Maplet = c; this.MapLevelCount = RMapConstant.MapMaxLevel - RMapConstant.MapMinLevel + 1; this.StripDivHeight = 7 * (this.MapLevelCount + 1); this.Div = new RDiv(null, null, null, null, d); this.Div.get().style.cursor = "default"; this.Div.get().onmousedown =
function (c) { RBase.stopPropagation(c) }; this.Div.get().onmouseup = function (c) { RBase.stopPropagation(c) }; this.Div.get().onmousemove = function (c) { RBase.stopPropagation(c) }; this.Div.get().onmousewheel = function (c) { RBase.stopPropagation(c) }; this.Div.get().onclick = function (c) { RBase.stopPropagation(c) }; this.Div.get().ondblclick = function (c) { RBase.stopPropagation(c) }; this.DirectDiv = new RDiv(0, 0, 50, 50, null); this.DirectDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_head.png)"; this.Div.get().appendChild(this.DirectDiv.get());
    this.EastDiv = new RDiv(33, 16, 17, 17, null); this.EastDiv.get().style.cursor = "pointer"; this.SouthDiv = new RDiv(16, 33, 17, 17, null); this.SouthDiv.get().style.cursor = "pointer"; this.WestDiv = new RDiv(0, 16, 17, 17, null); this.WestDiv.get().style.cursor = "pointer"; this.NorthDiv = new RDiv(16, 0, 17, 17, null); this.NorthDiv.get().style.cursor = "pointer"; this.Div.get().appendChild(this.EastDiv.get()); this.Div.get().appendChild(this.SouthDiv.get()); this.Div.get().appendChild(this.WestDiv.get()); this.Div.get().appendChild(this.NorthDiv.get());
    this.EastDiv.get().onclick = function (c) { c = e.Maplet.Cx + Math.round(e.Maplet.MapWidth / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicWidth); e.Maplet.smoothMove(c, e.Maplet.Cy) }; this.WestDiv.get().onclick = function (c) { c = e.Maplet.Cx - Math.round(e.Maplet.MapWidth / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicWidth); e.Maplet.smoothMove(c, e.Maplet.Cy) }; this.SouthDiv.get().onclick = function (c) {
        c = e.Maplet.Cy - Math.round(e.Maplet.MapHeight / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] /
RMapConstant.MapPicHeight); e.Maplet.smoothMove(e.Maplet.Cx, c)
    }; this.NorthDiv.get().onclick = function (c) { c = e.Maplet.Cy + Math.round(e.Maplet.MapHeight / 3) * (RMapConstant.ScaleFactors[e.Maplet.Level] / RMapConstant.MapPicHeight); e.Maplet.smoothMove(e.Maplet.Cx, c) }; this.ZoomDiv = new RDiv(15, 52, null, null, null); this.Div.get().appendChild(this.ZoomDiv.get()); this.ZoominDiv = new RDiv(0, 0, 21, 21, 1); this.ZoominDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_zoomin.png)"; this.ZoominDiv.get().style.cursor =
"pointer"; this.ZoomoutDiv = new RDiv(0, this.StripDivHeight + 16, 21, 21, 1); this.ZoomoutDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_zoomout.png)"; this.ZoomoutDiv.get().style.cursor = "pointer"; this.SliderDiv = new RDiv(0, 18, 21, 14, 2); this.SliderDiv.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_slider.png)"; this.SliderDiv.get().style.cursor = "move"; this.StripDiv = new RDiv(7, 19, 7, this.StripDivHeight, 0); this.StripDiv.get().style.cursor = "pointer"; this.StripDiv.get().style.background =
"url(" + RMapConstant.JsServer + "image/tool/bar_strip_bg.png)"; this.StripDiv2 = new RDiv(7, 20, 7, this.StripDivHeight - 1, 0); this.StripDiv2.get().style.cursor = "pointer"; this.StripDiv2.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/bar_strip_bg2.png)"; this.ZoomDiv.get().appendChild(this.ZoominDiv.get()); this.ZoomDiv.get().appendChild(this.ZoomoutDiv.get()); this.ZoomDiv.get().appendChild(this.SliderDiv.get()); this.ZoomDiv.get().appendChild(this.StripDiv.get()); this.ZoomDiv.get().appendChild(this.StripDiv2.get());
    window.XMLHttpRequest || (RBase.setIe6BackgroundPng(this.DirectDiv), RBase.setIe6BackgroundPng(this.ZoominDiv), RBase.setIe6BackgroundPng(this.ZoomoutDiv), RBase.setIe6BackgroundPng(this.SliderDiv), RBase.setIe6BackgroundPng(this.StripDiv), RBase.setIe6BackgroundPng(this.StripDiv2)); this.ZoominDiv.get().onclick = function (c) { e.Maplet.smoothLevel(e.Maplet.Level + 1) }; this.ZoomoutDiv.get().onclick = function (c) { e.Maplet.smoothLevel(e.Maplet.Level - 1) }; this.StripDiv.get().onclick = function (c) {
        c = RBase.getOffset(c);
        c = RMapConstant.MapMaxLevel - Math.floor((c.offsetY - 3) / 7); 0 > c && (c = 0); e.Maplet.smoothLevel(c)
    }; this.StripDiv2.get().onclick = function (c) { c = RBase.getOffset(c); c = e.Maplet.Level - Math.floor((c.offsetY + 1 - 3) / 7); 0 > c && (c = 0); e.Maplet.smoothLevel(c) }; this.oldClientY = this.oldTop = 0; this.SliderDiv.get().onmousedown = function (c) {
        c = RBase.getMouseEvent(c); window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty(); e.oldTop = parseInt(e.SliderDiv.get().style.top); e.oldClientY = c.clientY; e.SliderDiv.get().onmousemove =
function (b) { b = RBase.getMouseEvent(b); b = e.oldTop + b.clientY - e.oldClientY; 18 > b ? b = 18 : b > 7 * (e.MapLevelCount - 1) + 18 && (b = 7 * (e.MapLevelCount - 1) + 18); e.SliderDiv.set(null, b); e.StripDiv2.set(null, b + 2, null, e.StripDivHeight - b + 19, null) }; e.SliderDiv.get().onmouseup = function (b) {
    b = RBase.getOffset(b); b = e.oldTop + b.clientY - e.oldClientY; 18 > b ? b = 18 : b > 7 * (e.MapLevelCount - 1) + 18 && (b = 7 * (e.MapLevelCount - 1) + 18); e.SliderDiv.set(null, b); e.StripDiv2.set(null, b + 2, null, e.StripDivHeight - b + 19, null); b = RMapConstant.MapMaxLevel - Math.floor((b -
18 + 3) / 7); 0 > b ? b = 0 : b > RMapConstant.MapMaxLevel && (b = RMapConstant.MapMaxLevel); b != e.Maplet.Level ? e.Maplet.smoothLevel(b) : e.refreshZoom(); e.SliderDiv.get().onmousemove = null; e.SliderDiv.get().onmouseup = null; this.releaseCapture ? this.releaseCapture() : window.captureEvents && window.releaseEvents(Event.MOUSEMOVE | Event.MOUSEUP)
}; this.setCapture ? this.setCapture() : window.captureEvents && window.captureEvents(Event.MOUSEMOVE | Event.MOUSEUP)
    }; this.refreshZoom = function () {
        var c = 7 * (RMapConstant.MapMaxLevel - e.Maplet.Level);
        0 > c && (c = 0); e.SliderDiv.set(null, 18 + c); e.StripDiv2.set(null, 20 + c, null, this.StripDivHeight - 1 - c, null)
    }; this.runLevelChangedEvent = function (c) { e.refreshZoom() }; this.Maplet.addEventListener(RMapEvent.LevelChanged, this.runLevelChangedEvent)
}, RRightMenu = function (c, d, e, h) {
    this.isOpen = !0; this.Width = d ? d : 0; this.Height = e ? e : 0; this.Div = new RDiv(null, null, null, null, h); this.Div.get().innerHTML = c; this.Div.get().oncontextmenu = function (b) { return !1 }; this.Div.get().onmousedown = function (b) { RBase.stopPropagation(b) }; this.Div.get().onmouseup =
function (b) { RBase.stopPropagation(b) }; this.Div.get().onmousemove = function (b) { RBase.stopPropagation(b) }; this.Div.get().onmousewheel = function (b) { RBase.stopPropagation(b) }; this.Div.get().onclick = function (b) { RBase.stopPropagation(b) }; this.Div.get().ondblclick = function (b) { RBase.stopPropagation(b) }; this.open = function () { this.isOpen || (this.Div.get().style.display = "block", this.isOpen = !0) }; this.close = function () { this.isOpen && (this.Div.get().style.display = "none", this.isOpen = !1) }; this.dispose = function () {
    this.Div.get().innerHTML =
""; this.Div = null
} 
}; var RTileLayer = function (c, d, e, h, b, k, a, f) {
    var l = this; this.yIndex = this.xIndex = this.ySpan = this.xSpan = this.centerY = this.centerX = this.yAbsolute = this.xAbsolute = 0; this.picArr; this.layerZoom = 1; this.Top = this.Left = 0; this.MapRoot = a; this.MapType = f; this.Cx = c; this.Cy = d; this.Level = e; this.MapWidth = h; this.MapHeight = b; this.Div = new RDiv(0, 0, null, null, k); this.directory = RMapConstant.Directorys[this.Level]; this.scalefactor = RMapConstant.ScaleFactors[this.Level]; this.gridfactor = RMapConstant.GridFactors[this.Level]; this.setLeftTop =
function (a, b) { this.Left = a; this.Top = b; this.Div.set(this.Left, this.Top, null, null, null) }; this.show = function () {
    this.Div.show(); this.initVariable(); this.setLeftTop(0, 0); var a = 0; this.clear(); for (this.picArr = Array(2 * this.xSpan + 1); Math.abs(a) <= this.xSpan; ) {
        var b = Math.floor((this.xAbsolute + a) / this.gridfactor), c = parseInt(this.xAbsolute + a - b * this.gridfactor); 0 > c && (c = this.gridfactor + c); var d = 0, f = a + this.xSpan; for (this.picArr[f] = Array(2 * this.ySpan + 1); Math.abs(d) <= this.ySpan; ) {
            var e = [this.MapRoot, this.MapType ? this.MapType +
"/" : "", this.directory, "/"], k = Math.floor((this.yAbsolute + d) / this.gridfactor); 0 > k && k++; var h = parseInt(this.yAbsolute + d - k * this.gridfactor); 0 > h && (h = this.gridfactor + h); this.MapRoot.setenv && this.MapRoot.setenv(b, k, c, h); var l = a * RMapConstant.MapPicWidth + this.centerX, p = -1 * d * RMapConstant.MapPicHeight + this.centerY, q = this.ySpan - d; this.picArr[f][q] = new RImageLoader(l, p, e.concat(b, "/", k, "/", c, "_", h, RMapConstant.PicType).join(""), a, d); this.picArr[f][q].XGrid = a; this.picArr[f][q].YGrid = d; this.picArr[f][q].getCore().Left =
l; this.picArr[f][q].getCore().Top = p; this.Div.get().appendChild(this.picArr[f][q].getCore()); d == this.ySpan ? d = -1 : 0 <= d ? d++ : d--
        } a == this.xSpan ? a = -1 : 0 <= a ? a++ : a--
    } 
}; this.hide = function () { this.Div.hide() }; this.loadNewPic = function () {
    var a = this.Left + this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth, b = this.Left + this.picArr[(this.xIndex + 1) % this.picArr.length][0].Left; b >= -1 * RMapConstant.MoveOffset ? this.loadLeftPic(b) : a <= this.MapWidth + RMapConstant.MoveOffset && this.loadRightPic(a); a = this.Top + this.picArr[0][this.yIndex].Top +
RMapConstant.MapPicHeight; b = this.Top + this.picArr[0][(this.yIndex + 1) % this.picArr[0].length].Top; b >= -1 * RMapConstant.MoveOffset ? this.loadTopPic(b) : a <= this.MapHeight + RMapConstant.MoveOffset && this.loadBottomPic(a)
}; this.clear = function () { if (null != this.picArr) { for (var a = 0; a < this.picArr.length; a++) { for (var b = 0; b < this.picArr[a].length; b++) try { this.Div.get().removeChild(this.picArr[a][b].getCore()), this.picArr[a][b] = null } catch (c) { } this.picArr[a] = null } this.picArr = null } }; this.initVariable = function () {
    this.xAbsolute =
Math.floor(this.Cx / this.scalefactor); this.yAbsolute = Math.floor(this.Cy / this.scalefactor); this.centerX = Math.round(this.MapWidth / 2 - this.Cx * RMapConstant.AdjustFactor % (this.scalefactor * RMapConstant.AdjustFactor) * RMapConstant.MapPicWidth / (this.scalefactor * RMapConstant.AdjustFactor)); this.centerY = Math.round(this.MapHeight / 2 - RMapConstant.MapPicHeight + this.Cy * RMapConstant.AdjustFactor % (this.scalefactor * RMapConstant.AdjustFactor) * RMapConstant.MapPicHeight / (this.scalefactor * RMapConstant.AdjustFactor)); this.xSpan =
Math.ceil(this.MapWidth / RMapConstant.MapPicWidth / 2); this.ySpan = Math.ceil(this.MapHeight / RMapConstant.MapPicHeight / 2); this.xIndex = 2 * this.xSpan; this.yIndex = 2 * this.ySpan
}; this.loadBottomPic = function (a) {
    a = Math.ceil((this.MapHeight + RMapConstant.MoveOffset - a) / RMapConstant.MapPicHeight); for (var b = 0; b < a; b++) {
        for (var c = (this.yIndex + 1) % this.picArr[0].length, d = this.picArr[0][this.yIndex].YGrid - 1, f = Math.floor((this.yAbsolute + d) / this.gridfactor), e = parseInt(this.yAbsolute + d - f * this.gridfactor), k = 0; k < this.picArr.length; k++) {
            var h =
[this.MapRoot, this.MapType ? this.MapType + "/" : "", this.directory, "/"], l = this.picArr[k][0].XGrid, p = Math.floor((this.xAbsolute + l) / this.gridfactor), l = parseInt(this.xAbsolute + l - p * this.gridfactor); this.MapRoot.setenv && this.MapRoot.setenv(p, f, l, e); this.picArr[k][c].set(null, this.picArr[0][this.yIndex].Top + RMapConstant.MapPicHeight, h.concat(p, "/", f, "/", l, "_" + e, RMapConstant.PicType).join(""), null, d); this.picArr[k][c].getCore().Top = this.picArr[0][this.yIndex].Top + RMapConstant.MapPicHeight
        } this.yIndex = (this.yIndex +
1) % this.picArr[0].length
    } 
}; this.loadTopPic = function (a) {
    a = Math.ceil((a + RMapConstant.MoveOffset) / RMapConstant.MapPicHeight); for (var b = 0; b < a; b++) {
        for (var c = (this.yIndex + 1) % this.picArr[0].length, d = this.picArr[0][c].YGrid + 1, f = Math.floor((this.yAbsolute + d) / this.gridfactor), e = parseInt(this.yAbsolute + d - f * this.gridfactor), k = 0; k < this.picArr.length; k++) {
            var h = [this.MapRoot, this.MapType ? this.MapType + "/" : "", this.directory, "/"], l = this.picArr[k][0].XGrid, p = Math.floor((this.xAbsolute + l) / this.gridfactor), l = parseInt(this.xAbsolute +
l - p * this.gridfactor); this.MapRoot.setenv && this.MapRoot.setenv(p, f, l, e); this.picArr[k][this.yIndex].set(null, this.picArr[0][c].Top - RMapConstant.MapPicHeight, h.concat(p, "/", f, "/", l, "_", e, RMapConstant.PicType).join(""), null, d); this.picArr[k][this.yIndex].getCore().Top = this.picArr[0][c].Top - RMapConstant.MapPicHeight
        } this.yIndex = (this.yIndex - 1 + this.picArr[0].length) % this.picArr[0].length
    } 
}; this.loadLeftPic = function (a) {
    a = Math.ceil((a + RMapConstant.MoveOffset) / RMapConstant.MapPicWidth); for (var b = 0; b < a; b++) {
        for (var c =
(this.xIndex + 1) % this.picArr.length, d = this.picArr[c][0].XGrid - 1, f = Math.floor((this.xAbsolute + d) / this.gridfactor), e = parseInt(this.xAbsolute + d - f * this.gridfactor), k = 0; k < this.picArr[this.xIndex].length; k++) {
            var h = [this.MapRoot, this.MapType ? this.MapType + "/" : "", this.directory, "/"], l = this.picArr[this.xIndex][k].YGrid, p = Math.floor((this.yAbsolute + l) / this.gridfactor), l = parseInt(this.yAbsolute + l - p * this.gridfactor); this.MapRoot.setenv && this.MapRoot.setenv(f, p, e, l); this.picArr[this.xIndex][k].set(this.picArr[c][0].Left -
RMapConstant.MapPicWidth, null, h.concat(f, "/", p, "/", e, "_", l, RMapConstant.PicType).join(""), d, null); this.picArr[this.xIndex][k].getCore().Left = this.picArr[c][0].Left - RMapConstant.MapPicWidth
        } this.xIndex = (this.xIndex - 1 + this.picArr.length) % this.picArr.length
    } 
}; this.loadRightPic = function (a) {
    a = Math.ceil((this.MapWidth + RMapConstant.MoveOffset - a) / RMapConstant.MapPicWidth); for (var b = 0; b < a; b++) {
        for (var c = this.picArr[this.xIndex][0].XGrid + 1, d = Math.floor((this.xAbsolute + c) / this.gridfactor), f = parseInt(this.xAbsolute +
c - d * this.gridfactor), e = 0; e < this.picArr[this.xIndex].length; e++) {
            var k = [this.MapRoot, this.MapType ? this.MapType + "/" : "", this.directory, "/"], h = this.picArr[this.xIndex][e].YGrid, l = Math.floor((this.yAbsolute + h) / this.gridfactor); 0 > l && l++; h = parseInt(this.yAbsolute + h - l * this.gridfactor); this.MapRoot.setenv && this.MapRoot.setenv(d, l, f, h); var p = (this.xIndex + 1) % this.picArr.length; this.picArr[p][e].set(this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth, null, k.concat(d, "/", l, "/", f, "_", h, RMapConstant.PicType).join(""),
c, null); this.picArr[p][e].getCore().Left = this.picArr[this.xIndex][0].Left + RMapConstant.MapPicWidth
        } this.xIndex = (this.xIndex + 1) % this.picArr.length
    } 
}; this.setZoom = function (a) {
    for (var b = l.Div.get(), c = 0; c < b.childNodes.length; c++) {
        b.childNodes[c].style.width = Math.ceil(RMapConstant.MapPicWidth * a) + "px"; b.childNodes[c].style.height = Math.ceil(RMapConstant.MapPicHeight * a) + "px"; var d = l.MapHeight / 2 - l.Top - (l.MapHeight / 2 - l.Top - b.childNodes[c].Top) * a; b.childNodes[c].style.left = Math.round(l.MapWidth / 2 - l.Left - (l.MapWidth /
2 - l.Left - b.childNodes[c].Left) * a) + "px"; b.childNodes[c].style.top = Math.round(d) + "px"
    } l.layerZoom = a
} 
}, RImageLoader = function (c, d, e, h, b) {
    var k = this, a = 0; this.Left = c; this.Top = d; this.XGrid = h; this.YGrid = b; var f = document.createElement("div"); f.style.position = "absolute"; f.style.visibility = "inherit"; f.unselectable = "on"; f.style.webkitUserSelect = "none"; f.style.MozUserSelect = "none"; f.style.left = this.Left + "px"; f.style.top = this.Top + "px"; f.style.width = RMapConstant.MapPicWidth + "px"; f.style.height = RMapConstant.MapPicHeight +
"px"; this.Tile = f; var l = new Image; l.style.display = "block"; l.style.position = "absolute"; l.style.width = "100%"; l.style.height = "100%"; l.style.visibility = "inherit"; l.src = RMapConstant.JsServer + "image/none.gif"; this.Tile.appendChild(l); l.onerror = function (b) { l.src = RMapConstant.JsServer + "image/none.gif"; 2 <= ++a ? a = 0 : l.src = k.PicSrc }; l.style.transition = "opacity .2s linear"; l.src = e; this.set = function (a, b, c, d, e) {
    if (a || 0 == a) this.Left = a, f.style.left = this.Left + "px"; if (b || 0 == b) this.Top = b, f.style.top = this.Top + "px"; if (d ||
0 == d) this.XGrid = d; if (e || 0 == e) this.YGrid = e; c && (-1 < c.indexOf("/-") && (c = RMapConstant.JsServer + "image/none.gif"), RBase._browser_ie6 && l.style.filter ? (this.PicSrc = c, l.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + this.PicSrc + "', sizingMethod='scale')") : (l.src = RMapConstant.JsServer + "image/none.gif", this.PicSrc = c, l.src = this.PicSrc))
}; this.getCore = function () { return f } 
}; RBaseTool = function (c) {
    this.isCloseOtherTool = this.isClearOtherToolMarker = !0; this.isOpened = !1; this.CoordinatesArr = []; this.Div = new RDiv; this.Maplet = c; this.open = function () { }; this.close = function () { }; this.clear = function () { }; this.refresh = function () { }; this.EventArray = []; this.EventArray[RToolEvent.OpenTool] = []; this.EventArray[RToolEvent.CloseTool] = []; this.EventArray[RToolEvent.ClearGraphics] = []; this.EventArray[RToolEvent.DisposeTool] = []; this.addEventListener = function (c, e) { this.EventArray[c] && this.EventArray[c].push(e) };
    this.removeEventListener = function (c, e) { if (this.EventArray[c]) for (var h = 0; h < this.EventArray[c].length; h++) this.EventArray[c][h] == e && this.EventArray[c].splice(h, 1) }; this.dispatchEvent = function (c) { if (this.EventArray[c] && 0 < this.EventArray[c].length) for (var e = new RToolEvent(c), h = 0; h < this.EventArray[c].length; h++) if (this.EventArray[c][h]) this.EventArray[c][h](e) } 
};
RLineTool = function (c, d, e, h) {
    RBaseTool.call(this, c); var b = this; this.GraphicsObject; this.oldY = this.oldX = 0; this.isAddEvent = !1; this.open = function () {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RLine([], d, e, h), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RLineTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent, b.onMouseDown),
b.dispatchEvent(RToolEvent.OpenTool))
    }; this.close = function () {
        b.isOpened && (b.isOpened = !1, RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.isAddEvent && (b.isAddEvent = !1, b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick)), 0 < b.GraphicsObject.CoordinatesArr.length && (b.GraphicsObject.CoordinatesArr.pop(),
b.GraphicsObject.refresh()), b.CoordinatesArr = b.GraphicsObject.CoordinatesArr, b.dispatchEvent(RToolEvent.CloseTool))
    }; this.clear = function () { !b.isOpened && null != b.GraphicsObject && (b.Div.get().removeChild(b.GraphicsObject.Div.get()), b.GraphicsObject.dispose(), b.GraphicsObject = null, b.CoordinatesArr = [], b.dispatchEvent(RToolEvent.ClearGraphics)) }; this.refresh = function () { b.GraphicsObject && b.GraphicsObject.CoordinatesArr && b.GraphicsObject.refresh() }; this.onMouseDown = function (c) {
        if (b.isOpened && (2 < Math.abs(b.oldX -
c.MouseX) || 2 < Math.abs(b.oldY - c.MouseY))) {
            b.oldX = c.MouseX; b.oldY = c.MouseY; c = new RCoordinates(c.MouseCx, c.MouseCy); if (0 >= b.GraphicsObject.CoordinatesArr.length) b.GraphicsObject.CoordinatesArr[0] = c, b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null; else if (c.Cx != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cx || c.Cy != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cy) b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length -
1] = c, b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null; b.isAddEvent || (b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick), b.isAddEvent = !0)
        } 
    }; this.onMouseMove = function (c) { b.isOpened && (b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(c.MouseCx, c.MouseCy), b.GraphicsObject && b.GraphicsObject.CoordinatesArr && b.GraphicsObject.draw()) }; this.onMouseDoubleClick =
function (c) { b.isOpened && b.close() } 
};
RPolygonTool = function (c, d, e, h, b, k) {
    RBaseTool.call(this, c); var a = this; this.GraphicsObject; this.oldY = this.oldX = 0; this.isAddEvent = !1; this.open = function () {
        a.isOpened || (a.clear(), a.isOpened = !0, RCursor.setMouseTool(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.GraphicsObject = new RPolygon([], d, e, h, b, k), a.GraphicsObject.setMaplet(a.Maplet), a.GraphicsObject.Div.get().setAttribute("_rmap", "RPolygonTool"), a.Div.get().appendChild(a.GraphicsObject.Div.get()), a.Maplet.addEventListener(RMapEvent.MouseDownEvent,
a.onMouseDown), a.dispatchEvent(RToolEvent.OpenTool))
    }; this.close = function () {
        a.isOpened && (a.isOpened = !1, RCursor.setMouseDefault(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.Maplet.removeEventListener(RMapEvent.MouseDownEvent, a.onMouseDown), a.isAddEvent && (a.isAddEvent = !1, a.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove), a.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, a.onMouseDoubleClick)), 0 < a.GraphicsObject.CoordinatesArr.length && (a.GraphicsObject.CoordinatesArr.pop(),
a.GraphicsObject.refresh()), a.CoordinatesArr = a.GraphicsObject.CoordinatesArr, a.dispatchEvent(RToolEvent.CloseTool))
    }; this.clear = function () { !a.isOpened && null != a.GraphicsObject && (a.Div.get().removeChild(a.GraphicsObject.Div.get()), a.GraphicsObject.dispose(), a.GraphicsObject = null, a.CoordinatesArr = [], a.dispatchEvent(RToolEvent.ClearGraphics)) }; this.refresh = function () { a.GraphicsObject && a.GraphicsObject.CoordinatesArr && a.GraphicsObject.refresh() }; this.onMouseDown = function (b) {
        if (a.isOpened && (2 < Math.abs(a.oldX -
b.MouseX) || 2 < Math.abs(a.oldY - b.MouseY))) {
            a.oldX = b.MouseX; a.oldY = b.MouseY; b = new RCoordinates(b.MouseCx, b.MouseCy); if (0 >= a.GraphicsObject.CoordinatesArr.length) a.GraphicsObject.CoordinatesArr[0] = b, a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length] = null; else if (b.Cx != a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 2].Cx || b.Cy != a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 2].Cy) a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length -
1] = b, a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length] = null; a.isAddEvent || (a.Maplet.addEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove), a.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, a.onMouseDoubleClick), a.isAddEvent = !0)
        } 
    }; this.onMouseMove = function (b) { a.isOpened && (a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(b.MouseCx, b.MouseCy), a.GraphicsObject.refresh()) }; this.onMouseDoubleClick = function (b) { a.isOpened && a.close() } 
};
RDistanceTool = function (c, d, e, h) {
    RBaseTool.call(this, c); var b = this; this.GraphicsObject; this.tipsDivArr = []; this.oldY = this.oldX = 0; this.isAddEvent = !1; this.open = function () {
        b.isOpened || (b.clear(), b.isOpened = !0, RCursor.setMouseTool(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.GraphicsObject = new RLine([], d, e, h), b.GraphicsObject.setMaplet(b.Maplet), b.GraphicsObject.Div.get().setAttribute("_rmap", "RDistanceTool"), b.Div.get().appendChild(b.GraphicsObject.Div.get()), b.Maplet.addEventListener(RMapEvent.MouseDownEvent,
b.onMouseDown), b.dispatchEvent(RToolEvent.OpenTool))
    }; this.close = function () {
        b.isOpened && (b.isOpened = !1, RCursor.setMouseDefault(), b.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, b.Maplet.removeEventListener(RMapEvent.MouseDownEvent, b.onMouseDown), b.isAddEvent && (b.isAddEvent = !1, b.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick)), 0 < b.GraphicsObject.CoordinatesArr.length && (b.GraphicsObject.CoordinatesArr.pop(),
b.GraphicsObject.refresh()), b.CoordinatesArr = b.GraphicsObject.CoordinatesArr, b.dispatchEvent(RToolEvent.CloseTool))
    }; this.clear = function () { if (!b.isOpened && null != b.GraphicsObject) { b.Div.get().removeChild(b.GraphicsObject.Div.get()); b.GraphicsObject.dispose(); for (b.GraphicsObject = null; 0 < b.tipsDivArr.length; ) b.Div.get().removeChild(b.tipsDivArr[b.tipsDivArr.length - 1].get()), b.tipsDivArr[b.tipsDivArr.length - 1] = null, b.tipsDivArr.pop(); b.CoordinatesArr = []; b.dispatchEvent(RToolEvent.ClearGraphics) } }; this.refresh =
function () { if (b.GraphicsObject && b.GraphicsObject.CoordinatesArr) { for (var c = 0; c < b.GraphicsObject.CoordinatesArr.length; c++) if (b.tipsDivArr[c]) { var a = b.Maplet.toClientPoint(b.GraphicsObject.CoordinatesArr[c].Cx, b.GraphicsObject.CoordinatesArr[c].Cy); b.tipsDivArr[c].set(a.X, a.Y) } b.GraphicsObject.refresh() } }; this.onMouseDown = function (c) {
    if (b.isOpened && (2 < Math.abs(b.oldX - c.MouseX) || 2 < Math.abs(b.oldY - c.MouseY))) {
        b.oldX = c.MouseX; b.oldY = c.MouseY; var a = new RCoordinates(c.MouseCx, c.MouseCy); if (0 >= b.GraphicsObject.CoordinatesArr.length) b.GraphicsObject.CoordinatesArr[0] =
a, b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null, b.addTipsDiv(c.MouseX, c.MouseY, "\u8d77\u70b9"); else if (a.Cx != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cx || a.Cy != b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 2].Cy) b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = a, b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length] = null, a = Math.round(RCompute.getLineDistance(b.GraphicsObject.CoordinatesArr.slice(0,
b.GraphicsObject.CoordinatesArr.length - 1))), b.addTipsDiv(c.MouseX, c.MouseY, 1E3 <= a ? a / 1E3 + "\u516c\u91cc" : a + "\u7c73"); b.isAddEvent || (b.Maplet.addEventListener(RMapEvent.MouseMoveEvent, b.onMouseMove), b.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, b.onMouseDoubleClick), b.isAddEvent = !0)
    } 
}; this.onMouseMove = function (c) { b.isOpened && (b.GraphicsObject.CoordinatesArr[b.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(c.MouseCx, c.MouseCy), b.GraphicsObject.refresh()) }; this.onMouseDoubleClick =
function (c) { b.isOpened && b.close() }; this.addTipsDiv = function (c, a, d) {
    c = new RDiv(c, a, null, null, 10); a = new RDiv(10, -10, 7 * (d.length - 2) + 24, null, 0); a.get().style.backgroundColor = "#FFFACD"; a.get().style.border = "solid #999999 1px"; a.get().style.color = "#555555"; a.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif"; a.get().style.fontSize = "12px"; a.get().style.lineHeight = "12px"; a.get().style.padding = "3px"; a.get().innerHTML = d; c.get().appendChild(a.get()); d = new RDiv(-5, -5, 10, 10, 1); d.get().style.background =
"url(" + RMapConstant.JsServer + "image/tool/tool_point_icon.gif) no-repeat"; c.get().appendChild(d.get()); b.Div.get().appendChild(c.get()); b.tipsDivArr.push(c)
} 
};
RAreaTool = function (c, d, e, h, b, k) {
    RBaseTool.call(this, c); var a = this; this.GraphicsObject; this.tipsDivArr = []; this.oldY = this.oldX = 0; this.isAddEvent = !1; this.open = function () {
        a.isOpened || (a.clear(), a.isOpened = !0, RCursor.setMouseTool(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.GraphicsObject = new RPolygon([], d, e, h, b, k), a.GraphicsObject.setMaplet(a.Maplet), a.GraphicsObject.Div.get().setAttribute("_rmap", "RAreaTool"), a.Div.get().appendChild(a.GraphicsObject.Div.get()), a.Maplet.addEventListener(RMapEvent.MouseDownEvent,
a.onMouseDown), a.dispatchEvent(RToolEvent.OpenTool))
    }; this.close = function () {
        a.isOpened && (a.isOpened = !1, RCursor.setMouseDefault(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.Maplet.removeEventListener(RMapEvent.MouseDownEvent, a.onMouseDown), a.isAddEvent && (a.isAddEvent = !1, a.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove), a.Maplet.removeEventListener(RMapEvent.MouseDoubleClickEvent, a.onMouseDoubleClick)), 0 < a.GraphicsObject.CoordinatesArr.length && (a.GraphicsObject.CoordinatesArr.pop(),
a.GraphicsObject.refresh()), a.CoordinatesArr = a.GraphicsObject.CoordinatesArr, a.dispatchEvent(RToolEvent.CloseTool))
    }; this.clear = function () { if (!a.isOpened && null != a.GraphicsObject) { a.Div.get().removeChild(a.GraphicsObject.Div.get()); a.GraphicsObject.dispose(); a.GraphicsObject = null; for (a.labelDiv.hide(); 0 < a.tipsDivArr.length; ) a.Div.get().removeChild(a.tipsDivArr[a.tipsDivArr.length - 1].get()), a.tipsDivArr[a.tipsDivArr.length - 1] = null, a.tipsDivArr.pop(); a.CoordinatesArr = []; a.dispatchEvent(RToolEvent.ClearGraphics) } };
    this.refresh = function () { if (a.GraphicsObject && a.GraphicsObject.CoordinatesArr) { for (var b = 0; b < a.GraphicsObject.CoordinatesArr.length; b++) if (a.tipsDivArr[b]) { var c = a.Maplet.toClientPoint(a.GraphicsObject.CoordinatesArr[b].Cx, a.GraphicsObject.CoordinatesArr[b].Cy); a.tipsDivArr[b].set(c.X - 5, c.Y - 5); b == a.GraphicsObject.CoordinatesArr.length - 1 && a.labelDiv.set(c.X + 10, c.Y - 10) } a.GraphicsObject.refresh() } }; this.onMouseDown = function (b) {
        if (a.isOpened && (2 < Math.abs(a.oldX - b.MouseX) || 2 < Math.abs(a.oldY - b.MouseY))) {
            a.oldX =
b.MouseX; a.oldY = b.MouseY; var c = new RCoordinates(b.MouseCx, b.MouseCy); if (0 >= a.GraphicsObject.CoordinatesArr.length) a.GraphicsObject.CoordinatesArr[0] = c, a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length] = null, a.addTipsDiv(b.MouseX, b.MouseY); else if (c.Cx != a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 2].Cx || c.Cy != a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 2].Cy) a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length -
1] = c, a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length] = null, c = RCompute.getPolygonArea(a.GraphicsObject.CoordinatesArr.slice(0, a.GraphicsObject.CoordinatesArr.length - 1)), c = 1E6 > c ? Math.round(c) + "\u5e73\u65b9\u7c73" : Math.round(c / 1E3) / 1E3 + "\u5e73\u65b9\u516c\u91cc", a.addTipsDiv(b.MouseX, b.MouseY, c); a.isAddEvent || (a.Maplet.addEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove), a.Maplet.addEventListener(RMapEvent.MouseDoubleClickEvent, a.onMouseDoubleClick), a.isAddEvent = !0)
        } 
    }; this.onMouseMove =
function (b) { a.isOpened && (a.GraphicsObject.CoordinatesArr[a.GraphicsObject.CoordinatesArr.length - 1] = new RCoordinates(b.MouseCx, b.MouseCy), a.GraphicsObject.refresh()) }; this.onMouseDoubleClick = function (b) { a.isOpened && a.close() }; this.addTipsDiv = function (b, c, d) {
    var e = new RDiv(b - 5, c - 5, 10, 10, 11); e.get().style.background = "url(" + RMapConstant.JsServer + "image/tool/tool_point_icon.gif) no-repeat"; a.Div.get().appendChild(e.get()); a.tipsDivArr.push(e); d && (a.labelDiv.set(b + 10, c - 10, 7 * (d.length - 3) + 38, null, null), a.labelDiv.get().innerHTML =
d, a.labelDiv.show())
}; this.labelDiv = new RDiv(null, null, null, null, 12); this.labelDiv.hide(); this.labelDiv.get().style.backgroundColor = "#FFFACD"; this.labelDiv.get().style.border = "solid #999999 1px"; this.labelDiv.get().style.color = "#555555"; this.labelDiv.get().style.fontFamily = "\u5fae\u8f6f\u96c5\u9ed1,\u5b8b\u4f53,arial,sans-serif"; this.labelDiv.get().style.fontSize = "12px"; this.labelDiv.get().style.lineHeight = "12px"; this.labelDiv.get().style.padding = "3px"; this.Div.get().appendChild(this.labelDiv.get())
};
RRectTool = function (c, d, e, h, b, k) {
    RBaseTool.call(this, c); var a = this; this.GraphicsObject; this.startPoint; this.endPoint; this.open = function () {
        a.isOpened || (a.clear(), a.isOpened = !0, RCursor.setMouseTool(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.GraphicsObject = new RPolygon([], d, e, h, b, k), a.GraphicsObject.setMaplet(a.Maplet), a.GraphicsObject.Div.get().setAttribute("_rmap", "RRectTool"), a.Div.get().appendChild(a.GraphicsObject.Div.get()), a.Maplet.addEventListener(RMapEvent.MouseDownEvent, a.onMouseDown),
a.Maplet.isCanMove = !1, a.dispatchEvent(RToolEvent.OpenTool))
    }; this.close = function () { a.isOpened && (a.isOpened = !1, a.Maplet.removeEventListener(RMapEvent.MouseDownEvent, a.onMouseDown), a.Maplet.removeEventListener(RMapEvent.MouseUpEvent, a.onMouseUp), a.Maplet.removeEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove), RCursor.setMouseDefault(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.CoordinatesArr = a.GraphicsObject.CoordinatesArr, a.Maplet.isCanMove = !0, a.dispatchEvent(RToolEvent.CloseTool)) };
    this.clear = function () { !a.isOpened && null != a.GraphicsObject && (a.Div.get().removeChild(a.GraphicsObject.Div.get()), a.GraphicsObject.dispose(), a.GraphicsObject = null, a.CoordinatesArr = [], a.startPoint = null, a.endPoint = null, a.dispatchEvent(RToolEvent.ClearGraphics)) }; this.refresh = function () { a.GraphicsObject && a.GraphicsObject.CoordinatesArr && a.GraphicsObject.refresh() }; this.isClickDown = !1; this.onMouseDown = function (b) {
        a.isOpened && !a.isClickDown && (a.isClickDown = !0, startPoint = new RCoordinates(b.MouseCx, b.MouseCy),
a.Maplet.addEventListener(RMapEvent.MouseUpEvent, a.onMouseUp), a.Maplet.addEventListener(RMapEvent.MouseMoveEvent, a.onMouseMove))
    }; this.onMouseUp = function (b) { a.isClickDown = !1; a.close() }; this.onMouseMove = function (b) {
        if (a.isOpened && a.isClickDown) {
            endPoint = new RCoordinates(b.MouseCx, b.MouseCy); b = new RCoordinates(startPoint.Cx, startPoint.Cy); var c = new RCoordinates(endPoint.Cx, startPoint.Cy), d = new RCoordinates(endPoint.Cx, endPoint.Cy), e = new RCoordinates(startPoint.Cx, endPoint.Cy); a.GraphicsObject.CoordinatesArr =
[b, c, d, e]; a.GraphicsObject.refresh()
        } 
    } 
};
RAddPointTool = function (c, d, e, h, b, k) {
    RBaseTool.call(this, c); var a = this; this.isMapMove = !1; this.PointMarker; this.Cx; this.Cy; this.open = function () { a.isOpened || (a.clear(), a.isOpened = !0, RCursor.setMouseTool(), a.Maplet.Div.get().style.cursor = RCursor.MouseNormalCursor, a.Maplet.addEventListener(RMapEvent.MouseUpEvent, a.onMouseUp), a.Maplet.addEventListener(RMapEvent.Moving, a.onMapMoving), a.dispatchEvent(RToolEvent.OpenTool)) }; this.close = function () {
        a.isOpened && (a.isOpened = !1, RCursor.setMouseDefault(), a.Maplet.Div.get().style.cursor =
RCursor.MouseNormalCursor, a.Maplet.removeEventListener(RMapEvent.MouseUpEvent, a.onMouseUp), a.Maplet.removeEventListener(RMapEvent.Moving, a.onMapMoving), a.PointMarker && (a.Cx = a.PointMarker.Cx, a.Cy = a.PointMarker.Cy), a.dispatchEvent(RToolEvent.CloseTool))
    }; this.clear = function () { a.isOpened || (a.Cx = 0, a.Cy = 0, null != a.PointMarker && (a.Maplet.removeMarker(a.PointMarker), a.PointMarker.dispose(), a.PointMarker = null, a.dispatchEvent(RToolEvent.ClearGraphics))) }; this.refresh = function (b) {
        b && a.PointMarker.update(b.MouseCx,
b.MouseCy)
    }; this.onMouseUp = function (c) { a.isOpened && !a.isMapMove && (a.PointMarker = new RPointMarker(c.MouseCx, c.MouseCy, d, e, h, b, k), a.Maplet.addMarker(a.PointMarker), a.close()); a.isMapMove = !1 }; this.onMapMoving = function (b) { a.isOpened && !a.isMapMove && (a.isMapMove = !0) } 
};