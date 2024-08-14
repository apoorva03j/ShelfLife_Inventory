package com.example.shelflife.repo;

import java.math.BigDecimal;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.shelflife.entity.BillProjection;
import com.example.shelflife.entity.Bills;

public interface BillsRepo extends JpaRepository<Bills, Integer>{
	
	@Query("SELECT SUM(b.grandTotal) FROM Bills b WHERE EXTRACT(YEAR FROM b.date) = :year GROUP BY EXTRACT(MONTH FROM b.date)")
	List<BigDecimal> findMonthlySales(int year);


	@Query("SELECT SUM(b.grandTotal) FROM Bills b GROUP BY EXTRACT(YEAR FROM b.date)")
	List<BigDecimal> findYearlySales();
	
    @Query("SELECT b.billNo AS billNo, b.cashierId AS cashierId, b.cashierName AS cashierName, b.date AS date, b.grandTotal AS grandTotal, b.paymentMode AS paymentMode, b.totalItems AS totalItems FROM Bills b")
    List<BillProjection> findAllBills();


}
