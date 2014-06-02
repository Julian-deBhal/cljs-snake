// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_snake.drawing');
goog.require('cljs.core');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
goog.require('figwheel.client');
goog.require('figwheel.client');
cljs.core.enable_console_print_BANG_.call(null);
cljs_snake.drawing.background_color_string = "#ffffdd";
cljs_snake.drawing.border_color_string = "#000000";
cljs_snake.drawing.snake_color_string = "#00dd00";
cljs_snake.drawing.food_color_string = "#ff0000";
cljs_snake.drawing.square_size = 15;
cljs_snake.drawing.canvas_size = (function canvas_size(columns,rows){var canvas_width = ((2 + columns) * cljs_snake.drawing.square_size);var canvas_height = ((2 + rows) * cljs_snake.drawing.square_size);return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [canvas_width,canvas_height], null);
});
cljs_snake.drawing.get_context = (function get_context(name){return document.getElementById(name).getContext("2d");
});
cljs_snake.drawing.draw_coords_BANG_ = (function() {
var draw_coords_BANG_ = null;
var draw_coords_BANG___2 = (function (ctx,p__22198){var vec__22202 = p__22198;var x = cljs.core.nth.call(null,vec__22202,0,null);var y = cljs.core.nth.call(null,vec__22202,1,null);return ctx.fillRect((x * cljs_snake.drawing.square_size),(y * cljs_snake.drawing.square_size),cljs_snake.drawing.square_size,cljs_snake.drawing.square_size);
});
var draw_coords_BANG___3 = (function (ctx,p__22199,color_string){var vec__22203 = p__22199;var x = cljs.core.nth.call(null,vec__22203,0,null);var y = cljs.core.nth.call(null,vec__22203,1,null);ctx.fillStyle = color_string;
return draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
draw_coords_BANG_ = function(ctx,p__22199,color_string){
switch(arguments.length){
case 2:
return draw_coords_BANG___2.call(this,ctx,p__22199);
case 3:
return draw_coords_BANG___3.call(this,ctx,p__22199,color_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$2 = draw_coords_BANG___2;
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$3 = draw_coords_BANG___3;
return draw_coords_BANG_;
})()
;
cljs_snake.drawing.draw_snake_head_BANG_ = (function draw_snake_head_BANG_(p__22204){var map__22206 = p__22204;var map__22206__$1 = ((cljs.core.seq_QMARK_.call(null,map__22206))?cljs.core.apply.call(null,cljs.core.hash_map,map__22206):map__22206);var state = map__22206__$1;var ctx = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var y = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__22206__$1,new cljs.core.Keyword(null,"x","x",1013904362));return cljs_snake.drawing.draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs_snake.drawing.snake_color_string);
});
cljs_snake.drawing.draw_snake_tail_BANG_ = (function draw_snake_tail_BANG_(p__22207){var map__22209 = p__22207;var map__22209__$1 = ((cljs.core.seq_QMARK_.call(null,map__22209))?cljs.core.apply.call(null,cljs.core.hash_map,map__22209):map__22209);var state = map__22209__$1;var ctx = cljs.core.get.call(null,map__22209__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var snake_tail = cljs.core.get.call(null,map__22209__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));ctx.fillStyle = cljs_snake.drawing.snake_color_string;
cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs_snake.drawing.draw_coords_BANG_,ctx),snake_tail));
return state;
});
cljs_snake.drawing.draw_food_BANG_ = (function draw_food_BANG_(p__22210){var map__22212 = p__22210;var map__22212__$1 = ((cljs.core.seq_QMARK_.call(null,map__22212))?cljs.core.apply.call(null,cljs.core.hash_map,map__22212):map__22212);var state = map__22212__$1;var food_pos = cljs.core.get.call(null,map__22212__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var ctx = cljs.core.get.call(null,map__22212__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));if(cljs.core.truth_(food_pos))
{cljs_snake.drawing.draw_coords_BANG_.call(null,ctx,food_pos,cljs_snake.drawing.food_color_string);
} else
{}
return state;
});
cljs_snake.drawing.draw_background_BANG_ = (function draw_background_BANG_(p__22213){var map__22215 = p__22213;var map__22215__$1 = ((cljs.core.seq_QMARK_.call(null,map__22215))?cljs.core.apply.call(null,cljs.core.hash_map,map__22215):map__22215);var state = map__22215__$1;var canvas_width = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1663715459));var canvas_height = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",3545188014));var columns = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var rows = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var ctx = cljs.core.get.call(null,map__22215__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));ctx.fillStyle = cljs_snake.drawing.background_color_string;
ctx.fillRect(0,0,canvas_width,canvas_height);
return state;
});
cljs_snake.drawing.draw_border_BANG_ = (function draw_border_BANG_(p__22216){var map__22218 = p__22216;var map__22218__$1 = ((cljs.core.seq_QMARK_.call(null,map__22218))?cljs.core.apply.call(null,cljs.core.hash_map,map__22218):map__22218);var state = map__22218__$1;var canvas_height = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword(null,"canvas-height","canvas-height",3545188014));var canvas_width = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword(null,"canvas-width","canvas-width",1663715459));var columns = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var rows = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var ctx = cljs.core.get.call(null,map__22218__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var bottom_row_pos_22219 = (cljs_snake.drawing.square_size * (rows + 1));var right_edge_pos_22220 = (cljs_snake.drawing.square_size * (columns + 1));ctx.fillStyle = cljs_snake.drawing.border_color_string;
ctx.fillRect(0,0,canvas_width,cljs_snake.drawing.square_size);
ctx.fillRect(0,0,cljs_snake.drawing.square_size,canvas_height);
ctx.fillRect(right_edge_pos_22220,0,cljs_snake.drawing.square_size,canvas_height);
ctx.fillRect(0,bottom_row_pos_22219,canvas_width,cljs_snake.drawing.square_size);
return state;
});
cljs_snake.drawing.immediate_mode_render_BANG_ = (function immediate_mode_render_BANG_(p__22221){var map__22224 = p__22221;var map__22224__$1 = ((cljs.core.seq_QMARK_.call(null,map__22224))?cljs.core.apply.call(null,cljs.core.hash_map,map__22224):map__22224);var state = map__22224__$1;var rows = cljs.core.get.call(null,map__22224__$1,new cljs.core.Keyword(null,"rows","rows",1017410891));var columns = cljs.core.get.call(null,map__22224__$1,new cljs.core.Keyword(null,"columns","columns",1963625295));var ctx = cljs_snake.drawing.get_context.call(null,"snakeCanvas");var vec__22225 = cljs_snake.drawing.canvas_size.call(null,columns,rows);var canvas_width = cljs.core.nth.call(null,vec__22225,0,null);var canvas_height = cljs.core.nth.call(null,vec__22225,1,null);var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx,new cljs.core.Keyword(null,"canvas-height","canvas-height",3545188014),canvas_height,new cljs.core.Keyword(null,"canvas-width","canvas-width",1663715459),canvas_width);cljs_snake.drawing.draw_background_BANG_.call(null,state__$1);
cljs_snake.drawing.draw_border_BANG_.call(null,state__$1);
ctx.setTransform(1,0,0,1,cljs_snake.drawing.square_size,cljs_snake.drawing.square_size);
cljs_snake.drawing.draw_snake_tail_BANG_.call(null,state__$1);
cljs_snake.drawing.draw_snake_head_BANG_.call(null,state__$1);
cljs_snake.drawing.draw_food_BANG_.call(null,state__$1);
return ctx.setTransform(1,0,0,1,0,0);
});

//# sourceMappingURL=drawing.js.map