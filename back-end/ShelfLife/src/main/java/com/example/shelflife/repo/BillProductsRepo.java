package com.example.shelflife.repo;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.example.shelflife.entity.BillProduct;

public interface BillProductsRepo extends JpaRepository<BillProduct, Integer>{
	
    @Query("SELECT p.category AS label, SUM(bp.amount) AS value " +
            "FROM BillProduct bp JOIN Products p ON bp.pname = p.pname " +
            "GROUP BY p.category")
     List<Map<String, Object>> findSalesByCategory();

}
