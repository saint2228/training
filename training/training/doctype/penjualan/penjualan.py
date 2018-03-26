# -*- coding: utf-8 -*-
# Copyright (c) 2018, ridhosribumi and contributors
# For license information, please see license.txt

from __future__ import unicode_literals
import frappe
from frappe.utils import flt
from frappe.model.document import Document

class Penjualan(Document):
	def validate(self):
		pass
		# self.calculate_total_amount()
		# self.calculate_total()

	# def calculate_total_amount(self):
	# 	self.total_amount = 0
	# 	for d in self.get('items'):
	# 		self.total_amount += flt(d.amount)

	# def calculate_total(self):
	# 	self.grand_amount = flt(self.total_amount)+flt(self.diskon)
