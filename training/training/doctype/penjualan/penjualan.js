// Copyright (c) 2018, ridhosribumi and contributors
// For license information, please see license.txt
{% include 'erpnext/public/js/controllers/buying.js' %};

frappe.ui.form.on('Penjualan', {
	refresh: function(frm) {
		var me = this;
		calculate_total_amount(frm);

	},

	diskon: function(frm){
		var sisa = flt(frm.doc.total_amount) - flt(frm.doc.diskon);
		frm.set_value("grand_amount1", sisa);
	},

});




// frappe.ui.form.on('Penjualan Item', {
//
//  itemsbeforeremove: function(frm) {
//     msgprint("Before Remove Called!");
//
//     }
// });


// cur_frm.cscript.calculate_total = function(doc){
// 	doc.total_amount = 0;
// 	$.each((doc.items || []), function(i, d) {
// 		doc.total_amount += d.amount;
//
// 	});
//
// 	refresh_field("total_amount");
//
// };

var calculate_total_amount = function(frm) {
    var total_amount = frappe.utils.sum(
        (frm.doc.items || []).map(function(i) {
			return (i.qty * i.rate);
		})
    );
    frm.set_value("total_amount", total_amount);
}

// frappe.ui.form.on("Penjualan Item", "qty", function(frm, cdt, cdn) {
//     calculate_total_claim(frm, cdt, cdn);
// })
// frappe.ui.form.on("Penjualan Item", "rate", function(frm, cdt, cdn) {
//     calculate_total_claim(frm, cdt, cdn);
// })

frappe.ui.form.on("Penjualan Item", "qty", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
	d.amount = d.qty * d.rate;
	refresh_field("amount", d.name, 'items');
	calculate_total_amount(frm, cdt, cdn);
});

frappe.ui.form.on("Penjualan Item", "rate", function(frm, cdt, cdn) {
	var d = locals[cdt][cdn];
	d.amount = d.qty * d.rate;
	refresh_field("amount", d.name, 'items');
	calculate_total_amount(frm, cdt, cdn);
});

// frappe.ui.form.on("Penjualan Item", "items_remove", function(frm, cdt, cdn) {
// 	var d = locals[cdt][cdn];
// 	d.amount = d.qty * d.rate;
// 	refresh_field("amount", d.name, 'items');
// 	calculate_total_claim(frm, cdt, cdn);
// });

frappe.ui.form.on('Penjualan Item', {
    items_remove: function(frm) {
			calculate_total_amount(frm);
    }
});




// cur_frm.cscript.validate = function(doc) {
// 	cur_frm.cscript.calculate_total(doc);
// 	cur_frm.cscript.calculate_grand(doc);
// };



// cur_frm.cscript.qty = function(doc,cdt,cdn) {
// 	var d = locals[cdt][cdn];
// 		d.amount = flt(d.qty) * flt(d.rate);
//
// 		refresh_field('amount',d.name,'items');
// }
//
// cur_frm.cscript.rate = cur_frm.cscript.qty;






// var kembalian = function(frm) {
// 	var sisa_kembalian = flt(frm.doc.total_amount) + flt(frm.doc.diskon);
// 	frm.set_value("grand_amount_", sisa_kembalian);
// }
//
// frappe.ui.form.on("Penjualan", "grand_amount", function(frm) {
// 	kembalian(frm);
// }

// if(item.discount_percentage){
// 			var discount_value = flt(item.rate_with_margin) * flt(item.discount_percentage) / 100;
// 			item.rate = flt((item.rate_with_margin) - (discount_value), precision('rate', item));
// }

// var kembalian = function(frm) {
// 	var sisa_kembalian = flt(frm.doc.total_amount) + flt(frm.doc.diskon);
// 	frm.set_value("grand_amount", sisa_kembalian);
// }
