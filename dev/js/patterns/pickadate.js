define(["jquery","mockup-patterns-base","picker","picker.date","picker.time"],function(a,b){"use strict";var c=b.extend({name:"pickadate",defaults:{separator:" ",date:{value:"",formatSubmit:"yyyy-mm-dd",selectYears:!0,selectMonths:!0},time:{value:"",formatSubmit:"HH:i"},klassWrapper:"pat-pickadate-wrapper",klassSeparator:"pat-pickadate-separator",klassDate:"pat-pickadate-date",klassDateWrapper:"pat-pickadate-date-wrapper",klassTime:"pat-pickadate-time",klassTimeWrapper:"pat-pickadate-time-wrapper",klassClear:"pat-pickadate-clear",placeholderDate:"enter date...",placeholderTime:"enter time..."},ensureBool:function(a){if("string"==typeof a){if("true"===a)return!0;if("false"===a)return!1}return a},init:function(){var b=this;b.$el.hide(),b.$wrapper=a("<div/>").addClass(b.options.klassWrapper).insertAfter(b.$el),b.options.date=b.ensureBool(b.options.date),b.options.time=b.ensureBool(b.options.time);var c=b.$el.attr("name")+"_date",d=b.$el.attr("name")+"_time";if(b.options.date!==!1&&(b.$date=a('<input type="text"/>').attr("data-value",b.options.date.value).addClass(b.options.klassDate).appendTo(a("<div/>").addClass(b.options.klassDateWrapper).appendTo(b.$wrapper)).pickadate(a.extend(!0,b.options.date,{hiddenSuffix:c,onStart:function(){this.$node.attr("placeholder",b.options.placeholderDate)}}))),b.options.date!==!1&&b.options.time!==!1&&(b.$separator=a("<span/>").addClass(b.options.klassSeparator).html(" "===b.options.separator?"&nbsp;":b.options.separator).appendTo(b.$wrapper)),b.options.time!==!1&&(b.$time=a('<input type="text"/>').attr("data-value",b.options.time.value).addClass(b.options.klassTime).appendTo(a("<div/>").addClass(b.options.klassTimeWrapper).appendTo(b.$wrapper)).pickatime(a.extend(!0,b.options.time,{hiddenSuffix:d,onStart:function(){this.$node.attr("placeholder",b.options.placeholderTime)}})),"00"==b.options.time.value.substring(0,2))){var e="12"+b.options.time.value.substring(2)+" a.m.";b.$time.pickatime("picker").set("select",e,{format:"hh:i a"})}b.$clear=a("<div/>").addClass(b.options.klassClear).appendTo(b.$wrapper)}});return c});