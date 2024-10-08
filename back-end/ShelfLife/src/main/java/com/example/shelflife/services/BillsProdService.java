package com.example.shelflife.services;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelflife.entity.BillProduct;
import com.example.shelflife.repo.BillProductsRepo;

@Service
public class BillsProdService {
	
	
	@Autowired
	BillProductsRepo repo;
	
	public BillProduct saveBillProd(BillProduct b) {
		return repo.save(b);
	}
	
    public List<Map<String, Object>> getSalesByCategory() {
        return repo.findSalesByCategory();
    } 

}
