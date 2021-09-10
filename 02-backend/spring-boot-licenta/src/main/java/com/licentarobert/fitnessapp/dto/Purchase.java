package com.licentarobert.fitnessapp.dto;

import com.licentarobert.fitnessapp.entity.Address;
import com.licentarobert.fitnessapp.entity.Customer;
import com.licentarobert.fitnessapp.entity.Order;
import com.licentarobert.fitnessapp.entity.OrderItem;
import lombok.Data;

import java.util.Set;

@Data
public class Purchase {

    private Customer customer;
    private Address shippingAddress;
    private Address billingAddress;
    private Order order;
    private Set<OrderItem> orderItems;

}
