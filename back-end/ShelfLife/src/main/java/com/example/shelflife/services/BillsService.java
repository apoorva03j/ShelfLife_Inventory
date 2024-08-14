package com.example.shelflife.services;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.shelflife.entity.BillProjection;
import com.example.shelflife.entity.Bills;
import com.example.shelflife.repo.BillsRepo;

@Service
public class BillsService {
	
	@Autowired
	BillsRepo repo;
	
	public Bills saveBill(Bills bill) {
		return repo.save(bill);
	}
	
	public List<BigDecimal> findMonthly(int year){
		return repo.findMonthlySales(year);
	}
	
	public List<BigDecimal> findYearly(){
		return repo.findYearlySales();
	}
	
	public List<BillProjection> getAll(){
		return repo.findAllBills();
	}

}
