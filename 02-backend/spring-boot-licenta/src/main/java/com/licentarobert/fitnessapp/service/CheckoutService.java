package com.licentarobert.fitnessapp.service;

import com.licentarobert.fitnessapp.dto.Purchase;
import com.licentarobert.fitnessapp.dto.PurchaseResponse;

public interface CheckoutService {

    PurchaseResponse placeOrder(Purchase purchase);
}
