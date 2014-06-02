// Compiled by ClojureScript 0.0-2202
goog.provide('cljs_snake.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cemerick.cljs.test');
goog.require('cemerick.cljs.test');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('figwheel.client');
goog.require('figwheel.client');
goog.require('sablono.core');
goog.require('sablono.core');
cljs.core.enable_console_print_BANG_.call(null);
cljs_snake.core.canvas = document.getElementById("canvas");
cljs_snake.core.background_color_string = "#ffffdd";
cljs_snake.core.border_color_string = "#000000";
cljs_snake.core.snake_color_string = "#00dd00";
cljs_snake.core.food_color_string = "#ff0000";
cljs_snake.core.columns = 18;
cljs_snake.core.rows = 14;
cljs_snake.core.square_size = 17;
cljs_snake.core.canvas_width = ((2 + cljs_snake.core.columns) * cljs_snake.core.square_size);
cljs_snake.core.canvas_height = ((2 + cljs_snake.core.rows) * cljs_snake.core.square_size);
cljs_snake.core.starting_snake_length = 3;
cljs_snake.core.tick_speed = 150;
cljs_snake.core.keycode_a = 65;
cljs_snake.core.input_chan = cljs.core.async.chan.call(null);
cljs_snake.core.reset_state = (function() {
var reset_state = null;
var reset_state__0 = (function (){return reset_state.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ai","ai",1013907354),true], null));
});
var reset_state__1 = (function (state){return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),true,new cljs.core.Keyword(null,"x","x",1013904362),(0 | 0),new cljs.core.Keyword(null,"y","y",1013904363),(0 | 0),new cljs.core.Keyword(null,"score","score",1123168772),0,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"direction","direction",4346280689),new cljs.core.Keyword(null,"right","right",1122416014),new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.PersistentQueue.EMPTY);
});
reset_state = function(state){
switch(arguments.length){
case 0:
return reset_state__0.call(this);
case 1:
return reset_state__1.call(this,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
reset_state.cljs$core$IFn$_invoke$arity$0 = reset_state__0;
reset_state.cljs$core$IFn$_invoke$arity$1 = reset_state__1;
return reset_state;
})()
;
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("state")))
{} else
{cljs_snake.core.state = cljs.core.atom.call(null,cljs_snake.core.reset_state.call(null));
}
cljs_snake.core.all_positions = (function (){var iter__8592__auto__ = (function iter__25431(s__25432){return (new cljs.core.LazySeq(null,(function (){var s__25432__$1 = s__25432;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__25432__$1);if(temp__4126__auto__)
{var xs__4624__auto__ = temp__4126__auto__;var x = cljs.core.first.call(null,xs__4624__auto__);var iterys__8588__auto__ = ((function (s__25432__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function iter__25433(s__25434){return (new cljs.core.LazySeq(null,((function (s__25432__$1,x,xs__4624__auto__,temp__4126__auto__){
return (function (){var s__25434__$1 = s__25434;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__25434__$1);if(temp__4126__auto____$1)
{var s__25434__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__25434__$2))
{var c__8590__auto__ = cljs.core.chunk_first.call(null,s__25434__$2);var size__8591__auto__ = cljs.core.count.call(null,c__8590__auto__);var b__25436 = cljs.core.chunk_buffer.call(null,size__8591__auto__);if((function (){var i__25435 = 0;while(true){
if((i__25435 < size__8591__auto__))
{var y = cljs.core._nth.call(null,c__8590__auto__,i__25435);cljs.core.chunk_append.call(null,b__25436,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
{
var G__25437 = (i__25435 + 1);
i__25435 = G__25437;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25436),iter__25433.call(null,cljs.core.chunk_rest.call(null,s__25434__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25436),null);
}
} else
{var y = cljs.core.first.call(null,s__25434__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),iter__25433.call(null,cljs.core.rest.call(null,s__25434__$2)));
}
} else
{return null;
}
break;
}
});})(s__25432__$1,x,xs__4624__auto__,temp__4126__auto__))
,null,null));
});})(s__25432__$1,x,xs__4624__auto__,temp__4126__auto__))
;var fs__8589__auto__ = cljs.core.seq.call(null,iterys__8588__auto__.call(null,cljs.core.range.call(null,cljs_snake.core.rows)));if(fs__8589__auto__)
{return cljs.core.concat.call(null,fs__8589__auto__,iter__25431.call(null,cljs.core.rest.call(null,s__25432__$1)));
} else
{{
var G__25438 = cljs.core.rest.call(null,s__25432__$1);
s__25432__$1 = G__25438;
continue;
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__8592__auto__.call(null,cljs.core.range.call(null,cljs_snake.core.columns));
})();
cljs_snake.core.get_context = (function get_context(name){return document.getElementById(name).getContext("2d");
});
cljs_snake.core.draw_coords_BANG_ = (function() {
var draw_coords_BANG_ = null;
var draw_coords_BANG___2 = (function (ctx,p__25439){var vec__25443 = p__25439;var x = cljs.core.nth.call(null,vec__25443,0,null);var y = cljs.core.nth.call(null,vec__25443,1,null);return ctx.fillRect((x * cljs_snake.core.square_size),(y * cljs_snake.core.square_size),cljs_snake.core.square_size,cljs_snake.core.square_size);
});
var draw_coords_BANG___3 = (function (ctx,p__25440,color_string){var vec__25444 = p__25440;var x = cljs.core.nth.call(null,vec__25444,0,null);var y = cljs.core.nth.call(null,vec__25444,1,null);ctx.fillStyle = color_string;
return draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
});
draw_coords_BANG_ = function(ctx,p__25440,color_string){
switch(arguments.length){
case 2:
return draw_coords_BANG___2.call(this,ctx,p__25440);
case 3:
return draw_coords_BANG___3.call(this,ctx,p__25440,color_string);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$2 = draw_coords_BANG___2;
draw_coords_BANG_.cljs$core$IFn$_invoke$arity$3 = draw_coords_BANG___3;
return draw_coords_BANG_;
})()
;
cljs_snake.core.draw_snake_head_BANG_ = (function draw_snake_head_BANG_(p__25445){var map__25447 = p__25445;var map__25447__$1 = ((cljs.core.seq_QMARK_.call(null,map__25447))?cljs.core.apply.call(null,cljs.core.hash_map,map__25447):map__25447);var state = map__25447__$1;var ctx = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var y = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25447__$1,new cljs.core.Keyword(null,"x","x",1013904362));return cljs_snake.core.draw_coords_BANG_.call(null,ctx,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),cljs_snake.core.snake_color_string);
});
cljs_snake.core.draw_snake_tail_BANG_ = (function draw_snake_tail_BANG_(p__25448){var map__25450 = p__25448;var map__25450__$1 = ((cljs.core.seq_QMARK_.call(null,map__25450))?cljs.core.apply.call(null,cljs.core.hash_map,map__25450):map__25450);var state = map__25450__$1;var ctx = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));var snake_tail = cljs.core.get.call(null,map__25450__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));ctx.fillStyle = cljs_snake.core.snake_color_string;
cljs.core.doall.call(null,cljs.core.map.call(null,cljs.core.partial.call(null,cljs_snake.core.draw_coords_BANG_,ctx),snake_tail));
return state;
});
cljs_snake.core.draw_food_BANG_ = (function draw_food_BANG_(p__25451){var map__25453 = p__25451;var map__25453__$1 = ((cljs.core.seq_QMARK_.call(null,map__25453))?cljs.core.apply.call(null,cljs.core.hash_map,map__25453):map__25453);var state = map__25453__$1;var food_pos = cljs.core.get.call(null,map__25453__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var ctx = cljs.core.get.call(null,map__25453__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));if(cljs.core.truth_(food_pos))
{cljs_snake.core.draw_coords_BANG_.call(null,ctx,food_pos,cljs_snake.core.food_color_string);
} else
{}
return state;
});
cljs_snake.core.draw_background_BANG_ = (function draw_background_BANG_(p__25454){var map__25456 = p__25454;var map__25456__$1 = ((cljs.core.seq_QMARK_.call(null,map__25456))?cljs.core.apply.call(null,cljs.core.hash_map,map__25456):map__25456);var state = map__25456__$1;var ctx = cljs.core.get.call(null,map__25456__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));ctx.fillStyle = cljs_snake.core.background_color_string;
ctx.fillRect(0,0,cljs_snake.core.canvas_width,cljs_snake.core.canvas_height);
return state;
});
cljs_snake.core.draw_border_BANG_ = (function draw_border_BANG_(p__25457){var map__25459 = p__25457;var map__25459__$1 = ((cljs.core.seq_QMARK_.call(null,map__25459))?cljs.core.apply.call(null,cljs.core.hash_map,map__25459):map__25459);var state = map__25459__$1;var ctx = cljs.core.get.call(null,map__25459__$1,new cljs.core.Keyword(null,"ctx","ctx",1014003097));ctx.fillStyle = cljs_snake.core.border_color_string;
var bottom_row_pos_25460 = (cljs_snake.core.square_size * (cljs_snake.core.rows + 1));var right_edge_pos_25461 = (cljs_snake.core.square_size * (cljs_snake.core.columns + 1));ctx.fillRect(0,0,cljs_snake.core.canvas_width,cljs_snake.core.square_size);
ctx.fillRect(0,0,cljs_snake.core.square_size,cljs_snake.core.canvas_height);
ctx.fillRect(right_edge_pos_25461,0,cljs_snake.core.square_size,cljs_snake.core.canvas_height);
ctx.fillRect(0,bottom_row_pos_25460,cljs_snake.core.canvas_width,cljs_snake.core.square_size);
return state;
});
cljs_snake.core.truncate_snake_tail = (function truncate_snake_tail(p__25462){while(true){
var map__25464 = p__25462;var map__25464__$1 = ((cljs.core.seq_QMARK_.call(null,map__25464))?cljs.core.apply.call(null,cljs.core.hash_map,map__25464):map__25464);var state = map__25464__$1;var snake_tail = cljs.core.get.call(null,map__25464__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var score = cljs.core.get.call(null,map__25464__$1,new cljs.core.Keyword(null,"score","score",1123168772));var current_snake_length = (cljs.core.count.call(null,snake_tail) + 1);var max_length = (score + cljs_snake.core.starting_snake_length);if((max_length < current_snake_length))
{{
var G__25465 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),cljs.core.pop.call(null,snake_tail));
p__25462 = G__25465;
continue;
}
} else
{return state;
}
break;
}
});
cljs_snake.core.update_x = (function update_x(x,direction){var G__25467 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__25467))
{return (x + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__25467))
{return (x - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return x;
} else
{return null;
}
}
}
});
cljs_snake.core.update_y = (function update_y(y,direction){var G__25469 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__25469))
{return (y + 1);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__25469))
{return (y - 1);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return y;
} else
{return null;
}
}
}
});
cljs_snake.core.update_position = (function update_position(p__25470){var map__25472 = p__25470;var map__25472__$1 = ((cljs.core.seq_QMARK_.call(null,map__25472))?cljs.core.apply.call(null,cljs.core.hash_map,map__25472):map__25472);var state = map__25472__$1;var running = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"score","score",1123168772));var snake_tail = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"x","x",1013904362));var direction = cljs.core.get.call(null,map__25472__$1,new cljs.core.Keyword(null,"direction","direction",4346280689));if(cljs.core.truth_(running))
{var old_position = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);var x__$1 = cljs_snake.core.update_x.call(null,x,direction);var y__$1 = cljs_snake.core.update_y.call(null,y,direction);var snake_tail__$1 = cljs.core.conj.call(null,snake_tail,old_position);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"x","x",1013904362),x__$1,new cljs.core.Keyword(null,"y","y",1013904363),y__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671),snake_tail__$1);
} else
{return state;
}
});
cljs_snake.core.empty_positions = (function empty_positions(p__25473){var map__25475 = p__25473;var map__25475__$1 = ((cljs.core.seq_QMARK_.call(null,map__25475))?cljs.core.apply.call(null,cljs.core.hash_map,map__25475):map__25475);var state = map__25475__$1;var tail = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25475__$1,new cljs.core.Keyword(null,"x","x",1013904362));return cljs_snake.core.all_positions;
});
cljs_snake.core.create_food = (function create_food(p__25476){var map__25478 = p__25476;var map__25478__$1 = ((cljs.core.seq_QMARK_.call(null,map__25478))?cljs.core.apply.call(null,cljs.core.hash_map,map__25478):map__25478);var state = map__25478__$1;var tail = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"tail","tail",1017456578));var y = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"x","x",1013904362));var food_pos = cljs.core.get.call(null,map__25478__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));if(cljs.core.not.call(null,food_pos))
{var empty_positions = cljs_snake.core.empty_positions.call(null,state);return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,cljs_snake.core.columns),cljs.core.rand_int.call(null,cljs_snake.core.rows)], null));
} else
{return state;
}
});
cljs_snake.core.eat_food = (function eat_food(p__25479){var map__25481 = p__25479;var map__25481__$1 = ((cljs.core.seq_QMARK_.call(null,map__25481))?cljs.core.apply.call(null,cljs.core.hash_map,map__25481):map__25481);var state = map__25481__$1;var score = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"score","score",1123168772));var food_pos = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25481__$1,new cljs.core.Keyword(null,"x","x",1013904362));var snake_pos = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null);if(cljs.core._EQ_.call(null,snake_pos,food_pos))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407),null,new cljs.core.Keyword(null,"score","score",1123168772),(score + 1));
} else
{return state;
}
});
cljs_snake.core.update_food = (function update_food(state){return cljs_snake.core.create_food.call(null,cljs_snake.core.eat_food.call(null,state));
});
cljs_snake.core.head_for_food = (function head_for_food(p__25482){var map__25485 = p__25482;var map__25485__$1 = ((cljs.core.seq_QMARK_.call(null,map__25485))?cljs.core.apply.call(null,cljs.core.hash_map,map__25485):map__25485);var state = map__25485__$1;var food_pos = cljs.core.get.call(null,map__25485__$1,new cljs.core.Keyword(null,"food-pos","food-pos",1392232407));var y = cljs.core.get.call(null,map__25485__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25485__$1,new cljs.core.Keyword(null,"x","x",1013904362));var temp__4124__auto__ = food_pos;if(cljs.core.truth_(temp__4124__auto__))
{var vec__25486 = temp__4124__auto__;var food_x = cljs.core.nth.call(null,vec__25486,0,null);var food_y = cljs.core.nth.call(null,vec__25486,1,null);var new_direction = (((x < food_x))?new cljs.core.Keyword(null,"right","right",1122416014):(((food_x < x))?new cljs.core.Keyword(null,"left","left",1017222009):(((food_y < y))?new cljs.core.Keyword(null,"up","up",1013907981):(((y < food_y))?new cljs.core.Keyword(null,"down","down",1016993812):((new cljs.core.Keyword(null,"default","default",2558708147))?new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state):null)))));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),new_direction);
} else
{return state;
}
});
cljs_snake.core.ai_auto_restart = (function ai_auto_restart(p__25487){var map__25489 = p__25487;var map__25489__$1 = ((cljs.core.seq_QMARK_.call(null,map__25489))?cljs.core.apply.call(null,cljs.core.hash_map,map__25489):map__25489);var state = map__25489__$1;var running = cljs.core.get.call(null,map__25489__$1,new cljs.core.Keyword(null,"running","running",2564688177));if(cljs.core.truth_(running))
{return state;
} else
{return cljs_snake.core.reset_state.call(null,state);
}
});
cljs_snake.core.ai = (function ai(p__25490){var map__25492 = p__25490;var map__25492__$1 = ((cljs.core.seq_QMARK_.call(null,map__25492))?cljs.core.apply.call(null,cljs.core.hash_map,map__25492):map__25492);var state = map__25492__$1;var ai__$1 = cljs.core.get.call(null,map__25492__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));if(cljs.core.truth_(ai__$1))
{return cljs_snake.core.head_for_food.call(null,cljs_snake.core.ai_auto_restart.call(null,state));
} else
{return state;
}
});
/**
* true if seq contains elm
*/
cljs_snake.core.in_QMARK_ = (function in_QMARK_(seq,elm){return cljs.core.some.call(null,(function (p1__25493_SHARP_){return cljs.core._EQ_.call(null,elm,p1__25493_SHARP_);
}),seq);
});
cljs_snake.core.out_of_bounds_QMARK_ = (function out_of_bounds_QMARK_(x,y){return !((((-1 < x)) && ((x < cljs_snake.core.columns))) && (((-1 < y)) && ((y < cljs_snake.core.rows))));
});
cljs_snake.core.check_game_over = (function check_game_over(p__25494){var map__25496 = p__25494;var map__25496__$1 = ((cljs.core.seq_QMARK_.call(null,map__25496))?cljs.core.apply.call(null,cljs.core.hash_map,map__25496):map__25496);var state = map__25496__$1;var snake_tail = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"snake-tail","snake-tail",3597338671));var y = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"y","y",1013904363));var x = cljs.core.get.call(null,map__25496__$1,new cljs.core.Keyword(null,"x","x",1013904362));if(cljs.core.truth_((function (){var or__7875__auto__ = cljs_snake.core.in_QMARK_.call(null,snake_tail,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));if(cljs.core.truth_(or__7875__auto__))
{return or__7875__auto__;
} else
{return cljs_snake.core.out_of_bounds_QMARK_.call(null,x,y);
}
})()))
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"running","running",2564688177),false);
} else
{return state;
}
});
cljs_snake.core.update_state = (function update_state(state){return cljs_snake.core.check_game_over.call(null,cljs_snake.core.truncate_snake_tail.call(null,cljs_snake.core.update_food.call(null,cljs_snake.core.update_position.call(null,cljs_snake.core.ai.call(null,state)))));
});
cljs_snake.core.keycodes__GT_direction = new cljs.core.PersistentArrayMap(null, 8, [37,new cljs.core.Keyword(null,"left","left",1017222009),38,new cljs.core.Keyword(null,"up","up",1013907981),39,new cljs.core.Keyword(null,"right","right",1122416014),40,new cljs.core.Keyword(null,"down","down",1016993812),74,new cljs.core.Keyword(null,"left","left",1017222009),76,new cljs.core.Keyword(null,"right","right",1122416014),75,new cljs.core.Keyword(null,"down","down",1016993812),73,new cljs.core.Keyword(null,"up","up",1013907981)], null);
cljs_snake.core.is_movement_key_QMARK_ = (function is_movement_key_QMARK_(n){return cljs.core.contains_QMARK_.call(null,cljs_snake.core.keycodes__GT_direction,n);
});
cljs_snake.core.opposite_direction = (function opposite_direction(direction){var G__25498 = direction;if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"down","down",1016993812),G__25498))
{return new cljs.core.Keyword(null,"up","up",1013907981);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"up","up",1013907981),G__25498))
{return new cljs.core.Keyword(null,"down","down",1016993812);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"right","right",1122416014),G__25498))
{return new cljs.core.Keyword(null,"left","left",1017222009);
} else
{if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"left","left",1017222009),G__25498))
{return new cljs.core.Keyword(null,"right","right",1122416014);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return new cljs.core.Keyword(null,"error","error",1110689146);
} else
{return null;
}
}
}
}
}
});
/**
* Change to given direction, provided that's not backwards
*/
cljs_snake.core.turn = (function turn(state,direction){if(cljs.core._EQ_.call(null,direction,cljs_snake.core.opposite_direction.call(null,new cljs.core.Keyword(null,"direction","direction",4346280689).cljs$core$IFn$_invoke$arity$1(state))))
{return state;
} else
{return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"direction","direction",4346280689),direction);
}
});
cljs_snake.core.handle_movement_key_event = (function handle_movement_key_event(e,keycode){e.preventDefault();
cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"ai","ai",1013907354),false);
var direction = cljs_snake.core.keycodes__GT_direction.call(null,keycode);var c__10507__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10507__auto__,direction){
return (function (){var f__10508__auto__ = (function (){var switch__10492__auto__ = ((function (c__10507__auto__,direction){
return (function (state_25514){var state_val_25515 = (state_25514[1]);if((state_val_25515 === 2))
{var inst_25512 = (state_25514[2]);var state_25514__$1 = state_25514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25514__$1,inst_25512);
} else
{if((state_val_25515 === 1))
{var state_25514__$1 = state_25514;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25514__$1,2,cljs_snake.core.input_chan,direction);
} else
{return null;
}
}
});})(c__10507__auto__,direction))
;return ((function (switch__10492__auto__,c__10507__auto__,direction){
return (function() {
var state_machine__10493__auto__ = null;
var state_machine__10493__auto____0 = (function (){var statearr_25519 = [null,null,null,null,null,null,null];(statearr_25519[0] = state_machine__10493__auto__);
(statearr_25519[1] = 1);
return statearr_25519;
});
var state_machine__10493__auto____1 = (function (state_25514){while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_25514);if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10495__auto__;
}
break;
}
}catch (e25520){if((e25520 instanceof Object))
{var ex__10496__auto__ = e25520;var statearr_25521_25523 = state_25514;(statearr_25521_25523[5] = ex__10496__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25520;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25524 = state_25514;
state_25514 = G__25524;
continue;
}
} else
{return ret_value__10494__auto__;
}
break;
}
});
state_machine__10493__auto__ = function(state_25514){
switch(arguments.length){
case 0:
return state_machine__10493__auto____0.call(this);
case 1:
return state_machine__10493__auto____1.call(this,state_25514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10493__auto____0;
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10493__auto____1;
return state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10507__auto__,direction))
})();var state__10509__auto__ = (function (){var statearr_25522 = f__10508__auto__.call(null);(statearr_25522[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10507__auto__);
return statearr_25522;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10509__auto__);
});})(c__10507__auto__,direction))
);
return c__10507__auto__;
});
cljs_snake.core.toggle_ai = (function toggle_ai(p__25525){var map__25527 = p__25525;var map__25527__$1 = ((cljs.core.seq_QMARK_.call(null,map__25527))?cljs.core.apply.call(null,cljs.core.hash_map,map__25527):map__25527);var state = map__25527__$1;var ai = cljs.core.get.call(null,map__25527__$1,new cljs.core.Keyword(null,"ai","ai",1013907354));return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ai","ai",1013907354),cljs.core.not.call(null,ai));
});
/**
* @param {...*} var_args
*/
cljs_snake.core.key_down_handler_BANG_ = (function() { 
var key_down_handler_BANG___delegate = function (e,args){var keycode = e.keyCode;if(cljs_snake.core.is_movement_key_QMARK_.call(null,keycode))
{return cljs_snake.core.handle_movement_key_event.call(null,e,keycode);
} else
{if(cljs.core._EQ_.call(null,cljs_snake.core.keycode_a,keycode))
{return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.toggle_ai);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.reset_state);
} else
{return null;
}
}
}
};
var key_down_handler_BANG_ = function (e,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return key_down_handler_BANG___delegate.call(this,e,args);};
key_down_handler_BANG_.cljs$lang$maxFixedArity = 1;
key_down_handler_BANG_.cljs$lang$applyTo = (function (arglist__25528){
var e = cljs.core.first(arglist__25528);
var args = cljs.core.rest(arglist__25528);
return key_down_handler_BANG___delegate(e,args);
});
key_down_handler_BANG_.cljs$core$IFn$_invoke$arity$variadic = key_down_handler_BANG___delegate;
return key_down_handler_BANG_;
})()
;
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("key_listener")))
{} else
{cljs_snake.core.key_listener = document.addEventListener("keydown",cljs_snake.core.key_down_handler_BANG_);
}
cljs_snake.core.immediate_mode_render_BANG_ = (function immediate_mode_render_BANG_(state){var ctx = cljs_snake.core.get_context.call(null,"canvas");var state__$1 = cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"ctx","ctx",1014003097),ctx);ctx.setTransform(1,0,0,1,0,0);
cljs_snake.core.draw_background_BANG_.call(null,state__$1);
cljs_snake.core.draw_border_BANG_.call(null,state__$1);
ctx.setTransform(1,0,0,1,cljs_snake.core.square_size,cljs_snake.core.square_size);
cljs_snake.core.draw_snake_tail_BANG_.call(null,state__$1);
cljs_snake.core.draw_snake_head_BANG_.call(null,state__$1);
return cljs_snake.core.draw_food_BANG_.call(null,state__$1);
});
cljs_snake.core.tick = (function tick(){cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.update_state);
return cljs_snake.core.immediate_mode_render_BANG_.call(null,cljs.core.deref.call(null,cljs_snake.core.state));
});
cljs_snake.core.create_clock_BANG_ = (function create_clock_BANG_(){var c__10507__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,((function (c__10507__auto__){
return (function (){var f__10508__auto__ = (function (){var switch__10492__auto__ = ((function (c__10507__auto__){
return (function (state_25601){var state_val_25602 = (state_25601[1]);if((state_val_25602 === 7))
{var inst_25580 = (state_25601[2]);var inst_25582 = [cljs_snake.core.input_chan];var inst_25583 = (new cljs.core.PersistentVector(null,1,5,cljs.core.PersistentVector.EMPTY_NODE,inst_25582,null));var state_25601__$1 = (function (){var statearr_25603 = state_25601;(statearr_25603[7] = inst_25580);
return statearr_25603;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25601__$1,8,inst_25583,new cljs.core.Keyword(null,"default","default",2558708147),null);
} else
{if((state_val_25602 === 1))
{var state_25601__$1 = state_25601;var statearr_25604_25623 = state_25601__$1;(statearr_25604_25623[2] = null);
(statearr_25604_25623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 4))
{var inst_25578 = cljs.core.async.timeout.call(null,cljs_snake.core.tick_speed);var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25601__$1,7,inst_25578);
} else
{if((state_val_25602 === 6))
{var inst_25597 = (state_25601[2]);var state_25601__$1 = state_25601;var statearr_25605_25624 = state_25601__$1;(statearr_25605_25624[2] = inst_25597);
(statearr_25605_25624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 3))
{var inst_25599 = (state_25601[2]);var state_25601__$1 = state_25601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25601__$1,inst_25599);
} else
{if((state_val_25602 === 2))
{var state_25601__$1 = state_25601;if(true)
{var statearr_25606_25625 = state_25601__$1;(statearr_25606_25625[1] = 4);
} else
{var statearr_25607_25626 = state_25601__$1;(statearr_25607_25626[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 11))
{var inst_25592 = (state_25601[2]);var inst_25593 = cljs_snake.core.tick.call(null);var state_25601__$1 = (function (){var statearr_25608 = state_25601;(statearr_25608[8] = inst_25593);
(statearr_25608[9] = inst_25592);
return statearr_25608;
})();var statearr_25609_25627 = state_25601__$1;(statearr_25609_25627[2] = null);
(statearr_25609_25627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 9))
{var inst_25586 = (state_25601[10]);var inst_25589 = cljs.core.swap_BANG_.call(null,cljs_snake.core.state,cljs_snake.core.turn,inst_25586);var state_25601__$1 = state_25601;var statearr_25610_25628 = state_25601__$1;(statearr_25610_25628[2] = inst_25589);
(statearr_25610_25628[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 5))
{var state_25601__$1 = state_25601;var statearr_25611_25629 = state_25601__$1;(statearr_25611_25629[2] = null);
(statearr_25611_25629[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 10))
{var state_25601__$1 = state_25601;var statearr_25612_25630 = state_25601__$1;(statearr_25612_25630[2] = null);
(statearr_25612_25630[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25602 === 8))
{var inst_25586 = (state_25601[10]);var inst_25585 = (state_25601[2]);var inst_25586__$1 = cljs.core.nth.call(null,inst_25585,0,null);var inst_25587 = cljs.core.nth.call(null,inst_25585,1,null);var state_25601__$1 = (function (){var statearr_25613 = state_25601;(statearr_25613[11] = inst_25587);
(statearr_25613[10] = inst_25586__$1);
return statearr_25613;
})();if(cljs.core.truth_(inst_25586__$1))
{var statearr_25614_25631 = state_25601__$1;(statearr_25614_25631[1] = 9);
} else
{var statearr_25615_25632 = state_25601__$1;(statearr_25615_25632[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__10507__auto__))
;return ((function (switch__10492__auto__,c__10507__auto__){
return (function() {
var state_machine__10493__auto__ = null;
var state_machine__10493__auto____0 = (function (){var statearr_25619 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25619[0] = state_machine__10493__auto__);
(statearr_25619[1] = 1);
return statearr_25619;
});
var state_machine__10493__auto____1 = (function (state_25601){while(true){
var ret_value__10494__auto__ = (function (){try{while(true){
var result__10495__auto__ = switch__10492__auto__.call(null,state_25601);if(cljs.core.keyword_identical_QMARK_.call(null,result__10495__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__10495__auto__;
}
break;
}
}catch (e25620){if((e25620 instanceof Object))
{var ex__10496__auto__ = e25620;var statearr_25621_25633 = state_25601;(statearr_25621_25633[5] = ex__10496__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10494__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25634 = state_25601;
state_25601 = G__25634;
continue;
}
} else
{return ret_value__10494__auto__;
}
break;
}
});
state_machine__10493__auto__ = function(state_25601){
switch(arguments.length){
case 0:
return state_machine__10493__auto____0.call(this);
case 1:
return state_machine__10493__auto____1.call(this,state_25601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10493__auto____0;
state_machine__10493__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10493__auto____1;
return state_machine__10493__auto__;
})()
;})(switch__10492__auto__,c__10507__auto__))
})();var state__10509__auto__ = (function (){var statearr_25622 = f__10508__auto__.call(null);(statearr_25622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10507__auto__);
return statearr_25622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10509__auto__);
});})(c__10507__auto__))
);
return c__10507__auto__;
});
if(cljs.core.truth_(cljs_snake.core.hasOwnProperty("clock")))
{} else
{cljs_snake.core.clock = cljs_snake.core.create_clock_BANG_.call(null);
}
cljs_snake.core.key_handler = (function key_handler(e){return console.log("key-handler");
});
cljs_snake.core.mouse_handler = (function mouse_handler(e){console.log("mouse-handler");
return e.preventDefault();
});
cljs_snake.core.main_template = (function main_template(p__25635){var map__25642 = p__25635;var map__25642__$1 = ((cljs.core.seq_QMARK_.call(null,map__25642))?cljs.core.apply.call(null,cljs.core.hash_map,map__25642):map__25642);var running = cljs.core.get.call(null,map__25642__$1,new cljs.core.Keyword(null,"running","running",2564688177));var score = cljs.core.get.call(null,map__25642__$1,new cljs.core.Keyword(null,"score","score",1123168772));return React.DOM.div({"className": "board", "onMouseDown": cljs_snake.core.mouse_handler, "onKeyDown": cljs_snake.core.key_handler},(function (){var attrs25643 = [cljs.core.str("Score: "),cljs.core.str(score)].join('');if(cljs.core.map_QMARK_.call(null,attrs25643))
{return React.DOM.h3(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["score"], null)], null),attrs25643)),null);
} else
{return React.DOM.h3({"className": "score"},sablono.interpreter.interpret.call(null,attrs25643));
}
})(),React.DOM.div(null,"Arrow keys to move. 'a' to enable AI."),React.DOM.p(null));
});
var node_25648 = document.getElementById("dynamic-area");cljs_snake.core.renderer = ((function (node_25648){
return (function renderer(state){return React.renderComponent(cljs_snake.core.main_template.call(null,state),node_25648);
});})(node_25648))
;
cljs.core.add_watch.call(null,cljs_snake.core.state,new cljs.core.Keyword(null,"renderer","renderer",519058485),(function (_,___$1,___$2,n){return cljs_snake.core.renderer.call(null,n);
}));
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",3126035989),(function (){return null;
}));

//# sourceMappingURL=core.js.map