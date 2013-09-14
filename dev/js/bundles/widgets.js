window.jQuery&&define("jquery",[],function(){"use strict";return window.jQuery}),define(["jquery","mockup-registry","mockup-patterns-select2","mockup-patterns-pickadate","mockup-patterns-autotoc","mockup-patterns-accessibility","mockup-patterns-relateditems","mockup-patterns-formunloadalert","mockup-patterns-toggle","mockup-patterns-tinymce","mockup-patterns-picture","mockup-patterns-querystring","mockup-patterns-preventdoublesubmit","mockup-patterns-formautofocus","mockup-patterns-livesearch"],function(a,b){"use strict";var c={name:"plone-widgets",transform:function(b){function c(a,b){a.redraw(b),a.$el.on("hidden.modal.patterns",function(){window.parent.location=a.options.ajaxUrl.split("/").slice(0,-2).join("/")})}var d=b.filter(".enableFormTabbing");d=d.add(b.find(".enableFormTabbing")),d.addClass("pat-autotoc"),d.attr({"data-pat-autotoc":"levels: legend;section: fieldset;klass: autotabs"}),b.addClass("pat-accessibility"),b.attr({"data-pat-accessibility":"smallbtn: #accessibility-smallText;normalbtn: #accessibility-normalText;largebtn: #accessibility-largeText"}),d=b.filter(".enableUnloadProtection"),d=d.add(b.find(".enableUnloadProtection")),d.addClass("pat-formunloadalert");var e=a("dl.actionMenu#plone-contentmenu-actions dt.actionMenuHeader a",b);e.addClass("pat-toggle"),e.attr({"data-pat-toggle":"target: dl.actionMenu#plone-contentmenu-actions;value: activated"});var f=a("dl.actionMenu#portal-personaltools dt.actionMenuHeader a",b);f.addClass("pat-toggle"),f.attr({"data-pat-toggle":"target: dl.actionMenu#portal-personaltools;value: activated"});var g=a("dl.actionMenu#plone-contentmenu-factories dt.actionMenuHeader a",b);g.addClass("pat-toggle"),g.attr({"data-pat-toggle":"target: dl.actionMenu#plone-contentmenu-factories;value: activated"});var h=a("dl.actionMenu#plone-contentmenu-display dt.actionMenuHeader a",b);h.addClass("pat-toggle"),h.attr({"data-pat-toggle":"target: dl.actionMenu#plone-contentmenu-display;value: activated"});var i=a("dl.actionMenu#plone-contentmenu-workflow dt.actionMenuHeader a",b);i.addClass("pat-toggle"),i.attr({"data-pat-toggle":"target: dl.actionMenu#plone-contentmenu-workflow;value: activated"});var j=a("form[name=searchform] dl.actionMenu dt.actionMenuHeader a",b);j.addClass("pat-toggle"),j.attr({"data-pat-toggle":"target: form[name=searchform] dl.actionMenu;value: activated"}),a("dl.actionMenu").removeClass("deactivated"),a("html").on("mousedown",function(b){a(b.toElement).parents("dl.actionMenu").hasClass("activated")||a("dl.actionMenu").removeClass("activated")}),b.find(".mce_editable").addClass("pat-tinymce").each(function(){var b=a(this),c=a.parseJSON(b.attr("data-mce-config"));c.content_css=c.portal_url+"/base.css",delete c.customplugins,delete c.plugins,delete c.theme,b.attr({"data-pat-tinymce":JSON.stringify({relatedItems:{ajaxvocabulary:c.portal_url+"/@@getVocabulary?name=plone.app.vocabularies.Catalog"},rel_upload_path:"@@fileUpload",folder_url:c.document_base_url,tiny:c})})}),a("[onclick^='toggleSelect']",b).attr("onclick",null);var k=a("form[action$=content_status_history] table.listing > thead tr th input[type=checkbox]",b);k.addClass("pat-toggle"),k.attr({"data-pat-toggle":"target: table.listing input[type=checkbox];attribute: checked;value: checked;externalClose: false;preventDefault: false"}),k=a("form[action*=usergroup-groupmembership] table.listing tr th input[type=checkbox]",b),k.addClass("pat-toggle"),k.attr({"data-pat-toggle":"target: table.listing input[type=checkbox];attribute: checked;value: checked;externalClose: false;preventDefault: false"}),k=a("form[action*=usergroup-usermembership] table.listing tr th input[type=checkbox]",b),k.addClass("pat-toggle"),k.attr({"data-pat-toggle":"target:form[action*=usergroup-usermembership] table.listing:last input[type=checkbox];attribute: checked;value: checked;externalClose: false;preventDefault: false"}),k=a("[onchange*='toggleSelect']",b).attr("onchange",null),k.addClass("pat-toggle"),k.attr({"data-pat-toggle":"target:form[name=searchform] dd.actionMenuContent input[type=checkbox];attribute: checked;value: checked;externalClose: false;preventDefault: false"}),a("form",b).addClass("pat-preventdoublesubmit"),a("form",b).attr({"data-pat-preventdoublesubmit":"message:"+window.form_resubmit_message});var l=a('form[action*="++add++"]',b);l.addClass("pat-formautofocus");var m=a('form[action*="@@edit"]',b);m.addClass("pat-formautofocus");var n={title:"Login",content:"#content",prependContent:".portalMessage",actions:{'#login_form input[type="submit"]':{displayInModal:!1}}};a("#personaltools-login",b).addClass("pat-modal").attr("data-pat-modal",JSON.stringify(n)),a("#siteaction-contact > a",b).addClass("pat-modal");var o={buttons:'.actionButtons > input[type="submit"]'};a("#personaltools-join",b).addClass("pat-modal").attr("data-pat-modal",JSON.stringify(o));var p={titleSelector:"h2:first",content:"#content-core"};a("#content-history > a, #plone-action-content-history > a",b).addClass("pat-modal").attr("data-pat-modal",JSON.stringify(p));var q={actionOptions:{displayInModal:!1}};a("#folderChangeDefaultPage, #folderChangeDefaultPage a, #contextSetDefaultPage a",b).addClass("pat-modal").attr("data-pat-modal",JSON.stringify(q));var r=a('form[name="users_add"]',b);if(r.length>0){var s={ajaxUrl:r[0].action,triggers:['click input[name="form.button.AddUser"]'],buttons:'input[name="form.actions.register"]',content:"#content",prependContent:".portalMessage"};a('input[name="form.button.AddUser"]').addClass("pat-modal").attr("data-pat-modal",JSON.stringify(s))}var t=a('form[name="groups_add"]',b);if(t.length>0){var u={ajaxUrl:t[0].action,triggers:['click input[name="form.button.AddGroup"]'],buttons:'input[name="form.button.Save"]',content:"#content",prependContent:".portalMessage"};a('input[name="form.button.AddGroup"]').addClass("pat-modal").attr("data-pat-modal",JSON.stringify(u))}a("#plone-contentmenu-settings > a,a#plone-contentmenu-settings",b).addClass("modal-trigger").patternModal({width:"80%",contentClass:"modal-constrain-types",actionOptions:{displayInModal:!1}}).on("shown.modal.patterns",function(b){function c(){var a=parseInt(h.val(),10);a===k?(i.show(),j.show()):(i.hide(),j.hide())}function d(){f.each(function(){var a=this.id.replace("prefer","allow"),b=j.find("#"+a);this.checked?b[0].disabled=!1:(b[0].disabled=!0,b[0].checked=!1)})}var e=b.$modal,f=a(".current_prefer_form",e),g=a(".current_allow_form",e),h=a(".constrain_types_mode_form",e),i=f.parents(".field"),j=g.parents(".field"),k=1;h.change(c),c(),i.change(d),d()}),a("#workflow-transition-advanced > a,a#workflow-transition-advanced",b).addClass("modal-trigger").patternModal({width:"80%",actionOptions:{displayInModal:!1}});var v=a("#plone-personal-actions-preferences > a, #personaltools-preferences > a",b),w={buttons:'input[type="submit"]',actionOptions:{displayInModal:!1}};v.addClass("pat-modal"),v.attr("data-pat-modal",JSON.stringify(w));var x={actionOptions:{displayInModal:!1}};a("#plone-contentmenu-actions-rename a",b).addClass("pat-modal").attr("data-pat-modal",JSON.stringify(x));var y=a("#plone-contentmenu-actions-delete > a, #plone-contentmenu-actions-delete",b);y.addClass("pat-modal"),y.on("render.modal.patterns",function(a,b){b.options.actionOptions.onSuccess=c})}};return b.register(c),window.parent===window&&a(document).ready(function(){b.scan(a("body"))}),c});