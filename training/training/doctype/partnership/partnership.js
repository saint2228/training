// Copyright (c) 2018, ridhosribumi and contributors
// For license information, please see license.txt

frappe.ui.form.on('Partnership', {
	refresh: function(frm) {

	},

	total_percentage: function (frm) {
		if (frm.doc.total_percentage < 100) {
			$('input[data-fieldname="total"]').css("color","grey")
			frm.set_value('total', frm.doc.total_percentage);
			document.querySelectorAll("[data-fieldname='total']")[1].style.backgroundColor="white";

		}else{
			$('input[data-fieldname="total"]').css("color","red")
		  frm.set_value('total', frm.doc.total_percentage);
			document.querySelectorAll("[data-fieldname='total']")[1].style.backgroundColor="blue";
			//frm.set_df_property("total", "read_only", frm.doc.__islocal ? 0 : 1);
		}
	},

});
