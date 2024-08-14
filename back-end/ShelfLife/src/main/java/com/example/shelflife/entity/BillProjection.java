package com.example.shelflife.entity;

import java.math.BigDecimal;

public interface BillProjection {
    Integer getBillNo();
    Integer getCashierId();
    String getCashierName();
    String getDate();
    BigDecimal getGrandTotal();
    String getPaymentMode();
    Integer getTotalItems();
}
