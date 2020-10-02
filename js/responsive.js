var move_array = []
  , move_objects = document.querySelectorAll("[data-move]");
if (move_objects.length > 0)
    for (var _index10 = 0; _index10 < move_objects.length; _index10++) {
        var _el6 = move_objects[_index10]
          , data_move = _el6.getAttribute("data-move");
        "" == data_move && null == data_move || (_el6.setAttribute("data-move-index", _index10),
        move_array[_index10] = {
            parent: _el6.parentNode,
            index: index_in_parent(_el6)
        })
    }
function dynamic_adapt() {
    var e = document.querySelector("body").offsetWidth;
    if (move_objects.length > 0)
        for (var t = 0; t < move_objects.length; t++) {
            var o = move_objects[t]
              , r = o.getAttribute("data-move");
            if ("" != r || null != r) {
                var n = r.split(",")
                  , l = document.querySelector("." + n[0])
                  , i = n[1]
						, s = n[2];
                if (e < s) {
                    if (!o.classList.contains("js-move_done_" + s)) {
                        if (i > 0) {
                            var a = index_of_elements(l)[i];
                            l.insertBefore(o, l.childNodes[a])
								} else if(i=="first"){
									l.insertBefore(o, l.firstChild);
									o.classList.add("js-move_done_" + s)
								} else if(i=="last"){
									l.insertBefore(o, l.lastChild);
									o.classList.add("js-move_done_" + s)
								} else {
									l.insertBefore(o, l.firstChild);
									o.classList.add("js-move_done_" + s)
								}
                    }
                } else
                    o.classList.contains("js-move_done_" + s) && (dynamic_adaptive_back(o),
                    o.classList.remove("js-move_done_" + s))
            }
        }
    custom_adapt(e)
}
function dynamic_adaptive_back(e) {
    var t = e.getAttribute("data-move-index")
      , o = move_array[t]
      , r = o.parent
      , n = o.index;
    if (n > 0) {
        var l = index_of_elements(r)[n];
        r.insertBefore(e, r.childNodes[l])
    } else
        r.insertBefore(e, r.firstChild)
}
function index_in_parent(e) {
    for (var t = e.parentNode.childNodes, o = 0, r = 0; r < t.length; r++) {
        if (t[r] == e)
            return o;
        1 == t[r].nodeType && o++
    }
    return -1
}
function index_of_elements(e) {
    for (var t = [], o = 0; o < e.childNodes.length; o++)
        1 == e.childNodes[o].nodeType && null == e.childNodes[o].getAttribute("data-move") && t.push(o);
    return t
}
function custom_adapt(e) {}
window.addEventListener("resize", (function(e) {
    dynamic_adapt()
}
)),
dynamic_adapt();
